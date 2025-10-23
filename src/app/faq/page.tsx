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
                <Link href="/#features" className="text-black dark:text-white hover:text-coral-600 dark:hover:text-coral-400 font-semibold transition-colors duration-200 text-lg">Features</Link>
                <Link href="/#download" className="text-black dark:text-white hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-colors duration-200 text-lg">Download</Link>
                <Link href="/#support" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
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
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 p-8 rounded-3xl shadow-medium border border-coral-200/50 dark:border-coral-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">General Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">What is Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is a comprehensive Augmentative and Alternative Communication app designed to help individuals with communication difficulties express themselves effectively through symbols, images, and text-to-speech.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Who can use Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is designed for children and adults with autism, speech delays, or other communication difficulties. It's also used by families, schools, and therapists.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo AAC free?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC is free to download and use. There are no subscription fees or hidden costs.</p>
                </div>
              </div>
            </div>

            {/* Technical Questions */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-medium border border-teal-200/50 dark:border-teal-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technical Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">What devices support Ausmo AAC?</h3>
                  <p className="text-black dark:text-gray-200">Ausmo AAC is available for iOS (iPhone/iPad) and Android devices. It works on phones and tablets.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How do I add custom images?</h3>
                  <p className="text-black dark:text-gray-200">You can add custom images by tapping the camera icon in the app, taking a photo, or selecting from your device's photo library.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can I record my own voice?</h3>
                  <p className="text-black dark:text-gray-200">Yes! You can record custom audio messages using the microphone feature. This is great for adding familiar voices from family members.</p>
                </div>
              </div>
            </div>

            {/* Accessibility Questions */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-3xl shadow-medium border border-purple-200/50 dark:border-purple-700/30">
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

            {/* Privacy & Safety Questions */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-3xl shadow-medium border border-yellow-200/50 dark:border-yellow-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Privacy & Safety Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is my data secure?</h3>
                  <p className="text-black dark:text-gray-200">Yes, we take privacy seriously. All data is stored locally on your device and is not shared with third parties. See our Privacy Policy for details.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Is Ausmo AAC COPPA compliant?</h3>
                  <p className="text-black dark:text-gray-200">Yes, Ausmo AAC is fully compliant with COPPA (Children's Online Privacy Protection Act) to protect children's privacy.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Can I delete my data?</h3>
                  <p className="text-black dark:text-gray-200">Yes, you can delete all your data at any time through the app settings or by uninstalling the app.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Still Have Questions?</h2>
            <p className="text-lg text-black dark:text-gray-200 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
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
                className="bg-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-teal-800"
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
