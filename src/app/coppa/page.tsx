/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export const metadata: Metadata = {
  title: 'COPPA Compliance - Ausmo AAC',
  description: 'COPPA compliance information for Ausmo AAC - Children\'s privacy protection.',
}

export default function COPPACompliance() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-soft sticky top-0 z-50">
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
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">COPPA Compliance Statement</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 space-y-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What is COPPA?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Children's Online Privacy Protection Act (COPPA) is a U.S. federal law that protects the 
              privacy of children under 13 years of age. COPPA requires websites and online services to 
              obtain verifiable parental consent before collecting, using, or disclosing personal information 
              from children.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC is designed to help children with communication difficulties, and we take our 
              responsibility to protect children's privacy very seriously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Our Commitment to Children's Privacy</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 mb-4">
              <p className="text-blue-800 dark:text-blue-200 font-semibold">
                We are committed to protecting the privacy and safety of children who use our services.
              </p>
            </div>
            
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>We never knowingly collect personal information from children under 13 without verifiable parental consent</li>
              <li>We limit data collection to what is necessary for app functionality</li>
              <li>We provide parents with control over their child's information</li>
              <li>We use industry-standard security measures to protect children's data</li>
              <li>We comply with all applicable children's privacy laws worldwide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Information We Collect from Children</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3.1 With Parental Consent</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may collect the following information from children under 13 only with verifiable parental consent:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Account Information:</strong> Child's first name (no last name required)</li>
              <li><strong>Communication Data:</strong> Custom images, audio recordings, and communication boards</li>
              <li><strong>Usage Data:</strong> App usage patterns to improve functionality</li>
              <li><strong>Support Data:</strong> Information provided when seeking help or support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3.2 Without Parental Consent</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may collect limited information without parental consent only for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Internal Operations:</strong> App functionality and security</li>
              <li><strong>Support:</strong> Responding to a one-time request for support</li>
              <li><strong>Safety:</strong> Protecting the safety of a child</li>
              <li><strong>Legal Compliance:</strong> Complying with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. How We Obtain Parental Consent</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4.1 Verifiable Consent Methods</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the following methods to obtain verifiable parental consent:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Email Verification:</strong> Parent receives email with verification link</li>
              <li><strong>Phone Verification:</strong> Parent receives SMS with verification code</li>
              <li><strong>Credit Card Verification:</strong> Small charge to verify parent identity</li>
              <li><strong>Video Call:</strong> Live video verification with parent</li>
              <li><strong>Government ID:</strong> Verification using government-issued identification</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4.2 Consent Process</h3>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Parent creates account and provides contact information</li>
              <li>Parent receives verification request via chosen method</li>
              <li>Parent completes verification process</li>
              <li>Parent reviews and accepts our Privacy Policy and Terms of Service</li>
              <li>Parent provides specific consent for child's account creation</li>
              <li>Child's account is activated with parental oversight</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. How We Use Children's Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use children's personal information only for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Service Provision:</strong> To provide AAC communication services</li>
              <li><strong>Personalization:</strong> To customize the app experience for the child</li>
              <li><strong>Support:</strong> To provide technical support and assistance</li>
              <li><strong>Safety:</strong> To protect the child and other users</li>
              <li><strong>Improvement:</strong> To improve our services (using anonymized data)</li>
            </ul>
            
            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 dark:border-accent-400 p-4 mb-4">
              <p className="text-accent-800 dark:text-accent-200 font-semibold">
                We never use children's information for advertising, marketing, or behavioral tracking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not share, sell, or rent children's personal information to third parties, except:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate the app (under strict confidentiality agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect the child's safety</li>
              <li><strong>Parental Request:</strong> When specifically requested by the parent</li>
              <li><strong>Business Transfer:</strong> In case of merger or acquisition (with continued protection)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Parental Rights and Controls</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">7.1 Parental Rights</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Parents have the following rights regarding their child's information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Review:</strong> Request to see what information we have collected about their child</li>
              <li><strong>Delete:</strong> Request deletion of their child's personal information</li>
              <li><strong>Modify:</strong> Request correction of inaccurate information</li>
              <li><strong>Refuse:</strong> Refuse further collection or use of their child's information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">7.2 How to Exercise Rights</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Parents can exercise their rights by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Logging into their parent account dashboard</li>
              <li>Using our <a href="/data-rights" className="text-blue-600 dark:text-blue-400 hover:underline">Data Rights Request Form</a></li>
              <li>Contacting us directly at coppa@ausmoapp.com</li>
              <li>Calling our COPPA compliance hotline: +1 (555) 123-COPPA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Data Security and Retention</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">8.1 Security Measures</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement enhanced security measures for children's data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>End-to-end encryption for all communications</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security audits and assessments</li>
              <li>Staff training on children's privacy protection</li>
              <li>Incident response procedures for data breaches</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">8.2 Data Retention</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We retain children's personal information only as long as necessary:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Active Accounts:</strong> Until account deletion or 2 years of inactivity</li>
              <li><strong>Deleted Accounts:</strong> 30 days for recovery purposes, then permanent deletion</li>
              <li><strong>Support Data:</strong> 1 year after resolution</li>
              <li><strong>Legal Requirements:</strong> As required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. International Compliance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In addition to COPPA, we comply with other children's privacy laws worldwide:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>GDPR (EU):</strong> Enhanced protection for children under 16</li>
              <li><strong>PIPEDA (Canada):</strong> Privacy protection for minors</li>
              <li><strong>LGPD (Brazil):</strong> Children's data protection requirements</li>
              <li><strong>PIPL (China):</strong> Special protection for minors under 14</li>
              <li><strong>POPIA (South Africa):</strong> Protection of children's personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>COPPA Compliance Officer:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Email: coppa@ausmoapp.com</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Phone: +1 (555) 123-COPPA (2677)</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2"><strong>Federal Trade Commission:</strong></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Website: <a href="https://www.ftc.gov" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">www.ftc.gov</a></p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">COPPA Hotline: 1-877-FTC-HELP</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Updates to This Statement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update this COPPA Compliance Statement from time to time. We will notify parents 
              of material changes and may require renewed consent for continued data collection.
            </p>
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
