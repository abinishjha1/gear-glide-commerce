
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductInquiryForm } from '@/components/products/ProductInquiryForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  
  const product = productId ? getProductById(productId) : undefined;
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart`,
    });
  };
  
  if (!product) {
    return (
      <PageLayout>
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | GearGlide</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <meta property="og:title" content={`${product.name} | GearGlide`} />
        <meta property="og:description" content={product.description.substring(0, 160)} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <meta property="product:price:amount" content={product.price.toString()} />
        <meta property="product:price:currency" content="USD" />
      </Helmet>
      
      <PageLayout>
        <div className="container py-8">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex text-sm text-gear-neutral">
              <li>
                <Link to="/" className="hover:text-gear-purple">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <Link to="/products" className="hover:text-gear-purple">Products</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-gear-purple">{product.name}</li>
            </ol>
          </nav>
          
          {/* Product Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Images */}
            <ProductImageGallery images={product.images} productName={product.name} />
            
            {/* Right: Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-gear-purple">${product.price.toLocaleString()}</span>
                {product.inStock ? (
                  <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-sm">In Stock</span>
                ) : (
                  <span className="bg-red-900/30 text-red-400 px-2 py-1 rounded text-sm">Out of Stock</span>
                )}
              </div>
              
              <p className="text-gear-neutral mb-6">{product.description}</p>
              
              {/* Add to Cart Button */}
              <Button 
                onClick={addToCart}
                disabled={!product.inStock}
                className="w-full bg-gear-purple hover:bg-gear-purple-dark text-white mb-6"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              {/* Specifications Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">Specifications:</h3>
                <ul className="space-y-2">
                  {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-gear-neutral">{key}:</span>
                      <span className="text-white">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator className="my-6 bg-gear-purple/20" />
              
              {/* Inquiry Form */}
              <ProductInquiryForm productId={product.id} productName={product.name} />
            </div>
          </div>
          
          {/* Tabs for Details, Features, Specs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full bg-gear-charcoal border-b border-gear-purple/20 rounded-none">
                <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gear-neutral">{product.description}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="pt-6">
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gear-purple mr-2 mt-1">✓</span>
                      <span className="text-gear-neutral">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="specifications" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-gear-dark rounded">
                      <span className="text-gear-neutral">{key}:</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProductDetail;
