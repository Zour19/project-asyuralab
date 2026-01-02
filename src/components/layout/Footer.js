'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-[#1A1A1A] mt-16 border-t border-[#1A1A1A] border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif mb-2">ASYURA LAB</div>
            <p className="text-opacity-75">
              Photographer & Visual Storyteller
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-opacity-75 hover:text-opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-opacity-75 hover:text-opacity-100 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-opacity-75 hover:text-opacity-100 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-opacity-75 hover:text-opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-opacity-75">
              <a href="#" aria-label="Instagram" className="hover:text-opacity-100 transition">📷</a>
              <a href="#" aria-label="Facebook" className="hover:text-opacity-100 transition">👍</a>
              <a href="#" aria-label="Twitter" className="hover:text-opacity-100 transition">🐦</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A1A1A] border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-opacity-60 text-sm">
              &copy; {currentYear} Asyura Lab. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-opacity-60">
              <Link href="#" className="hover:text-opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-opacity-100 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
