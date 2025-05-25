import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckIcon } from 'lucide-react';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Free plan for everyone',
    price: 0,
    items: ['1 summary per day', 'Basic features'],
    priceType: 'Free',
    paymentLink: '#',
  },
  {
    id: 'basic',
    name: 'Basic',
    description: 'Basic plan for individuals.',
    price: 99,
    items: ['5 summaries per day', 'Basic features', 'Email support'],
    priceType: 'Monthly',
    paymentLink: '#',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Pro plan for teams',
    price: 199,
    items: [
      'Unlimited summaries',
      'Priority processing',
      'Dedicated support',
      'Markdown export',
    ],
    priceType: 'Monthly',
    paymentLink: '#',
  },
];

const PricingCard = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row  gap-6">
      {pricingPlans.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            'relative flex flex-col gap-4 lg:gap-8 w-full z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl',
            plan.id === 'pro' && 'border-tealy gap-5 border-2'
          )}
        >
          <div className="">
            <p className="font-bold text-lg capitalize">{plan.name}</p>
            <p className="text-gray-500 text-base-content/80 mt-2">
              {plan.description}
            </p>
            <div>
              <div className="text-2xl font-bold mt-4">
                {plan.priceType == 'Free' ? (
                  <span className="text-5xl tracking-tight font-extrabold">
                    Free
                  </span>
                ) : (
                  <div className="flex gap-2">
                    <span className="text-5xl tracking-tight font-extrabold ">
                      ₹ {plan.price}
                    </span>
                    <div className="flex flex-col justify-end mb-[2px]">
                      <p className="text-xs uppercase font-semibold">INR</p>
                      <p className="text-xs uppercase font-semibold">/Month</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <ul className="space-y-2.5 leading-relaxed text-base list-disc list-inside">
            {plan.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-tealy" /> {item}
              </li>
            ))}
          </ul>
          <div className="flex space-y-2 justify-between items-center mt-auto">
            {(plan.id != 'free' && (
              <Link href={plan.paymentLink}>
                <Button>
                  Buy now <ArrowRight size={18} />
                </Button>
              </Link>
            )) || (
              <Link href={plan.paymentLink}>
                <Button variant="outline">Get started</Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto pcx-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-3xl mb-8 text-tealy">
            Pricing
          </h2>
        </div>
        <div className="relative flex flex-col items-center justify-center lg:flex-row lg:items-stretch gap-8">
          <PricingCard />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
