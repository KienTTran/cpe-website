"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-gray text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/images/logo.png" alt="Temple CPE Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold">Temple University's Center for Pathogen Evolution (CPE)</span>
          </Link>
          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-6 transition-none">
            <Link href="/evolutionary-questions" className="hover:text-temple-red transition-colors">Evolutionary Questions</Link>
            <Link href="/people" className="hover:text-temple-red transition-colors">People</Link>
            <Link href="/news" className="hover:text-temple-red transition-colors">News</Link>
            <Link href="/publications" className="hover:text-temple-red transition-colors">Publications</Link>
            <Link href="/software" className="hover:text-temple-red transition-colors">Software</Link>
            <Link href="/about" className="hover:text-temple-red transition-colors">About</Link>
          </div>
          {/* Mobile burger menu button */}
          <button
            className="lg:hidden flex flex-col space-y-1 p-2 transition-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </nav>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark-gray border-t border-gray-600 transition-none">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <Link href="/evolutionary-questions" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>Evolutionary Questions</Link>
              <Link href="/people" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>People</Link>
              <Link href="/news" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link href="/publications" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>Publications</Link>
              <Link href="/software" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>Software</Link>
              <Link href="/about" className="hover:text-temple-red transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;