
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    alt: 'Food item 1',
    title: 'Delicious Wraps',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
    alt: 'Food item 2',
    title: 'Spicy Rice Bowl',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
    alt: 'Food item 3',
    title: 'Anguilla Marinata',
    featured: true,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    alt: 'Restaurant ambience',
    title: 'Fine Dining Experience',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    alt: 'Food item 5',
    title: 'Signature Dishes',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1583120017330-838935054da9',
    alt: 'Food item 6',
    title: 'Vibrant Flavors',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    alt: 'Food item 7',
    title: 'Culinary Masterpieces',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1607330289024-1535acc30bd3',
    alt: 'Food item 8',
    title: 'Fresh Ingredients',
  },
];

const GallerySection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Gallery</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
        {galleryImages.map((image) => (
          <div 
            key={image.id}
            className="relative overflow-hidden aspect-square"
            onMouseEnter={() => setHoveredItem(image.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            
            {(hoveredItem === image.id || image.featured) && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 transition-opacity duration-300">
                {image.featured && (
                  <span className="text-lg font-medium mb-2">Amazing Taste</span>
                )}
                <h3 className={`${image.featured ? 'text-3xl' : 'text-xl'} font-bold mb-4 font-playfair`}>
                  {image.title}
                </h3>
                {image.featured && (
                  <Button className="bg-primary hover:bg-primary/90">
                    VIEW ALL COLLECTION
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
