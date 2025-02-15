import React, { useState } from 'react';
import { Bike, ShoppingCart, User, Menu, X } from 'lucide-react';
import Login from './auth/Login';
import Register from './auth/Register';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Bike className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-blue-600">VeloVibe</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="/all-Bicycle" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">All-Bicycle</a>
                  <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                  <a href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-blue-100 text-gray-700 relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </button>
                <button 
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowRegister(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-blue-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
              <a href="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Shop</a>
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
              <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Blog</a>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <button 
                onClick={() => setShowLogin(true)}
                className="block w-full px-4 py-2 text-center text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => setShowRegister(true)}
                className="block w-full mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modals */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }} />}
    </>
  );
};

export default Navbar;