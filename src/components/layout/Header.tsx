"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/80 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-7">
          <Link href="/" className="group flex items-center gap-3" aria-label="Therosa Counseling home">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-brand-purple/20 bg-white shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Therosa Counseling logo"
                width={64}
                height={64}
                className="h-full w-full object-contain p-1.5"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-serif font-semibold text-gray-900">
                Therosa
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-purple/80">
                Counseling
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors ${
                    isActive(link.href)
                      ? "text-brand-purple"
                      : "text-gray-600 hover:text-brand-purple"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-brand-purple" />
                  ) : null}
                </Link>
              ))}
            </nav>

            <Link
              href="/schedule"
              className="rounded-full bg-brand-purple px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8B3589]"
            >
              Schedule a Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-brand-purple/20 p-2 text-brand-purple transition-colors hover:bg-brand-purple/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMobileOpen ? "max-h-screen border-b border-gray-200/60 bg-white/95 shadow-sm" : "max-h-0 overflow-hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-6 pt-3 text-base font-medium text-gray-700 sm:px-6 lg:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`rounded-lg px-3 py-2 transition-colors ${
                isActive(link.href)
                  ? "bg-brand-purple/10 text-brand-purple"
                  : "hover:bg-brand-purple/10 hover:text-brand-purple"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/schedule"
            onClick={() => setIsMobileOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand-purple px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8B3589]"
          >
            Schedule a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
