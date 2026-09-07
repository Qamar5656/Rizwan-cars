import { FleetSection } from "@/components/FleetSection";
import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: 'Our Premium Fleet | Apex Drive',
  description: 'Browse our extensive selection of economy, sedans, crossovers, and 4x4s for rent across Pakistan.',
};

export default function FleetPage() {
  return (
    <>
      <div className="bg-surface-container-lowest border-b-2 border-surface-container pt-12 pb-6">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop text-center">
          <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface tracking-tight mb-space-sm">
            The Apex Fleet
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            100% Guaranteed Model Dispatch. What you see is exactly what arrives.
          </p>
        </div>
      </div>
      
      <FleetSection />
      <CallToAction />
    </>
  );
}
