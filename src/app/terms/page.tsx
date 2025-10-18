/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Ausmo AAC',
  description: 'Terms of Service for Ausmo AAC - User agreement and service terms.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <div className="border-b pb-4">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Ausmo AAC ("the Service"), you agree to be bound by these Terms of Service 
              ("Terms"). If you do not agree to these Terms, you may not use the Service.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms apply to all users of the Service, including parents, caregivers, educators, 
              and healthcare professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Ausmo AAC is an Augmentative and Alternative Communication application designed to help individuals 
              with communication difficulties express themselves effectively. The Service includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Symbol-based communication tools</li>
              <li>Custom image upload functionality</li>
              <li>Text-to-speech capabilities</li>
              <li>Audio recording features</li>
              <li>Express pages for quick communication</li>
              <li>Accessibility features for various needs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>One person may not maintain multiple accounts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Age Requirements</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Users under 13 must have verifiable parental consent</li>
              <li>Users 13-17 must have parental supervision and consent</li>
              <li>We comply with COPPA and other applicable children's privacy laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Permitted Uses</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Personal communication assistance</li>
              <li>Educational and therapeutic purposes</li>
              <li>Family and caregiver support</li>
              <li>Professional healthcare applications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Prohibited Uses</h3>
            <p className="text-gray-700 mb-4">You may not use the Service to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Use the Service for commercial purposes without permission</li>
              <li>Share account credentials with unauthorized users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User-Generated Content</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Content Ownership</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of content you upload to the Service, including images, audio recordings, 
              and custom configurations. By uploading content, you grant us a limited license to store, 
              process, and display your content as necessary to provide the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Content Standards</h3>
            <p className="text-gray-700 mb-4">All uploaded content must:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Be appropriate for all ages</li>
              <li>Not contain offensive, harmful, or illegal material</li>
              <li>Respect privacy rights of individuals depicted</li>
              <li>Not infringe on third-party intellectual property</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Content Moderation</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to review, modify, or remove content that violates these Terms. 
              We may also suspend or terminate accounts for repeated violations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Our Rights</h3>
            <p className="text-gray-700 mb-4">
              The Service, including its design, functionality, and content (excluding user-generated content), 
              is owned by Ausmo AAC and protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Third-Party Content</h3>
            <p className="text-gray-700 mb-4">
              The Service may include third-party symbols, images, or other content licensed for use in 
              communication applications. Such content remains the property of its respective owners.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 License to Use</h3>
            <p className="text-gray-700 mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use the Service in 
              accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed 
              by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-gray-700 mb-4">
              We comply with applicable privacy laws including GDPR, CCPA, COPPA, and other relevant regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Subscription Fees</h3>
            <p className="text-gray-700 mb-4">
              Some features of the Service may require a paid subscription. Subscription fees are billed 
              in advance and are non-refundable except as required by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Free Trial</h3>
            <p className="text-gray-700 mb-4">
              We may offer free trials of premium features. Trial periods and conditions will be clearly 
              communicated at the time of enrollment.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Refunds</h3>
            <p className="text-gray-700 mb-4">
              Refunds are handled in accordance with applicable consumer protection laws and app store policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability</h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain continuous service availability but cannot guarantee uninterrupted access. 
              The Service may be temporarily unavailable due to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Scheduled maintenance</li>
              <li>Technical difficulties</li>
              <li>Force majeure events</li>
              <li>Third-party service disruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Medical Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> Ausmo AAC is a communication tool and is not intended to replace 
              professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
              professionals regarding communication therapy and treatment options.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Service Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              The Service is provided "as is" without warranties of any kind. We disclaim all warranties, 
              express or implied, including but not limited to merchantability, fitness for a particular purpose, 
              and non-infringement.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us or using the account deletion 
              feature in the app settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account if you violate these Terms or for other reasons 
              as permitted by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">11.3 Effect of Termination</h3>
            <p className="text-gray-700 mb-4">
              Upon termination, your right to use the Service ceases immediately. We may delete your 
              account data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Dispute Resolution Process</h3>
            <p className="text-gray-700 mb-4">
              Before pursuing legal action, we encourage users to contact us directly to resolve disputes. 
              We are committed to working with users to address concerns and find mutually acceptable solutions.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Arbitration</h3>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms or the Service may be resolved through binding arbitration 
              in accordance with the rules of [Arbitration Organization].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify users of material changes through 
              the app or via email. Continued use of the Service after changes constitutes acceptance of the 
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Legal Department:</strong></p>
              <p className="text-gray-700 mb-2">Email: legal@ausmoapp.com</p>
              <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-700 mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
              
              <p className="text-gray-700 mt-4 mb-2"><strong>General Support:</strong></p>
              <p className="text-gray-700 mb-2">Email: support@ausmoapp.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
