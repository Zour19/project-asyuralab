/**
 * About Page
 * Halaman tentang Asyura Lab dengan komponen Lego yang reusable
 */

import AboutHero from '@/components/about/AboutHero';
import WorkMethod from '@/components/about/WorkMethod';
import LikesList from '@/components/about/LikesList';
import JourneyStory from '@/components/about/JourneyStory';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'Tentang Asyura Lab | Dokumentasi Jujur untuk Cerita Abadi',
  description: 'Pelajari filosofi dan cerita perjalanan Asyura Lab dalam fotografi dan dokumentasi jujur.',
  openGraph: {
    title: 'Tentang Asyura Lab',
    description: 'Dokumentasi yang jujur untuk cerita yang abadi',
    url: 'https://asyuralab.com/about',
  }
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section - Filosofi */}
      <AboutHero />

      {/* Work Method Section */}
      <WorkMethod />

      {/* 10 Hal yang Disukai */}
      <LikesList />

      {/* Journey Story */}
      <JourneyStory />

      {/* CTA Section */}
      <AboutCTA />
    </main>
  );
}
