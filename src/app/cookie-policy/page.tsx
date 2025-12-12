/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { StandardNav } from '../../components/StandardNav'
import { StandardFooter } from '../../components/StandardFooter'

export const metadata: Metadata = {
  title: 'Cookie Policy - Ausmo AAC',
  description: 'Cookie Policy for Ausmo AAC - How we use cookies and similar technologies.',
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StandardNav />

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Cookie Policy</h1>
        
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-lg shadow-lg p-8 space-y-8 border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-[#8B95A1] dark:text-[#8B95A1]">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website or use our app. 
              They help us provide you with a better experience by remembering your preferences and understanding 
              how you use our services.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This Cookie Policy explains how Ausmo AAC uses cookies and similar technologies in compliance with 
              applicable laws including GDPR (EU), ePrivacy Directive, CCPA (California), and other relevant regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Essential Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> These cookies are necessary for the website and app to function properly.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Legal Basis:</strong> Legitimate interest (no consent required)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
                  <li>Session management and user authentication</li>
                  <li>Security features and fraud prevention</li>
                  <li>Load balancing and performance optimization</li>
                  <li>Remembering your language preferences</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Retention:</strong> Session cookies are deleted when you close your browser. 
                  Persistent cookies may last up to 1 year.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> Help us understand how users interact with our website and app.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Legal Basis:</strong> Consent (opt-in required)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
                  <li>Google Analytics (anonymized data)</li>
                  <li>Page views and user journey tracking</li>
                  <li>Feature usage statistics</li>
                  <li>Performance monitoring</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Retention:</strong> Up to 2 years
                </p>
              </div>

              <div className="border-l-4 border-accent-500 dark:border-accent-400 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Functional Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> Enhance your experience by remembering your preferences.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Legal Basis:</strong> Consent (opt-in required)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
                  <li>Accessibility settings (high contrast, font size)</li>
                  <li>Custom app configurations</li>
                  <li>Theme preferences</li>
                  <li>Communication board layouts</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Retention:</strong> Up to 1 year
                </p>
              </div>

              <div className="border-l-4 border-red-500 dark:border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> Deliver relevant advertisements and measure campaign effectiveness.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Legal Basis:</strong> Consent (opt-in required)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
                  <li>Social media integration</li>
                  <li>Advertising network cookies</li>
                  <li>Remarketing and retargeting</li>
                  <li>Conversion tracking</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Retention:</strong> Up to 1 year
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some cookies on our site are set by third-party services. We have no control over these cookies. 
              Here are the main third-party services we use:
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Google Analytics</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> Website analytics and user behavior tracking
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-secondary-600 dark:text-secondary-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-secondary-600 dark:text-secondary-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>
                </p>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">App Store Analytics</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Purpose:</strong> App download and usage statistics
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Platforms:</strong> Apple App Store, Google Play Store
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Data:</strong> Anonymized usage data and crash reports
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Your Cookie Choices</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">4.1 Cookie Consent Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you first visit our website, you'll see a cookie consent banner. You can:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Accept All:</strong> Allow all cookies for the best experience</li>
              <li><strong>Essential Only:</strong> Only allow necessary cookies</li>
              <li><strong>Customize:</strong> Choose specific cookie categories</li>
              <li><strong>Learn More:</strong> Read detailed information about each cookie type</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">4.2 Managing Your Preferences</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can change your cookie preferences at any time by:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Clicking the cookie settings link in our footer</li>
              <li>Using the cookie preference center in the app</li>
              <li>Clearing cookies in your browser settings</li>
              <li>Contacting us at privacy@ausmoapp.com</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">4.3 Browser Settings</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can also control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Regional Compliance</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">5.1 European Union (GDPR/ePrivacy)</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>We require explicit consent for non-essential cookies</li>
              <li>Consent must be freely given, specific, informed, and unambiguous</li>
              <li>You can withdraw consent at any time</li>
              <li>We provide clear information about cookie purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">5.2 California (CCPA/CPRA)</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>We provide opt-out mechanisms for cookie-based advertising</li>
              <li>We disclose cookie usage in our privacy policy</li>
              <li>We respect "Do Not Sell" requests</li>
              <li>We provide clear information about data sharing</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">5.3 Other Regions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We comply with applicable cookie laws in all jurisdictions where we operate, 
              including LGPD (Brazil), PIPL (China), POPIA (South Africa), and others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Children's Privacy (COPPA)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For users under 13, we:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Only use essential cookies necessary for app functionality</li>
              <li>Require verifiable parental consent for any additional cookies</li>
              <li>Do not use behavioral advertising cookies</li>
              <li>Provide parents with control over their child's cookie preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate security measures to protect cookie data:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Encryption of sensitive cookie data</li>
              <li>Secure transmission protocols (HTTPS)</li>
              <li>Regular security assessments</li>
              <li>Access controls and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or applicable laws. We will notify you of significant changes through our website or app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
            <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email: privacy@ausmoapp.com</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
            </div>
          </section>
        </div>
      </div>

      <StandardFooter />
    </main>
  )
}
