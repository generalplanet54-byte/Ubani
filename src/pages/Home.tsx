import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Clock, Headphones, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Reliable Infrastructure",
      description: "99.9% uptime guarantee with enterprise-grade servers and redundant systems."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Security",
      description: "Free SSL certificates, daily backups, and advanced security monitoring."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "SSD storage and optimized servers for maximum performance and speed."
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Expert South African support team available around the clock."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      content: "Ubani Hosting has been exceptional. Fast servers, great support, and competitive pricing in ZAR.",
      rating: 5
    },
    {
      name: "Michael van der Merwe", 
      company: "E-commerce Store Owner",
      content: "Migrated our online store seamlessly. The team handled everything professionally.",
      rating: 5
    },
    {
      name: "Lisa Patel",
      company: "Small Business Owner",
      content: "Affordable hosting that actually works. Been with them for 2 years without issues.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Hosting
              <span className="block text-blue-200">Made in South Africa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Reliable, secure, and affordable hosting solutions with local support and ZAR pricing. 
              Get your website online today with 99.9% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
              >
                View Hosting Plans
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ubani Hosting?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide enterprise-grade hosting solutions designed specifically for South African businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent ZAR Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. All prices in South African Rand, excluding VAT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Hosting</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R2,100<span className="text-lg text-gray-600">/year</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />5GB Storage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Free SSL Certificate</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />cPanel Access</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Daily Backups</li>
              </ul>
              <Link to="/services" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Choose Plan
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Hosting</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R4,200<span className="text-lg text-gray-600">/year</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />15GB Storage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High Performance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Free SSL & Backups</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority Support</li>
              </ul>
              <Link to="/services" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Choose Plan
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R7,500<span className="text-lg text-gray-600">/year</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />50GB Storage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Large Traffic Support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Heavy Content Sites</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated Support</li>
              </ul>
              <Link to="/services" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of South African businesses who trust Ubani Hosting for their web presence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;