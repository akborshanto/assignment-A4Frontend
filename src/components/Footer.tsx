import React from 'react';
import { Bike, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">VeloVibe</span>
            </div>
            <p className="text-gray-400 mb-4">Your premier destination for quality bicycles and accessories.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400" />
                123 Bike Street, Cycling City, CC 12345
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                info@velovibe.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VeloVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;