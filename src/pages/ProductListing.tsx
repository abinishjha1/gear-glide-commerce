
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
              
              {/* Filters (can be expanded) */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gear-neutral">
                  {displayProducts.length} products
                </div>
                <div>
                  <select className="bg-gear-charcoal border border-gear-purple/30 px-2 py-1 rounded text-sm">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
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
