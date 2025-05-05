
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/hooks/use-cart';
import { Card, CardContent } from '@/components/ui/card';

const Cart = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  
  const shippingCost = 4.99;
  const finalTotal = total + shippingCost;
  
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 font-playfair">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items to your cart to continue.</p>
            <Link to="/menu">
              <Button>View Our Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {items.map((cartItem) => (
                <Card key={cartItem.item.id} className="mb-4 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32">
                        <img 
                          src={cartItem.item.image} 
                          alt={cartItem.item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-xl font-bold">{cartItem.item.name}</h3>
                          <button 
                            onClick={() => removeItem(cartItem.item.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-gray-600">${cartItem.item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center mt-4">
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                            className="border rounded-l p-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="border-t border-b py-2 px-4">
                            {cartItem.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                            className="border rounded-r p-2 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          
                          <div className="ml-auto">
                            <span className="font-bold">
                              ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Link to="/menu">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex space-x-2 mb-4">
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          className="border rounded px-3 py-2 flex-grow"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Button variant="outline" size="sm">Apply</Button>
                      </div>
                      
                      <Link to="/checkout">
                        <Button className="w-full bg-primary">
                          Proceed to Checkout
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
