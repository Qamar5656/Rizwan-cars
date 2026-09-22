import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: 'Contact Us | Rizwan Cars',
  description: 'Get in touch with Rizwan Cars for bookings, inquiries, and corporate leasing.',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-surface-container-lowest border-b-2 border-surface-container pt-12 pb-6 mb-12">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop text-center">
          <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface tracking-tight mb-space-sm">
            Contact & Hubs
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our concierge team is available 24/7 to assist with your mobility requirements.
          </p>
        </div>
      </div>
      
      <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop pb-space-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          
          <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-[#25D366]">forum</span>
            <h3 className="font-headline-sm text-on-surface">WhatsApp Booking</h3>
            <p className="text-on-surface-variant font-body-sm">Fastest way to get quotes and confirm reservations.</p>
            <a href="https://wa.me/923174248579" target="_blank" rel="noopener noreferrer" className="font-label-lg text-secondary hover:underline">
              +92 317 4248579
            </a>
          </div>
          
          <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-secondary">call</span>
            <h3 className="font-headline-sm text-on-surface">24/7 Helpline</h3>
            <p className="text-on-surface-variant font-body-sm">For corporate inquiries and emergency roadside assistance.</p>
            <a href="tel:+18005552739" className="font-label-lg text-secondary hover:underline">
              +1 (800) 555-CARS
            </a>
          </div>
          
          <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-on-tertiary-container">location_on</span>
            <h3 className="font-headline-sm text-on-surface">Nationwide Hubs</h3>
            <p className="text-on-surface-variant font-body-sm">We operate major dispatch hubs at Islamabad, Lahore, and Karachi airports.</p>
            <span className="font-label-lg text-on-surface">
              Main HQ: Lahore
            </span>
          </div>
          
        </div>
      </section>
      
      <CallToAction />
    </>
  );
}
