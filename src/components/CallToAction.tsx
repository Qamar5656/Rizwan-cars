import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const CallToAction: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop pb-space-4xl">
      <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] text-on-secondary p-space-2xl md:p-space-4xl shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 hidden md:block">
          <svg className="w-full h-full text-secondary-container" fill="none" viewBox="0 0 500 500">
            <path d="M50 400C180 320 220 200 450 150" stroke="currentColor" strokeDasharray="6 6" strokeWidth="2"></path>
            <path d="M0 450C200 380 280 250 500 200" stroke="currentColor" strokeWidth="3"></path>
            <path d="M100 500C250 420 320 300 500 250" stroke="currentColor" strokeWidth="1.5"></path>
            <circle cx="450" cy="150" fill="currentColor" r="6"></circle>
            <circle cx="500" cy="200" fill="#25D366" r="8"></circle>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded-full bg-surface-container-lowest/10 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-md">
            VIP Protocol & Corporate Fleets
          </span>
          <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-secondary tracking-tight leading-tight mb-space-md">
            Need a Custom Quote or Chauffeur Drive?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed mb-space-2xl">
            From multi-car corporate fleet leases to high-profile wedding convoys and VIP protocol escorts, our dedicated concierge team is available 24 hours a day to orchestrate your trip.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
            <a 
              className="px-space-xl py-space-md rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-secondary font-label-lg text-label-lg text-center transition-all" 
              href="#fleet-section"
            >
              Browse All Cars
            </a>
            <WhatsAppButton 
              phoneNumber="923174248579"
              message="Hello Apex Drive Concierge, I would like to request a custom fleet quote"
              className="px-space-xl py-space-md rounded-full bg-[#25D366] hover:bg-[#22C35E] text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all transform hover:scale-105"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Instant WhatsApp Inquiry</span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
