"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'People', href: '/people' },
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <svg className="w-7 h-7 text-[#009966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 hover:text-[#009966] transition-colors">
              LabSite
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm px-4 py-2 transition-all ${
                    isActive 
                      ? "bg-[#009966]/10 text-[#009966] font-bold" 
                      : "text-slate-600 font-semibold hover:bg-slate-50 hover:text-[#009966]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call-to-Action Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#009966] hover:bg-[#007a52] text-white px-6 py-2.5 text-sm font-bold tracking-wide transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-[#009966] focus:outline-none p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold transition-colors ${
                    isActive 
                      ? "text-[#009966] bg-[#009966]/10" 
                      : "text-slate-700 hover:text-[#009966] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#009966] hover:bg-[#007a52] text-white px-6 py-3.5 text-base font-bold tracking-wide transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}