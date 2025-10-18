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
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link 
                href="/cookie-policy" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Cookie Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/privacy" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/data-rights" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Data Rights
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}