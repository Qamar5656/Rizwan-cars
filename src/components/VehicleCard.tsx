import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '../data/vehicles';
import { WhatsAppButton } from './WhatsAppButton';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = memo(({ vehicle }) => {
  const whatsappMessage = `Hello Apex Drive, I would like to reserve the ${vehicle.model}`;

  return (
    <div className="vehicle-card flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all overflow-hidden">
      <div className="p-space-md pb-0">
        <div className="flex items-center justify-between gap-space-xs mb-space-xs flex-wrap">
          <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            {vehicle.make} • {vehicle.category === '4x4' ? '4x4 Off-Roader' : vehicle.category.charAt(0).toUpperCase() + vehicle.category.slice(1)}
          </span>
          <span 
            className={`flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full ${
              vehicle.badge.style === 'success' 
                ? 'text-[#15803D] bg-[#DCFCE7]' 
                : vehicle.badge.style === 'primary' 
                  ? 'text-on-secondary bg-primary' 
                  : 'text-secondary bg-secondary-fixed'
            }`}
          >
            {vehicle.badge.style === 'success' && <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>}
            {vehicle.badge.text}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{vehicle.model}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{vehicle.description}</p>
      </div>
      
      <div className="relative w-full h-48 px-space-md flex items-center justify-center my-2">
        <div className="w-full h-full rounded-xl bg-gradient-to-b from-surface-container to-surface-container-lowest flex items-center justify-center overflow-hidden">
          <Image 
            className="object-contain h-40 w-auto hover:scale-105 transition-transform duration-300" 
            alt={vehicle.alt} 
            src={vehicle.image}
            width={300}
            height={160}
            unoptimized
          />
        </div>
      </div>
      
      <div className="px-space-md">
        <div className="grid grid-cols-2 gap-2 py-space-xs px-space-md bg-surface-container-low rounded-xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">settings</span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">{vehicle.specs.transmission}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-secondary">{vehicle.specs.seats > 5 ? 'groups' : 'person'}</span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">{vehicle.specs.seats} Seats</span>
          </div>
        </div>
      </div>
      
      <div className="p-space-md pt-space-sm flex flex-col gap-space-xs">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">Rs. {vehicle.pricePerDay.toLocaleString()}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant"> / day</span>
          </div>
          <Link href={`/fleet/${vehicle.id}`} className="font-label-md text-label-md text-secondary hover:underline cursor-pointer">
            View Specs
          </Link>
        </div>
        
        <WhatsAppButton 
          phoneNumber="923174248579"
          message={whatsappMessage}
          className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#22C35E] text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-all shadow-[0_4px_14px_rgba(37,211,102,0.25)]"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Book on WhatsApp</span>
        </WhatsAppButton>
      </div>
    </div>
  );
});

VehicleCard.displayName = 'VehicleCard';
