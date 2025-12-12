import Link from 'next/link'
import { StandardNav } from '../../components/StandardNav'
import { StandardFooter } from '../../components/StandardFooter'

export default function HelpCenter() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <StandardNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions and get support for Ausmo AAC
          </p>
        </div>
      </section>

      {/* Help Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A1F2E]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Getting Started */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium border border-primary-200/50 dark:border-primary-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Getting Started</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• How to download and install Ausmo AAC</li>
                <li>• Setting up your first child profile</li>
                <li>• Creating your first communication board</li>
                <li>• Adding custom images and symbols</li>
                <li>• Recording your first audio messages</li>
              </ul>
            </div>

            {/* Multi-Role Setup */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium border border-secondary-200/50 dark:border-secondary-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Multi-Role Setup</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Understanding Parent, Teacher, Therapist roles</li>
                <li>• Switching between roles seamlessly</li>
                <li>• Setting up collaborative care teams</li>
                <li>• Managing multiple child profiles</li>
                <li>• Admin role and system management</li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-lavender-900/20 dark:to-lavender-800/20 p-8 rounded-3xl shadow-medium border border-lavender-200/50 dark:border-lavender-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Team Collaboration</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Real-time messaging between team members</li>
                <li>• Sharing notes and observations</li>
                <li>• Collaborative goal setting and tracking</li>
                <li>• Progress updates and notifications</li>
                <li>• Offline sync and data consistency</li>
              </ul>
            </div>

            {/* Goals & Progress Management */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 p-8 rounded-3xl shadow-medium border border-accent-200/50 dark:border-accent-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Goals & Progress</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Creating SMART goals and IEP objectives</li>
                <li>• Treatment plan development and tracking</li>
                <li>• Progress visualization and analytics</li>
                <li>• Exporting reports for documentation</li>
                <li>• Goal templates and best practices</li>
              </ul>
            </div>

            {/* Symbol Library Management */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium border border-primary-200/50 dark:border-primary-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Symbol Library</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• Using OpenSymbols, Bliss, and Mulberry libraries</li>
                <li>• Custom symbol upload and management</li>
                <li>• Favorites system and quick access</li>
                <li>• Symbol search and categorization</li>
                <li>• Symbol sizing and color themes</li>
              </ul>
            </div>

            {/* Security & Privacy */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium border border-secondary-200/50 dark:border-secondary-700/30">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Security & Privacy</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• PIN security and biometric authentication</li>
                <li>• Data encryption and privacy settings</li>
                <li>• HIPAA, FERPA, and COPPA compliance</li>
                <li>• Managing data sharing permissions</li>
                <li>• Backup and data recovery options</li>
              </ul>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="bg-white dark:bg-[#252B3B] text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#D4E7F7] dark:hover:bg-[#1A1F2E] transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-[#E8EEF2] dark:border-[#6B5B8C]"
              >
                View FAQ
              </Link>
              <Link
                href="/privacy"
                className="bg-secondary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-secondary-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-secondary-800"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StandardFooter />
    </main>
  )
}
