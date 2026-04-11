'use client';

import { Check } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white" data-section="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium Quality Since 1985
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                LubroCorp has been delivering excellence in industrial lubrication for nearly four decades.
                We combine cutting-edge technology with time-tested formulations to provide solutions
                that keep your operations running smoothly.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {[
                'ISO 9001 Certified Manufacturing',
                'Advanced Laboratory Testing',
                'Environmental Responsibility',
                'Global Distribution Network',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 italic">
              &quot;Our commitment to quality and customer satisfaction drives every product we manufacture.&quot;
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-900 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold opacity-30">40+</div>
                  <p className="text-white/80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
