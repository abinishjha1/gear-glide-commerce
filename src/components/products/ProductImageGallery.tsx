
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {/* Main Image with Zoom Dialog */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gear-charcoal mb-4 border border-gear-purple/20">
        <Dialog>
          <DialogTrigger asChild>
            <div className="group relative cursor-zoom-in h-full">
              <img 
                src={images[currentImage]} 
                alt={`${productName} - Image ${currentImage + 1}`}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/50 p-3 rounded-full">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl bg-gear-charcoal border border-gear-purple/20">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img 
                src={images[currentImage]} 
                alt={`${productName} - Image ${currentImage + 1} (Zoomed)`}
                className="h-full w-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6 text-white" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                index === currentImage ? 'border-gear-purple' : 'border-transparent hover:border-gear-purple/50'
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img 
                src={image} 
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
