
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const BrandFeature = () => {
  return (
    <section className="py-16 bg-gear-charcoal">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              AGV - The <span className="text-gear-purple">Legendary</span> Italian Helmet Brand
            </h2>
            <p className="text-gray-300 mb-6">
              With over 75 years of experience and countless racing victories, AGV has established itself as a leader in motorcycle helmet technology. Our helmets are designed with input from MotoGP champions and engineered for unmatched performance.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-gear-purple mr-2">✓</span>
                <span className="text-gray-300">Premium, race-proven protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-gear-purple mr-2">✓</span>
                <span className="text-gray-300">Advanced ventilation systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-gear-purple mr-2">✓</span>
                <span className="text-gray-300">Lightweight, aerodynamic designs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gear-purple mr-2">✓</span>
                <span className="text-gray-300">Superior comfort for long rides</span>
              </li>
            </ul>
            <Button asChild className="bg-gear-purple hover:bg-gear-purple-dark text-white">
              <Link to="/brands/agv">Explore AGV Collection</Link>
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gear-purple to-gear-blue opacity-30 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1676858379381-90b46b0b83b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="AGV Helmet"
              className="w-full h-auto rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
