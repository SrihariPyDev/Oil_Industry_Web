'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingContact() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  
  // Update with your phone number
  const phoneNumber = '+1234567890';
  const whatsappNumber = '+1234567890';

  useEffect(() => {
    const handleScroll = () => {
      // Get the viewport center Y position
      const viewportCenterY = window.innerHeight / 2 + window.scrollY;

      // Define sections with their background colors/themes
      const sections = [
        { id: 'hero', theme: 'dark' as const, element: document.querySelector('[data-section="hero"]') },
        { id: 'about', theme: 'light' as const, element: document.querySelector('[data-section="about"]') },
        { id: 'products', theme: 'light' as const, element: document.querySelector('[data-section="products"]') },
        { id: 'distributors', theme: 'light' as const, element: document.querySelector('[data-section="distributors"]') },
        { id: 'dealers', theme: 'light' as const, element: document.querySelector('[data-section="dealers"]') },
        { id: 'contact', theme: 'dark' as const, element: document.querySelector('[data-section="contact"]') },
        { id: 'footer', theme: 'dark' as const, element: document.querySelector('[data-section="footer"]') },
      ];

      // Find which section contains the viewport center
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (viewportCenterY >= elementTop && viewportCenterY < elementBottom) {
            setCurrentTheme(section.theme);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneIconClass = currentTheme === 'dark' 
    ? 'bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700' 
    : 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800';

  const whatsappIconClass = currentTheme === 'dark' 
    ? 'bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700' 
    : 'bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800';

  const tooltipBgClass = currentTheme === 'dark' 
    ? 'bg-white text-gray-900' 
    : 'bg-gray-900 text-white';

  const tooltipArrowClass = currentTheme === 'dark' 
    ? 'bg-white' 
    : 'bg-gray-900';

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4 items-end">
      {/* Phone Icon */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered('phone')}
        onMouseLeave={() => setIsHovered(null)}
      >
        <a
          href={`tel:${phoneNumber}`}
          className={`flex items-center justify-center w-14 h-14 ${phoneIconClass} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
        {isHovered === 'phone' && (
          <div className={`absolute right-16 top-1/2 -translate-y-1/2 ${tooltipBgClass} px-3 py-2 rounded whitespace-nowrap text-sm font-semibold shadow-lg`}>
            Call Us
            <div className={`absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 ${tooltipArrowClass} transform rotate-45`} />
          </div>
        )}
      </div>

      {/* WhatsApp Icon */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered('whatsapp')}
        onMouseLeave={() => setIsHovered(null)}
      >
        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 ${whatsappIconClass} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        {isHovered === 'whatsapp' && (
          <div className={`absolute right-16 top-1/2 -translate-y-1/2 ${tooltipBgClass} px-3 py-2 rounded whitespace-nowrap text-sm font-semibold shadow-lg`}>
            Chat on WhatsApp
            <div className={`absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 ${tooltipArrowClass} transform rotate-45`} />
          </div>
        )}
      </div>
    </div>
  );
}
