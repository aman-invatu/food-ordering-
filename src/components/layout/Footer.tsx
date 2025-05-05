
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 mt-20 torn-edge relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-5">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/search" className="text-gray-300 hover:text-white transition-colors">Search</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help</Link></li>
              <li><Link to="/information" className="text-gray-300 hover:text-white transition-colors">Information</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Details</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-5">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-white transition-colors">Refund & Return</Link></li>
              <li><Link to="/deliveries" className="text-gray-300 hover:text-white transition-colors">Deliveries</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-5">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/search-terms" className="text-gray-300 hover:text-white transition-colors">Search Terms</Link></li>
              <li><Link to="/advanced-search" className="text-gray-300 hover:text-white transition-colors">Advanced Search</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Help & FAQ's</Link></li>
              <li><Link to="/location" className="text-gray-300 hover:text-white transition-colors">Store Location</Link></li>
              <li><Link to="/orders" className="text-gray-300 hover:text-white transition-colors">Order & Return</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-5">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">📍</span>
                <span className="text-gray-300">No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">📞</span>
                <a href="tel:0000123456789" className="text-gray-300 hover:text-white transition-colors">0000 - 123456789</a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✉️</span>
                <a href="mailto:mail@example.com" className="text-gray-300 hover:text-white transition-colors">mail@example.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">🕒</span>
                <span className="text-gray-300">9.30AM - 7.30PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-5">Connect with us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-5">Download our app</h3>
              <div className="flex flex-wrap gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>All Rights Reserved © 2025,</span>
            <Logo small />
          </div>
          
          <div className="flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 w-10 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-10 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6 w-10 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 w-10 bg-white rounded p-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
