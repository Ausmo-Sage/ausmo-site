'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#252B3B] border-t border-[#E8EEF2] dark:border-[#6B5B8C] shadow-lg transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-[#8B95A1] dark:text-[#8B95A1] mb-2">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              By clicking &quot;Accept All&quot;, you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link 
                href="/cookie-policy" 
                className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 underline"
              >
                Cookie Policy
              </Link>
              <span className="text-[#8B95A1] dark:text-[#6B5B8C]">•</span>
              <Link 
                href="/privacy" 
                className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 underline"
              >
                Privacy Policy
              </Link>
              <span className="text-[#8B95A1] dark:text-[#6B5B8C]">•</span>
              <Link 
                href="/data-rights" 
                className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 underline"
              >
                Data Rights
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-[#2C3E50] dark:text-[#E8EDF2] bg-[#E8EEF2] dark:bg-[#1A1F2E] border border-[#E8EEF2] dark:border-[#6B5B8C] rounded-md hover:bg-[#D4E7F7] dark:hover:bg-[#252B3B] focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-[#252B3B] transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 dark:bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 dark:hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-[#252B3B] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}