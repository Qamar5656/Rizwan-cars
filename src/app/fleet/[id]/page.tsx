import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallToAction } from "@/components/CallToAction";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const vehicle = vehicles.find((v) => v.id === params.id);
  if (!vehicle) return { title: 'Not Found' };
  
  return {
    title: `${vehicle.model} Rental | Apex Drive`,
    description: `Rent the ${vehicle.model} starting at Rs. ${vehicle.pricePerDay.toLocaleString()}/day. ${vehicle.description}`,
  };
}

export default function VehicleDetailsPage({ params }: PageProps) {
  const vehicle = vehicles.find((v) => v.id === params.id);
  
  if (!vehicle) {
    notFound();
  }

  const whatsappMessage = `Hello Apex Drive, I want to reserve the ${vehicle.model}`;

  return (
    <>
      <div className="bg-surface-container-lowest border-b-2 border-surface-container pt-8 pb-4">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop">
          <Link href="/fleet" className="inline-flex items-center gap-1 text-secondary font-label-md hover:underline mb-4">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Fleet
          </Link>
        </div>
      </div>
      
      <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop py-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-center">
          
          {/* Image Showcase */}
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-surface-container to-surface-container-lowest rounded-3xl flex items-center justify-center p-8 overflow-hidden shadow-sm">
            <Image 
              src={vehicle.image}
              alt={vehicle.alt}
              width={800}
              height={600}
              className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-500"
              unoptimized
              priority
            />
          </div>
          
          {/* Details & Specs */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-space-xs mb-space-sm">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm uppercase tracking-wider">
                {vehicle.make}
              </span>
              <span 
                className={`flex items-center gap-1 font-label-sm px-2.5 py-0.5 rounded-full ${
                  vehicle.badge.style === 'success' 
                    ? 'text-[#15803D] bg-[#DCFCE7]' 
                    : vehicle.badge.style === 'primary' 
                      ? 'text-on-secondary bg-primary' 
                      : 'text-secondary bg-secondary-fixed'
                }`}
              >
                {vehicle.badge.text}
              </span>
            </div>
            
            <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface tracking-tight mb-space-xs">
              {vehicle.model}
            </h1>
            
            <p className="font-body-lg text-on-surface-variant mb-space-xl">
              {vehicle.description}
            </p>
            
            <div className="p-space-lg bg-surface-container-low rounded-2xl mb-space-xl">
              <h3 className="font-headline-sm text-on-surface mb-space-md">Vehicle Specifications</h3>
              <div className="grid grid-cols-2 gap-space-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined">settings</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Transmission</div>
                    <div className="font-label-md font-semibold text-on-surface">{vehicle.specs.transmission}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined">{vehicle.specs.seats > 5 ? 'groups' : 'person'}</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Seating</div>
                    <div className="font-label-md font-semibold text-on-surface">{vehicle.specs.seats} Passengers</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined">directions_car</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Category</div>
                    <div className="font-label-md font-semibold text-on-surface capitalize">{vehicle.category}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined">ac_unit</span>
                  </div>
                  <div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-wider">Climate</div>
                    <div className="font-label-md font-semibold text-on-surface">Premium A/C</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-surface-container">
              <div>
                <div className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Standard Daily Rate</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display-xl-mobile md:text-5xl text-primary font-bold tracking-tight">
                    Rs. {vehicle.pricePerDay.toLocaleString()}
                  </span>
                  <span className="font-body-md text-on-surface-variant">/ day</span>
                </div>
              </div>
              
              <WhatsAppButton 
                phoneNumber="923174248579"
                message={whatsappMessage}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#22C35E] text-on-secondary font-label-lg flex items-center justify-center gap-2 transition-all shadow-[0_8px_24px_rgba(37,211,102,0.3)] transform hover:scale-105"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                <span>Reserve on WhatsApp</span>
              </WhatsAppButton>
            </div>
            
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
}
