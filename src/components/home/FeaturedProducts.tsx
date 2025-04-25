
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
                <a 
                  href={`https://wa.me/9779849733138?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <span className="ml-1">Inquire</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
