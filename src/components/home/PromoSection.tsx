
import { Button } from '@/components/ui/button';

const PromoSection = () => {
  return (
    <section className="py-20 bg-cover bg-center relative torn-edge" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-lg md:text-xl font-medium">Enjoy Great Recipe</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 font-playfair text-red-500">
            Simple And Delicious Food
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-8">Flat 20% Discount</p>
          <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md text-lg font-medium">
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
