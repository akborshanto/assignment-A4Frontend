import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hook';
import { selectCurrentUser } from '../redux/auth/authSlice';
import { useAddOrderMutation, useGetBicycleByIdQuery, useGetUserEmailQuery } from '../redux/api/baseApi/baseApi';
import { CreditCard, ShoppingCart } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const user = useAppSelector(selectCurrentUser);
  const { data: order, error, isLoading } = useGetUserEmailQuery(user?.email);
  const { id } = location.state || {};
  const { data: bike } = useGetBicycleByIdQuery(id);
  const [addData] = useAddOrderMutation(undefined);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // State to store quantity
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => Math.min(bike?.stock || 1, prevQuantity + 1));
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const totalPrice = bike?.price * quantity || 0;

  const onSubmit = async (data: any) => {
    const orderData = {
      userId: order?.data?._id,
      products: [
        {
          bicycleId: id,
          quantity,
        },
      ],
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    try {
      setIsButtonDisabled(true); // Disable the button while processing
      await addData(orderData);
      toast.success("Order successful 😍😍");
      navigate('/'); // Redirect to the home page after order
    } catch (error) {
      toast.error('Order already completed');
    } finally {
      setIsButtonDisabled(false); // Re-enable the button after processing
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
            <ShoppingCart className="mr-2" />
            Checkout
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
                  Total: ${totalPrice.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="glass rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <CreditCard className="mr-2" /> Payment Details
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    disabled={true}
                    defaultValue={order?.data?.name}
                    className="w-full px-4 py-2 rounded-lg bg-gray border border-white/20 focus:border-white/40 focus:outline-none"
                    {...register('name', { required: 'Name is required' })}
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="text"
                    required
                    disabled
                    defaultValue={user?.email}
                    className="w-full px-4 py-2 rounded-lg bg-gray border border-white/20 focus:border-white/40 focus:outline-none"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Quantity buttons */}
                <div>
                  <label className="block text-sm text-white font-medium mb-1">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isButtonDisabled} // Disable the button after submission
                  className={`w-full mt-6 bg-white text-[#4c4294] py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors ${isButtonDisabled ? 'cursor-not-allowed opacity-50 bg-red-600' : ''}`}
                >
                  {isButtonDisabled ? 'Processing...' : `Order Now $${totalPrice.toFixed(2)}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
