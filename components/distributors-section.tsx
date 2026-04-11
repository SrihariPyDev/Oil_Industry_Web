'use client';

import { Globe, TrendingUp, Users, Zap, X } from 'lucide-react';
import { useState } from 'react';

interface BenefitItem {
  icon: typeof Globe;
  title: string;
  description: string;
  fullDetails: string;
}

const benefits: BenefitItem[] = [
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide logistics network',
    fullDetails: 'Access to our worldwide logistics network, technical support, and comprehensive marketing resources to help you succeed globally.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Margins',
    description: 'Maximize profitability',
    fullDetails: 'Attractive pricing and margins designed to maximize your profitability and sustainable business growth.',
  },
  {
    icon: Users,
    title: 'Training & Resources',
    description: 'Comprehensive support',
    fullDetails: 'Comprehensive training programs and technical documentation for your entire team to ensure success.',
  },
  {
    icon: Zap,
    title: 'Dedicated Support',
    description: 'Expert assistance',
    fullDetails: 'Direct access to dedicated account managers and technical specialists ready to support your growth.',
  },
];

export function DistributorsSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitItem | null>(null);

  return (
    <section id="distributors" className="py-20 md:py-32 bg-white" data-section="distributors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Become a Distributor
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing network of successful distributors worldwide
          </p>
        </div>

        {/* Benefits Grid - Enhanced with Effects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedBenefit(benefit)}
                className="group cursor-pointer animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-amber-600 transition-all duration-300 overflow-hidden h-full">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-12 h-12 text-amber-600 group-hover:scale-125 transition-transform duration-300 animate-pulseScale" />
                      <span className="text-amber-600 font-bold group-hover:rotate-12 transition-transform duration-300">→</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* View More indicator */}
                    <div className="mt-4 inline-block text-amber-600 font-semibold text-sm transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      Learn More →
                    </div>
                  </div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section with Animation */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white space-y-6 relative overflow-hidden animate-slideInUp">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-transparent animate-pulse" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-2">Ready to Grow Your Business?</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Contact our distribution team to discuss partnership opportunities tailored to your market.
            </p>
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-600/50 inline-block">
              Become a Distributor
            </button>
          </div>
        </div>
      </div>

      {/* Modal - Benefit Details */}
      {selectedBenefit && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-scaleIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-white relative">
              <button
                onClick={() => setSelectedBenefit(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-start gap-4">
                {(() => {
                  const Icon = selectedBenefit.icon;
                  return <Icon size={48} />;
                })()}
                <div>
                  <h2 className="text-3xl font-bold">{selectedBenefit.title}</h2>
                  <p className="text-amber-100 mt-2">{selectedBenefit.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">About This Benefit</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBenefit.fullDetails}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Professional support and guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Competitive advantage in your market
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Growth and expansion opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Dedicated partnership success
                  </li>
                </ul>
              </div>

              <button className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Partnership
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
