import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLoginMutation } from '../../redux/auth/auth.api';
import { Link, useNavigate } from 'react-router-dom';
import { selectCurrentUser, setUser } from '../../redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { verifyToken } from '../../token/token.utils';
import toast from 'react-hot-toast';

interface LoginProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onClose, onSwitchToRegister }) => {
  const dispatch = useAppDispatch();
  const navigate=useNavigate()
   const userRole = useAppSelector(selectCurrentUser);
  const [showPassword, setShowPassword] = useState(false); 
  const [login, { error, isLoading }] = useLoginMutation(); 

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      email: 'test@gmail.com',
      password: '20022002',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
try {
  const res = await login(data).unwrap();
   
      const user = verifyToken(res.token);
      
      dispatch(setUser({ user, token: res.token }));
 // Navigate to the corresponding dashboard based on the user's role

if (user?.role === "admin") {
  navigate(`/dashboard`);
} 


toast.success("Successfully login😍")
} catch (error) {
  
toast.error("something error")

}
      
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" inset-0 z-50 min-h-screen flex items-center justify-center bg-black bg-opacity-50 text-white">
      <div className="relative w-full max-w-md p-8 glass rounded-lg shadow-xl mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white"
        >
          <Link to={'/'}> <X className="h-6 w-6" /></Link>
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-white">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              User ID
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                {...register('email', { 
                  required: 'User ID is required',
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: 'Invalid email format'
                  }
                })}
                className="w-full pl-10 pr-4 text-gray-500 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your User ID"
                disabled={isLoading}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
                className="w-full pl-10 pr-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                disabled={isLoading}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>
            <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLoading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        {error && <p className="text-sm text-red-500">Login failed. Please try again.</p>}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to={'/register'}>
            <button
              onClick={onSwitchToRegister}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign up
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
