import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';

// Validation schema (server-side)
const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  consent: z.boolean().refine((val) => val === true),
});

// Rate limiting: Simple in-memory store (for serverless, use Vercel KV or similar in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 10; // 10 submissions per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Create new record or reset expired record
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  // Increment count
  record.count += 1;
  return true;
}

function getClientIp(request: NextRequest): string {
  // Get IP from various headers (Vercel provides x-forwarded-for)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

async function sendEmailViaGmail(formData: z.infer<typeof contactFormSchema>) {
  // Check if OAuth credentials are configured
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const therapistEmail = process.env.THERAPIST_EMAIL;

  if (!clientId || !clientSecret || !refreshToken || !therapistEmail) {
    // OAuth not yet configured - log to console for now
    console.log('[CONTACT FORM] OAuth credentials not configured. Email would be sent to:', therapistEmail || 'NOT_SET');
    console.log('[CONTACT FORM] Form data (non-PHI logging):', {
      from: formData.email,
      hasMessage: formData.message.length > 0,
      timestamp: new Date().toISOString(),
    });

    // In production, this would throw an error, but for development we'll simulate success
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Email configuration incomplete. Please contact support.');
    }
    return; // Simulate success in development
  }

  // Create OAuth2 client
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    'https://developers.google.com/oauthplayground' // Redirect URI used during setup
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  // Create email message
  const emailContent = [
    `From: ${formData.name} <${formData.email}>`,
    `To: ${therapistEmail}`,
    'Subject: New Contact Form Submission - Therosa Counseling',
    'Content-Type: text/plain; charset=utf-8',
    '',
    `New contact form submission received:`,
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    '',
    `Message:`,
    formData.message,
    '',
    '---',
    `Submitted: ${new Date().toISOString()}`,
    `Consent to Privacy Policy: Yes`,
  ].join('\n');

  // Encode email in base64
  const encodedEmail = Buffer.from(emailContent)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  // Send email
  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedEmail,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Send email via Gmail API
    await sendEmailViaGmail(validatedData);

    // Log successful submission (non-PHI only)
    console.log('[CONTACT FORM] Successful submission from:', clientIp, 'at', new Date().toISOString());

    // Return success response
    // IMPORTANT: No data is stored - it's only transmitted via email
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    // Log error (non-PHI only)
    console.error('[CONTACT FORM] Submission error:', error instanceof Error ? error.message : 'Unknown error');

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us by phone.' },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
