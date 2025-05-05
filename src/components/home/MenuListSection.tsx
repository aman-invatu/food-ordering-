
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/use-cart';

const menuListItems = [
  {
    id: '101',
    name: 'Waldorf Salad',
    description: 'Fresh apples, celery and walnuts, dressed in mayonnaise',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop',
  },
  {
    id: '102',
    name: 'Chicken Escalope',
    description: 'Bbq sauce, american garden, chicken breasts, coleslaw',
    price: 3.65,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=80&h=80&fit=crop',
  },
  {
    id: '103',
    name: 'Potato Croquettes',
    description: 'Loaded with bacon, stuffed with two kinds of cheese',
    price: 2.79,
    image: 'https://images.unsplash.com/photo-1581628480246-2e7aee97d97e?w=80&h=80&fit=crop',
  },
  {
    id: '104',
    name: 'Risotto',
    description: 'White wine, arborio rice, parmesan cheese, butter',
    price: 3.06,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=80&h=80&fit=crop',
  },
  {
    id: '105',
    name: 'Garganelli',
    description: 'Portobello mushrooms, white wine, arborio rice, chicken',
    price: 4.03,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=80&h=80&fit=crop',
  },
  {
    id: '106',
    name: 'Spaghetti Bolognese',
    description: 'Lean ground beef, red wine, tomato sauce, beef broth',
    price: 3.65,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=80&h=80&fit=crop',
  },
  {
    id: '107',
    name: 'Cheesy Macaroni',
    description: 'Onion, tomato, masala, cheese',
    price: 4.67,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=80&h=80&fit=crop',
  },
  {
    id: '108',
    name: 'Cobb Salad',
    description: 'Stuffed with chicken, bacon, avocado, eggs and cheese',
    price: 2.98,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop',
  },
];

const MenuListSection = () => {
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Flavorful Menus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse menu options crafted with the finest ingredients and culinary expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuListItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                  <div className="border-b border-dotted border-gray-300 flex-grow mx-2"></div>
                  <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                </div>
                
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuListSection;
