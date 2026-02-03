"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }, // Added Skills as it's a major section
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "py-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-lg border-b border-gray-100 dark:border-white/5"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white dark:text-gray-900 font-black text-xl">US</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white">
              UMER SHAHID.
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gray-900/10 dark:shadow-white/5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 dark:text-white z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 overflow-hidden">
              <span
                className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}