'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" data-section="footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-600 rounded" />
              <span className="font-bold text-xl">LubroCorp</span>
            </div>
            <p className="text-gray-400">
              Premium industrial lubrication solutions for over 40 years.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Products</h3>
            <ul className="space-y-2 text-gray-400">
              {['Engine Oil', 'Hydraulic Fluid', 'Grease', 'Transmission Fluid', 'Coolant', 'Specialty'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-600 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Contact', 'Distributors', 'Dealers', 'Certifications'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-600 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 LubroCorp. All rights reserved.</p>
            <p>
              Engineered for Excellence • Trusted Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
