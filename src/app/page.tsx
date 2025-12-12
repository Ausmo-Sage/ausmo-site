import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1a1d2e]">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-[#1a1d2e]/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/images/ausmo-icon.png"
                alt="Ausmo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-[#7C5DC4] dark:text-[#9B7BD6]">Ausmo</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-gray-700 dark:text-gray-200 hover:text-[#7C5DC4] dark:hover:text-[#9B7BD6] font-medium transition-colors duration-200">Features</Link>
                <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-[#7C5DC4] dark:hover:text-[#9B7BD6] font-medium transition-colors duration-200">About</Link>
                <Link href="#resources" className="text-gray-700 dark:text-gray-200 hover:text-[#7C5DC4] dark:hover:text-[#9B7BD6] font-medium transition-colors duration-200">Resources</Link>
                <Link href="/contact-support" className="text-gray-700 dark:text-gray-200 hover:text-[#7C5DC4] dark:hover:text-[#9B7BD6] font-medium transition-colors duration-200">Support</Link>
              </div>
              <Link
                href="#download"
                className="bg-[#E5A83B] hover:bg-[#d4972e] text-white px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-white dark:bg-[#1a1d2e]">
        {/* Subtle wave decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#e8f4fc]/50 via-[#f0e8fc]/30 to-transparent dark:from-[#1e2235] dark:via-[#1a1d2e] dark:to-transparent"></div>
          <svg className="absolute bottom-0 left-0 right-0 w-full h-48 text-[#e8f4fc]/60 dark:text-[#1e2235]/60" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="currentColor" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-left">
            {/* Supporting neurodiversity badge */}
            <span className="inline-block bg-[#E5A83B] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
              Supporting neurodiversity
            </span>
            
            {/* Purple italic headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#7C5DC4] dark:text-[#9B7BD6] mb-8 animate-fade-in leading-tight">
              Your journey,<br />
              your way
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed animate-slide-up">
              Ausmo provides personalized support tools designed to help autistic 
              individuals thrive. Track your patterns, build routines, and connect with 
              understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Link
                href="#download"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#4ECDC4] via-[#9B7BD6] to-[#E5A83B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Download App
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center bg-white dark:bg-[#2a2f42] text-gray-700 dark:text-gray-200 px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#353a50] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1d2e] relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 dark:from-primary-800/30 dark:via-secondary-800/30 dark:to-accent-800/30 rounded-3xl blur-sm"></div>
            <div className="relative bg-white dark:bg-[#242838] p-4 rounded-3xl shadow-large">
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
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1d2e] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-50/30 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 drop-shadow-sm">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl md:text-2xl text-black dark:text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Multi-role collaboration tools designed for Parents, Teachers, and Therapists working together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Role Architecture */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium card-hover border border-primary-200/50 dark:border-primary-700/30">
              <div className="text-5xl mb-6 text-center">👥</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Multi-Role Platform</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Parent, Teacher, Therapist, and Admin roles with seamless switching and collaborative care management.
              </p>
            </div>

            {/* Real-time Collaboration */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium card-hover border border-secondary-200/50 dark:border-secondary-700/30">
              <div className="text-5xl mb-6 text-center">💬</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Real-time Collaboration</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Live messaging, shared notes, and synchronized updates across all team members and devices.
              </p>
            </div>

            {/* OpenSymbols Integration */}
            <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-lavender-900/20 dark:to-lavender-800/20 p-8 rounded-3xl shadow-medium card-hover border border-lavender-200/50 dark:border-lavender-700/30">
              <div className="text-5xl mb-6 text-center">🎨</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Symbol Library</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Thousands of OpenSymbols, Bliss, and Mulberry symbols with custom uploads and favorites system.
              </p>
            </div>

            {/* Goals & Progress Management */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 p-8 rounded-3xl shadow-medium card-hover border border-accent-200/50 dark:border-accent-700/30">
              <div className="text-5xl mb-6 text-center">📊</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Goals & Progress</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                SMART goals, IEP tracking, progress visualization, and collaborative goal management for therapy teams.
              </p>
            </div>

            {/* Security & Compliance */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium card-hover border border-primary-200/50 dark:border-primary-700/30">
              <div className="text-5xl mb-6 text-center">🔒</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Security & Compliance</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                HIPAA, FERPA, COPPA compliant with PIN security, biometric auth, and end-to-end encryption.
              </p>
            </div>

            {/* Communication Features */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium card-hover border border-secondary-200/50 dark:border-secondary-700/30">
              <div className="text-5xl mb-6 text-center">🎙️</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-sm">Communication Tools</h3>
              <p className="text-black dark:text-gray-200 text-center leading-relaxed font-medium">
                Text-to-speech, audio recording, custom voices, and express communication boards for every need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#242838] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary-50/20 dark:bg-primary-900/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-lavender-50/20 dark:bg-lavender-900/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 drop-shadow-sm">
              Collaborative Care Teams
            </h2>
            <p className="text-xl text-black dark:text-gray-100 max-w-2xl mx-auto font-medium">
              Bringing together families and professionals for comprehensive communication support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-accent-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <div className="text-4xl">👶</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Children</h3>
              <p className="text-black dark:text-gray-200 font-medium">With autism and communication needs</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Parents</h3>
              <p className="text-black dark:text-gray-200 font-medium">Managing child profiles and team collaboration</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 dark:from-lavender-800 dark:to-lavender-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">🏫</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Teachers</h3>
              <p className="text-black dark:text-gray-200 font-medium">IEP goals and classroom integration</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-800 dark:to-accent-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">👩‍⚕️</div>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3 drop-shadow-sm">Therapists</h3>
              <p className="text-black dark:text-gray-200 font-medium">Treatment plans and progress tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 dark:from-primary-600 dark:via-secondary-600 dark:to-accent-600 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #CDB8E8 0%, #A8D5F7 50%, #F9D7A8 100%)' }}>
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
            Available on iOS, Android, and Web (PWA). Start your collaborative communication journey today.
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
            <Link
              href="#"
              className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 px-16 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 button-press border-4 border-gray-300 dark:border-gray-400"
            >
              🌐 Use on Web
            </Link>
          </div>
          <p className="mt-8 text-white/80 dark:text-white/70 text-lg">
            Free to download • No subscription required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/ausmo-icon.png"
                  alt="Ausmo AAC"
                  width={40}
                  height={40}
                  className="mr-3 rounded-xl"
                />
                <span className="text-2xl font-bold gradient-text">Ausmo AAC</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Empowering communication through collaborative care teams and innovative AAC technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#features" className="hover:text-primary-400 transition-colors duration-200">Features</Link></li>
                <li><Link href="#download" className="hover:text-primary-400 transition-colors duration-200">Download</Link></li>
                <li><Link href="/privacy" className="hover:text-primary-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400 transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/contact-support" className="hover:text-secondary-400 transition-colors duration-200">Contact Support</Link></li>
                <li><Link href="/help" className="hover:text-secondary-400 transition-colors duration-200">Help Center</Link></li>
                <li><Link href="/faq" className="hover:text-secondary-400 transition-colors duration-200">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-lavender-400 transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-lavender-400 transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-lavender-400 transition-colors duration-200">Cookie Policy</Link></li>
                <li><Link href="/coppa" className="hover:text-lavender-400 transition-colors duration-200">COPPA Compliance</Link></li>
                <li><Link href="/accessibility" className="hover:text-lavender-400 transition-colors duration-200">Accessibility Statement</Link></li>
                <li><Link href="/dmca" className="hover:text-lavender-400 transition-colors duration-200">DMCA Policy</Link></li>
                <li><Link href="/data-rights" className="hover:text-lavender-400 transition-colors duration-200">Data Rights</Link></li>
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