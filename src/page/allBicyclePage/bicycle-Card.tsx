import React, { useState } from "react";
import { Bike, ShoppingCart, Package, Tag } from "lucide-react";
import { useGetBicyclesQuery } from "../../redux/api/baseApi/baseApi";

interface Bike {
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

  const { data: bikes, error, isLoading, refetch } = useGetBicyclesQuery(filters);


  const handleAddToCart = (bike: Bike) => {
    setCart((prevCart) => [...prevCart, bike]);
  };

  // Function to handle search button click
  const handleSearch = () => {
    refetch(); 
  };

  // Function to reset filters and show all bicycles
  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      minPrice: 0,
      maxPrice: 5000,
      brand: "",
      model: "",
    });
    refetch(); // Re-fetch all bicycles
  };

  // Validate price inputs to ensure they are non-negative
  const validatePriceInput = (value: number) => {
    return value >= 0 ? value : 0;
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Premium Bikes Collection
        </h1>

        <div className="space-x-4 mb-6 flex flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Search"
            value={filters.searchTerm}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
            }
            className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
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
            className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
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
            className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
          />
          <div className="flex space-x-2 w-full sm:w-auto">
            <button
              onClick={handleSearch}
              className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Search
            </button>
            <button
              onClick={resetFilters}
              className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-600 text-lg">Loading bicycles...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">
            {error instanceof Error ? error.message : "An error occurred"}
          </p>
        ) : bikes && bikes.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-4">
              No bicycles found matching your search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Show All Bicycles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {bikes.map((bike: Bike, index: number) => (
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

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {bike.name}
                    </h2>
                    <p className="text-purple-600 mb-4 font-medium">
                      {bike.brand} - {bike.model}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Tag className="w-5 h-5 mr-2 text-purple-500" />
                        <span className="text-lg font-semibold">
                          ${bike.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <Package className="w-5 h-5 mr-2 text-purple-500" />
                        <span>{bike.stock} in stock</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(bike)}
                      className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
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
