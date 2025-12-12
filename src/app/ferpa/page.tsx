/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { StandardNav } from '../../components/StandardNav'
import { StandardFooter } from '../../components/StandardFooter'

export const metadata: Metadata = {
  title: 'FERPA Compliance - Ausmo App',
  description: 'FERPA compliance information for Ausmo App - Educational records privacy and security.',
}

export default function FERPACompliance() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StandardNav />

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">FERPA Compliance Statement</h1>
        
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What is FERPA?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Family Educational Rights and Privacy Act (FERPA) is a U.S. federal law that protects the privacy 
              of student education records. FERPA applies to all schools and educational agencies that receive funds 
              under an applicable program of the U.S. Department of Education.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App is committed to maintaining FERPA compliance to ensure the privacy and security of student 
              education records for all users, particularly when working with schools, teachers, and educational 
              institutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Our FERPA Compliance Framework</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Data Privacy and Security</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Strict access controls limiting data to authorized personnel only</li>
              <li>End-to-end encryption for all student education records</li>
              <li>Secure data storage with AES-256 encryption at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication for all educational users</li>
              <li>Role-based access control (RBAC) aligned with legitimate educational interests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Parental Rights and Consent</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Mechanisms for schools to obtain and document parental consent</li>
              <li>Support for parent/guardian access to their child's records</li>
              <li>Processes for parents to request amendments to education records</li>
              <li>Clear disclosure of directory information policies</li>
              <li>Annual notification support for educational institutions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Authorized Disclosures</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Disclosure only to school officials with legitimate educational interests</li>
              <li>Proper consent mechanisms for non-exception disclosures</li>
              <li>Audit logging of all access to education records</li>
              <li>Compliance with exceptions under FERPA regulations (34 CFR § 99.31)</li>
              <li>No disclosure of education records to third parties without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Education Records Protected Under FERPA</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When used by educational institutions, Ausmo App may maintain the following types of education records:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Student names, dates of birth, and contact information</li>
              <li>Individualized Education Program (IEP) goals and objectives</li>
              <li>Progress reports and assessment data</li>
              <li>Communication logs between teachers, therapists, and students</li>
              <li>AAC usage data and communication development metrics</li>
              <li>Therapy session notes and educational interventions</li>
              <li>Special education services documentation</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All education records are maintained with the same rigorous security and privacy protections required 
              under FERPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. School Official Exception</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App operates as a "school official" with "legitimate educational interests" when providing services 
              to educational institutions. This means:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>We perform an institutional service that would otherwise be performed by school employees</li>
              <li>Access to education records is necessary to fulfill our contractual obligations</li>
              <li>We are under the direct control of the school regarding use and maintenance of education records</li>
              <li>We use education records only for authorized purposes specified by the school</li>
              <li>We do not disclose or re-disclose education records without school authorization</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Schools maintain full control over their students' education records and can revoke access at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Use and Restrictions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Permitted Uses</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App uses education records solely for the following authorized purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Providing AAC tools and communication support services</li>
              <li>Progress tracking and educational reporting</li>
              <li>Facilitating communication between authorized team members</li>
              <li>Supporting IEP goals and educational objectives</li>
              <li>System maintenance, technical support, and security</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Prohibited Uses</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App does NOT:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Sell or rent student education records to third parties</li>
              <li>Use education records for advertising or marketing purposes</li>
              <li>Create behavioral profiles for non-educational purposes</li>
              <li>Disclose education records without proper authorization</li>
              <li>Use data for purposes other than those specified in our agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Parental Rights Under FERPA</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When your child's school uses Ausmo App, parents and eligible students have the following rights:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Right to Inspect and Review</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Right to inspect and review education records maintained in Ausmo App</li>
              <li>Schools must provide access within 45 days of request</li>
              <li>Right to receive copies of records if distance prevents inspection</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Right to Request Amendment</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Right to request correction of inaccurate or misleading information</li>
              <li>Right to a hearing if the school declines the amendment request</li>
              <li>Right to place a statement in the record if disagreement persists</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 Right to Consent to Disclosures</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Right to provide or withhold consent for disclosure of education records</li>
              <li>Exceptions apply for school officials, emergency situations, and legal requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.4 Right to File a Complaint</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Parents have the right to file a complaint with the U.S. Department of Education if they believe the 
              school has violated FERPA:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Family Policy Compliance Office</p>
              <p>U.S. Department of Education</p>
              <p>400 Maryland Avenue, SW</p>
              <p>Washington, DC 20202-8520</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Data Security Measures</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Technical Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 encryption for data in transit</li>
              <li>Secure authentication with multi-factor authentication (MFA)</li>
              <li>PIN and biometric security options (Face ID, Touch ID)</li>
              <li>Automatic session timeout and logout</li>
              <li>Regular security audits and penetration testing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Administrative Safeguards</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Employee background checks and confidentiality agreements</li>
              <li>Regular privacy and security training for all staff</li>
              <li>Documented policies and procedures for data handling</li>
              <li>Incident response plans for security breaches</li>
              <li>Regular compliance audits and assessments</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Access Controls</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Role-based access control limiting data to authorized users</li>
              <li>Unique user identification and authentication</li>
              <li>Audit logging of all access to education records</li>
              <li>Principle of least privilege for data access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Data Retention and Deletion</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App follows strict data retention and deletion policies in compliance with FERPA:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Education records retained only as long as necessary for authorized purposes</li>
              <li>Schools maintain control over retention periods for their students' data</li>
              <li>Secure deletion methods ensuring data cannot be recovered</li>
              <li>Data deletion upon school request or contract termination</li>
              <li>Backup data destroyed according to documented schedules</li>
              <li>Annual review of data retention practices</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Schools can request deletion of specific records or all student data at any time by contacting{' '}
              <a href="mailto:schools@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                schools@ausmoapp.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Third-Party Service Providers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Any third-party service providers (subcontractors) that may have access to education records are:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Carefully vetted for security and privacy practices</li>
              <li>Bound by contractual obligations to protect education records</li>
              <li>Required to comply with FERPA requirements</li>
              <li>Prohibited from using education records for unauthorized purposes</li>
              <li>Subject to the same access restrictions as Ausmo App staff</li>
              <li>Regularly audited for compliance</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We maintain a current list of all subcontractors with potential access to education records, available 
              to schools upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Breach Notification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In the event of a security breach involving education records, Ausmo App will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Notify affected schools promptly upon discovery</li>
              <li>Provide detailed information about the nature and scope of the breach</li>
              <li>Identify affected students and records</li>
              <li>Describe steps taken to contain and remediate the breach</li>
              <li>Assist schools in fulfilling their notification obligations to parents</li>
              <li>Implement corrective actions to prevent future breaches</li>
              <li>Document all incidents for compliance and review</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Student Privacy Pledge</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App is committed to the Student Privacy Pledge, which includes commitments to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Not collect, maintain, use, or share student personal information beyond that needed for authorized educational purposes</li>
              <li>Not sell student personal information</li>
              <li>Not use or disclose student information for behavioral targeting of advertisements</li>
              <li>Not build a personal profile of a student other than for supporting authorized educational purposes</li>
              <li>Not make material changes to privacy policies without first providing notice and choice to schools</li>
              <li>Not knowingly retain student personal information beyond the time period required</li>
              <li>Collect, use, share, and retain student personal information only for purposes authorized by the school</li>
              <li>Disclose clearly our data retention and deletion policies</li>
              <li>Maintain comprehensive security program reasonably designed to protect student personal information</li>
              <li>Require subcontractors to adhere to these same commitments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Training and Compliance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All Ausmo App employees and contractors with access to education records receive:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Comprehensive FERPA training upon hiring</li>
              <li>Annual refresher training on student privacy requirements</li>
              <li>Regular updates on changes to FERPA regulations</li>
              <li>Security awareness and incident response training</li>
              <li>Role-specific training for handling education records</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All staff must sign confidentiality agreements and are subject to disciplinary action for violations 
              of student privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Transparency and Accountability</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ausmo App maintains transparency in our data practices:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Clear and accessible privacy policies and terms of service</li>
              <li>Regular reports to schools on data usage and security</li>
              <li>Annual compliance assessments and audits</li>
              <li>Open communication with schools about data practices</li>
              <li>Prompt responses to questions and concerns about student privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">14. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For questions about FERPA compliance, data practices, or to report a concern:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 p-4 mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Privacy Officer:</strong>{' '}
                <a href="mailto:privacy@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  privacy@ausmoapp.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Schools & Education:</strong>{' '}
                <a href="mailto:schools@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  schools@ausmoapp.com
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Security Incidents:</strong>{' '}
                <a href="mailto:security@ausmoapp.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                  security@ausmoapp.com
                </a>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Schools may also contact the Family Policy Compliance Office at the U.S. Department of Education 
              for questions about FERPA at{' '}
              <a href="https://studentprivacy.ed.gov" className="text-purple-600 dark:text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">
                studentprivacy.ed.gov
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">15. Updates to This Statement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update this FERPA Compliance Statement periodically to reflect changes in our practices, 
              technologies, or legal requirements. Schools will be notified of material changes that affect their 
              agreements with us.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The current version is always available at{' '}
              <a href="https://ausmoapp.com/ferpa" className="text-purple-600 dark:text-purple-400 hover:underline">
                ausmoapp.com/ferpa
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
                  href="https://studentprivacy.ed.gov" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  U.S. Department of Education - Student Privacy
                </a>
              </li>
              <li>
                <a 
                  href="https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  FERPA Official Guidance
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
