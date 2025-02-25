import React from 'react';
import { GlassCard } from './../GlassCard';
import { ShoppingCart } from 'lucide-react';
import { useGetOrderIdQuery } from '../../redux/api/baseApi/baseApi';
import { useAppSelector } from '../../redux/app/hook';
import { selectCurrentUser } from '../../redux/auth/authSlice';

const UserAllOrder = () => {
    const user = useAppSelector(selectCurrentUser);
  
    const { data, error, isLoading } = useGetOrderIdQuery(user?._id);
  
    console.log(data, error, isLoading);

    return (
        <div className="w-full h-full items-center ">
            {/* Recent Orders */}
            <GlassCard>
                <h2 className="text-white text-xl font-bold mb-4"> Your Recent Orders</h2>
                <div className="space-y-4">
                    {isLoading && <p className="text-white">Loading...</p>}
                    {error && <p className="text-red-500">Error fetching orders.</p>}
                    {data?.length > 0 ? (
                        data.map((order, index) => (
                            <div key={order._id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <ShoppingCart className="w-5 h-5 text-purple-300" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Order #{1 + index}</p>
                                        <p className="text-white/70 text-sm">Bicyle Rate B • ${order?.totalPrice}</p>
                                    </div>
                                </div>
                                <span className="text-white/70 text-sm">{order.createdAt.slice()}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No orders found.</p>
                    )}
                </div>
            </GlassCard>

           
        </div>
    );
};

export default UserAllOrder;
