import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export default function HelpCenter() {
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
            Help Center
          </h1>
          <p className="text-xl text-black dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Find answers to common questions and get support for Ausmo AAC
          </p>
        </div>
      </section>

      {/* Help Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Getting Started */}
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 p-8 rounded-3xl shadow-medium border border-coral-200/50 dark:border-coral-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Getting Started</h2>
              <ul className="space-y-3 text-black dark:text-gray-200">
                <li>• How to download and install Ausmo AAC</li>
                <li>• Setting up your first communication board</li>
                <li>• Adding custom images and photos</li>
                <li>• Recording your first audio messages</li>
              </ul>
            </div>

            {/* Features & Usage */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-medium border border-teal-200/50 dark:border-teal-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Features & Usage</h2>
              <ul className="space-y-3 text-black dark:text-gray-200">
                <li>• Using Express Pages for quick communication</li>
                <li>• Customizing symbol library</li>
                <li>• Text-to-speech settings and voices</li>
                <li>• Accessibility features and options</li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-3xl shadow-medium border border-purple-200/50 dark:border-purple-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Troubleshooting</h2>
              <ul className="space-y-3 text-black dark:text-gray-200">
                <li>• App not responding or crashing</li>
                <li>• Audio not playing correctly</li>
                <li>• Images not loading properly</li>
                <li>• Syncing issues between devices</li>
              </ul>
            </div>

            {/* Support Contact */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-3xl shadow-medium border border-yellow-200/50 dark:border-yellow-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contact Support</h2>
              <div className="space-y-3 text-black dark:text-gray-200">
                <p><strong>Email:</strong> support@ausmoapp.com</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <p><strong>Available:</strong> Monday - Friday, 9 AM - 5 PM EST</p>
                <Link 
                  href="/contact-support"
                  className="inline-block mt-4 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="bg-white dark:bg-gray-800 text-black dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-600"
              >
                View FAQ
              </Link>
              <Link
                href="/privacy"
                className="bg-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-teal-800"
              >
                Privacy Policy
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
