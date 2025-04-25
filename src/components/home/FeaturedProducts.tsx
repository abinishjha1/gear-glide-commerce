
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ProductData } from '@/types/product';

interface FeaturedProductsProps {
  products: ProductData[];
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Featured <span className="text-gear-purple">Products</span></h2>
          <Link 
            to="/products" 
            className="text-gear-purple hover:text-gear-purple-dark underline underline-offset-4"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-gear-charcoal border border-gear-purple/20 overflow-hidden transition-all hover:border-gear-purple/50 hover:-translate-y-1">
              <div className="aspect-square relative overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <CardContent className="p-4">
                <Link 
                  to={`/product/${product.id}`}
                  className="hover:text-gear-purple"
                >
                  <h3 className="text-lg font-medium text-white line-clamp-2">{product.name}</h3>
                </Link>
                <div className="mt-2">
                  <span className="text-gear-purple font-bold">${product.price.toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Link 
                  to={`/product/${product.id}`}
                  className="text-sm text-gear-purple hover:underline"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
