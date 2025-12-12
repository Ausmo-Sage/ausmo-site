'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Download, ArrowRight, Check, Shield, Users, MessageSquare, TrendingUp, Smartphone, Globe, Lock } from 'lucide-react'
import { ThemeProvider, useTheme } from '../components/ThemeProvider'
import { ThemeToggle } from '../components/ThemeToggle'
import { StandardFooter } from '../components/StandardFooter'

function AusmoWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeRole, setActiveRole] = useState<'parent' | 'teacher' | 'therapist' | 'admin'>('parent')
  const { theme } = useTheme()

  const roles = [
    {
      id: 'parent' as const,
      title: 'Parents',
      icon: Users,
      description: 'Track your child\'s progress, communicate with their care team, and access AAC tools anytime.',
      features: [
        'Real-time progress updates',
        'AAC communication tools',
        'Direct messaging with care team',
        'Goal tracking and milestones'
      ]
    },
    {
      id: 'teacher' as const,
      title: 'Teachers',
      icon: Globe,
      description: 'Manage classroom activities, log observations, and collaborate seamlessly with the entire team.',
      features: [
        'Student roster management',
        'Observation logging',
        'Schedule coordination',
        'Team collaboration feed'
      ]
    },
    {
      id: 'therapist' as const,
      title: 'Therapists',
      icon: TrendingUp,
      description: 'Create SMART goals, track sessions, and analyze progress with data-driven insights.',
      features: [
        'IEP/SMART goal creation',
        'Session data recording',
        'Progress visualization',
        'Analytics and reports'
      ]
    },
    {
      id: 'admin' as const,
      title: 'Administrators',
      icon: Shield,
      description: 'Manage system-wide settings, users, and maintain compliance across your organization.',
      features: [
        'User management',
        'System-wide settings',
        'Compliance monitoring',
        'Audit logging'
      ]
    }
  ]

  const coreFeatures = [
    {
      icon: MessageSquare,
      title: 'AAC Communication',
      description: 'Interactive symbol boards, custom libraries, phrase builder, and text-to-speech with customizable voices.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'SMART/IEP goals, real-time visualization, milestone tracking, and data-driven analytics.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user chat, direct messaging, shared notes, and activity timelines for seamless coordination.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'HIPAA/FERPA/COPPA-minded architecture with role-based access control and audit logging.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/ausmo-wordmark.png"
                alt="Ausmo"
                width={160}
                height={48}
                className="h-10 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Features</a>
              <a href="#roles" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Who It's For</a>
              <a href="#security" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Security</a>
              <Link href="/contact-support" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</Link>
              <ThemeToggle />
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white hover:shadow-lg transition">
                Get Started
              </button>
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
              <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Features</a>
              <a href="#roles" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Who It's For</a>
              <a href="#security" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Security</a>
              <Link href="/contact-support" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition py-2">Contact</Link>
              <button className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-purple-200 dark:border-purple-800 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-gray-700 dark:text-gray-300">Supporting children with autism and communication needs</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 dark:from-purple-400 dark:via-blue-400 dark:to-teal-400" style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Communication & Care,<br />Simplified
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A complete platform connecting parents, teachers, and therapists to support every child's unique journey with AAC tools, progress tracking, and real-time collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white text-lg hover:shadow-2xl transition flex items-center gap-2">
                Download for iOS
                <Download className="group-hover:translate-y-0.5 transition" size={20} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition flex items-center gap-2">
                Download for Android
                <Download size={20} />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>HIPAA/FERPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Free for Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Trusted by 1,000+ Care Teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white font-bold">Everything You Need in One Platform</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ausmo brings together powerful AAC tools, progress tracking, and team collaboration in a secure, easy-to-use platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900 dark:text-white font-bold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AAC Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm mb-6">
                AAC Communication
              </div>
              <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white font-bold">Powerful Communication Tools</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Interactive symbol boards with OpenSymbols and Mulberry support, custom phrase builder, text-to-speech, and personalized favorites make communication accessible and empowering.
              </p>
              <ul className="space-y-4">
                {['Interactive symbol boards with categories', 'Custom symbol library upload', 'Phrase builder for sentence construction', 'Text-to-speech with custom voices', 'Favorites and personalization'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <Check className="text-purple-600 dark:text-purple-400" size={16} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 via-blue-400 to-teal-400 dark:from-purple-600 dark:via-blue-600 dark:to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <Image
                  src="/images/ausmo-icon.png"
                  alt="AAC Tools"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white font-bold">Built for Every Member of the Care Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tailored dashboards and features for parents, teachers, therapists, and administrators.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {roles.map((role) => {
              const Icon = role.icon
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                    activeRole === role.id
                      ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{role.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Role Content */}
          {roles.map((role) => {
            const Icon = role.icon
            return activeRole === role.id ? (
              <div
                key={role.id}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl mb-4 text-gray-900 dark:text-white font-bold">{role.title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{role.description}</p>
                    <div className="space-y-3">
                      {role.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                            <Check className="text-white" size={14} />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-teal-900/30 rounded-3xl flex items-center justify-center">
                    <Image
                      src="/images/ausmo-icon.png"
                      alt={role.title}
                      width={256}
                      height={256}
                      className="w-64 h-64 object-contain filter drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ) : null
          })}
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-purple-200 dark:border-purple-800 text-sm mb-6">
              <Shield className="text-green-500" size={16} />
              <span className="text-gray-700 dark:text-gray-300">Enterprise-grade security</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white font-bold">Trust & Security First</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Built with HIPAA, FERPA, and COPPA compliance in mind, ensuring your data is always protected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Role-Based Access',
                description: 'Granular permissions ensure each user only sees what they need to.'
              },
              {
                icon: Shield,
                title: 'Compliance Ready',
                description: 'HIPAA/FERPA/COPPA-minded architecture with audit logging.'
              },
              {
                icon: Smartphone,
                title: 'Biometric Auth',
                description: 'Face ID and Touch ID support for secure, convenient access.'
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-white font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <Image
              src="/images/ausmo-wordmark.png"
              alt="Ausmo"
              width={256}
              height={76}
              className="h-16 w-auto mx-auto mb-8"
              style={{ objectFit: 'contain' }}
            />
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900 dark:text-white font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of families, educators, and therapists using Ausmo to support children with autism and communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white text-lg hover:shadow-2xl transition flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
              <Link href="/contact-support" className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition">
                Contact Support
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
              Free for families • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <StandardFooter />
    </div>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <AusmoWebsite />
    </ThemeProvider>
  )
}
