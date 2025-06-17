"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSolidPhoneCall, BiMenu, BiX } from "react-icons/bi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", isSection: false },
    { href: "/about", label: "About", isSection: false },
    { href: "services", label: "Services", isSection: true },
    { href: "gallery", label: "Gallery", isSection: true },
    { href: "/menus", label: "Menus", isSection: false },
    { href: "reviews", label: "Reviews", isSection: true },
  ];

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure page is loaded
  };

  const handleNavigation = (e, link) => {
    if (link.isSection) {
      e.preventDefault();
      setIsOpen(false);
      if (pathname !== "/") {
        // Navigate to home page first
        router.push("/");
        // Store the section to scroll to in sessionStorage
        sessionStorage.setItem('sectionToScroll', link.href);
      } else {
        // Already on home page, just scroll to section
        scrollToSection(link.href);
      }
    } else {
      setIsOpen(false);
    }
  };

  // Handle scroll after navigation to home page
  useEffect(() => {
    if (pathname === "/") {
      const sectionId = sessionStorage.getItem('sectionToScroll');
      if (sectionId) {
        scrollToSection(sectionId);
        // Clear the stored section
        sessionStorage.removeItem('sectionToScroll');
      }
    }
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="flex fixed items-center justify-between px-4 md:px-10 py-5 z-50 w-full">
      {/* Logo */}
      <div className="flex items-center z-10">
        <Link href="/">
          <Image
            src="/logo/Kallummekkayas_Logo[1].png"
            alt="Kabunmakkajazz Logo"
            width={150}
            height={50}
            className="md:h-12 h-8 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:text-sm text-xs space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.isSection ? `/#${link.href}` : link.href}
            onClick={(e) => handleNavigation(e, link)}
            className="relative text-white hover:text-[var(--primary-color)] font-medium group"
          >
            {link.label}
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Desktop Phone Button */}
      <div className="hidden md:flex items-center md:px-10">
        <a
          href="tel:+91700004657"
          className="bg-[var(--primary-color)] gap-2 text-black px-4 py-2 rounded-lg font-base text-sm flex items-center hover:bg-opacity-90 transition"
        >
          <BiSolidPhoneCall className="w-4 h-5" />
          +91 700004657
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        ref={buttonRef}
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <BiX className="w-6 h-6 text-white" />
        ) : (
          <BiMenu className="w-6 h-6 text-[var(--primary-color)]" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Mobile Menu Content */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#111] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full pt-10 px-6">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.isSection ? `/#${link.href}` : link.href}
                onClick={(e) => handleNavigation(e, link)}
                className="text-white hover:text-[var(--primary-color)] text-lg font-medium py-2 border-b border-gray-800 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Phone Button */}
          <div className="mt-auto mb-10">
            <a
              href="tel:+91700004657"
              className="bg-[var(--primary-color)] gap-2 text-black px-4 py-3 rounded-lg font-medium text-sm flex items-center justify-center hover:bg-opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              <BiSolidPhoneCall className="w-5 h-5" />
              +91 700004657
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}