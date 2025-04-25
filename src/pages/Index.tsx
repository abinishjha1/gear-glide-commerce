
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { BrandFeature } from '@/components/home/BrandFeature';
import { getFeaturedProducts } from '@/data/products';
import { Helmet } from 'react-helmet';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Helmet>
        <title>GearGlide - Premium AGV Helmets & Riding Gear</title>
        <meta name="description" content="Shop premium AGV helmets and motorcycle riding gear at GearGlide. Find the perfect helmet for your riding style with top brands and exceptional quality." />
        <meta property="og:title" content="GearGlide - Premium AGV Helmets & Riding Gear" />
        <meta property="og:description" content="Shop premium AGV helmets and motorcycle riding gear at GearGlide. Find the perfect helmet for your riding style with top brands and exceptional quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gearglide.example.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      </Helmet>
      
      <PageLayout>
        <HeroBanner />
        <FeaturedProducts products={featuredProducts} />
        <CategoryShowcase />
        <BrandFeature />
      </PageLayout>
    </>
  );
};

export default Index;
