import { CallToAction } from "@/components/CallToAction";

export const metadata = {
  title: 'About Us | Rizwan Cars',
  description: 'Learn about Rizwan Cars, Pakistan\'s premier car rental and mobility company.',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-surface-container-lowest border-b-2 border-surface-container pt-12 pb-6 mb-12">
        <div className="max-w-[1280px] mx-auto px-gutter-desktop text-center">
          <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface tracking-tight mb-space-sm">
            About Rizwan Cars
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Setting the standard for reliability, luxury, and transparent mobility in Pakistan.
          </p>
        </div>
      </div>
      
      <section className="w-full max-w-[1280px] mx-auto px-gutter-desktop pb-space-4xl">
        <div className="prose prose-lg max-w-3xl mx-auto text-on-surface-variant">
          <h2 className="text-on-surface font-headline-lg mb-4">Our Story</h2>
          <p className="mb-6">
            Rizwan Cars was founded with a singular mission: to eliminate the friction from car rentals in Pakistan. 
            We recognized a gap in the market for a truly professional, corporate-grade mobility partner that guarantees the exact vehicle model you book, without last-minute substitutions.
          </p>
          <p className="mb-6">
            Today, we manage a meticulously maintained fleet ranging from economical hatchbacks for city commutes to armored Land Cruisers for VIP delegations.
          </p>
          
          <h2 className="text-on-surface font-headline-lg mt-12 mb-4">The Rizwan Cars Guarantee</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Hidden Charges:</strong> What you see on your tariff sheet is what you pay. No surprise documentation fees or mandatory cleaning extortions.</li>
            <li><strong>100% Owned Fleet:</strong> We are not a broker. We own and maintain every single vehicle in our lineup, ensuring rigorous 32-point mechanical inspections before every dispatch.</li>
            <li><strong>24/7 Roadside Rescue:</strong> Our telematics and support team monitor your journey. In the rare event of a breakdown, a replacement vehicle is dispatched immediately anywhere on the motorways.</li>
          </ul>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
}
