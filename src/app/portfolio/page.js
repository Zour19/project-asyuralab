import PortfolioGallery from '@/components/portfolio/Gallery';
import PortfolioFilter from '@/components/portfolio/Filter';

export const metadata = {
  title: 'Portfolio | My Photography Portfolio',
  description: 'Explore my photography works and projects',
};

export default function PortfolioPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
        <PortfolioFilter />
        <PortfolioGallery />
      </div>
    </div>
  );
}
