import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-brand-purple mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg hover:bg-brand-pink transition-colors font-medium"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
