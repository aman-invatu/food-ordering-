
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here would be the API call to subscribe the user
    toast({
      title: "Success!",
      description: "You have been subscribed to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-20 bg-cover bg-center relative torn-edge"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container relative z-10">
        <div className="text-center mb-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Newsletter</h2>
          <p className="text-gray-300">
            Will be used in accordance with our Privacy policy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button 
            type="submit" 
            className="ml-2 bg-primary hover:bg-primary/90"
          >
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
