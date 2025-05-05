
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menu-items';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

const PopularDishesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = direction === 'left' 
        ? container.scrollLeft - 320 
        : container.scrollLeft + 320;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const popularItems = menuItems.filter(item => item.popular);

  const handleAddToCart = (item: any) => {
    addItem(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Popular Collection</h2>
          <div className="flex gap-2">
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
          {popularItems.map((dish) => (
            <div 
              key={dish.id}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-48 object-cover rounded-t-xl"
              />
              
              <div className="p-5">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(dish.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4">{dish.name}</h3>

                <div className="flex justify-center mb-4">
                  <div className="h-0.5 w-10 bg-primary"></div>
                </div>
                
                <div className="mt-2 text-center">
                  <Button 
                    className="bg-primary hover:bg-primary/90 w-full"
                    onClick={() => handleAddToCart(dish)}
                  >
                    Add to Cart - ${dish.price.toFixed(2)}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishesSection;
