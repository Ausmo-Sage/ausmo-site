/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { StandardNav } from '../../components/StandardNav'
import { StandardFooter } from '../../components/StandardFooter'

export const metadata: Metadata = {
  title: 'Data Rights Request - Ausmo AAC',
  description: 'Exercise your data protection rights with Ausmo AAC.',
}

export default function DataRights() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StandardNav />

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Data Rights Request</h1>
        
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-lg shadow-lg p-8 space-y-8 border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 mb-6">
            <p className="text-blue-800 dark:text-blue-200 font-semibold">
              You have the right to control your personal information. Use this form to exercise your data protection rights.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Data Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Access & Portability</h3>
                <ul className="list-disc pl-4 text-green-700 dark:text-green-300 text-sm">
                  <li>Request copies of your personal data</li>
                  <li>Receive data in a structured format</li>
                  <li>Transfer data to another service</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Deletion & Correction</h3>
                <ul className="list-disc pl-4 text-red-700 dark:text-red-300 text-sm">
                  <li>Request deletion of your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Update outdated information</li>
                </ul>
              </div>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 dark:border-accent-400 p-4">
                <h3 className="font-semibold text-accent-800 dark:text-accent-200 mb-2">Restriction & Objection</h3>
                <ul className="list-disc pl-4 text-accent-700 dark:text-accent-300 text-sm">
                  <li>Limit processing of your data</li>
                  <li>Object to certain data uses</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div className="bg-lavender-50 dark:bg-lavender-900/20 border-l-4 border-lavender-500 dark:border-lavender-400 p-4">
                <h3 className="font-semibold text-lavender-800 dark:text-lavender-200 mb-2">Opt-Out & Control</h3>
                <ul className="list-disc pl-4 text-lavender-700 dark:text-lavender-300 text-sm">
                  <li>Opt-out of data sales</li>
                  <li>Control marketing communications</li>
                  <li>Manage cookie preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Request Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-[#E8EEF2] dark:border-[#6B5B8C] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 bg-[#FFF4E6] dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2]"
                />
              </div>

              <div>
                <label htmlFor="requestType" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Type of Request *
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  required
                  className="w-full px-3 py-2 border border-[#E8EEF2] dark:border-[#6B5B8C] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 bg-[#FFF4E6] dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2]"
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
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Additional Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-[#E8EEF2] dark:border-[#6B5B8C] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 bg-[#FFF4E6] dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Please provide any additional details about your request..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="verification" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Verification Method *
                </label>
                <select
                  id="verification"
                  name="verification"
                  required
                  className="w-full px-3 py-2 border border-[#E8EEF2] dark:border-[#6B5B8C] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400 bg-[#FFF4E6] dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2]"
                >
                  <option value="">Select verification method</option>
                  <option value="email">Email verification</option>
                  <option value="phone">Phone verification</option>
                  <option value="id">Government ID verification</option>
                  <option value="account">Account login verification</option>
                </select>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Response Time</h3>
                <ul className="list-disc pl-4 text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
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
                <label htmlFor="consent" className="ml-2 text-sm text-[#2C3E50] dark:text-[#E8EDF2]">
                  I understand that this request will be processed in accordance with applicable data protection laws 
                  and that I may need to provide additional verification information. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Submit Data Rights Request
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Alternative Contact Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">privacy@ausmoapp.com</p>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">Include "Data Rights Request" in the subject line</p>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Phone</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">+1 (555) 123-4567</p>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Mail</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">123 Communication Ave</p>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Accessibility City, AC 12345</p>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">Attn: Data Protection Officer</p>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">In-App</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Settings → Privacy → Data Rights</p>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">Available in the mobile app</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Happens Next?</h2>
            <ol className="list-decimal pl-6 text-[#2C3E50] dark:text-[#E8EDF2] space-y-2">
              <li><strong>Confirmation:</strong> You'll receive an email confirmation within 24 hours</li>
              <li><strong>Verification:</strong> We may request additional verification information</li>
              <li><strong>Processing:</strong> Your request will be processed according to applicable law</li>
              <li><strong>Response:</strong> You'll receive a response within the required timeframe</li>
              <li><strong>Follow-up:</strong> If needed, we'll work with you to complete your request</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">How long does it take to process my request?</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  Response times vary by jurisdiction: GDPR requires 1 month, CCPA requires 45 days, 
                  and other laws have their own requirements. We'll respond as quickly as possible.
                </p>
              </div>

              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Is there a fee for data requests?</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  Generally no, but we may charge a reasonable fee for excessive or repetitive requests 
                  as permitted by law.
                </p>
              </div>

              <div className="border-l-4 border-accent-500 dark:border-accent-400 pl-4">
                <h3 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">What if I'm not satisfied with the response?</h3>
                <p className="text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  You have the right to lodge a complaint with your local data protection authority 
                  or supervisory authority.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <StandardFooter />
    </main>
  )
}
