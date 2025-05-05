
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Address } from '@/types';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const shippingCost = 4.99;
  const finalTotal = total + shippingCost;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    } as Address,
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData] as object,
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be delivered soon.",
    });
    clearCart();
    // In a real app, we would submit the order to the server here
  };

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 font-playfair">Checkout</h1>
        
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
              <form onSubmit={handleSubmit}>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input 
                          type="text" 
                          name="firstName" 
                          required
                          className="w-full px-3 py-2 border rounded" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          required 
                          className="w-full px-3 py-2 border rounded" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          required
                          className="w-full px-3 py-2 border rounded" 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          className="w-full px-3 py-2 border rounded" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Delivery Address</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Street Address</label>
                        <input 
                          type="text" 
                          name="address.street" 
                          required
                          className="w-full px-3 py-2 border rounded" 
                          value={formData.address.street}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">City</label>
                          <input 
                            type="text" 
                            name="address.city" 
                            required
                            className="w-full px-3 py-2 border rounded" 
                            value={formData.address.city}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">State</label>
                          <input 
                            type="text" 
                            name="address.state" 
                            required
                            className="w-full px-3 py-2 border rounded" 
                            value={formData.address.state}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Zip Code</label>
                          <input 
                            type="text" 
                            name="address.zipCode" 
                            required
                            className="w-full px-3 py-2 border rounded" 
                            value={formData.address.zipCode}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <input 
                          type="radio" 
                          id="card" 
                          name="paymentMethod" 
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="card">Credit/Debit Card</label>
                      </div>
                      
                      {formData.paymentMethod === 'card' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Card Number</label>
                            <input 
                              type="text" 
                              name="cardNumber" 
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-3 py-2 border rounded" 
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Name on Card</label>
                            <input 
                              type="text" 
                              name="cardName" 
                              className="w-full px-3 py-2 border rounded" 
                              value={formData.cardName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Expiration</label>
                              <input 
                                type="text" 
                                name="cardExpiry" 
                                placeholder="MM/YY"
                                className="w-full px-3 py-2 border rounded" 
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">CVV</label>
                              <input 
                                type="text" 
                                name="cardCvv" 
                                placeholder="123"
                                className="w-full px-3 py-2 border rounded" 
                                value={formData.cardCvv}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-3 pt-2">
                        <input 
                          type="radio" 
                          id="cash" 
                          name="paymentMethod" 
                          value="cash"
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="cash">Cash on Delivery</label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 text-right">
                  <Button type="submit" className="bg-primary">
                    Place Order
                  </Button>
                </div>
              </form>
            </div>
            
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 max-h-64 overflow-auto mb-4">
                    {items.map((item) => (
                      <div key={item.item.id} className="flex justify-between">
                        <span>
                          {item.quantity} × {item.item.name}
                        </span>
                        <span>${(item.item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-3">
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

export default Checkout;
