import { Button } from "../..//components/ui/button";
import { Card } from "../../components/ui/card";
import { Bike, ShoppingCart } from "lucide-react";

function BicycleDetail() {
  const bicycle = {
    name: "Mountain Explorer Pro",
    price: "$1,299.99",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1200",
    specs: [
      { label: "Frame", value: "Lightweight Aluminum Alloy" },
      { label: "Suspension", value: "Front Fork Suspension 120mm" },
      { label: "Gears", value: "Shimano 21-Speed" },
      { label: "Brakes", value: "Hydraulic Disc Brakes" },
      { label: "Tires", value: "27.5\" All-Terrain" },
      { label: "Weight", value: "12.5 kg" }
    ]
  };

  const handleBuyNow = () => {
    // Redirect to checkout page
    console.log("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4   sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
     {/*    <div className="flex items-center gap-2 mb-8">
          <Bike className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bicycle Details</h1>
        </div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <Card className="overflow-hidden bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border-0 shadow-xl">
            <img
              src={bicycle.image}
              alt={bicycle.name}
              className="w-full mt- h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </Card>

          {/* Details Section */}
          <Card className="p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border-0 shadow-xl">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{bicycle.name}</h2>
                <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
                  {bicycle.price}
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bicycle.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-white/40 dark:bg-gray-700/40 backdrop-blur-sm"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">{spec.label}</p>
                      <p className="font-medium text-gray-900 dark:text-white">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Now Button */}
              <Button
                onClick={handleBuyNow}
                className="w-full py-6 text-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BicycleDetail;