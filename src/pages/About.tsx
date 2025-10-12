import React from 'react';
import { Server, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Server className="h-8 w-8 text-blue-600" />, number: "500+", label: "Websites Hosted" },
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "David Ubani",
      role: "Founder & CEO",
      description: "Passionate about providing reliable hosting solutions for South African businesses."
    },
    {
      name: "Sarah Mitchell",
      role: "Technical Director",
      description: "Expert in server management and web technologies with 10+ years experience."
    },
    {
      name: "Michael Johnson",
      role: "Customer Success Manager",
      description: "Dedicated to ensuring our clients receive exceptional support and service."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ubani Hosting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a South African web hosting company committed to providing reliable, 
            secure, and affordable hosting solutions with exceptional local support.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, Ubani Hosting was born from a simple vision: to provide 
                  South African businesses with world-class web hosting services at affordable prices, 
                  without the complexity and hidden costs often associated with international providers.
                </p>
                <p>
                  We understand the unique challenges faced by South African businesses in the digital space. 
                  That's why we offer transparent ZAR pricing, local support in your timezone, 
                  and hosting solutions specifically optimized for the African market.
                </p>
                <p>
                  Today, we proudly serve hundreds of websites across South Africa, from small local 
                  businesses to growing enterprises, all backed by our 99.9% uptime guarantee and 
                  24/7 expert support.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower South African businesses with reliable, secure, and affordable web hosting 
                solutions, backed by exceptional local support and transparent pricing.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Transparency in all our dealings</li>
                <li>• Reliability you can count on</li>
                <li>• Local support that understands your business</li>
                <li>• Continuous innovation and improvement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 rounded-xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by South African Businesses
            </h2>
            <p className="text-lg text-gray-600">
              Here's what we've achieved together with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The dedicated professionals behind Ubani Hosting's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
            
            {/* Add third placeholder for future team member */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-2">Growing Team</h3>
              <p className="text-gray-400 font-medium mb-3">More team members coming soon</p>
              <p className="text-gray-400">We're expanding our team to serve you better</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Ubani Hosting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Local Support</h3>
              <p className="text-blue-100">
                South African support team that understands your business and timezone
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">ZAR Pricing</h3>
              <p className="text-blue-100">
                Transparent pricing in South African Rand with no hidden fees
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Proven Reliability</h3>
              <p className="text-blue-100">
                99.9% uptime guarantee backed by enterprise-grade infrastructure
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;