'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  icon: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Engine Oil',
    icon: '🛢️',
  },
  {
    id: 2,
    title: 'Hydraulic Fluid',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Grease',
    icon: '🔧',
  },
  {
    id: 4,
    title: 'Transmission Fluid',
    icon: '🚗',
  },
  {
    id: 5,
    title: 'Coolant',
    icon: '❄️',
  },
  {
    id: 6,
    title: 'Specialty Lubricants',
    icon: '🧪',
  },
];

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white" data-section="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive lubrication solutions for every industrial need
          </p>
        </div>

        {/* Products Grid - Image Cards with Effects */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Card with glow effect */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 animate-cardGlow hover:animate-none transition-all duration-300">
                {/* Shimmer effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />

                {/* Icon with float animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <div className="text-7xl animate-floatUp group-hover:animate-none">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 text-center px-4 group-hover:text-amber-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                {/* Hover overlay with View Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 z-20">
                  <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    View Details
                  </button>
                </div>

                {/* 3D perspective effect on hover */}
                <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-scaleIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-white relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="text-6xl mb-4">{selectedProduct.icon}</div>
              <h2 className="text-3xl font-bold">{selectedProduct.title}</h2>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Product Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProduct.title} represents our commitment to excellence in industrial lubrication. Engineered with advanced technology and proven performance, it delivers superior protection and efficiency for your applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Premium quality formulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Enhanced performance characteristics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Extended equipment life
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span> Proven reliability in harsh conditions
                  </li>
                </ul>
              </div>

              <button className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Request a Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
