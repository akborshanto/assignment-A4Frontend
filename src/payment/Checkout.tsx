import React, { useState } from 'react';
import { Recycle as Bicycle, CreditCard, Minus, Plus, ShoppingCart } from 'lucide-react';
import '../index.css'
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800",
    stock: 5
  },
  {
    id: 2,
    name: "Urban Commuter Elite",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    stock: 8
  }
];

export function Checkout() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(products.map(p => [p.id, 0]))
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit'
  });

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => {
      const newQty = Math.max(0, Math.min(
        (prev[id] || 0) + delta,
        products.find(p => p.id === id)?.stock || 0
      ));
      return { ...prev, [id]: newQty };
    });
  };

  const total = products.reduce((sum, product) => 
    sum + (product.price * (quantities[product.id] || 0)), 0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Stripe
    console.log('Order submitted:', { products: quantities, formData, total });
  };

  return (
    <div className="min-h-screen bg-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <Bicycle className="mr-2" /> 
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Products Section */}
            <div className="glass rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <ShoppingCart className="mr-2" /> Your Selection
              </h2>
              
              <div className="space-y-6">
                {products.map(product => (
                  <div key={product.id} className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm opacity-80">${product.price.toFixed(2)}</p>
                      <p className="text-sm opacity-80">Stock: {product.stock}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-1 hover:bg-white/20 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span>{quantities[product.id] || 0}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-1 hover:bg-white/20 rounded"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-xl font-semibold">
                  Total: ${total.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="glass rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <CreditCard className="mr-2" /> Payment Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Shipping Address</label>
                  <textarea
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    rows={3}
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Payment Method</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    value={formData.paymentMethod}
                    onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full mt-6 bg-white text-[#4c4294] py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  disabled={total === 0}
                >
                  Place Order (${total.toFixed(2)})
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

