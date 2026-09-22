"use client";

import React, { useState } from 'react';

export const BookingSearch: React.FC = () => {
  const [driveType, setDriveType] = useState<'self' | 'driver'>('self');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const fleetSection = document.getElementById('fleet-section');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-20 w-full max-w-[1280px] mx-auto px-gutter-desktop -mb-16">
      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg border-2 border-surface-container">
        <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-md">
          <div className="inline-flex p-1 bg-surface-container rounded-full" id="drive-type-selector">
            <button 
              className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all ${
                driveType === 'self' 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setDriveType('self')}
              type="button"
            >
              Self Drive
            </button>
            <button 
              className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all ${
                driveType === 'driver' 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setDriveType('driver')}
              type="button"
            >
              With Driver
            </button>
          </div>
          <div className="flex items-center gap-space-2xs text-on-surface font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
            <span className="font-medium">Clean Interior & Sanitized Guarantee</span>
          </div>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-sm items-end" onSubmit={handleSearch}>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span> Pick-up City
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-lowest rounded-xl px-space-sm py-3 font-body-md text-body-md text-on-surface border-2 border-surface-container focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#316bf3] transition-all cursor-pointer appearance-none">
                <option value="Islamabad">Islamabad Airport / City</option>
                <option value="Lahore">Lahore Cantt / Airport</option>
                <option value="Karachi">Karachi Clifton / Airport</option>
                <option value="Rawalpindi">Rawalpindi Saddar</option>
                <option value="Peshawar">Peshawar City Hub</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-outline text-[18px]">expand_more</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">pin_drop</span> Drop-off City
            </label>
            <div className="relative">
              <select className="w-full bg-surface-container-lowest rounded-xl px-space-sm py-3 font-body-md text-body-md text-on-surface border-2 border-surface-container focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#316bf3] transition-all cursor-pointer appearance-none">
                <option value="same">Same as Pick-up</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Peshawar">Peshawar</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-outline text-[18px]">expand_more</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span> Pick-up Date
            </label>
            <input 
              className="w-full bg-surface-container-lowest rounded-xl px-space-sm py-2.5 font-body-md text-body-md text-on-surface border-2 border-surface-container focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#316bf3] transition-all" 
              type="datetime-local" 
              defaultValue="2025-05-10T10:00"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">event_repeat</span> Return Date
            </label>
            <input 
              className="w-full bg-surface-container-lowest rounded-xl px-space-sm py-2.5 font-body-md text-body-md text-on-surface border-2 border-surface-container focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#316bf3] transition-all" 
              type="datetime-local" 
              defaultValue="2025-05-13T18:00"
            />
          </div>
          
          <button 
            className="w-full h-[46px] rounded-xl bg-secondary-container hover:bg-secondary text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-[0_4px_16px_rgba(49,107,243,0.35)] transition-all transform active:scale-95 cursor-pointer" 
            type="submit"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
            <span>Check Fleet Availability</span>
          </button>
        </form>
      </div>
    </div>
  );
};
