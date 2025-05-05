
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menu-items';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/use-cart';

const categories = [
  { id: "all", name: "All" },
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();
  const { addItem } = useCart();
  
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: any) => {
    addItem({ ...item, quantity: 1 });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our delicious menu crafted with passion and premium ingredients.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredItems.slice(0, 6).map((item) => (
            <div key={item.id} className="dish-card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                
                {item.discount && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.discount}% OFF
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="default"
                      className="bg-primary hover:bg-primary/90"
                      size="icon"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button variant="default" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="default" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-5 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{item.reviews} {item.reviews === 1 ? 'review' : 'reviews'}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">
                  {item.name}
                </h3>
                
                <div className="mt-4 mb-3 flex justify-center">
                  <div className="h-1 w-10 bg-primary"></div>
                </div>
                
                <p className="text-lg font-bold text-gray-800">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-10">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
