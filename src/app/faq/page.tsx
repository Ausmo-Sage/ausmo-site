import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export default function FAQ() {
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
                <Link href="/#support" className="text-black dark:text-white hover:text-lavender-600 dark:hover:text-lavender-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 drop-shadow-sm">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-black dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Find quick answers to the most common questions about Ausmo AAC
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* General Questions */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium border border-primary-200/50 dark:border-primary-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">General Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">What is Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is a comprehensive multi-role platform that brings together Parents, Teachers, and Therapists to support children with autism and communication difficulties through real-time collaboration and innovative AAC tools.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Who can use Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is designed for collaborative care teams including parents managing child profiles, teachers tracking IEP goals, therapists creating treatment plans, and children with autism or communication difficulties.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo AAC free?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC is free to download and use. There are no subscription fees or hidden costs for the core platform.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">What makes Ausmo different from other AAC apps?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo is unique in providing multi-role collaboration, real-time team messaging, comprehensive goal tracking, and seamless role switching for professionals who work with multiple children.</p>
                </div>
              </div>
            </div>

            {/* Technical Questions */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium border border-secondary-200/50 dark:border-secondary-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technical Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">What devices support Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is available for iOS (iPhone/iPad), Android devices, and as a Progressive Web App (PWA) that works in any modern web browser.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How do I add custom images and symbols?</h3>
                  <p className="text-black dark:text-gray-200">You can upload custom images by taking photos or selecting from your device&apos;s photo library. The app also integrates with OpenSymbols, Bliss, and Mulberry symbol libraries.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can I record my own voice for symbols?</h3>
                  <p className="text-black dark:text-gray-200">Yes! You can record custom audio messages (up to 30 seconds) using familiar voices from family members, teachers, or therapists.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Does Ausmo work offline?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo provides full offline functionality with automatic synchronization when you&apos;re back online. All core features work without an internet connection.</p>
                </div>
              </div>
            </div>

            {/* Accessibility Questions */}
            <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-lavender-900/20 dark:to-lavender-800/20 p-8 rounded-3xl shadow-medium border border-lavender-200/50 dark:border-lavender-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Accessibility Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Does Ausmo AAC support screen readers?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC has full VoiceOver support on iOS and TalkBack support on Android for users who rely on screen readers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can I use switch scanning?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC supports switch scanning for users who need alternative input methods.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Are there high contrast modes?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC includes high contrast display options to improve visibility for users with visual impairments.</p>
                </div>
              </div>
            </div>

            {/* Multi-Role & Collaboration Questions */}
            <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-lavender-900/20 dark:to-lavender-800/20 p-8 rounded-3xl shadow-medium border border-lavender-200/50 dark:border-lavender-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Multi-Role & Collaboration</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How do I switch between roles?</h3>
                  <p className="text-black dark:text-gray-200">You can seamlessly switch between Parent, Teacher, Therapist, and Admin roles from your profile settings. Each role provides access to relevant features and data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can team members communicate in real-time?</h3>
                  <p className="text-black dark:text-gray-200">Yes! Team members can send direct messages, share notes, and collaborate on goals with real-time synchronization across all devices.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How do I connect with my child&apos;s teachers and therapists?</h3>
                  <p className="text-black dark:text-gray-200">Parents can invite teachers and therapists to join their child&apos;s care team through the app. Once connected, everyone can collaborate on goals and share progress updates.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can I track IEP goals and treatment plans?</h3>
                  <p className="text-black dark:text-gray-200">Yes! Teachers can create and track IEP goals, while therapists can manage treatment plans. All team members can view progress and add observations.</p>
                </div>
              </div>
            </div>

            {/* Security & Compliance Questions */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 p-8 rounded-3xl shadow-medium border border-accent-200/50 dark:border-accent-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Security & Compliance</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is my data secure?</h3>
                  <p className="text-black dark:text-gray-200">Yes, we use end-to-end encryption, PIN security with biometric authentication, and Row Level Security (RLS) to protect all data. We&apos;re HIPAA, FERPA, and COPPA compliant.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo HIPAA compliant?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo is fully HIPAA compliant with proper data encryption, audit logging, and secure communication protocols for health information protection.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo FERPA compliant?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo meets FERPA requirements for educational records protection and ensures proper parent access rights to their child&apos;s educational data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo COPPA compliant?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo is fully compliant with COPPA (Children&apos;s Online Privacy Protection Act) to protect children&apos;s privacy and requires parental consent for data collection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Still Have Questions?</h2>
            <p className="text-lg text-black dark:text-gray-200 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help"
                className="bg-white dark:bg-gray-800 text-black dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-600"
              >
                Contact Support
              </Link>
              <Link
                href="/contact-support"
                className="bg-secondary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-secondary-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-secondary-800"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

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
