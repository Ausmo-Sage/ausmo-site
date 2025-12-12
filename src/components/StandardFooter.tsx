import Image from 'next/image'
import Link from 'next/link'

export function StandardFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/images/ausmo-wordmark.png"
              alt="Ausmo"
              width={160}
              height={48}
              className="h-10 w-auto mb-4"
              style={{ objectFit: 'contain' }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Supporting children with autism and communication needs through innovative AAC tools, progress tracking, and team collaboration.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-gray-900 dark:text-white font-bold">Product</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/#features" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Features</Link></li>
              <li><Link href="/#roles" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Who It's For</Link></li>
              <li><Link href="/#security" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Security</Link></li>
              <li><Link href="/faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-gray-900 dark:text-white font-bold">Support</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/help" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Help Center</Link></li>
              <li><Link href="/contact-support" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</Link></li>
              <li><Link href="/accessibility" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="mb-4 text-gray-900 dark:text-white font-bold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-gray-900 dark:text-white font-bold text-sm">Compliance</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link href="/coppa" className="hover:text-purple-600 dark:hover:text-purple-400 transition">COPPA</Link></li>
                <li><Link href="/dmca" className="hover:text-purple-600 dark:hover:text-purple-400 transition">DMCA</Link></li>
                <li><Link href="/data-rights" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Data Rights</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-gray-900 dark:text-white font-bold text-sm">Security</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/hipaa" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>HIPAA Compliant</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ferpa" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>FERPA Compliant</span>
                  </Link>
                </li>
                <li>
                  <Link href="/coppa" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>COPPA Compliant</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p>&copy; 2025 Ausmo. All rights reserved.</p>
            <p className="mt-2">Built with care for the autism community.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
