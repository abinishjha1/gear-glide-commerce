
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 25%"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Buy AGV Helmets in Nepal – <span className="text-gear-purple">Premium Safety, Premium Style</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Discover our collection of authentic AGV helmets. Ride with confidence, style with excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gear-purple hover:bg-gear-purple/90 text-white">
              <Link to="/helmets">Shop AGV Helmets</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a 
                href="https://wa.me/9779849733138?text=I'm%20interested%20in%20AGV%20helmets" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
