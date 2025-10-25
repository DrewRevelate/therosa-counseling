import { MainLayout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Therosa Counseling | Reach Out Today',
  description: 'Contact Therosa Counseling to schedule a consultation or ask questions. Call us or use our secure contact form. Serving NH and MA residents.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-purple/5 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We're here to answer your questions and help you take the first step toward healing
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">

            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-brand-purple to-brand-purple/90 text-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h2 className="text-2xl font-serif font-bold mb-2">
                  Call Us
                </h2>
                <p className="text-white/90 mb-6">
                  Prefer to speak directly? Give us a call to schedule your consultation or ask any questions.
                </p>
              </div>
              <a
                href="tel:+1234567890"
                className="text-3xl font-bold hover:text-white/80 transition-colors inline-block"
              >
                (123) 456-7890
              </a>
              <p className="text-sm text-white/70 mt-4">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: By appointment only<br />
                Sunday: Closed
              </p>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-br from-brand-pink to-brand-pink/90 text-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-2xl font-serif font-bold mb-2">
                  Email Us
                </h2>
                <p className="text-white/90 mb-6">
                  Send us a message and we'll respond within 1-2 business days.
                </p>
              </div>
              <a
                href="mailto:contact@therosacounseling.com"
                className="text-xl font-bold hover:text-white/80 transition-colors inline-block break-all"
              >
                contact@therosacounseling.com
              </a>
              <p className="text-sm text-white/70 mt-6">
                For urgent matters, please call us directly or use the crisis resources listed on our FAQ page.
              </p>
            </div>
          </div>

          {/* Quick Scheduling */}
          <div className="bg-gray-50 border-2 border-brand-purple/20 rounded-lg p-8 text-center mb-16">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Ready to Schedule?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              The fastest way to book your initial consultation is through our online scheduling system. Choose a time that works best for you.
            </p>
            <a
              href="/schedule"
              className="inline-block bg-brand-purple text-white px-10 py-4 rounded-lg hover:bg-brand-pink transition-colors font-medium text-lg shadow-lg"
            >
              View Available Times
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 1-2 business days
            </p>
          </div>

          {/* Placeholder for Contact Form (Story 1.5) */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-dashed border-gray-300">
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secure Contact Form
              </h3>
              <p className="text-gray-600 mb-6">
                Our HIPAA-compliant contact form will be available soon.
              </p>
              <p className="text-sm text-gray-500">
                In the meantime, please use the phone or email options above to reach us.
              </p>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Your Privacy is Protected
                </h4>
                <p className="text-sm text-gray-600">
                  All communications with Therosa Counseling are handled with the utmost confidentiality and comply with HIPAA privacy regulations. For more information, please review our <a href="/privacy" className="text-brand-purple hover:text-brand-pink font-medium">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide online counseling services exclusively to residents of:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-brand-purple/5 border-2 border-brand-purple/20 rounded-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-purple mb-2">
                  New Hampshire
                </h3>
                <p className="text-gray-600">
                  Licensed to serve all NH residents via secure telehealth
                </p>
              </div>
              <div className="bg-brand-pink/5 border-2 border-brand-pink/20 rounded-lg p-6">
                <h3 className="text-2xl font-serif font-bold text-brand-pink mb-2">
                  Massachusetts
                </h3>
                <p className="text-gray-600">
                  Licensed to serve all MA residents via secure telehealth
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              At this time, we are unable to provide services to residents of other states due to licensure requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Have Questions Before Reaching Out?
          </h3>
          <p className="text-gray-600 mb-6">
            Check out our FAQ page for answers to common questions about fees, insurance, and the therapy process.
          </p>
          <a
            href="/faq"
            className="inline-flex items-center text-brand-purple hover:text-brand-pink font-medium text-lg"
          >
            Visit Our FAQ Page →
          </a>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-12 bg-red-50 border-t-2 border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-red-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                In Crisis? Get Immediate Help
              </h3>
              <p className="text-gray-700 mb-4">
                If you're experiencing a mental health emergency, please don't wait. Call 911 or go to your nearest emergency room.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</p>
                <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                <p><strong>SAMHSA National Helpline:</strong> 1-800-662-4357</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
