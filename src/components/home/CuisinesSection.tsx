
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cuisines } from '@/data/menu-items';

const CuisinesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">International Cuisines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Incredibly Tasty International Dishes</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="grid gap-10">
              {cuisines.slice(0, 3).map((cuisine, index) => (
                <div key={cuisine.id} className="flex flex-col items-end text-right gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary font-playfair">{cuisine.name}</h3>
                  <p className="text-gray-600 max-w-md">{cuisine.description}</p>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src={`/icons/${cuisine.id}.svg`} alt={cuisine.name} className="w-6 h-6" 
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/24";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=400" 
                  alt="Central cuisine" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-full h-full inset-0 flex items-center justify-center">
                <div className="w-full h-full absolute">
                  {[...Array(8)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 8;
                    const x = Math.cos(angle) * 40 + 50;
                    const y = Math.sin(angle) * 40 + 50;
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-10 md:col-start-2 md:row-start-1">
              {cuisines.slice(3, 6).map((cuisine, index) => (
                <div key={cuisine.id} className="flex flex-col items-start text-left gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary font-playfair">{cuisine.name}</h3>
                  <p className="text-gray-600 max-w-md">{cuisine.description}</p>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src={`/icons/${cuisine.id}.svg`} alt={cuisine.name} className="w-6 h-6" 
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/24";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisinesSection;
