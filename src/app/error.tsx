'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-brand-purple mb-4">500</h1>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg hover:bg-brand-pink transition-colors font-medium"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Return to Homepage
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-gray-400">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
