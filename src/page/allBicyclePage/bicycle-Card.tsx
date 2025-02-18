import React from 'react';
import { Bike, ShoppingCart, Package, Tag } from 'lucide-react';

const bikes = Array(6).fill({
  name: "Caca Bike",
  brand: "Giant",
  price: 4354,
  model: "XTR-500",
  stock: 15,
  image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800"
});

export const  AllBicyclePage=()=> {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Premium Bikes Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <div key={index} className="group">
              <div className="relative bg-gray-50/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
                    <Bike className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                  <p className="text-purple-600 mb-4 font-medium">{bike.brand} - {bike.model}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Tag className="w-5 h-5 mr-2 text-purple-500" />
                      <span className="text-lg font-semibold">${bike.price.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Package className="w-5 h-5 mr-2 text-purple-500" />
                      <span>{bike.stock} in stock</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

