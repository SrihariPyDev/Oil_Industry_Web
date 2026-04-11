'use client';

import { Award, BarChart3, Shield, Clock, X } from 'lucide-react';
import { useState } from 'react';

interface Benefit {
  icon: typeof Award;
  title: string;
  description: string;
  fullDetails: string;
}

const benefits: Benefit[] = [
  {
    icon: Award,
    title: 'Premium Brand',
    description: 'Trusted quality products',
    fullDetails: 'Sell trusted, quality products with strong brand recognition that customers trust and recommend to others.',
  },
  {
    icon: BarChart3,
    title: 'Sales Support',
    description: 'Boost your revenue',
    fullDetails: 'Marketing materials and sales tools designed to help you boost your revenue and reach more customers.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Comprehensive warranty',
    fullDetails: 'Every product is backed by our comprehensive warranty and quality assurance program.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Reliable logistics',
    fullDetails: 'Quick turnaround times and reliable logistics support to keep your inventory stocked.',
  },
];

export function DealersSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

  return (
    <section id="dealers" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white" data-section="dealers">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Partner With Us as a Dealer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock exclusive benefits and grow your retail business with LubroCorp
          </p>
        </div>

        {/* Benefits Grid - Interactive Cards with Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedBenefit(benefit)}
                className="group cursor-pointer animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-50 to-gray-50 rounded-xl border-2 border-gray-200 hover:border-amber-600 overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  {/* Background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <Icon className="w-16 h-16 text-amber-600 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulseScale" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover overlay with button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 z-20">
                    <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Learn More
                    </button>
                  </div>

                  {/* Border glow */}
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Split Section - Enhanced with Effects */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Benefits List */}
          <div className="space-y-6 animate-slideInUp">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose LubroCorp?
            </h3>
            <ul className="space-y-4">
              {[
                'High-margin products with competitive pricing',
                'Reliable inventory management and restocking',
                'Consumer marketing campaigns and promotions',
                'Training for your staff on product benefits',
                'Online portal for easy ordering and tracking',
                'Flexible payment terms for qualified dealers',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 group cursor-default">
                  <span className="text-amber-600 font-bold text-lg mt-1 group-hover:scale-125 transition-transform duration-300">✓</span>
                  <span className="text-gray-700 group-hover:text-gray-900 group-hover:translate-x-2 transition-all duration-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - CTA Card with Animation */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-2xl p-12 border-2 border-amber-200 relative overflow-hidden animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-transparent animate-pulse" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-floatUp" />
            </div>

            <div className="relative z-10 space-y-6">
              <h4 className="text-3xl font-bold text-gray-900">
                Get Started Today
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Join hundreds of successful dealers earning excellent margins with LubroCorp products and dedicated support.
              </p>
              <div className="bg-white rounded-xl p-6 border-2 border-amber-300 shadow-lg">
                <p className="text-sm text-gray-600 mb-4">
                  Fill out our dealer application form and our team will contact you within 48 hours with exclusive partnership details.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-600/50">
                  Apply to Be a Dealer
                </button>
              </div>
            </div>

            {/* Decorative border glow */}
            <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Key Advantages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Direct business impact on your revenue
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Customer satisfaction and loyalty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Long-term business partnership
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Continuous support and updates
                  </li>
                </ul>
              </div>

              <button className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
