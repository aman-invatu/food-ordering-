
import { useState } from 'react';

const features = [
  {
    id: "pure-ingredients",
    title: "Pure Ingredients",
    description: "We use only the freshest, highest-quality ingredients sourced from trusted suppliers for all our dishes.",
    icon: "🍅"
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "Our commitment to sustainable practices includes eco-friendly packaging and locally sourced ingredients.",
    icon: "🌱"
  },
  {
    id: "environmentalism",
    title: "Environmentalism",
    description: "We minimize our environmental footprint through energy-efficient cooking methods and waste reduction.",
    icon: "♻️"
  },
  {
    id: "formula-transparency",
    title: "Formula Transparency",
    description: "Full transparency about our ingredients, cooking methods, and nutritional information for informed choices.",
    icon: "📋"
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">What Makes Our Menus Special?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1598514983318-2f64f55254da?q=80&w=600" 
              alt="Food skewers"
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-10">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className={`cursor-pointer transition-all duration-300 ${activeFeature === feature.id ? 'transform translate-x-2' : ''}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full text-2xl ${activeFeature === feature.id ? 'bg-primary text-white scale-110' : 'bg-gray-200 text-gray-600'} transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${activeFeature === feature.id ? 'text-primary' : ''} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
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

export default FeaturesSection;
