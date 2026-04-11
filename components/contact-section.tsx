'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900" data-section="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? Our team is here to help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+1 (555) 123-4567',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'info@lubrocorp.com',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: '123 Industrial Ave, Tech City, TC 12345',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-gray-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-800 text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-800 text-white placeholder-gray-400 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-800 rounded-lg overflow-hidden h-80 border border-gray-700">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-300 space-y-2">
              <MapPin className="w-12 h-12 mx-auto opacity-50" />
              <p className="text-lg font-semibold opacity-75">Map Placeholder</p>
              <p className="text-sm opacity-60">Integrate your preferred mapping service here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
