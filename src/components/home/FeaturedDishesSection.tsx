
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedMenuItem from '../common/FeaturedMenuItem';
import { menuItems } from '@/data/menu-items';

const FeaturedDishesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = direction === 'left' 
        ? container.scrollLeft - 400 
        : container.scrollLeft + 400;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const featuredItems = menuItems.filter((_, index) => index < 8);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-playfair">Featured Dishes</h2>
            <p className="text-gray-600">Discover our chef's special selection of mouth-watering dishes</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {featuredItems.map((item) => (
            <div 
              key={item.id}
              className="min-w-[300px] max-w-[300px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <FeaturedMenuItem item={item} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="/menu">View Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishesSection;
