
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroBanner = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 25%"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Premium AGV <span className="text-gear-purple">Helmets</span> For The Ultimate Rider
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Experience unparalleled protection, comfort and style with AGV's premier collection of racing and street helmets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-gear-purple hover:bg-gear-purple-dark text-white">
              <Link to="/helmets">Shop AGV Helmets</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
