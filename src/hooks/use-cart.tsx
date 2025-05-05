
import { ReactNode, createContext, useContext, useState } from 'react';
import { MenuItem, CartItem } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addItem = (item: MenuItem, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.item.id === item.id);
      
      if (existingItem) {
        return prevItems.map((i) =>
          i.item.id === item.id 
            ? { ...i, quantity: i.quantity + quantity } 
            : i
        );
      }
      
      return [...prevItems, { item, quantity }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.item.id === id ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const total = items.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
