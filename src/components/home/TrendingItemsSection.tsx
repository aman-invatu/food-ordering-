
import FeaturedMenuItem from '../common/FeaturedMenuItem';
import { menuItems } from '@/data/menu-items';

const TrendingItemsSection = () => {
  // Get 4 trending items (using a different subset of menu items)
  const trendingItems = menuItems
    .filter(item => item.rating >= 4.5)
    .slice(0, 4);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-playfair">Trending This Week</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular dishes that customers can't get enough of
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {trendingItems.map((item) => (
            <FeaturedMenuItem key={item.id} item={item} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingItemsSection;
