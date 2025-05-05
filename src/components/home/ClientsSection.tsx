
import { useRef } from 'react';

const clients = [
  {
    id: 1,
    name: 'Healthy Food',
    logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  },
  {
    id: 2,
    name: 'Nice Restaurant',
    logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  },
  {
    id: 3,
    name: 'Good Food',
    logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  },
  {
    id: 4,
    name: 'Season Food',
    logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  },
  {
    id: 5,
    name: 'Speedy Fork',
    logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  },
];

const ClientsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Clients</h2>
        </div>
        
        <div 
          ref={containerRef}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {clients.map((client) => (
            <div 
              key={client.id}
              className="w-32 md:w-44 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/200x100/F9FAFB/64748b?text=${client.name}`;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-primary"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
