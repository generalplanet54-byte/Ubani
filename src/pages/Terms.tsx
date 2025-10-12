import React from 'react';
import { FileText, AlertCircle, Shield, CreditCard } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 2025
          </div>
        </div>

        {/* Quick Overview */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <FileText className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>• All prices are in ZAR, excluding VAT</li>
                  <li>• Annual hosting fees payable upfront</li>
                  <li>• 50% deposit required for development projects</li>
                  <li>• 99.9% uptime guarantee on all hosting plans</li>
                </ul>
                <ul className="space-y-2">
                  <li>• 30-day money-back guarantee</li>
                  <li>• South African jurisdiction applies</li>
                  <li>• Free SSL certificates included</li>
                  <li>• Daily backups on all hosting accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">
          
          {/* Pricing and Payment Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Pricing and Payment Terms</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hosting Services</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Business Hosting (5GB): R2,100 per year</li>
                  <li>• Pro Hosting (15GB): R4,200 per year</li>
                  <li>• Enterprise Hosting (50GB): R7,500 per year</li>
                  <li>• All hosting plans include SSL certificates, cPanel access, and daily backups</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Domain Services</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• .co.za Registration/Renewal: R150 per year</li>
                  <li>• .com/.net/.org Registration: R320 per year</li>
                  <li>• Domain Transfer: R500 (one-time fee)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Development Services</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Basic Shopfront: R15,000 (up to 10 products)</li>
                  <li>• Standard Shopfront: R25,000 (up to 50 products, includes payment gateway)</li>
                  <li>• Premium Shopfront: R40,000 (custom design with advanced UX/UI)</li>
                  <li>• 50% deposit required, balance on completion</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Payment Terms</h4>
                    <ul className="text-yellow-700 text-sm mt-1 space-y-1">
                      <li>• All prices exclude VAT (15% will be added for South African customers)</li>
                      <li>• Annual hosting and domain fees are payable upfront</li>
                      <li>• Development projects require 50% deposit before work begins</li>
                      <li>• Payment methods: EFT, Credit Card, Direct Deposit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Level Agreement */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Service Level Agreement</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uptime Guarantee</h3>
                <p className="text-gray-700">
                  We guarantee 99.9% uptime on all hosting services. If we fail to meet this standard,
                  you may be eligible for service credits as compensation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Response Times</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Email Support: Within 2 hours during business hours</li>
                  <li>• Phone Support: Immediate assistance during business hours</li>
                  <li>• Emergency Technical Issues: 24/7 response guaranteed</li>
                  <li>• Business Hours: Monday-Friday 8AM-5PM, Saturday 9AM-1PM SAST</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Acceptable Use Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptable Use Policy</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Activities</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Illegal content or activities</li>
                  <li>• Spam, phishing, or malicious email practices</li>
                  <li>• Resource abuse or excessive server load</li>
                  <li>• Copyright infringement or unauthorized content distribution</li>
                  <li>• Adult content hosting (except legitimate businesses with prior approval)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Resource Usage</h3>
                <p className="text-gray-700">
                  While we provide generous resource allocations, accounts that consistently exceed
                  reasonable usage patterns may be asked to upgrade to a higher plan or optimize their usage.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection and Backups */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection and Backups</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Backup Policy</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Daily automated backups of all hosting accounts</li>
                  <li>• Backups retained for 30 days</li>
                  <li>• Free backup restoration service</li>
                  <li>• Clients responsible for maintaining their own additional backups</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy and POPIA Compliance</h3>
                <p className="text-gray-700">
                  We comply with South Africa's Protection of Personal Information Act (POPIA).
                  Client data is stored securely and never shared with third parties without consent.
                </p>
              </div>
            </div>
          </section>

          {/* Money-Back Guarantee */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Money-Back Guarantee</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <p className="text-gray-700 mb-4">
                We offer a 30-day money-back guarantee on all new hosting accounts. If you're not
                satisfied with our service within the first 30 days, we'll provide a full refund.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Applies to hosting fees only (domain registrations are non-refundable)</li>
                <li>• Must be requested within 30 days of account activation</li>
                <li>• Account must not have violated our Terms of Service</li>
                <li>• Refunds processed within 5-10 business days</li>
              </ul>
            </div>
          </section>

          {/* Contract Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contract and Cancellation Terms</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contract Duration</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Hosting services are billed annually</li>
                  <li>• Domain registrations are for minimum 1-year periods</li>
                  <li>• Development projects have fixed-term contracts</li>
                  <li>• Services auto-renew unless cancelled 30 days before expiry</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• 30 days written notice required for service cancellation</li>
                  <li>• No refunds for partial months or early cancellation after 30-day guarantee period</li>
                  <li>• Data backup provided for 30 days after cancellation</li>
                  <li>• Domain transfers facilitated at no additional cost</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal and Jurisdiction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Terms and Jurisdiction</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Governing Law</h3>
                <p className="text-gray-700">
                  These Terms of Service are governed by South African law. Any disputes will be
                  resolved in the appropriate South African courts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                <p className="text-gray-700">
                  Our liability is limited to the fees paid for the affected service period.
                  We are not liable for indirect, consequential, or incidental damages.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Changes to Terms</h3>
                <p className="text-gray-700">
                  We may update these terms with 30 days notice to clients. Continued use of
                  our services constitutes acceptance of updated terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> support@ubanihosting.co.za</p>
              <p><strong>Phone:</strong> 074 895 3557</p>
              <p><strong>Address:</strong> Johannesburg, South Africa</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;