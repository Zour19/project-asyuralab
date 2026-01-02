import BlogList from '@/components/blog/List';
import BlogFeatured from '@/components/blog/Featured';

export const metadata = {
  title: 'Blog | My Photography Portfolio',
  description: 'Read my latest photography articles and tips',
};

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Blog</h1>
        <BlogFeatured />
        <BlogList />
      </div>
    </div>
  );
}
