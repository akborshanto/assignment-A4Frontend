/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bike, Package, Tag } from 'lucide-react'
import React from 'react'
import { useGetTasksQuery } from '../redux/api/baseApi/baseApi';
import { Loading } from './ui/loading';
import { Link } from 'react-router-dom';

const Card = () => {
  const { data: bikes, error, isLoading } = useGetTasksQuery(undefined);

  if (isLoading) return <Loading />;
  if (error) return (
    <div className="backdrop-blur-lg bg-red-500/10 p-6 rounded-2xl text-center text-white">
      Something went wrong!
    </div>
  );

  return (
    <div>
      <h1 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Featured Bikes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes?.slice(0, 6).map((bike: any, index: number) => (
          <div key={index} className="group">
            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="h-64 overflow-hidden">
                <img
                  src={bike?.photo}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="absolute -top-4 -right-4 bg-purple-500/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg">
                  <Bike className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {bike.name}
                </h2>
                <p className="text-purple-300 mb-4 font-medium">
                  {bike.brand} - {bike.model}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-white">
                    <Tag className="w-5 h-5 mr-2 text-purple-300" />
                    <span className="text-lg font-semibold">
                      ${bike.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center text-white/80">
                    <Package className="w-5 h-5 mr-2 text-purple-300" />
                    <span>{bike.stock} in stock</span>
                  </div>
                </div>

                <Link
                  to="/all-Bicycle"
                  className="mt-6 w-full bg-purple-600/80 backdrop-blur-sm hover:bg-purple-700/80 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  View All Bicycles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;