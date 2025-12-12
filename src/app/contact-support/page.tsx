'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../../components/ThemeToggle'
import { StandardFooter } from '../../components/StandardFooter'
import { Menu, X } from 'lucide-react'

export default function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/ausmo-wordmark.png"
                  alt="Ausmo"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Features</Link>
              <Link href="/#roles" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Who It's For</Link>
              <Link href="/#security" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Security</Link>
              <Link href="/contact-support" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</Link>
              <ThemeToggle />
              <Link href="/" className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white hover:shadow-lg transition">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <Link href="/#features" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Features</Link>
              <Link href="/#roles" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Who It's For</Link>
              <Link href="/#security" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Security</Link>
              <Link href="/contact-support" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Contact</Link>
              <Link href="/" className="block w-full px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-sm">
            Contact Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help! Get in touch with our support team for assistance with Ausmo App
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-3xl shadow-lg border border-purple-200/50 dark:border-purple-700/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p>support@ausmoapp.com</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">We respond within 24 hours</p>
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-3xl shadow-lg border border-blue-200/50 dark:border-blue-700/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Help</h2>
              <div className="space-y-4">
                <Link 
                  href="/faq"
                  className="block bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold">Frequently Asked Questions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Find quick answers to common questions</p>
                </Link>
                <Link 
                  href="/help"
                  className="block bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold">Help Center</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guides and tutorials</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-8 rounded-3xl shadow-lg border border-teal-200/50 dark:border-teal-700/30">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            
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
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Brief description of your issue"
                  />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-300 dark:border-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StandardFooter />
    </main>
  )
}
