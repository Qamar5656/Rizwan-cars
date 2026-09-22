import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: 'Driver & Services | Rizwan Cars',
  description: 'Premium driver services, corporate fleet leasing, and VIP protocol escorts.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-surface-container-lowest border-b-2 border-surface-container pt-12 pb-6 mb-12">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop text-center">
          <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface tracking-tight mb-space-sm">
            Premium Mobility Services
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Beyond standard rentals, we offer tailored transportation solutions for executives and VIPs.
          </p>
        </div>
      </div>
      
      <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop pb-space-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-4xl">
          
          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-on-primary-container">person_celebrate</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">With Driver</h3>
            <p className="font-body-md text-surface-container-high leading-relaxed">
              Sit back and relax while our highly trained, uniformed drivers navigate the traffic. Ideal for corporate roadshows, VIP protocol, and airport transfers.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-on-tertiary-container">directions_car</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">Without Driver (Self-Drive)</h3>
            <p className="font-body-md text-on-surface-variant">
              Experience the thrill of the open road on your own terms. We offer well-maintained, 100% insured vehicles for those who love to drive themselves.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-[#15803D]">local_gas_station</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">With Fuel Included</h3>
            <p className="font-body-md text-on-surface-variant">
              Eliminate the hassle of refueling stops. Choose our premium package and get a car with a full tank of fuel, billed directly into your fixed daily rate.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-on-secondary-container">ev_station</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">Without Fuel (Full-to-Full)</h3>
            <p className="font-body-md text-on-surface-variant">
              Our standard, economical policy. Receive the vehicle with a full tank and simply return it with a full tank to avoid any additional administrative fuel charges.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-on-surface">corporate_fare</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">Corporate Fleet Leasing</h3>
            <p className="font-body-md text-on-surface-variant">
              Scale your business mobility without asset depreciation. We offer flexible monthly and annual leasing terms for companies of all sizes.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary-container/50 flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-primary">landscape</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">Tours & Travel Packages</h3>
            <p className="font-body-md text-on-surface-variant">
              Explore the breathtaking northern areas of Pakistan with our specialized tour packages. We provide rugged 4x4s and experienced guides for your adventures.
            </p>
          </div>

          <div className="p-space-xl bg-surface-container-low rounded-3xl border border-surface-container hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-tertiary-container/50 flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-[28px] text-tertiary">celebration</span>
            </div>
            <h3 className="font-headline-sm text-on-surface mb-space-xs">Wedding & Event Bookings</h3>
            <p className="font-body-md text-on-surface-variant">
              Make your special day unforgettable with our premium wedding fleets. We offer decorated luxury sedans and full convoys for VIP protocol.
            </p>
          </div>

        </div>
      </section>
      
      <CallToAction />
    </>
  );
}
