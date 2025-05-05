
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import MenuItem from '@/components/common/MenuItem';
import { menuItems } from '@/data/menu-items';
import { MenuItem as MenuItemType } from '@/types';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCuisine, setActiveCuisine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItemType[]>(menuItems);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories and cuisines
  const categories = ['all', ...Array.from(new Set(menuItems.map(item => item.category)))];
  const cuisines = ['all', ...Array.from(new Set(menuItems.map(item => item.cuisine)))];

  // Filter menu items based on selected filters and search query
  useEffect(() => {
    let result = [...menuItems];
    
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }
    
    if (activeCuisine !== 'all') {
      result = result.filter(item => item.cuisine === activeCuisine);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(result);
  }, [activeCategory, activeCuisine, searchQuery]);

  return (
    <Layout>
      <div className="bg-gray-50 py-10">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 font-playfair text-center">Our Menu</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Explore our wide range of delicious food items prepared with fresh ingredients and authentic recipes.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="pl-10 pr-4 py-2 border rounded-md w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button 
              variant="outline"
              className="md:hidden flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-8`}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button 
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className={`text-sm capitalize ${activeCategory === category ? 'bg-primary text-white' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Cuisine</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisines.map((cuisine) => (
                    <Button 
                      key={cuisine}
                      variant={activeCuisine === cuisine ? "default" : "outline"}
                      className={`text-sm capitalize ${activeCuisine === cuisine ? 'bg-primary text-white' : ''}`}
                      onClick={() => setActiveCuisine(cuisine)}
                    >
                      {cuisine}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-gray-600">Try changing your filters or search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
