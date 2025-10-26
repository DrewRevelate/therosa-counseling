import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-purple mb-4">
              Therosa Counseling
            </h3>
            <p className="text-gray-600 text-sm">
              Professional counseling services specializing in mental health support.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-purple transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-brand-purple transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="https://calendar.app.google/zRvQ4e6mVcHk9KYD6" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-brand-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Therosa Counseling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
