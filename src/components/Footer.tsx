import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-on-secondary">
      <div className="max-w-[1280px] mx-auto px-gutter-desktop pt-space-4xl pb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-2xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <Image 
                alt="Apex Drive Brand Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1W2Od0efbFoTtyqO5i1MGYZG0nIbZJ4DrL_UhDXTETZ05wnsaa0fS3lqFf2CD88UqqtkGXNrgPwE93AgqpYJmZe-J8cShy9xzsLfTThqUPNyiuIK5H4nwSpv1sY-3jy3NwYIi211MyILpgIlnGDdrNGROh3I4sLN2NgzBCbDAB6hGsigrVqrdtcRIZlUg6-bOQARBBmEhUJdM7XmHytt-xQzXeEJ0hnYrw4lPEzA5OP_dmXDQdUZ4I_Vls" 
                width={32} 
                height={32} 
                unoptimized
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-secondary uppercase">Apex Drive</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Executive car rentals and high-performance mobility tailored for business elites, vacationers, and discerning travelers. Engineered reliability with verified doorstep dispatch.
            </p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-lg bg-surface-container-lowest/10">
                <span className="material-symbols-outlined text-on-tertiary-container text-[16px]">verified</span>
                <span className="font-label-sm text-label-sm text-on-secondary">Govt. Licensed</span>
              </div>
              <div className="flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-lg bg-surface-container-lowest/10">
                <span className="material-symbols-outlined text-secondary-container text-[16px]">shield</span>
                <span className="font-label-sm text-label-sm text-on-secondary">Fully Insured</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-secondary">Quick Links</h3>
            <ul className="flex flex-col gap-space-sm">
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#">Home</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#fleet-section">Vehicles Fleet</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#">Chauffeur & Services</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#">About Us</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#">Contact & Hubs</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-secondary">Fleet Categories</h3>
            <ul className="flex flex-col gap-space-sm">
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#fleet-section">Economy & Hatchbacks</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#fleet-section">Executive Sedans</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#fleet-section">Crossover SUVs</a></li>
              <li className="font-body-md text-body-md"><a className="text-on-primary-container hover:text-on-secondary transition-colors" href="#fleet-section">4x4 & Off-Roaders</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-secondary">Helpline & Concierge</h3>
            <div className="flex flex-col gap-space-sm">
              <a className="flex items-center gap-space-xs text-on-primary-container hover:text-on-secondary transition-colors" href="tel:+18005552739">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="font-body-md text-body-md">+1 (800) 555-APEX</span>
              </a>
              <a className="flex items-center gap-space-xs text-on-primary-container hover:text-on-secondary transition-colors" href="https://wa.me/923174248579" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[18px] text-[#25D366]">forum</span>
                <span className="font-body-md text-body-md">+92 317 4248579</span>
              </a>
              <a className="flex items-center gap-space-xs text-on-primary-container hover:text-on-secondary transition-colors" href="mailto:concierge@apexdrive.com">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span className="font-body-md text-body-md">concierge@apexdrive.com</span>
              </a>
              <div className="flex items-center gap-space-xs text-on-primary-container">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="font-body-sm text-body-sm">24/7 Direct Airport Concierge</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-space-3xl pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-primary-container">
            © {new Date().getFullYear()} Apex Drive (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-secondary transition-colors" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-on-primary-container hover:text-on-secondary transition-colors" href="#">Rental Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
