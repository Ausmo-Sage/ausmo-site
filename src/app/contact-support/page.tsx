import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export default function ContactSupport() {
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
                <Link href="/contact-support" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
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
            Contact Support
          </h1>
          <p className="text-xl text-black dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
            We're here to help! Get in touch with our support team for assistance with Ausmo AAC
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 p-8 rounded-3xl shadow-medium border border-coral-200/50 dark:border-coral-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-4 text-black dark:text-gray-200">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p>support@ausmoapp.com</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM EST</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
                  <p>For urgent issues, please mark your email as "URGENT"</p>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-medium border border-teal-200/50 dark:border-teal-700/30">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Quick Help</h2>
              <div className="space-y-4">
                <Link 
                  href="/faq"
                  className="block bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-teal-200 dark:border-teal-700"
                >
                  <h3 className="font-semibold">Frequently Asked Questions</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Find quick answers to common questions</p>
                </Link>
                <Link 
                  href="/help"
                  className="block bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-teal-200 dark:border-teal-700"
                >
                  <h3 className="font-semibold">Help Center</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Comprehensive guides and tutorials</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-3xl shadow-medium border border-purple-200/50 dark:border-purple-700/30">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black dark:text-white mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black dark:text-white mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-black dark:text-white mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Brief description of your issue"
                  />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black dark:text-white mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-purple-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy"
                className="bg-white dark:bg-gray-800 text-black dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="bg-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-teal-800"
              >
                Accessibility Statement
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
