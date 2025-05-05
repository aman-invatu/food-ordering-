
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MenuSection from '@/components/home/MenuSection';
import CuisinesSection from '@/components/home/CuisinesSection';
import PopularDishesSection from '@/components/home/PopularDishesSection';
import PromoSection from '@/components/home/PromoSection';
import GallerySection from '@/components/home/GallerySection';
import MenuListSection from '@/components/home/MenuListSection';
import ClientsSection from '@/components/home/ClientsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CuisinesSection />
      <FeaturesSection />
      <MenuSection />
      <PromoSection />
      <PopularDishesSection />
      <GallerySection />
      <MenuListSection />
      <ClientsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
