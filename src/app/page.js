import HomeHero from '@/components/home/Hero';
import HomeFeatures from '@/components/home/Features';
import HomeGalleryPreview from '@/components/home/GalleryPreview';
import HomeCTA from '@/components/home/CTA';

export const metadata = {
  title: 'Home | My Photography Portfolio',
  description: 'Welcome to my professional photography portfolio',
};

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <HomeGalleryPreview />
      <HomeCTA />
    </div>
  );
}
