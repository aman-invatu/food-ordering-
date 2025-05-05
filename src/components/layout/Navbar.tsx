
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import Logo from '../common/Logo';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Indian",
    href: "/cuisine/indian",
    submenu: [
      { title: "North Indian", href: "/cuisine/north-indian" },
      { title: "South Indian", href: "/cuisine/south-indian" },
      { title: "Eastern Indian", href: "/cuisine/eastern-indian" },
      { title: "Western Indian", href: "/cuisine/western-indian" },
    ],
  },
  {
    title: "Italian",
    href: "/cuisine/italian",
  },
  {
    title: "Thai",
    href: "/cuisine/thai",
  },
  {
    title: "Chinese",
    href: "/cuisine/chinese",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Pages",
    href: "#",
    submenu: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <>
      <div className="bg-amber-400 py-2 text-black">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm">📞 0000 - 123456789</span>
            <span className="text-sm hidden md:inline-block">✉️ sample@example.com</span>
          </div>
          <div>
            <span className="text-sm font-medium">IN</span>
          </div>
        </div>
      </div>
      
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.title} className="relative group">
                  <Link to={item.href} className="nav-link">
                    {item.title}
                    {item.submenu && (
                      <span className="ml-1">▼</span>
                    )}
                  </Link>
                  
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 p-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <ul className="space-y-1">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <Link 
                              to={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-lg animate-slide-in-right">
            <div className="flex justify-between items-center p-4 border-b">
              <Logo small />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.title} className="py-2">
                    <Link to={item.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </Link>
                    
                    {item.submenu && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <Link 
                              to={subItem.href} 
                              className="text-gray-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
