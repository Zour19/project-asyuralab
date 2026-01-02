'use client';

/**
 * Navbar Component
 * Navigasi dengan interactive logo menu yang bisa diklik
 */

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Tentang Saya', href: '/about' },
    { label: 'Portofolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/contact' }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="w-full bg-[#FAF9F6] border-b border-[#1A1A1A] border-opacity-10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo - Clickable */}
          <button
            onClick={toggleMenu}
            className="flex-shrink-0 font-serif text-2xl md:text-3xl text-[#1A1A1A] font-light tracking-wider hover:text-opacity-70 transition-opacity duration-300"
          >
            ASYURA LAB
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-widest text-[#1A1A1A] text-opacity-70 hover:text-opacity-100 transition-opacity duration-300 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#FAF9F6] z-50 pt-24 md:pt-32 px-6 md:px-12 animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
            className="absolute top-8 right-8 text-3xl text-[#1A1A1A] hover:text-opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            {menuItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-serif text-5xl md:text-7xl text-[#1A1A1A] hover:text-opacity-70 transition-opacity duration-300 leading-tight"
                style={{
                  animation: `slideInUp 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 max-w-3xl space-y-4">
            <div>
              <p className="text-xs tracking-widest text-[#1A1A1A] text-opacity-50 uppercase mb-2">Email</p>
              <a
                href="mailto:hello@asyuralab.com"
                className="text-[#1A1A1A] hover:text-opacity-70 transition-opacity"
              >
                hello@asyuralab.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest text-[#1A1A1A] text-opacity-50 uppercase mb-2">Phone</p>
              <a
                href="tel:+6281234567890"
                className="text-[#1A1A1A] hover:text-opacity-70 transition-opacity"
              >
                +62 812-3456-7890
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
