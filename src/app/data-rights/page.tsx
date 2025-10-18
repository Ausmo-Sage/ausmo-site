/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Rights Request - Ausmo AAC',
  description: 'Exercise your data protection rights with Ausmo AAC.',
}

export default function DataRights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Rights Request</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-800 font-semibold">
              You have the right to control your personal information. Use this form to exercise your data protection rights.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Data Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="font-semibold text-green-800 mb-2">Access & Portability</h3>
                <ul className="list-disc pl-4 text-green-700 text-sm">
                  <li>Request copies of your personal data</li>
                  <li>Receive data in a structured format</li>
                  <li>Transfer data to another service</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Deletion & Correction</h3>
                <ul className="list-disc pl-4 text-red-700 text-sm">
                  <li>Request deletion of your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Update outdated information</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Restriction & Objection</h3>
                <ul className="list-disc pl-4 text-yellow-700 text-sm">
                  <li>Limit processing of your data</li>
                  <li>Object to certain data uses</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h3 className="font-semibold text-purple-800 mb-2">Opt-Out & Control</h3>
                <ul className="list-disc pl-4 text-purple-700 text-sm">
                  <li>Opt-out of data sales</li>
                  <li>Control marketing communications</li>
                  <li>Manage cookie preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Request Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Request *
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a request type</option>
                  <option value="access">Access my personal data</option>
                  <option value="portability">Data portability (receive my data)</option>
                  <option value="correction">Correct inaccurate data</option>
                  <option value="deletion">Delete my personal data</option>
                  <option value="restriction">Restrict processing of my data</option>
                  <option value="objection">Object to processing</option>
                  <option value="withdraw-consent">Withdraw consent</option>
                  <option value="opt-out-sale">Opt-out of data sales (CCPA)</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide any additional details about your request..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="verification" className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Method *
                </label>
                <select
                  id="verification"
                  name="verification"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select verification method</option>
                  <option value="email">Email verification</option>
                  <option value="phone">Phone verification</option>
                  <option value="id">Government ID verification</option>
                  <option value="account">Account login verification</option>
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Response Time</h3>
                <ul className="list-disc pl-4 text-gray-700 text-sm">
                  <li><strong>GDPR (EU):</strong> We will respond within 1 month</li>
                  <li><strong>CCPA (California):</strong> We will respond within 45 days</li>
                  <li><strong>Other jurisdictions:</strong> We will respond as required by applicable law</li>
                </ul>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                  I understand that this request will be processed in accordance with applicable data protection laws 
                  and that I may need to provide additional verification information. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Data Rights Request
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Contact Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-700 mb-2">privacy@ausmoapp.com</p>
                <p className="text-gray-700 text-sm">Include "Data Rights Request" in the subject line</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-700 mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-700 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Mail</h3>
                <p className="text-gray-700 mb-2">123 Communication Ave</p>
                <p className="text-gray-700 mb-2">Accessibility City, AC 12345</p>
                <p className="text-gray-700 text-sm">Attn: Data Protection Officer</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">In-App</h3>
                <p className="text-gray-700 mb-2">Settings → Privacy → Data Rights</p>
                <p className="text-gray-700 text-sm">Available in the mobile app</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Happens Next?</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li><strong>Confirmation:</strong> You'll receive an email confirmation within 24 hours</li>
              <li><strong>Verification:</strong> We may request additional verification information</li>
              <li><strong>Processing:</strong> Your request will be processed according to applicable law</li>
              <li><strong>Response:</strong> You'll receive a response within the required timeframe</li>
              <li><strong>Follow-up:</strong> If needed, we'll work with you to complete your request</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">How long does it take to process my request?</h3>
                <p className="text-gray-700 text-sm">
                  Response times vary by jurisdiction: GDPR requires 1 month, CCPA requires 45 days, 
                  and other laws have their own requirements. We'll respond as quickly as possible.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">Is there a fee for data requests?</h3>
                <p className="text-gray-700 text-sm">
                  Generally no, but we may charge a reasonable fee for excessive or repetitive requests 
                  as permitted by law.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">What if I'm not satisfied with the response?</h3>
                <p className="text-gray-700 text-sm">
                  You have the right to lodge a complaint with your local data protection authority 
                  or supervisory authority.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
