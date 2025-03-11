import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Send, X, Check, Mail } from 'lucide-react';
import { GlassContainer } from './dahboardController';
import { Button } from './ui/aboutButton';
import toast from 'react-hot-toast';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
   
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
    
        setTimeout(() => setIsVisible(false), 1000);
        toast.success("successfully succribe")
      } else {
        setStatus('error');
        toast.error("something issues")
      }
    }, 1000);
   
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 z-50 max-w-md w-full mx-4"
    >
      <GlassContainer className="relative overflow-hidden">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-red-400" onClick={()=>setIsVisible(false)}/>
        </button>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get notified about new bikes and exclusive offers
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                         bg-white/50 dark:bg-white/5 backdrop-blur-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         placeholder-gray-400 dark:placeholder-gray-500
                         text-gray-900 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Check className="w-4 h-4" />
              <span>Exclusive deals and updates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Check className="w-4 h-4" />
              <span>No spam, unsubscribe anytime</span>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span className="ml-2">Subscribing...</span>
                </div>
              ) : status === 'success' ? (
                <div className="flex items-center justify-center">
                  <Check className="w-5 h-5" />
                  <span className="ml-2">Subscribed!</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5" />
                  <span className="ml-2">Subscribe Now</span>
                </div>
              )}
            </Button>

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-2"
              >
                Please enter a valid email address
              </motion.p>
            )}
          </form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl" />
      </GlassContainer>
    </motion.div>
  );
};