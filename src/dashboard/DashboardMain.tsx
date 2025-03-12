import React from 'react';
import { Sidebar } from '../dashboard/Sidebar';

import { Slider } from '../dashboard/Slider';
import { GlassCard } from '../dashboard/GlassCard';
import { BarChart3, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { useAppSelector } from '../redux/app/hook';
import { selectCurrentUser } from '../redux/auth/authSlice';
import { useGetAllStatsQuery } from '../redux/api/baseApi/baseApi';
const sliderItems = [
  {
    image: 'https://i.ibb.co.com/5XjkyGTh/pexels-davidmcbee-255934.jpg',

    title: 'Dashboard Analytics',
    description: 'Track your business performance with our powerful analytics tools',
  },
  {
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2940&auto=format&fit=crop',
    title: 'User Management',
    description: 'Efficiently manage your users and their permissions',
  },
  {
    image: 'https://i.ibb.co.com/wk6dDXR/pexels-thelazyartist-3131286.jpg',
    title: 'Order Processing',
    description: 'Streamline your order management workflow',
  },
];

function DashboardMain() {
  const user = useAppSelector(selectCurrentUser);

  //const { data, error, isLoading } = useGetOrderIdQuery(user?._id);
  const { data, } = useGetAllStatsQuery(undefined);
  console.log(data)

  console.log(data)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Sidebar />
      
      <main className="lg:pl-20 min-h-screen">
        <div className="p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <GlassCard className="flex-1 w-full">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                    alt="User"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-white text-2xl font-bold">Welcome back, </h1>
                    <p className="text-white/70">{user?.name}</p>
                    <p className="text-white/70">{user?.email}</p>
                    <p className="text-white/70">{user?.role}</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                icon={TrendingUp}
                title="Total Revenue"
                value="$24,560"
                trend={{ value: "+2.5%", up: true }}
                color="purple"
              />
              <DashboardCard
                icon={Users}
                title="Total Users"
                value="1,234"
                trend={{ value: "+12.3%", up: true }}
                color="purple"
              />
              <DashboardCard
                icon={ShoppingCart}
                title="Total Orders"
                value="456"
                trend={{ value: "-0.5%", up: false }}
                color="indigo"
              />
              <DashboardCard
                icon={BarChart3}
                title="Conversion Rate"
                value="3.2%"
                trend={{ value: "+1.2%", up: true }}
                color="emerald"
              />
            </div>

            {/* Slider Section */}
            <GlassCard>
              <h2 className="text-white text-xl font-bold mb-4">Featured Updates</h2>
              <Slider items={sliderItems} />
            </GlassCard>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassCard>
                <h2 className="text-white text-xl font-bold mb-4">Recent Orders</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="w-5 h-5 text-purple-300" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Order #{1000 + index}</p>
                          <p className="text-white/70 text-sm">2 items • $199.99</p>
                        </div>
                      </div>
                      <span className="text-white/70 text-sm">2 mins ago</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="text-white text-xl font-bold mb-4">New Users</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://images.unsplash.com/photo-${1500 + index}`}
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-white font-medium">User Name</p>
                          <p className="text-white/70 text-sm">user@example.com</p>
                        </div>
                      </div>
                     {/*  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                        New
                      </span> */}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardMain;