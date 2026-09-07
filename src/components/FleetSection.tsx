"use client";

import React, { useState, useMemo } from 'react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';

import Link from 'next/link';

type Category = 'all' | 'economy' | 'sedan' | 'crossover' | '4x4';

interface FleetSectionProps {
  limit?: number;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredVehicles = useMemo(() => {
    let result = vehicles;
    if (activeCategory !== 'all') {
      result = vehicles.filter(v => v.category === activeCategory);
    }
    if (limit) {
      result = result.slice(0, limit);
    }
    return result;
  }, [activeCategory, limit]);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop pt-28 pb-space-4xl" id="fleet-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-2 mb-space-2xs">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Engineered Fleet</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Select Your Vehicle
          </h2>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
          <span>100% Guaranteed Model Dispatch (No Random Substitutions)</span>
        </div>
      </div>

      <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none mb-space-lg" id="category-filters">
        <button 
          className={`px-space-md py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${
            activeCategory === 'all' 
              ? 'bg-primary-container text-on-primary shadow-sm' 
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          All Vehicles ({vehicles.length})
        </button>
        <button 
          className={`px-space-md py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${
            activeCategory === 'economy' 
              ? 'bg-primary-container text-on-primary shadow-sm' 
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('economy')}
        >
          Economy & Hatchback
        </button>
        <button 
          className={`px-space-md py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${
            activeCategory === 'sedan' 
              ? 'bg-primary-container text-on-primary shadow-sm' 
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('sedan')}
        >
          Executive Sedans
        </button>
        <button 
          className={`px-space-md py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${
            activeCategory === 'crossover' 
              ? 'bg-primary-container text-on-primary shadow-sm' 
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('crossover')}
        >
          Crossover SUVs
        </button>
        <button 
          className={`px-space-md py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${
            activeCategory === '4x4' 
              ? 'bg-primary-container text-on-primary shadow-sm' 
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
          onClick={() => setActiveCategory('4x4')}
        >
          4x4 & Off-Roaders
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="fleet-grid">
        {filteredVehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      {filteredVehicles.length === 0 && (
        <div className="w-full py-12 text-center text-on-surface-variant font-body-lg">
          No vehicles found in this category.
        </div>
      )}
      
      {limit && filteredVehicles.length >= limit && (
        <div className="mt-space-xl flex justify-center">
          <Link href="/fleet" className="px-space-2xl py-4 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg transition-colors flex items-center gap-2">
            Explore More Vehicles
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      )}
    </section>
  );
};
