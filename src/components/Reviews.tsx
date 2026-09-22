import React from 'react';

export const Reviews: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl">
      <div className="max-w-[1280px] mx-auto px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <div className="flex items-center justify-center gap-2 mb-space-2xs">
            <span className="material-symbols-outlined text-[#F59E0B] text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Verified Renter Experiences</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
            What Our Drivers Say
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Over 4,800+ successful journeys and 5-star verified experiences across Islamabad, Lahore, Karachi, and the northern highways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Review 1 */}
          <div className="flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-space-md">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                &quot;Rented a Fortuner Sigma 4 for an executive tour through Skardu and Hunza. Car arrived spotlessly clean with complete paperwork. WhatsApp support replied in under 60 seconds whenever we asked for road tips. Outstanding service!&quot;
              </p>
            </div>
            <div className="pt-space-md bg-surface-container-lowest">
              <div className="flex items-center justify-between gap-space-xs mb-1">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">Hamza Khan</span>
                <span className="flex items-center gap-1 text-on-tertiary-container font-label-sm text-label-sm bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Verified Renter
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Islamabad Hub</span>
                <span className="text-secondary font-medium">Rented Fortuner Sigma 4</span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-space-md">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                &quot;Rizwan Cars made our corporate client visit seamless in Lahore. The Civic RS was delivered straight to Allama Iqbal International Airport right on the minute. Clean interior, flawless air-conditioning, zero deposit delays.&quot;
              </p>
            </div>
            <div className="pt-space-md bg-surface-container-lowest">
              <div className="flex items-center justify-between gap-space-xs mb-1">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">Zainab Tariq</span>
                <span className="flex items-center gap-1 text-on-tertiary-container font-label-sm text-label-sm bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Verified Renter
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Lahore Cantt</span>
                <span className="text-secondary font-medium">Rented Civic RS Turbo</span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex flex-col justify-between p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-space-md">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                &quot;Booking via WhatsApp took literally 3 minutes without cumbersome paperwork loops. The Kia Sportage AWD was in mint mechanical condition with full fuel. Best car rental company operating in Pakistan by far.&quot;
              </p>
            </div>
            <div className="pt-space-md bg-surface-container-lowest">
              <div className="flex items-center justify-between gap-space-xs mb-1">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">Bilal Ahmed</span>
                <span className="flex items-center gap-1 text-on-tertiary-container font-label-sm text-label-sm bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Verified Renter
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Karachi Clifton</span>
                <span className="text-secondary font-medium">Rented Sportage AWD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-3xl grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[32px]">shield</span>
            <div>
              <div className="font-spec-numeral text-spec-numeral text-on-surface">100% Insured</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Zero liability options</div>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-on-tertiary-container text-[32px]">alarm</span>
            <div>
              <div className="font-spec-numeral text-spec-numeral text-on-surface">60 Min Dispatch</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Doorstep or airport</div>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[32px]">build_circle</span>
            <div>
              <div className="font-spec-numeral text-spec-numeral text-on-surface">32-Point Inspected</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Certified clean mechanics</div>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[#25D366] text-[32px]">support_agent</span>
            <div>
              <div className="font-spec-numeral text-spec-numeral text-on-surface">24/7 Helpline</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Nationwide road rescue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
