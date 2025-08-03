"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 bg-purple-700 text-white flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <div className="logo font-bold text-2xl flex items-center gap-2">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 010 5.656l-3.656 3.657a4 4 0 01-5.656-5.657l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.656-3.657a4 4 0 015.656 5.657l-1.414 1.414" />
        </svg>
        <Link href="/">BitLinks</Link>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center font-medium">
        <li className="hover:font-bold"><Link href="/">Home</Link></li>
        <li className="hover:font-bold"><Link href="/about">About</Link></li>
        <li className="hover:font-bold"><Link href="/shorten">Shorten</Link></li>
        <li className="hover:font-bold"><Link href="/contact">Contact Us</Link></li>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 cursor-pointer hover:bg-purple-400 rounded-lg px-4 py-2 font-bold text-white shadow">Try Now</button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 cursor-pointer hover:bg-purple-400 rounded-lg px-4 py-2 font-bold text-white shadow">GitHub</button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-800 text-white flex flex-col items-center gap-4 py-4 md:hidden z-50 shadow-lg">
          <li className="hover:font-bold"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="hover:font-bold"><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="hover:font-bold"><Link href="/shorten" onClick={() => setMenuOpen(false)}>Shorten</Link></li>
          <li className="hover:font-bold"><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li className="flex gap-3">
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-400 rounded-lg px-4 py-2 font-bold text-white shadow">Try Now</button>
            </Link>
            <Link href="/github" onClick={() => setMenuOpen(false)}>
              <button className="bg-purple-500 hover:bg-purple-400 rounded-lg px-4 py-2 font-bold text-white shadow">GitHub</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
