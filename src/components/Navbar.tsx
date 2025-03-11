import React, { useState } from 'react';
import { Bike, ShoppingCart,  Menu, X } from 'lucide-react';
import Login from './auth/Login';
import Register from './auth/Register';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../redux/auth/authSlice';
import toast from 'react-hot-toast';
import { useAppSelector } from '../redux/app/hook';
import { useGetUserEmailQuery } from '../redux/api/baseApi/baseApi';
const Navbar = () => {
  const dispatch=useDispatch()
  const user = useAppSelector(selectCurrentUser);
  const { data} = useGetUserEmailQuery(user?.email);
  
// console.log(user.photo)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//logout
const handleLogout=()=>{
  try {
    dispatch(logout())
  toast.success("Logout Successfull")
  } catch (error) {
    toast.error("already logout")
  }
  
}

//add to card
const cartItemCount = useSelector((state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
);

  return (
    <>
      <nav className="fixed w-full z-50 glass ">
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
                  <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md  text-lg font-medium">Home</Link>
                  <Link to="/all-Bicycle" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">All-Bicycle</Link>
                  <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium">About</Link>
                  {
                    user &&    <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Dashboard</Link>

                  }

                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-blue-100 text-gray-700 relative">
                <Link to="/cart" className="relative">
        <ShoppingCart></ShoppingCart>
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 rounded-full">
            {cartItemCount}
          </span>
        )}
      </Link>
                  
                </button>
{/* user base login and signup and logout */}


{!user && (
  <>
    <button 
      onClick={() => setShowLogin(true)}
      className="block w-full mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      Login
    </button>
  {/*   <button 
      onClick={() => setShowRegister(true)}
      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      Sign Up
    </button> */}
  </>
)}

{user && (
  <div className="flex  items-center gap-4">
    {/* Logout Button */}
    <button 
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
    >
      LogOut
    </button>

    {/* Avatar with Glasses */}
    <div className="relative w-10 h-10">
      {/* Avatar Image */}
      <img
        src={user?.photo}
        alt="User Avatar"
        className="w-full h-full rounded-full border-4 border-gray-300"
        
      />
      {/* Glasses Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="w-12 h-12 opacity-80"
        >
          <path d="M4.5 10C3.12 10 2 11.12 2 12.5S3.12 15 4.5 15 7 13.88 7 12.5 5.88 10 4.5 10zM19.5 10c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5S22 13.88 22 12.5 20.88 10 19.5 10zM9 13a1 1 0 10-2 0 1 1 0 002 0zm8 0a1 1 0 10-2 0 1 1 0 002 0z" />
        </svg>
      </div>
    </div>
  </div>
)}

          
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
              <a href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Dashboard</a>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
            {!user && (
  <>
    <button 
      onClick={() => setShowLogin(true)}
      className="block w-full mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      Login
    </button>
    {/* <button 
      onClick={() => setShowRegister(true)}
      className="block w-full mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      Sign Up
    </button> */}
  </>
)}

{user && (
  <div className="flex  items-center gap-4">
  {/* Logout Button */}
  <button 
    onClick={handleLogout}
    className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
  >
    LogOut
  </button>

  {/* Avatar with Glasses */}
  <div className="relative w-10 h-10">
    {/* Avatar Image */}
    <img
      src={user?.photo}
      alt="User Avatar"
      className="w-full h-full rounded-full border-4 border-gray-300"
    />
    {/* Glasses Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        className="w-12 h-12 opacity-80"
      >
        <path d="M4.5 10C3.12 10 2 11.12 2 12.5S3.12 15 4.5 15 7 13.88 7 12.5 5.88 10 4.5 10zM19.5 10c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5S22 13.88 22 12.5 20.88 10 19.5 10zM9 13a1 1 0 10-2 0 1 1 0 002 0zm8 0a1 1 0 10-2 0 1 1 0 002 0z" />
      </svg>
    </div>
  </div>
</div>
)}

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