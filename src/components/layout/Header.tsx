import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Therosa Counseling Logo"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-serif font-bold text-brand-purple group-hover:text-brand-pink transition-colors">
                Therosa Counseling
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-purple transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-purple transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-purple transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
