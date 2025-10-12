import React from 'react';
import { CheckCircle, Server, Globe, Shield, Code } from 'lucide-react';

const Services = () => {
  const hostingPlans = [
    {
      name: "Business Hosting",
      price: "R2,100",
      storage: "5GB",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5GB SSD Storage",
        "Free SSL Certificate", 
        "cPanel Access",
        "Daily Backups",
        "Email Accounts",
        "99.9% Uptime Guarantee"
      ],
      popular: false
    },
    {
      name: "Pro Hosting", 
      price: "R4,200",
      storage: "15GB",
      description: "High performance hosting for growing businesses",
      features: [
        "15GB SSD Storage",
        "High Performance Servers",
        "Free SSL Certificate",
        "Daily Backups", 
        "Unlimited Email Accounts",
        "Priority Support",
        "99.9% Uptime Guarantee"
      ],
      popular: true
    },
    {
      name: "Enterprise Hosting",
      price: "R7,500", 
      storage: "50GB",
      description: "For large traffic sites and heavy content",
      features: [
        "50GB SSD Storage",
        "Enterprise Performance",
        "Free SSL Certificate",
        "Daily Backups",
        "Unlimited Email Accounts", 
        "Dedicated Support Agent",
        "99.9% Uptime Guarantee",
        "Advanced Security"
      ],
      popular: false
    }
  ];

  const domainServices = [
    { service: ".co.za Registration/Renewal", price: "R150", period: "/year", note: "South African domain" },
    { service: ".com / .net / .org", price: "R320", period: "/year", note: "International domains" },
    { service: "Domain Transfer", price: "R500", period: "one-time", note: "Includes DNS updates" }
  ];

  const technicalServices = [
    { service: "Website Migration (Basic)", price: "R2,500", description: "Static site migration with DNS & SSL setup" },
    { service: "CMS Migration (WordPress/Joomla)", price: "R3,500", description: "Database, email & site migration" },
    { service: "Email Migration (per 5 mailboxes)", price: "R1,200", description: "Move mailboxes to Ubani hosting" },
    { service: "Security Hardening", price: "R2,500", description: "Enhanced protection and backup setup" },
    { service: "SEO Basic Setup", price: "R3,000", description: "Search Console, sitemap, meta tags" },
    { service: "Hourly Support", price: "R800", description: "Ad-hoc technical support (minimum 1 hour)" }
  ];

  const ecommerceServices = [
    { service: "Basic Shopfront", price: "R15,000", description: "WordPress/WooCommerce setup (up to 10 products)" },
    { service: "Standard Shopfront", price: "R25,000", description: "Full e-commerce with payment gateway (up to 50 products)" },
    { service: "Premium Shopfront", price: "R40,000", description: "Custom design with advanced UX/UI features" }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional hosting solutions and web services with transparent ZAR pricing. 
            All prices exclude VAT. 50% deposit required for development projects.
          </p>
        </div>

        {/* Hosting Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Server className="h-8 w-8 text-blue-600 mr-3" />
              Web Hosting Plans
            </h2>
            <p className="text-lg text-gray-600">Choose the perfect hosting plan for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg relative ${plan.popular ? 'border-2 border-blue-600' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-600">/year</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Domain Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              Domain Services
            </h2>
            <p className="text-lg text-gray-600">Register and manage your domain names</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 text-lg font-semibold text-gray-900">Service</th>
                    <th className="text-center py-4 text-lg font-semibold text-gray-900">Price</th>
                    <th className="text-left py-4 text-lg font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {domainServices.map((domain, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 font-medium text-gray-900">{domain.service}</td>
                      <td className="py-4 text-center text-2xl font-bold text-blue-600">
                        {domain.price}<span className="text-sm text-gray-600">{domain.period}</span>
                      </td>
                      <td className="py-4 text-gray-600">{domain.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              Technical Services
            </h2>
            <p className="text-lg text-gray-600">Professional migration and technical support services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">{service.service}</h3>
                  <span className="text-2xl font-bold text-blue-600 ml-4">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* E-commerce Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              E-commerce & Web Development
            </h2>
            <p className="text-lg text-gray-600">Complete e-commerce solutions and web development services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.service}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Terms Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-800 font-medium">
            All prices exclude VAT. 50% deposit required for development projects, balance on completion. 
            Annual hosting and domain fees payable upfront.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;