
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { AboutSection } from '@/components/home/AboutSection';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { getFeaturedProducts } from '@/data/products';
import { Helmet } from 'react-helmet';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Helmet>
        <title>AGV Helmets Nepal - Premium Safety, Premium Style</title>
        <meta name="description" content="Buy original AGV helmets in Nepal. Premium safety gear for motorcycle enthusiasts." />
      </Helmet>
      
      <PageLayout>
        <HeroBanner />
        <FeaturedProducts products={featuredProducts} />
        <AboutSection />
        <WhatsAppButton />
      </PageLayout>
    </>
  );
};

export default Index;
