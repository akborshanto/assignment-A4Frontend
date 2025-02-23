import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hook';
import { selectCurrentUser } from '../redux/auth/authSlice';
import { useGetBicycleByIdQuery } from '../redux/api/baseApi/baseApi';
import { CreditCard, ShoppingCart,  } from 'lucide-react';
import { useForm } from 'react-hook-form';



export function Checkout() {
  const location = useLocation();
  const user = useAppSelector(selectCurrentUser);
  const { id } = location.state || {}; 
  const { data: bike } = useGetBicycleByIdQuery(id);


  const { register, handleSubmit, setValue, formState: { errors } } = useForm();


  const onSubmit = (data: any) => {
console.log(user)


 
  };



  return (
    <div className="min-h-screen bg-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <ShoppingCart className="mr-2" />
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Section */}
            <div className="glass rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <ShoppingCart className="mr-2" /> Your Selection
              </h2>

              <div className="space-y-6">
                <div key={bike?._id} className="flex items-center space-x-4">
                  <img
                    src={bike?.photo}
                    alt={bike?.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{bike?.name}</h3>
                    <p className="text-sm opacity-80">${bike?.price.toFixed(2)}</p>
                    <p className="text-sm opacity-80">Stock: {bike?.stock}</p>
                 
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-xl font-semibold">
                  Total: ${bike?.price}
                </div>
        
              </div>
            </div>

            {/* Checkout Form */}
            <div className="glass rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <CreditCard className="mr-2" /> Payment Details
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    defaultValue={user?.name || 'Akbor Shanto'}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    {...register('name', { required: 'Name is required' })} 
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="text"
                    required
                    defaultValue={user?.email}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Shipping Address</label>
                  <textarea
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    rows={3}
                    {...register('address', { required: 'Address is required' })}
                  ></textarea>
                  {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Payment Method</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                    {...register('paymentMethod', { required: 'Please select a payment method' })}
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                  {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-white text-[#4c4294] py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  disabled={bike?.price === 0}
                >
                  Order Now ${bike?.price.toFixed()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
