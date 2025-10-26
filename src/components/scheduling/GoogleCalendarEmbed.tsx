'use client';

import { useState } from 'react';

interface GoogleCalendarEmbedProps {
  url?: string;
  onLoadError?: () => void;
}

export function GoogleCalendarEmbed({
  url = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL,
  onLoadError
}: GoogleCalendarEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onLoadError?.();
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    // Force iframe reload by updating key
    window.location.reload();
  };

  if (!url) {
    return (
      <div className="text-center py-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <svg className="w-16 h-16 mx-auto text-yellow-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 className="text-xl font-bold text-yellow-900 mb-2">
          Calendar Configuration Required
        </h3>
        <p className="text-yellow-800 mb-4">
          The Google Calendar scheduling URL has not been configured.
        </p>
        <p className="text-sm text-yellow-700">
          Please set the NEXT_PUBLIC_GOOGLE_CALENDAR_URL environment variable.
        </p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="text-center py-12 bg-red-50 border-2 border-red-200 rounded-lg">
        <svg className="w-16 h-16 mx-auto text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-red-900 mb-2">
          Unable to Load Scheduling Widget
        </h3>
        <p className="text-red-800 mb-6">
          We're having trouble loading the scheduling widget. This might be a temporary issue.
        </p>
        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg hover:bg-brand-pink transition-colors font-medium"
          >
            Try Again
          </button>
          <div className="text-sm text-red-700">
            <p className="mb-2">You can also schedule your consultation by:</p>
            <div className="space-y-1">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@therosa-counseling.com" className="text-brand-purple hover:text-brand-pink font-medium">
                  contact@therosa-counseling.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+1234567890" className="text-brand-purple hover:text-brand-pink font-medium">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <a href="/contact" className="text-brand-purple hover:text-brand-pink font-medium">
                  Use our contact form
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ minHeight: '600px' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-purple mb-4"></div>
            <p className="text-gray-600" role="status" aria-live="polite">
              Loading scheduling calendar...
            </p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        width="100%"
        height="600"
        frameBorder="0"
        onLoad={handleLoad}
        onError={handleError}
        className="rounded-lg shadow-sm"
        title="Schedule Appointment with Therosa Counseling"
        style={{ minHeight: '600px' }}
      />
    </div>
  );
}
