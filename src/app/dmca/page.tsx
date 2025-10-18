import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA Policy - Ausmo AAC',
  description: 'DMCA takedown policy and procedures for Ausmo AAC.',
}

export default function DMCAPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">DMCA Policy</h1>
        
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. DMCA Compliance</h2>
            <p className="text-gray-700 mb-4">
              Ausmo AAC respects intellectual property rights and complies with the Digital Millennium 
              Copyright Act (DMCA) and other applicable copyright laws. We have implemented procedures 
              to address claims of copyright infringement.
            </p>
            <p className="text-gray-700 mb-4">
              This policy applies to all content hosted on our website, mobile application, and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Reporting Copyright Infringement</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 DMCA Takedown Notice</h3>
            <p className="text-gray-700 mb-4">
              If you believe that your copyrighted work has been used in a way that constitutes copyright 
              infringement, please provide our designated agent with the following information:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Required Information:</h4>
              <ol className="list-decimal pl-4 text-gray-700 text-sm space-y-1">
                <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing and information sufficient to locate it</li>
                <li>Contact information (address, phone number, email) of the complaining party</li>
                <li>A statement that the complaining party has a good faith belief that use of the material is not authorized</li>
                <li>A statement that the information is accurate and that the complaining party is authorized to act on behalf of the copyright owner</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 How to Submit a Notice</h3>
            <p className="text-gray-700 mb-4">
              DMCA takedown notices should be submitted to our designated agent:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-800 font-semibold mb-2">Designated DMCA Agent:</p>
              <p className="text-blue-700 mb-1">Email: dmca@ausmoapp.com</p>
              <p className="text-blue-700 mb-1">Phone: +1 (555) 123-DMCA (3622)</p>
              <p className="text-blue-700 mb-1">Mail: 123 Communication Ave, Accessibility City, AC 12345</p>
              <p className="text-blue-700">Attn: DMCA Agent</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Response to DMCA Notices</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Processing Timeline</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>We will acknowledge receipt of your notice within 24 hours</li>
              <li>We will review the notice for completeness and validity</li>
              <li>If valid, we will remove or disable access to the allegedly infringing material</li>
              <li>We will notify the user who posted the material of the takedown</li>
              <li>We will provide the user with a copy of the DMCA notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Counter-Notification</h3>
            <p className="text-gray-700 mb-4">
              Users who believe their content was wrongfully removed may submit a counter-notification 
              with the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>A physical or electronic signature</li>
              <li>Identification of the material that was removed and its location</li>
              <li>A statement under penalty of perjury that the material was removed by mistake</li>
              <li>Contact information and consent to jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Repeat Infringer Policy</h2>
            <p className="text-gray-700 mb-4">
              In accordance with DMCA requirements, we maintain a policy for dealing with repeat infringers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>We track DMCA notices and user violations</li>
              <li>Users who repeatedly infringe copyrights may have their accounts terminated</li>
              <li>We reserve the right to suspend or terminate accounts at our discretion</li>
              <li>We may implement additional restrictions for repeat offenders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User-Generated Content</h2>
            <p className="text-gray-700 mb-4">
              Our platform allows users to upload custom images and audio content. Users are responsible 
              for ensuring they have the right to upload and use such content:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Users must own the rights to uploaded content or have proper authorization</li>
              <li>Users may not upload copyrighted material without permission</li>
              <li>We provide tools for users to report copyright violations</li>
              <li>We encourage users to use original content or properly licensed materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Fair Use Considerations</h2>
            <p className="text-gray-700 mb-4">
              We recognize that fair use may apply to certain uses of copyrighted material, particularly 
              in educational and therapeutic contexts:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Educational use for communication therapy</li>
              <li>Personal use for individuals with disabilities</li>
              <li>Transformative use in communication applications</li>
              <li>Limited use for accessibility purposes</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, fair use determinations are complex and should be made by qualified legal counsel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Considerations</h2>
            <p className="text-gray-700 mb-4">
              While this policy focuses on DMCA compliance, we also respect international copyright laws:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>We comply with applicable copyright laws in all jurisdictions where we operate</li>
              <li>We respect international treaties and agreements</li>
              <li>We work with international copyright holders and organizations</li>
              <li>We implement region-specific copyright protection measures where required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. False Claims</h2>
            <p className="text-gray-700 mb-4">
              Submitting false DMCA notices is illegal and may result in liability:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>False claims may result in damages and attorney fees</li>
              <li>We may pursue legal action against false claimants</li>
              <li>We maintain records of all DMCA notices for legal purposes</li>
              <li>We cooperate with law enforcement in cases of false claims</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>DMCA Agent:</strong></p>
              <p className="text-gray-700 mb-2">Email: dmca@ausmoapp.com</p>
              <p className="text-gray-700 mb-2">Phone: +1 (555) 123-DMCA (3622)</p>
              <p className="text-gray-700 mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
              <p className="text-gray-700 mb-2">Attn: DMCA Agent</p>
              
              <p className="text-gray-700 mt-4 mb-2"><strong>General Legal:</strong></p>
              <p className="text-gray-700 mb-2">Email: legal@ausmoapp.com</p>
              <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this DMCA Policy from time to time to reflect changes in law or our practices. 
              We will notify users of material changes through our website or app.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
