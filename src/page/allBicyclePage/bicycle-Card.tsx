import React from 'react';
import { ArrowRight } from 'lucide-react';

const bikes = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2008&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Urban Commuter Elite",
    price: "$899",
    image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Road Master Carbon",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "E-Bike Cruiser",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Trail Blazer X",
    price: "$1,599",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "City Rider Pro",
    price: "$799",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2940&auto=format&fit=crop"
  }
];

export const BicycleCard = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Bikes</h2>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
          View All <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <div key={bike.id} className="glass rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 overflow-hidden">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{bike.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{bike.price}</p>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
