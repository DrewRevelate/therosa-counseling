# Google Workspace Scheduling Integration Guide

## Overview

This guide explains how to integrate Google Workspace Appointment Scheduling into the Therosa Counseling website once configured.

## Prerequisites

1. **Google Workspace Account**: Active Google Workspace subscription with Calendar enabled
2. **Appointment Scheduling**: Feature must be enabled in Google Workspace admin console
3. **Booking Page**: Configured appointment scheduling in Google Calendar

## Setup Steps

### 1. Enable Appointment Scheduling in Google Workspace

1. Log in to Google Workspace Admin Console
2. Navigate to Apps > Google Workspace > Calendar
3. Enable "Appointment scheduling" feature
4. Configure appointment types, duration, and availability

### 2. Create Appointment Schedule in Google Calendar

1. Open Google Calendar
2. Go to Settings > Appointment schedules
3. Create new appointment schedule:
   - **Name**: Initial Consultation
   - **Duration**: 50-60 minutes
   - **Availability**: Set your available hours
   - **Buffer time**: Optional (15 minutes between appointments)
   - **Booking window**: How far in advance clients can book

### 3. Configure Appointment Details

**Important Settings:**
- **Location**: Add telehealth video link (Google Meet or preferred platform)
- **Description**: Include what clients should expect
- **Form questions**: Can add custom intake questions
- **Confirmation email**: Customize the confirmation message

### 4. Get the Booking Page URL

1. After creating the appointment schedule, Google provides a booking page URL
2. Format: `https://calendar.google.com/calendar/appointments/schedules/[SCHEDULE_ID]`
3. Copy this URL for integration

### 5. Integrate into Website

**Option A: iFrame Embed (Recommended)**

Update `/src/app/schedule/page.tsx` after the attestation step:

```tsx
<div className="bg-white rounded-lg shadow-sm overflow-hidden">
  <iframe
    src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID?gv=true"
    width="100%"
    height="800"
    frameBorder="0"
    title="Schedule Appointment"
    className="w-full"
  />
</div>
```

**Option B: Direct Link**

Replace the placeholder section with:

```tsx
<div className="text-center">
  <p className="text-gray-600 mb-6">
    Click below to view available appointment times and book your consultation.
  </p>
  <a
    href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-brand-purple text-white px-8 py-4 rounded-lg hover:bg-brand-pink transition-colors font-medium text-lg"
  >
    View Available Times
  </a>
</div>
```

### 6. Environment Variables (Optional)

For easier configuration management, add to `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SCHEDULING_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID
```

Then reference in code:

```tsx
const schedulingUrl = process.env.NEXT_PUBLIC_GOOGLE_SCHEDULING_URL;
```

## NH/MA Attestation Flow

The website already implements the required attestation flow:

1. User visits `/schedule`
2. Must select NH or MA as state of residence
3. Self-attestation message explains licensure requirements
4. Only after attesting can they access Google Calendar scheduling
5. State selection is stored in component state (not persisted)

This satisfies FR7 (geo-attestation) from the PRD.

## Testing

1. Test the booking flow end-to-end
2. Verify confirmation emails are sent
3. Check that calendar events are created correctly
4. Test from different states to ensure attestation works
5. Verify mobile responsiveness

## HIPAA Compliance Notes

**Google Workspace BAA Required:**
- Sign Business Associate Agreement with Google
- Enable enhanced security features
- Use Google Meet with encryption for video sessions
- Configure data retention policies

**Best Practices:**
- Do not collect PHI through appointment forms
- Use generic intake questions only
- Remind clients not to share sensitive health information in booking notes
- Keep appointment descriptions generic (e.g., "Initial Consultation")

## Customization

**Styling the iFrame:**
- Google Calendar scheduling pages have limited styling options
- Use `?gv=true` parameter for embedded view (removes navigation)
- Consider using `&mode=WEEK` or `&mode=AGENDA` for different views

**Custom Questions:**
- Can add form questions in Google Calendar settings
- Keep questions non-PHI (name, contact info, general reason for appointment)
- More detailed intake should happen during the actual session

## Troubleshooting

**Issue**: Booking page not showing available times
- **Solution**: Check appointment schedule availability settings
- Verify time zone settings match therapist's location

**Issue**: Clients from other states can still book
- **Solution**: The attestation is self-reported (honor system)
- Consider adding a question in Google Calendar booking form: "I confirm I am a resident of NH or MA"

**Issue**: iFrame not loading
- **Solution**: Check Content Security Policy settings
- Verify URL is correct and schedule is published
- Try direct link method instead

## Support Resources

- [Google Workspace Appointment Scheduling Help](https://support.google.com/calendar/answer/10729749)
- [Google Calendar Embed Documentation](https://support.google.com/calendar/answer/41207)

## Implementation Checklist

- [ ] Google Workspace account with Calendar enabled
- [ ] Appointment scheduling feature enabled
- [ ] Appointment schedule created in Calendar
- [ ] Booking page URL obtained
- [ ] URL integrated into `/schedule` page
- [ ] Tested booking flow end-to-end
- [ ] BAA signed with Google Workspace
- [ ] Confirmation emails configured
- [ ] Video conferencing link added to appointments
- [ ] Mobile responsiveness verified

---

**Last Updated**: 2025-10-25
**Status**: Awaiting Google Workspace configuration (Story 1.6)
