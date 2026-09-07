"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsAppButton } from './WhatsAppButton';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/fleet' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter-desktop flex items-center justify-between gap-space-md">
        <Link href="/" className="flex items-center gap-space-sm">
          <Image 
            alt="Apex Drive Brand Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1W2Od0efbFoTtyqO5i1MGYZG0nIbZJ4DrL_UhDXTETZ05wnsaa0fS3lqFf2CD88UqqtkGXNrgPwE93AgqpYJmZe-J8cShy9xzsLfTThqUPNyiuIK5H4nwSpv1sY-3jy3NwYIi211MyILpgIlnGDdrNGROh3I4sLN2NgzBCbDAB6hGsigrVqrdtcRIZlUg6-bOQARBBmEhUJdM7XmHytt-xQzXeEJ0hnYrw4lPEzA5OP_dmXDQdUZ4I_Vls" 
            width={120} 
            height={40} 
            unoptimized
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-space-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link 
                key={link.path}
                href={link.path}
                className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-container text-on-primary font-semibold' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-low">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">24/7 Support</span>
          </div>
          <WhatsAppButton 
            phoneNumber="923174248579" 
            message="Hello Apex Drive, I have an inquiry regarding car rental"
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-[#25D366] text-on-secondary font-label-lg text-label-lg transition-all hover:bg-[#22C35E] shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Chat & Book</span>
          </WhatsAppButton>
          <div className="hidden md:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button 
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-surface border-b border-surface-container shadow-lg flex flex-col p-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link 
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-4 rounded-xl font-label-lg transition-colors mb-2 ${
                  isActive 
                    ? 'bg-primary-container text-on-primary font-semibold' 
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
