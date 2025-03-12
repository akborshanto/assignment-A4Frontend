import { Link, useParams } from "react-router-dom";
import { useGetBicycleByIdQuery } from "../../redux/api/baseApi/baseApi";
import { motion } from "framer-motion";
import { Loading } from "../../components/ui/loading";
import { Bike, Package, Tag, ArrowLeft, ShoppingCart } from "lucide-react";

const BicycleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: bike, error, isLoading } = useGetBicycleByIdQuery(id);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed"
      }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 text-white"
        >
          {error instanceof Error ? error.message : "An error occurred"}
        </motion.div>
      </div>
    );
  }

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed"
      }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 text-white"
        >
          Bicycle not found.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-10 md:pt-10  lg:pt-10"  style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundAttachment: "fixed"
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-12"
        >
          <Link 
            to="/all-Bicycle"
            className="inline-flex items-center gap-2 text-white mb-8 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Bicycles
          </Link>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl font-bold text-white mb-8 text-center drop-shadow-lg"
            >
              {bike.name}
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative h-[500px] overflow-hidden rounded-xl">
                  <img
                    src={bike.photo}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <Bike className="w-8 h-8 text-purple-300" />
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-3xl font-medium text-white"
                  >
                    {bike.brand} - {bike.model}
                  </motion.p>
                </div>

                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-3"
                  >
                    <Tag className="w-6 h-6 text-purple-300" />
                    <span className="text-2xl font-semibold text-white">
                      ${bike.price.toLocaleString()}
                    </span>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center gap-3"
                  >
                    <Package className="w-6 h-6 text-purple-300" />
                    <span className="text-xl text-white/80">
                      {bike.stock} in stock
                    </span>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-white/80">
                    Experience unparalleled performance and style with the {bike.name}. This premium bicycle combines cutting-edge technology with elegant design, offering you the perfect blend of comfort, speed, and reliability for your cycling adventures.
                  </p>
                </motion.div>

                <div className="flex gap-4">
                  <Link 
                    to={'/checkout'} 
                    state={{id}}
                    className="flex-1"
                  >         
                    <motion.button 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 px-8 bg-purple-600/80 hover:bg-purple-700/80 text-white text-xl rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25"
                    >
                      <ShoppingCart className="w-6 h-6" />
                      Buy Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BicycleDetail;