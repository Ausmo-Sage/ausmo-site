import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/images/app-icon.png"
                alt="Ausmo AAC"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">Ausmo AAC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#download" className="text-gray-600 hover:text-gray-900">Download</Link>
              <Link href="#support" className="text-gray-600 hover:text-gray-900">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Communication for{' '}
              <span className="text-blue-600">Everyone</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ausmo AAC is a comprehensive Augmentative and Alternative Communication app 
              designed to help individuals with communication difficulties express themselves effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Download Now
              </Link>
              <Link
                href="#features"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/splash.png"
            alt="Ausmo AAC App Preview"
            width={400}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed with accessibility and personalization in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Image Uploads</h3>
              <p className="text-gray-600">
                Personalize communication buttons with photos of family, friends, pets, and favorite objects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Express Pages</h3>
              <p className="text-gray-600">
                Quick access to frequently used phrases and sentences for different situations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Symbol Library</h3>
              <p className="text-gray-600">
                Thousands of professionally designed symbols covering daily activities and emotions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">♿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility First</h3>
              <p className="text-gray-600">
                Full VoiceOver/TalkBack support, switch scanning, and high contrast modes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🔊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Text-to-Speech</h3>
              <p className="text-gray-600">
                High-quality voices in multiple languages with customizable speed and pitch.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">🎙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audio Recording</h3>
              <p className="text-gray-600">
                Record custom messages using familiar voices from family members and teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Children</h3>
              <p className="text-gray-600">With speech delays or autism</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Families</h3>
              <p className="text-gray-600">Supporting communication development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schools</h3>
              <p className="text-gray-600">And therapy centers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👩‍⚕️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Therapists</h3>
              <p className="text-gray-600">Speech-language pathologists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Ausmo AAC Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Available on iOS and Android. Start your communication journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download for iOS
            </Link>
            <Link
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download for Android
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/app-icon.png"
                  alt="Ausmo AAC"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-xl font-bold">Ausmo AAC</span>
              </div>
              <p className="text-gray-400">
                Empowering communication for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#download">Download</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="mailto:support@ausmoapp.com">Contact Support</Link></li>
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><Link href="/coppa">COPPA Compliance</Link></li>
                <li><Link href="/accessibility">Accessibility Statement</Link></li>
                <li><Link href="/dmca">DMCA Policy</Link></li>
                <li><Link href="/data-rights">Data Rights</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ausmo AAC. All rights reserved.</p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/data-rights" className="hover:text-white transition-colors">Do Not Sell My Info</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}