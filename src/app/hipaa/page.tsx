/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { StandardNav } from '../../components/StandardNav'
import { StandardFooter } from '../../components/StandardFooter'

export const metadata: Metadata = {
  title: 'HIPAA Compliance - Ausmo AAC',
  description: 'HIPAA compliance information for Ausmo AAC - Health information privacy and security.',
}

export default function HIPAACompliance() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StandardNav />

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">HIPAA Compliance Statement</h1>
        
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-lg shadow-lg p-8 space-y-8 border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What is HIPAA?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Health Insurance Portability and Accountability Act (HIPAA) is a U.S. federal law that establishes 
              national standards for protecting the privacy and security of Protected Health Information (PHI). HIPAA 
              applies to healthcare providers, health plans, healthcare clearinghouses, and their business associates.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC is committed to maintaining HIPAA compliance to ensure the privacy and security of health 
              information for all users, particularly when working with healthcare providers and therapists who are 
              HIPAA-covered entities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Our HIPAA Compliance Framework</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Administrative Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Security management processes with risk analysis and mitigation</li>
              <li>Assigned security responsibility with dedicated privacy officers</li>
              <li>Workforce security training and authorization procedures</li>
              <li>Information access management with role-based controls</li>
              <li>Security awareness and training programs</li>
              <li>Security incident response procedures</li>
              <li>Contingency planning and disaster recovery</li>
              <li>Regular compliance audits and assessments</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Physical Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Secure data center facilities with restricted access</li>
              <li>Workstation security policies and procedures</li>
              <li>Device and media controls for data storage</li>
              <li>Secure disposal procedures for PHI</li>
              <li>Environmental controls and monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Technical Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Access controls with unique user identification</li>
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Audit controls and logging of all system activities</li>
              <li>Integrity controls to ensure data is not altered or destroyed</li>
              <li>Automatic log-off after periods of inactivity</li>
              <li>Encryption and decryption mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Protected Health Information (PHI)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When used by HIPAA-covered entities (such as healthcare providers and therapists), Ausmo AAC may handle 
              the following types of PHI:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Patient/child names and contact information</li>
              <li>Medical diagnoses and treatment information</li>
              <li>Therapy session notes and progress reports</li>
              <li>IEP goals and treatment plans</li>
              <li>Communication patterns and AAC usage data</li>
              <li>Healthcare provider communications</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All PHI is protected with the same rigorous security measures, regardless of the user role accessing the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Business Associate Agreements (BAA)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC enters into Business Associate Agreements with HIPAA-covered entities who use our platform. 
              Our BAAs include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Permitted and required uses of PHI</li>
              <li>Safeguards to prevent unauthorized use or disclosure</li>
              <li>Breach notification requirements</li>
              <li>PHI access, amendment, and accounting obligations</li>
              <li>Subcontractor requirements and agreements</li>
              <li>Termination provisions and data return/destruction</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Healthcare providers and covered entities can request a BAA by contacting us at{' '}
              <a href="mailto:compliance@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                compliance@ausmoapp.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Encryption and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Encryption Standards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>End-to-end encryption for messaging and communications</li>
              <li>Encrypted backups with secure key management</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Access Controls</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Multi-factor authentication (MFA) support</li>
              <li>PIN security with biometric authentication (Face ID, Touch ID)</li>
              <li>Role-based access control (RBAC) with minimum necessary access</li>
              <li>Session timeout and automatic logout</li>
              <li>Audit logging of all PHI access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Breach Notification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In accordance with the HIPAA Breach Notification Rule, Ausmo AAC will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Notify affected covered entities within 60 days of discovery of a breach</li>
              <li>Provide detailed information about the breach, including affected individuals</li>
              <li>Document all security incidents and breach assessments</li>
              <li>Assist covered entities in fulfilling their notification obligations</li>
              <li>Implement corrective actions to prevent future breaches</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We maintain a comprehensive incident response plan and conduct regular security assessments to minimize 
              the risk of breaches.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. User Rights Under HIPAA</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When your healthcare provider uses Ausmo AAC, you have the following rights regarding your PHI:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Right to access and obtain copies of your PHI</li>
              <li>Right to request amendments to your PHI</li>
              <li>Right to an accounting of disclosures</li>
              <li>Right to request restrictions on uses and disclosures</li>
              <li>Right to request confidential communications</li>
              <li>Right to file a complaint if you believe your privacy rights have been violated</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To exercise these rights, please contact your healthcare provider directly or reach out to our 
              Privacy Officer at{' '}
              <a href="mailto:privacy@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                privacy@ausmoapp.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Subcontractors and Third Parties</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC carefully vets all subcontractors and third-party service providers who may have access to PHI:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>All subcontractors must sign Business Associate Agreements</li>
              <li>Regular security assessments of subcontractor practices</li>
              <li>Limited access to PHI based on minimum necessary principle</li>
              <li>Contractual obligations for data protection and breach notification</li>
              <li>Regular compliance audits and reviews</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Training and Workforce Compliance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All Ausmo AAC employees and contractors with access to PHI receive:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Comprehensive HIPAA training upon hiring</li>
              <li>Annual refresher training and updates</li>
              <li>Security awareness training</li>
              <li>Incident response training</li>
              <li>Role-specific privacy and security training</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Employees must sign confidentiality agreements and are subject to disciplinary action for HIPAA violations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Audit and Compliance Monitoring</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC maintains comprehensive audit capabilities:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Detailed logging of all PHI access and modifications</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Penetration testing by independent third parties</li>
              <li>Compliance reviews and risk assessments</li>
              <li>Continuous monitoring of security controls</li>
              <li>Annual HIPAA compliance assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Data Retention and Disposal</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo AAC follows strict data retention and disposal policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>PHI retained according to covered entity requirements and legal obligations</li>
              <li>Secure deletion methods that make data unrecoverable</li>
              <li>Documented disposal procedures for all media types</li>
              <li>Regular purging of unnecessary data</li>
              <li>Backup data securely destroyed when no longer needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For questions about HIPAA compliance, Business Associate Agreements, or to report a security concern:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 p-4 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Privacy Officer:</strong>{' '}
                <a href="mailto:privacy@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  privacy@ausmoapp.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Compliance Officer:</strong>{' '}
                <a href="mailto:compliance@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  compliance@ausmoapp.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Security Incidents:</strong>{' '}
                <a href="mailto:security@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  security@ausmoapp.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Updates to This Statement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update this HIPAA Compliance Statement periodically to reflect changes in our practices, 
              technologies, or legal requirements. Covered entities will be notified of material changes that 
              affect their Business Associate Agreements.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The current version is always available at{' '}
              <a href="https://ausmoapp.com/hipaa" className="text-purple-600 dark:text-purple-400 hover:underline">
                ausmoapp.com/hipaa
              </a>
            </p>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4">
            <p className="text-blue-800 dark:text-blue-200 font-semibold">
              Additional Resources
            </p>
            <ul className="mt-2 space-y-1 text-blue-700 dark:text-blue-300">
              <li>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/data-rights" className="hover:underline">Data Rights Request</Link>
              </li>
              <li>
                <Link href="/contact-support" className="hover:underline">Contact Support</Link>
              </li>
              <li>
                <a 
                  href="https://www.hhs.gov/hipaa/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  U.S. Department of Health & Human Services - HIPAA Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <StandardFooter />
    </main>
  )
}
