
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Tasty Bites Healthy Foods",
    subtitle: "Mega Discounts On",
    discount: "10 - 50% OFF",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1200",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Simple And Delicious Food",
    subtitle: "Enjoy Great Recipe",
    discount: "Flat 20% Discount",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200",
    bgColor: "bg-amber-500",
  },
  {
    id: 3,
    title: "Upgrade To The Latest Taste!",
    subtitle: "Fresh Premium Quality",
    discount: "Limited Time Offers",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200",
    bgColor: "bg-indigo-700",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`w-full h-full ${slide.bgColor}`}>
            <div className="absolute inset-0 bg-black/40"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg text-white">
                <h3 className="text-lg md:text-xl mb-2 font-medium banner-text animate-fade-in">{slide.subtitle}</h3>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-playfair banner-text animate-fade-in">{slide.title}</h2>
                <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 banner-text animate-fade-in">{slide.discount}</p>
                <Button className="bg-primary hover:bg-primary/90 mt-2 animate-fade-in">VIEW DISHES</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
