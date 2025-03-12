import React from 'react';

import Card from '../../components/home.card';
import { useAppSelector } from '../../redux/app/hook';
import { selectCurrentUser } from '../../redux/auth/authSlice';
import { Testimonials } from '../../components/Testimonials';
import { SubscribeForm } from '../../components/subscribeform';
import { Banner } from '../../components/Banner';

const Home = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Decorative circles in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="backdrop-blur-sm bg-white/5 shadow-xl">
          <Banner />
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-xl border border-white/20 mb-12">
            <Card />
          </div>

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-xl border border-white/20 mb-12">
            <Testimonials />
          </div>

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-xl border border-white/20">
            <SubscribeForm />
          </div>
        </div>
      </div>

      {/* Gradient overlay at the bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none"
        style={{ backdropFilter: 'blur(5px)' }}
      ></div>
    </div>
  );
};

export default Home;