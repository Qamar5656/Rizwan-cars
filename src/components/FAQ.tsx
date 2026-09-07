"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "What documents are required to rent a vehicle?",
    answer: "For Pakistani citizens, you need an original CNIC, an active valid Driving License, and verifiable local employment or residence proof. For Overseas Pakistanis and Foreign Tourists, a valid Passport with an entry visa and International Driving Permit (IDP) or native driving license is accepted."
  },
  {
    question: "What is the security deposit policy and how is it refunded?",
    answer: "A fully refundable security deposit is collected upon vehicle handover (amount varies between Rs. 20,000 to Rs. 100,000 based on the vehicle tier). Following our swift 10-minute digital return inspection, your deposit is electronically wired back to your bank account or cash handed within 24 hours without deductions."
  },
  {
    question: "Is there a daily mileage limit on rentals?",
    answer: "Our standard self-drive daily allowance is 200 km per day (cumulative over your rental duration). For example, a 3-day reservation gives you 600 total km. Additional mileage is charged at nominal rates per km, or you can opt for our 'Unlimited Mileage Northern Expressway' pass."
  },
  {
    question: "What is the fuel policy?",
    answer: "We operate on a straightforward 'Full-to-Full' fuel policy. Every car is delivered to your designated hub with a topped-off fuel tank. Simply return the vehicle with a full tank to avoid any refueling administrative surcharges."
  },
  {
    question: "Can I drive inter-city across provinces?",
    answer: "Yes! All Apex Drive vehicles are licensed for nationwide inter-provincial travel across Punjab, Sindh, KPK, Islamabad Capital Territory, and Gilgit-Baltistan. All units feature 24/7 telematics security and round-the-clock roadside emergency coordination on all major motorways (M-1, M-2, M-3, M-5, M-9, and KKH)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[960px] mx-auto px-gutter-desktop py-space-4xl">
      <div className="text-center mb-space-2xl">
        <div className="flex items-center justify-center gap-2 mb-space-2xs">
          <span className="material-symbols-outlined text-secondary text-[20px]">help</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Transparency First</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
          Frequently Asked Questions
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Everything you need to know about documentation, security deposits, and road trip policies.
        </p>
      </div>

      <div className="flex flex-col gap-space-sm" id="faq-accordion">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="faq-item rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all"
            >
              <button 
                className="w-full px-space-lg py-space-md text-left flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{faq.question}</span>
                <span className={`faq-icon material-symbols-outlined text-on-surface-variant text-[24px] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-space-lg text-on-surface-variant font-body-md text-body-md leading-relaxed transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] pb-space-md opacity-100' : 'max-h-0 opacity-0 overflow-hidden py-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
