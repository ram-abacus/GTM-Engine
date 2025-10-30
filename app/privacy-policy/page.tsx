'use client';
import type React from "react"
import Footer from '@/components/footer';
import { Header } from "@/components/header";


export default function PrivacyPolicy() {
    
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Page Hero Section */}
      <div className="text-white py-32 px-6 pt-40" style={{ backgroundColor: 'rgb(15, 23, 42)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p style={{ color: 'rgb(209, 213, 219)' }}>Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              1. Introduction
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Abacus Desk GTM Engine ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
            </p>
            <p className="mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Site. By accessing or using GTM Engine, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'rgb(15, 23, 42)' }}>
              2.1 Information You Provide Directly
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>Contact information (name, email, phone number, company name)</li>
              <li>Account information (username, password, profile details)</li>
              <li>Communication preferences and inquiry details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Support tickets and customer service interactions</li>
              <li>GTM strategy and business goals information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'rgb(15, 23, 42)' }}>
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>IP address and device identifiers</li>
              <li>Browser type, version, and operating system</li>
              <li>Pages visited, time spent on pages, and clickstream data</li>
              <li>Referring/exit pages and URLs</li>
              <li>Geographic location (general)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              3. How We Use Your Information
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>Provide, maintain, and improve our GTM Engine services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications, newsletters, and updates</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Analyze usage trends and improve user experience</li>
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Comply with legal obligations and enforce agreements</li>
              <li>Personalize and improve the Site content and functionality</li>
              <li>Develop and refine our GTM strategies</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              4. How We Share Your Information
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our Site and conducting our business</li>
              <li><strong>Business Transfers:</strong> During merger, acquisition, bankruptcy, or asset sale</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect our legal rights</li>
              <li><strong>With Your Consent:</strong> For purposes you specifically authorize</li>
              <li><strong>Analytics Partners:</strong> To understand user behavior and improve services</li>
            </ul>
            <p className="mt-4" style={{ color: 'rgb(107, 114, 128)' }}>We do not sell your personal information to third parties.</p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              5. Data Security
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We implement appropriate technical, administrative, and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and access controls. However, no security system is impenetrable. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              6. Your Privacy Rights
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to data portability</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p className="mt-4" style={{ color: 'rgb(107, 114, 128)' }}>To exercise any of these rights, contact us at support@abacusdesk.co.in</p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              7. Cookies and Tracking Technologies
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. For more details, please refer to our Cookie Policy.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              8. Third-Party Links
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Our Site may contain links to third-party websites and applications. This Privacy Policy applies only to our Site. We are not responsible for the privacy practices of other websites. We encourage you to review their privacy policies before sharing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              9. Children's Privacy
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Our Site is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly. If you believe a child has provided information to us, please contact us immediately.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of material changes by updating the "Last Updated" date. Your continued use of the Site after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              11. Contact Us
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgb(15, 23, 42, 0.05)' }}>
              <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}><strong>Abacus Desk - GTM Engine</strong></p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Email: support@abacusdesk.co.in</p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Website: www.abacusdesk.com</p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Response time: Within 7 business days</p>
            </div>
          </section>

        </div>
      </div>

    <Footer/>

    </div>
  );
}