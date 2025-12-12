'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export default function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1F2E]">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-[#1A1F2E]/90 backdrop-blur-sm shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold gradient-text">Ausmo AAC</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link href="/#features" className="text-[#2C3E50] dark:text-[#E8EDF2] hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors duration-200 text-lg">Features</Link>
                <Link href="/#download" className="text-[#2C3E50] dark:text-[#E8EDF2] hover:text-secondary-600 dark:hover:text-secondary-400 font-semibold transition-colors duration-200 text-lg">Download</Link>
                <Link href="/contact-support" className="text-[#2C3E50] dark:text-[#E8EDF2] hover:text-lavender-600 dark:hover:text-lavender-400 font-semibold transition-colors duration-200 text-lg">Support</Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#D4E7F7] via-[#FFF4E6] to-[#D4E7F7] dark:from-[#1A1F2E] dark:via-[#252B3B] dark:to-[#1A1F2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-6 drop-shadow-sm">
            Contact Support
          </h1>
          <p className="text-xl text-[#2C3E50] dark:text-[#E8EDF2] max-w-2xl mx-auto leading-relaxed font-medium">
            We&apos;re here to help! Get in touch with our support team for assistance with Ausmo AAC
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A1F2E]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl shadow-medium border border-primary-200/50 dark:border-primary-700/30">
              <h2 className="text-2xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-6">Get in Touch</h2>
              <div className="space-y-4 text-[#2C3E50] dark:text-[#E8EDF2]">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p>support@ausmoapp.com</p>
                  <p className="text-sm text-[#8B95A1] dark:text-[#8B95A1]">We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM EST</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
                  <p>For urgent issues, please mark your email as &quot;URGENT&quot;</p>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 p-8 rounded-3xl shadow-medium border border-secondary-200/50 dark:border-secondary-700/30">
              <h2 className="text-2xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-6">Quick Help</h2>
              <div className="space-y-4">
                <Link 
                  href="/faq"
                  className="block bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] p-4 rounded-xl hover:bg-[#D4E7F7] dark:hover:bg-[#1A1F2E] transition-colors border border-secondary-200 dark:border-secondary-700"
                >
                  <h3 className="font-semibold">Frequently Asked Questions</h3>
                  <p className="text-sm text-[#8B95A1] dark:text-[#8B95A1]">Find quick answers to common questions</p>
                </Link>
                <Link 
                  href="/help"
                  className="block bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] p-4 rounded-xl hover:bg-[#D4E7F7] dark:hover:bg-[#1A1F2E] transition-colors border border-secondary-200 dark:border-secondary-700"
                >
                  <h3 className="font-semibold">Help Center</h3>
                  <p className="text-sm text-[#8B95A1] dark:text-[#8B95A1]">Comprehensive guides and tutorials</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-lavender-900/20 dark:to-lavender-800/20 p-8 rounded-3xl shadow-medium border border-lavender-200/50 dark:border-lavender-700/30">
            <h2 className="text-2xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-6">Send us a Message</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  ✓ Your message has been sent successfully! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl">
                <p className="text-red-800 dark:text-red-200 font-medium">
                  ✗ {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EEF2] dark:border-[#6B5B8C] focus:border-lavender-500 dark:focus:border-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-800 bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] placeholder-[#8B95A1] dark:placeholder-[#8B95A1] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EEF2] dark:border-[#6B5B8C] focus:border-lavender-500 dark:focus:border-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-800 bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] placeholder-[#8B95A1] dark:placeholder-[#8B95A1] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EEF2] dark:border-[#6B5B8C] focus:border-lavender-500 dark:focus:border-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-800 bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] placeholder-[#8B95A1] dark:placeholder-[#8B95A1] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Brief description of your issue"
                  />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8EEF2] dark:border-[#6B5B8C] focus:border-lavender-500 dark:focus:border-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-200 dark:focus:ring-lavender-800 bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] placeholder-[#8B95A1] dark:placeholder-[#8B95A1] disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-lavender-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-lavender-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-lavender-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-8">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy"
                className="bg-white dark:bg-[#252B3B] text-[#2C3E50] dark:text-[#E8EDF2] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#D4E7F7] dark:hover:bg-[#1A1F2E] transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="bg-secondary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-secondary-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1 border-2 border-secondary-800"
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
