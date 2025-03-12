import React, { useState } from "react";
import { Bike, ShoppingCart, Package, Tag } from "lucide-react";
import { useGetBicyclesQuery } from "../../redux/api/baseApi/baseApi";
import { Link } from "react-router-dom";
import { Loading } from "../../components/ui/loading";

interface Bike {
  [x: string]: any;
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  stock: number;
  image: string;
}

export const AllBicyclePage = () => {
  const [cart, setCart] = useState<Bike[]>([]);

  const [filters, setFilters] = useState({
    searchTerm: "",
    minPrice: 0,
    maxPrice: 5000,
    brand: "",
    model: "",
  });

  const {
    data: bikes,
    error,
    isLoading,
    refetch,
  } = useGetBicyclesQuery(filters);

  const handleSearch = () => {
    refetch();
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      minPrice: 0,
      maxPrice: 5000,
      brand: "",
      model: "",
    });
    refetch();
  };

  const validatePriceInput = (value: number) => {
    return value >= 0 ? value : 0;
  };

  return (
    <div 
      className="min-h-screen p-6 md:p-8 lg:p-12 pt-36 md:pt-36 lg:pt-36 "
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">
          Premium Bikes Collection
        </h1>

        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-wrap md:flex-nowrap justify-center gap-4">
            <input
              type="text"
              placeholder="Search"
              value={filters.searchTerm}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
              }
              className="p-3 bg-white/20 border border-white/30 rounded-xl w-full md:w-auto placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: validatePriceInput(Number(e.target.value)),
                }))
              }
              className="p-3 bg-white/20 border border-white/30 rounded-xl w-full md:w-auto placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxPrice: validatePriceInput(Number(e.target.value)),
                }))
              }
              className="p-3 bg-white/20 border border-white/30 rounded-xl w-full md:w-auto placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
            />
            <div className="flex space-x-2 w-full md:w-auto">
              <button
                onClick={handleSearch}
                className="p-3 bg-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:bg-purple-700/80 transition-all duration-300 w-full md:w-auto font-medium shadow-lg hover:shadow-purple-500/25"
              >
                Search
              </button>
              <button
                onClick={resetFilters}
                className="p-3 bg-gray-600/80 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700/80 transition-all duration-300 w-full md:w-auto font-medium shadow-lg hover:shadow-gray-500/25"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : error ? (
          <div className="backdrop-blur-lg bg-red-500/10 p-6 rounded-2xl text-center text-white">
            {error instanceof Error ? error.message : "An error occurred"}
          </div>
        ) : bikes && bikes.length === 0 ? (
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl text-center">
            <p className="text-white text-lg mb-4">
              No bicycles found matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="p-3 bg-purple-600/80 text-white rounded-xl hover:bg-purple-700/80 transition-all duration-300 font-medium shadow-lg"
            >
              Show All Bicycles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {bikes.map((bike: Bike, index: number) => (
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
                      to={`/detail/${bike._id}`}
                      className="mt-6 w-full bg-purple-600/80 backdrop-blur-sm hover:bg-purple-700/80 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBicyclePage