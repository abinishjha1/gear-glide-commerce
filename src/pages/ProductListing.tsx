
import React from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CategorySidebar } from '@/components/layout/CategorySidebar';
import { products, getProductsByCategory, getProductsBySubcategory, getProductsByBrand } from '@/data/products';
import { Helmet } from 'react-helmet';

const ProductListing = () => {
  const { category, subcategory, brand } = useParams();
  
  let displayProducts = products;
  let pageTitle = "All Products";
  let pageDescription = "Browse our complete collection of premium motorcycle gear and accessories.";
  
  // Filter products based on URL parameters
  if (category) {
    displayProducts = getProductsByCategory(category);
    pageTitle = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
    pageDescription = `Explore our selection of premium ${category} for motorcycle enthusiasts.`;
  }
  
  if (subcategory) {
    displayProducts = getProductsBySubcategory(subcategory);
    pageTitle = `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} ${category}`;
    pageDescription = `Shop our collection of ${subcategory} ${category} designed for optimal performance and style.`;
  }
  
  if (brand) {
    displayProducts = getProductsByBrand(brand);
    pageTitle = `${brand.toUpperCase()} Products`;
    pageDescription = `Discover the latest ${brand} products offering superior quality and innovation.`;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle} | GearGlide</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${pageTitle} | GearGlide`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <PageLayout showSidebar={true}>
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <CategorySidebar />
            </div>
            
            {/* Product Listing */}
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-white mb-6">{pageTitle}</h1>
              
              <div className="fixed bottom-6 right-6 z-50">
                <a 
                  href="https://wa.me/9779849733138" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </a>
              </div>
              
              {/* Products */}
              {displayProducts.length > 0 ? (
                <ProductGrid products={displayProducts} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl text-gear-neutral">No products found.</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProductListing;
