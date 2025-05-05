
import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/use-cart';
import { MenuItem } from '@/types';

interface FeaturedMenuItemProps {
  item: MenuItem;
  variant?: 'horizontal' | 'vertical';
}

const FeaturedMenuItem = ({ item, variant = 'vertical' }: FeaturedMenuItemProps) => {
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToCart = () => {
    addItem(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${item.name} has been ${isFavorite ? 'removed from' : 'added to'} your favorites.`,
    });
  };
  
  if (variant === 'horizontal') {
    return (
      <div className="flex bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="w-1/3 relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          {item.discount && (
            <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.discount}% OFF
            </div>
          )}
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <button 
              onClick={toggleFavorite}
              className={`p-1 rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            >
              <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
          
          <div className="flex items-center mt-1 mb-2">
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
            <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{item.description}</p>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="text-lg font-bold">${item.price.toFixed(2)}</div>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-1"
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover"
        />
        {item.discount && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            {item.discount}% OFF
          </div>
        )}
        <button 
          onClick={toggleFavorite}
          className={`absolute top-3 left-3 p-1 rounded-full bg-white shadow-md ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
        >
          <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
          </div>
          
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-1 mb-4">{item.description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="text-lg font-bold">${item.price.toFixed(2)}</div>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-1"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenuItem;
