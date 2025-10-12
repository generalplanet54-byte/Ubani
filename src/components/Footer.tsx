import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Ubani Hosting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional web hosting solutions for businesses in South Africa. 
              Reliable, secure, and affordable hosting services with 24/7 support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">support@ubanihosting.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">074 895 3557</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Hosting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Domain Registration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Website Migration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">E-commerce Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ubani Hosting. All rights reserved. All prices exclude VAT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;