/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Privacy Policy - Ausmo AAC',
  description: 'Privacy Policy for Ausmo AAC - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1F2E]">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-[#1A1F2E]/90 backdrop-blur-sm shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold gradient-text">Ausmo AAC</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link href="/#features" className="text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors duration-200 text-lg">Features</Link>
                <Link href="/#download" className="text-black dark:text-white hover:text-secondary-600 dark:hover:text-secondary-400 font-semibold transition-colors duration-200 text-lg">Download</Link>
                <Link href="/contact-support" className="text-black dark:text-white hover:text-lavender-600 dark:hover:text-lavender-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-8">Privacy Policy</h1>
        
        <div className="bg-[#FFF4E6] dark:bg-[#252B3B] rounded-lg shadow-sm p-8 space-y-8">
          <div className="border-b border-[#E8EEF2] dark:border-[#6B5B8C] pb-4">
            <p className="text-[#8B95A1] dark:text-[#8B95A1]">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-[#8B95A1] dark:text-[#8B95A1]">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">1. Introduction</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Ausmo AAC ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our mobile application and website.
            </p>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              This policy complies with applicable privacy laws including GDPR (EU), CCPA/CPRA (California), 
              LGPD (Brazil), PIPL (China), POPIA (South Africa), and other relevant regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Name and contact information (email, phone)</li>
              <li>Account credentials</li>
              <li>Profile information and preferences</li>
              <li>Communication data (messages, support requests)</li>
              <li>Payment information (processed securely by third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">2.2 Usage Data</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>App usage patterns and features accessed</li>
              <li>Device information (type, operating system, unique identifiers)</li>
              <li>IP address and location data (with consent)</li>
              <li>Crash reports and performance data</li>
              <li>Custom images and audio recordings uploaded by users</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">2.3 Cookies and Tracking</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Essential cookies for app functionality</li>
              <li>Analytics cookies (with consent)</li>
              <li>Marketing cookies (with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Service Provision:</strong> To provide and maintain our AAC communication services</li>
              <li><strong>Personalization:</strong> To customize the app experience and content</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide support</li>
              <li><strong>Analytics:</strong> To improve our services and user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Safety:</strong> To protect users and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              <li><strong>Contract Performance:</strong> To provide our AAC services</li>
              <li><strong>Legitimate Interest:</strong> For analytics and service improvement</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Service Providers:</strong> Trusted third parties who assist in app operation</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li><strong>Business Transfers:</strong> In case of merger or acquisition</li>
              <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">6. Data Security</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure data centers and infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">7. Data Retention</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We retain your personal information only as long as necessary for the purposes outlined in this policy:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Account Data:</strong> Until account deletion or 3 years of inactivity</li>
              <li><strong>Usage Data:</strong> Up to 2 years for analytics purposes</li>
              <li><strong>Support Data:</strong> Up to 1 year after resolution</li>
              <li><strong>Legal Requirements:</strong> As required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">8. Your Rights</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">8.1 GDPR Rights (EU Users)</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Restriction:</strong> Limit processing of your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">8.2 CCPA Rights (California Users)</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Right to Know:</strong> What personal information we collect and how we use it</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
            </ul>

            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <strong>To exercise your rights:</strong> Contact us at privacy@ausmoapp.com or use our 
              <a href="/data-rights" className="text-secondary-600 dark:text-secondary-400 hover:underline"> Data Rights Request Form</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">9. Children's Privacy (COPPA)</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Our app is designed for children and families. We comply with COPPA and other children's privacy laws:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>We require verifiable parental consent for children under 13</li>
              <li>We collect minimal information necessary for app functionality</li>
              <li>We do not share children's information with third parties without consent</li>
              <li>Parents can review, delete, or refuse further collection of their child's information</li>
            </ul>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              For more information, see our <a href="/coppa" className="text-secondary-600 dark:text-secondary-400 hover:underline">COPPA Compliance Statement</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">10. International Data Transfers</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
              <li>Adequacy decisions where applicable</li>
              <li>Appropriate technical and organizational measures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">11. Changes to This Policy</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes 
              through the app or via email. Continued use of our services after changes constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">12. Contact Information</h2>
            <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg border border-[#E8EEF2] dark:border-[#6B5B8C]">
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2"><strong>Data Protection Officer:</strong></p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email: privacy@ausmoapp.com</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
              
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mt-4 mb-2"><strong>EU Representative:</strong></p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email: eu-privacy@ausmoapp.com</p>
              
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mt-4 mb-2"><strong>Supervisory Authority:</strong></p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">You have the right to lodge a complaint with your local data protection authority.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold gradient-text">Ausmo AAC</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-base">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
            <Link href="/data-rights" className="hover:text-white transition-colors duration-200">Do Not Sell My Info</Link>
          </div>
          <p className="mt-6 text-gray-400">&copy; 2024 Ausmo AAC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
