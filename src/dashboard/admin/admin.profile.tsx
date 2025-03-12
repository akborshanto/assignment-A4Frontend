import React from 'react'
import { motion } from 'framer-motion';
import { useGetUserEmailQuery } from '../../redux/auth/auth.api';
import { useAppSelector } from '../../redux/app/hook';
import { selectCurrentUser } from '../../redux/auth/authSlice';

const AdminProfile = () => {
const user = useAppSelector(selectCurrentUser);

const {data}=useGetUserEmailQuery(user?.email)


  return (
    <div>    <div>    <div className=" inset-0 overflow-y-auto min-h-screen ">
    {/* Animated background gradients */}
    <div className="fixed inset-0 bg-gradient-to-br from-purple-200/30 via-white/20 to-blue-200/30 animate-gradient" />
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    
    {/* Animated glass orbs */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed top-20 -left-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="fixed bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"
    />

    {/* Main content */}
    <div className="relative min-h-screen backdrop-blur-[2px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-bold text-gray-800 mb-12 text-center"
          >
           {/*  {bike.name} */}
           {data?.name}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group h-[500px] overflow-hidden rounded-xl shadow-lg"
            >
           {/*    <img
                src={bike.photo}
                alt={bike.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              /> */}image
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-8 backdrop-blur-md bg-white/20 rounded-xl p-8 border border-white/30"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-purple-600 text-3xl font-medium"
              >
              AGe
              </motion.p>

              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-2xl font-semibold backdrop-blur-sm bg-white/30 px-6 py-3 rounded-lg hover:bg-white/40 transition-colors">
                  {data?.name}
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center text-gray-600"
                >
                  <span className="text-xl backdrop-blur-sm bg-white/30 px-6 py-3 rounded-lg hover:bg-white/40 transition-colors">
                 {data?.name}
                  </span>
                </motion.div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-gray-700 text-lg backdrop-blur-sm bg-white/30 p-6 rounded-lg hover:bg-white/40 transition-colors"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
      
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-purple-600 hover:bg-purple-700 text-white text-xl rounded-lg transition-all duration-200 backdrop-blur-sm bg-opacity-90 shadow-lg hover:shadow-xl"
              >
   Update
              </motion.button>
      
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div></div></div>
  )
}

export default AdminProfile