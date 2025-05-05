
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { User, ShoppingBag, Home, CreditCard, Bell } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    address: {
      street: '123 Main St',
      city: 'Cityville',
      state: 'State',
      zipCode: '12345'
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfile({
        ...profile,
        [parent]: {
          ...profile[parent as keyof typeof profile] as object,
          [child]: value
        }
      });
    } else {
      setProfile({
        ...profile,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, we would submit the profile data to the server here
  };

  // Dummy order history data
  const orders = [
    {
      id: 'ORD-1234',
      date: '2025-05-01',
      total: 45.97,
      status: 'Delivered',
      items: [
        { name: 'Chicken Biryani', quantity: 2, price: 15.99 },
        { name: 'Garlic Naan', quantity: 2, price: 3.99 },
        { name: 'Mango Lassi', quantity: 2, price: 3 }
      ]
    },
    {
      id: 'ORD-5678',
      date: '2025-04-25',
      total: 28.98,
      status: 'Delivered',
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 14.99 },
        { name: 'Caesar Salad', quantity: 1, price: 8.99 },
        { name: 'Garlic Bread', quantity: 1, price: 4.99 }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 font-playfair">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <User size={40} className="text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold">{profile.firstName} {profile.lastName}</h3>
                  <p className="text-gray-500 text-sm">{profile.email}</p>
                </div>
                
                <div className="mt-8">
                  <nav className="space-y-2">
                    <a href="#personal" className="flex items-center px-4 py-2 text-primary font-medium bg-primary/10 rounded-md">
                      <User className="mr-2 h-5 w-5" />
                      Personal Info
                    </a>
                    <a href="#orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Orders
                    </a>
                    <a href="#addresses" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      <Home className="mr-2 h-5 w-5" />
                      Addresses
                    </a>
                    <a href="#payment" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Methods
                    </a>
                    <a href="#notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      <Bell className="mr-2 h-5 w-5" />
                      Notifications
                    </a>
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Personal Information</h3>
                      {!isEditing && (
                        <Button 
                          variant="outline"
                          onClick={() => setIsEditing(true)}
                        >
                          Edit Profile
                        </Button>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input 
                              type="text" 
                              name="firstName" 
                              className="w-full px-3 py-2 border rounded" 
                              value={profile.firstName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input 
                              type="text" 
                              name="lastName" 
                              className="w-full px-3 py-2 border rounded" 
                              value={profile.lastName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input 
                              type="email" 
                              name="email" 
                              className="w-full px-3 py-2 border rounded" 
                              value={profile.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input 
                              type="tel" 
                              name="phone" 
                              className="w-full px-3 py-2 border rounded" 
                              value={profile.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-4">Address</h4>
                        <div className="grid grid-cols-1 gap-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium mb-1">Street Address</label>
                            <input 
                              type="text" 
                              name="address.street" 
                              className="w-full px-3 py-2 border rounded" 
                              value={profile.address.street}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">City</label>
                              <input 
                                type="text" 
                                name="address.city" 
                                className="w-full px-3 py-2 border rounded" 
                                value={profile.address.city}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">State</label>
                              <input 
                                type="text" 
                                name="address.state" 
                                className="w-full px-3 py-2 border rounded" 
                                value={profile.address.state}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Zip Code</label>
                              <input 
                                type="text" 
                                name="address.zipCode" 
                                className="w-full px-3 py-2 border rounded" 
                                value={profile.address.zipCode}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="outline" 
                            type="button" 
                            onClick={() => setIsEditing(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </form>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">First Name</p>
                          <p className="font-medium">{profile.firstName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Last Name</p>
                          <p className="font-medium">{profile.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Email</p>
                          <p className="font-medium">{profile.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Phone</p>
                          <p className="font-medium">{profile.phone}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600 mb-1">Address</p>
                          <p className="font-medium">
                            {profile.address.street}, {profile.address.city}, {profile.address.state} {profile.address.zipCode}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Order History</h3>
                    
                    {orders.length > 0 ? (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
                              <div>
                                <p className="text-sm text-gray-500">Order #{order.id}</p>
                                <p className="text-sm text-gray-500">{order.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">${order.total.toFixed(2)}</p>
                                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                                  {order.status}
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between py-2 border-b last:border-0">
                                  <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                  </div>
                                  <p className="font-medium">${item.price.toFixed(2)}</p>
                                </div>
                              ))}
                            </div>
                            <div className="bg-gray-50 p-4 text-right">
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">You haven't placed any orders yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
