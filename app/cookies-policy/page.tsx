'use client';
import type React from "react"
import Footer from '@/components/footer';
import { Header } from '@/components/header';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Hero Section */}
      <div className="text-white py-32 px-6 pt-40" style={{ backgroundColor: 'rgb(15, 23, 42)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <p style={{ color: 'rgb(209, 213, 219)' }}>Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              1. What Are Cookies?
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Cookies are small text files stored on your device when you visit a website. They help websites recognize your device, remember your preferences, and improve your browsing experience. Cookies can be stored for different durations and serve various purposes.
            </p>
          </section>

          {/* Cookie Types */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              2. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 pb-2 border-b-2" style={{ color: 'rgb(15, 23, 42)', borderColor: 'rgb(37, 99, 235)' }}>
              2.1 Necessary Cookies
            </h3>
            <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}>Always Active</p>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              These cookies are essential for the Site to function properly. They enable core functionality such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>User authentication and login sessions</li>
              <li>Security and fraud prevention</li>
              <li>Remembering your cookie preferences</li>
              <li>Basic site operations and navigation</li>
            </ul>
            <p className="mt-3 text-sm italic" style={{ color: 'rgb(107, 114, 128)' }}>
              These cookies cannot be disabled as they are required for the Site to work.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 pb-2 border-b-2" style={{ color: 'rgb(15, 23, 42)', borderColor: 'rgb(37, 99, 235)' }}>
              2.2 Analytics Cookies
            </h3>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              These cookies help us understand how users interact with our Site. They collect information about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>Pages visited and user journey patterns</li>
              <li>Time spent on specific pages</li>
              <li>Click behavior and user engagement</li>
              <li>Device and browser information</li>
              <li>Geographic location (general)</li>
            </ul>
            <p className="mt-3" style={{ color: 'rgb(107, 114, 128)' }}><strong>Tools Used:</strong> Google Analytics, Hotjar</p>
            <p className="text-sm italic" style={{ color: 'rgb(107, 114, 128)' }}>Data is anonymized and aggregated.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3 pb-2 border-b-2" style={{ color: 'rgb(15, 23, 42)', borderColor: 'rgb(37, 99, 235)' }}>
              2.3 Marketing Cookies
            </h3>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              These cookies track your activity across websites to deliver personalized advertising and marketing content relevant to your interests. They may be set by us or third-party partners and are used for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li>Retargeting and conversion tracking</li>
              <li>Creating user segments for targeted campaigns</li>
              <li>Measuring ad performance and ROI</li>
              <li>Personalizing content based on interests</li>
            </ul>
            <p className="mt-3" style={{ color: 'rgb(107, 114, 128)' }}><strong>Tools Used:</strong> Facebook Pixel, Google Ads, LinkedIn Conversion Tracking</p>
          </section>

          {/* Cookie Table */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              3. Detailed Cookie Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(37, 99, 235)' }}>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-white">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-white">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-white">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>_ga</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Analytics</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>2 years</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Google Analytics user ID</td>
                  </tr>
                  <tr style={{ backgroundColor: 'rgb(15, 23, 42, 0.02)' }}>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>_gid</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Analytics</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>24 hours</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Google Analytics session ID</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>cookieConsent</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Necessary</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>1 year</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Stores your cookie preferences</td>
                  </tr>
                  <tr style={{ backgroundColor: 'rgb(15, 23, 42, 0.02)' }}>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>PHPSESSID</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Necessary</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Session</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Server session identification</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>fbp</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Marketing</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>3 months</td>
                    <td className="border border-gray-300 px-4 py-2" style={{ color: 'rgb(107, 114, 128)' }}>Facebook conversion tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              4. Third-Party Cookies
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Third-party service providers may set cookies on your device through our Site. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li><strong>Google:</strong> Analytics and advertising services</li>
              <li><strong>Facebook/Meta:</strong> Conversion tracking and retargeting</li>
              <li><strong>LinkedIn:</strong> Professional networking and conversion tracking</li>
              <li><strong>Hotjar:</strong> User experience and heatmap analytics</li>
            </ul>
            <p className="mt-4" style={{ color: 'rgb(107, 114, 128)' }}>
              We do not control these third-party cookies. Please refer to their privacy policies for more information.
            </p>
          </section>

          {/* How to Manage Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              5. How to Manage Cookies
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'rgb(15, 23, 42)' }}>
              5.1 Browser Settings
            </h3>
            <p style={{ color: 'rgb(107, 114, 128)' }}>You can control cookies through your browser settings:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'rgb(15, 23, 42)' }}>
              5.2 Our Cookie Consent Tool
            </h3>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              Use our cookie consent banner to manage your preferences directly. You can access it anytime through our Site's footer.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'rgb(15, 23, 42)' }}>
              5.3 Opt-Out of Analytics
            </h3>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="hover:underline" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(37, 99, 235)' }}>Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          {/* Cookie Retention */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              6. Cookie Retention
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We retain cookies for varying periods depending on their purpose. Necessary cookies are retained for as long as you use the Site. Analytics and marketing cookies are typically retained for 6-24 months. You can delete cookies at any time through your browser settings.
            </p>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              7. Legal Basis for Cookie Usage
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We use cookies based on the following legal foundations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3" style={{ color: 'rgb(107, 114, 128)' }}>
              <li><strong>Consent:</strong> For analytics and marketing cookies</li>
              <li><strong>Legitimate Interests:</strong> To improve Site functionality and user experience</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              8. Changes to This Cookie Policy
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>
              We may update this Cookie Policy to reflect changes in our practices or technologies. Material changes will be communicated through our Site or via email. Your continued use of the Site following updates constitutes your acceptance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
              9. Contact Us
            </h2>
            <p style={{ color: 'rgb(107, 114, 128)' }}>If you have questions about our cookie practices, please contact us:</p>
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'rgb(15, 23, 42, 0.05)' }}>
              <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}><strong>Abacus Desk - GTM Engine</strong></p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Email: support@abacusdesk.co.in</p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Website: www.abacusdesk.com</p>
              <p style={{ color: 'rgb(107, 114, 128)' }}>Response time: Within 7 business days</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}