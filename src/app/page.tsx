import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Image
                src="/images/app-icon.png"
                alt="Ausmo AAC"
                width={48}
                height={48}
                className="mr-4 rounded-xl shadow-medium"
              />
              <span className="text-3xl font-bold gradient-text">Ausmo AAC</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link href="#features" className="text-black dark:text-white hover:text-coral-600 dark:hover:text-coral-400 font-semibold transition-colors duration-200 text-lg">Features</Link>
                <Link href="#download" className="text-black dark:text-white hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-colors duration-200 text-lg">Download</Link>
                <Link href="/contact-support" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-coral-300/40 dark:bg-coral-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-teal-300/40 dark:bg-teal-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-300/30 dark:bg-purple-500/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 animate-fade-in drop-shadow-sm">
              Empowering Communication for{' '}
              <span className="gradient-text drop-shadow-sm">Everyone</span>
            </h1>
            <p className="text-xl md:text-2xl text-black dark:text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
              Ausmo AAC is a comprehensive Augmentative and Alternative Communication app 
              designed to help individuals with communication difficulties express themselves effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
              <Link
                href="#download"
                className="bg-white dark:bg-gray-800 text-black dark:text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 button-press pulse-gentle border-4 border-black dark:border-gray-600"
              >
                📱 Download Now
              </Link>
              <Link
                href="#features"
                className="bg-teal-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 button-press border-4 border-teal-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-coral-200 via-teal-200 to-purple-200 dark:from-coral-800/30 dark:via-teal-800/30 dark:to-purple-800/30 rounded-3xl blur-sm"></div>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-large">
              <Image
                src="/images/splash.svg"
                alt="Ausmo AAC App Preview"
                width={400}
                height={400}
                className="mx-auto rounded-2xl shadow-medium"
              />
            </div>
          </div>
          <p className="mt-8 text-lg text-black dark:text-gray-100 max-w-2xl mx-auto font-medium">
            Experience the intuitive interface designed with accessibility and ease of use in mind.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral-50/30 dark:bg-coral-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50/30 dark:bg-teal-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 drop-shadow-sm">
              Key Features
            </h2>
            <p className="text-xl md:text-2xl text-black dark:text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive tools designed with accessibility and personalization in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 p-8 rounded-3xl shadow-medium card-hover border border-coral-200/50 dark:border-coral-700/30">
              <div className="text-5xl mb-6 text-center">📸</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Custom Image Uploads</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Personalize communication buttons with photos of family, friends, pets, and favorite objects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-medium card-hover border border-teal-200/50 dark:border-teal-700/30">
              <div className="text-5xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Express Pages</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Quick access to frequently used phrases and sentences for different situations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-3xl shadow-medium card-hover border border-purple-200/50 dark:border-purple-700/30">
              <div className="text-5xl mb-6 text-center">🎨</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Symbol Library</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Thousands of professionally designed symbols covering daily activities and emotions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-3xl shadow-medium card-hover border border-yellow-200/50 dark:border-yellow-700/30">
              <div className="text-5xl mb-6 text-center">♿</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Accessibility First</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Full VoiceOver/TalkBack support, switch scanning, and high contrast modes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 p-8 rounded-3xl shadow-medium card-hover border border-coral-200/50 dark:border-coral-700/30">
              <div className="text-5xl mb-6 text-center">🔊</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Text-to-Speech</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                High-quality voices in multiple languages with customizable speed and pitch.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-medium card-hover border border-teal-200/50 dark:border-teal-700/30">
              <div className="text-5xl mb-6 text-center">🎙️</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Audio Recording</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Record custom messages using familiar voices from family members and teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-coral-50/20 dark:bg-coral-900/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-purple-50/20 dark:bg-purple-900/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 drop-shadow-sm">
              Perfect For
            </h2>
            <p className="text-xl text-black dark:text-gray-100 max-w-2xl mx-auto font-medium">
              Designed for everyone who needs support with communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <div className="text-4xl">👶</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Children</h3>
              <p className="text-black dark:text-gray-200 font-medium">With speech delays or autism</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Families</h3>
              <p className="text-black dark:text-gray-200 font-medium">Supporting communication development</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">🏫</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Schools</h3>
              <p className="text-black dark:text-gray-200 font-medium">And therapy centers</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">👩‍⚕️</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Therapists</h3>
              <p className="text-black dark:text-gray-200 font-medium">Speech-language pathologists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-500 via-teal-500 to-purple-600 dark:from-coral-600 dark:via-teal-600 dark:to-purple-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 dark:bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 dark:bg-white/3 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Download Ausmo AAC Today
          </h2>
          <p className="text-xl md:text-2xl text-white/95 dark:text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Available on iOS and Android. Start your communication journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#"
              className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 px-16 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 button-press border-4 border-gray-300 dark:border-gray-400"
            >
              📱 Download for iOS
            </Link>
            <Link
              href="#"
              className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 px-16 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 button-press border-4 border-gray-300 dark:border-gray-400"
            >
              🤖 Download for Android
            </Link>
          </div>
          <p className="mt-8 text-white/80 dark:text-white/70 text-lg">
            Free to download • No subscription required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-coral-500/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/app-icon.png"
                  alt="Ausmo AAC"
                  width={40}
                  height={40}
                  className="mr-3 rounded-xl"
                />
                <span className="text-2xl font-bold gradient-text">Ausmo AAC</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Empowering communication for everyone through innovative AAC technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#features" className="hover:text-coral-400 transition-colors duration-200">Features</Link></li>
                <li><Link href="#download" className="hover:text-coral-400 transition-colors duration-200">Download</Link></li>
                <li><Link href="/privacy" className="hover:text-coral-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-coral-400 transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/contact-support" className="hover:text-teal-400 transition-colors duration-200">Contact Support</Link></li>
                <li><Link href="/help" className="hover:text-teal-400 transition-colors duration-200">Help Center</Link></li>
                <li><Link href="/faq" className="hover:text-teal-400 transition-colors duration-200">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-400 transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-purple-400 transition-colors duration-200">Cookie Policy</Link></li>
                <li><Link href="/coppa" className="hover:text-purple-400 transition-colors duration-200">COPPA Compliance</Link></li>
                <li><Link href="/accessibility" className="hover:text-purple-400 transition-colors duration-200">Accessibility Statement</Link></li>
                <li><Link href="/dmca" className="hover:text-purple-400 transition-colors duration-200">DMCA Policy</Link></li>
                <li><Link href="/data-rights" className="hover:text-purple-400 transition-colors duration-200">Data Rights</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg mb-6">&copy; 2024 Ausmo AAC. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-base">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
              <Link href="/data-rights" className="hover:text-white transition-colors duration-200">Do Not Sell My Info</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}