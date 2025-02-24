/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bike, Package, Tag } from 'lucide-react'
import React from 'react'
import { useGetTasksQuery } from '../redux/api/baseApi/baseApi';
import { Loading } from './ui/loading';

const Card = () => {
  const { data: bikes, error, isLoading } = useGetTasksQuery(undefined);

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Something went wrong!</p>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Premium Bikes Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {bikes?.slice(0, 6).map((bike: any, index: number) => (
            <div key={index} className="group">
              <div className="relative bg-gray-50/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img
                    src={bike?.photo}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
                    <Bike className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                  <p className="text-purple-600 mb-4 font-medium">
                    {bike.brand} - {bike.model}
                  </p>

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
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Card;
