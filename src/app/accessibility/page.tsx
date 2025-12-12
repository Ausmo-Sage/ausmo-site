import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from '../../components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Accessibility Statement - Ausmo AAC',
  description: 'Accessibility statement for Ausmo AAC - Our commitment to digital accessibility.',
}

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1A1F2E]">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-soft sticky top-0 z-50">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] dark:text-[#E8EDF2] mb-8">Accessibility Statement</h1>
        
        <div className="bg-[#FFF4E6] dark:bg-[#252B3B] rounded-lg shadow-sm p-8 space-y-8">
          <div className="border-b border-[#E8EEF2] dark:border-[#6B5B8C] pb-4">
            <p className="text-[#8B95A1] dark:text-[#8B95A1]">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-[#8B95A1] dark:text-[#8B95A1]">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">1. Our Commitment to Accessibility</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 mb-4">
              <p className="text-blue-800 dark:text-blue-200 font-semibold">
                Ausmo AAC is committed to ensuring digital accessibility for all users, including those with disabilities.
              </p>
            </div>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We believe that communication technology should be accessible to everyone, regardless of ability. 
              This commitment extends to our website, mobile application, and all digital services we provide.
            </p>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards 
              and comply with applicable accessibility laws including the Americans with Disabilities Act (ADA), 
              Section 508 of the Rehabilitation Act, and other relevant regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">2. Accessibility Standards</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">2.1 WCAG 2.1 Compliance</h3>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Our website and application are designed to meet WCAG 2.1 Level AA standards, which include:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Perceivable:</strong> Information and UI components must be presentable in ways users can perceive</li>
              <li><strong>Operable:</strong> UI components and navigation must be operable by all users</li>
              <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
              <li><strong>Robust:</strong> Content must be robust enough for interpretation by assistive technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">2.2 Legal Compliance</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>ADA (Americans with Disabilities Act):</strong> Ensuring equal access to digital services</li>
              <li><strong>Section 508:</strong> Federal accessibility requirements for electronic information</li>
              <li><strong>CVAA (Communications and Video Accessibility Act):</strong> Ensuring accessible communications</li>
              <li><strong>EN 301 549 (EU):</strong> European accessibility standard for ICT products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">3. Accessibility Features</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">3.1 Website Accessibility</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard</li>
              <li><strong>Screen Reader Support:</strong> Proper ARIA labels and semantic HTML structure</li>
              <li><strong>Color Contrast:</strong> Minimum 4.5:1 contrast ratio for normal text, 3:1 for large text</li>
              <li><strong>Alt Text:</strong> Descriptive alternative text for all images</li>
              <li><strong>Focus Indicators:</strong> Clear visual focus indicators for keyboard navigation</li>
              <li><strong>Responsive Design:</strong> Works on all device sizes and orientations</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">3.2 Mobile App Accessibility</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>VoiceOver/TalkBack:</strong> Full support for screen readers on iOS and Android</li>
              <li><strong>Switch Control:</strong> Compatible with external switches and assistive devices</li>
              <li><strong>Voice Control:</strong> Voice commands for app navigation</li>
              <li><strong>High Contrast:</strong> High contrast mode for better visibility</li>
              <li><strong>Large Text:</strong> Dynamic text sizing support</li>
              <li><strong>Motor Accessibility:</strong> Customizable touch targets and gesture recognition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">4. Assistive Technology Support</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Our services are compatible with a wide range of assistive technologies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Screen Readers</h4>
                <ul className="list-disc pl-4 text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  <li>NVDA (Windows)</li>
                  <li>JAWS (Windows)</li>
                  <li>VoiceOver (macOS/iOS)</li>
                  <li>TalkBack (Android)</li>
                  <li>Orca (Linux)</li>
                </ul>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Switch Control</h4>
                <ul className="list-disc pl-4 text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  <li>External switches</li>
                  <li>Eye tracking devices</li>
                  <li>Head tracking systems</li>
                  <li>Voice control software</li>
                  <li>Adaptive keyboards</li>
                </ul>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Magnification</h4>
                <ul className="list-disc pl-4 text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  <li>ZoomText</li>
                  <li>MAGic</li>
                  <li>Built-in browser zoom</li>
                  <li>iOS/Android zoom features</li>
                  <li>Custom magnification settings</li>
                </ul>
              </div>

              <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
                <h4 className="font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Voice Control</h4>
                <ul className="list-disc pl-4 text-[#2C3E50] dark:text-[#E8EDF2] text-sm">
                  <li>Dragon NaturallySpeaking</li>
                  <li>Voice Control (macOS)</li>
                  <li>Voice Access (Android)</li>
                  <li>Custom voice commands</li>
                  <li>Speech recognition APIs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">5. Testing and Evaluation</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">5.1 Testing Methods</h3>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We regularly test our services for accessibility using multiple methods:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Automated Testing:</strong> Using tools like WAVE, axe-core, and Lighthouse</li>
              <li><strong>Manual Testing:</strong> Testing with actual assistive technologies</li>
              <li><strong>User Testing:</strong> Testing with users who have disabilities</li>
              <li><strong>Expert Review:</strong> Accessibility audits by certified professionals</li>
              <li><strong>Continuous Monitoring:</strong> Ongoing accessibility monitoring and improvement</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">5.2 Testing Tools</h3>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>WAVE Web Accessibility Evaluator</li>
              <li>axe DevTools browser extension</li>
              <li>Lighthouse accessibility audit</li>
              <li>Color Contrast Analyzers</li>
              <li>Screen reader testing environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">6. Known Issues and Limitations</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              While we strive for full accessibility, we acknowledge that some areas may need improvement:
            </p>
            
            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 dark:border-accent-400 p-4 mb-4">
              <h4 className="font-semibold text-accent-800 dark:text-accent-200 mb-2">Current Limitations:</h4>
              <ul className="list-disc pl-4 text-accent-700 dark:text-accent-300 text-sm">
                <li>Some third-party content may not be fully accessible</li>
                <li>Complex data visualizations may need alternative formats</li>
                <li>Legacy content may not meet current accessibility standards</li>
              </ul>
            </div>

            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We are actively working to address these limitations and improve accessibility across all our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">7. Feedback and Support</h2>
            
            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">7.1 Reporting Accessibility Issues</h3>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              If you encounter accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Email:</strong> accessibility@ausmoapp.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-ACCESS (2223)</li>
              <li><strong>Online Form:</strong> <a href="/accessibility-feedback" className="text-secondary-600 dark:text-secondary-400 hover:underline">Accessibility Feedback Form</a></li>
              <li><strong>Mail:</strong> 123 Communication Ave, Accessibility City, AC 12345</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-3">7.2 Response Time</h3>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We will respond to accessibility feedback within 2 business days and work to resolve 
              issues as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">8. Alternative Access Methods</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              If you have difficulty accessing any part of our services, we offer alternative methods:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li><strong>Phone Support:</strong> Call us for assistance with any service</li>
              <li><strong>Email Support:</strong> Detailed assistance via email</li>
              <li><strong>Video Calls:</strong> Live assistance via video conferencing</li>
              <li><strong>Alternative Formats:</strong> Content in alternative formats upon request</li>
              <li><strong>Personal Assistance:</strong> One-on-one support for complex needs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">9. Training and Awareness</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              Our team receives regular training on accessibility best practices:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>WCAG 2.1 guidelines and implementation</li>
              <li>Assistive technology awareness</li>
              <li>Inclusive design principles</li>
              <li>Accessibility testing methodologies</li>
              <li>Legal compliance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">10. Future Improvements</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              We are committed to continuous improvement of accessibility:
            </p>
            <ul className="list-disc pl-6 text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              <li>Regular accessibility audits and updates</li>
              <li>Implementation of new accessibility features</li>
              <li>User feedback integration</li>
              <li>Technology advancement adoption</li>
              <li>Industry best practice following</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">11. Contact Information</h2>
            <div className="bg-[#D4E7F7] dark:bg-[#1A1F2E] p-4 rounded-lg">
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2"><strong>Accessibility Coordinator:</strong></p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Email: accessibility@ausmoapp.com</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Phone: +1 (555) 123-ACCESS (2223)</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">TTY: +1 (555) 123-TTYY (8899)</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Address: 123 Communication Ave, Accessibility City, AC 12345</p>
              
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mt-4 mb-2"><strong>Business Hours:</strong></p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Saturday: 10:00 AM - 4:00 PM (EST)</p>
              <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-2">Sunday: Closed</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-[#E8EDF2] mb-4">12. Updates to This Statement</h2>
            <p className="text-[#2C3E50] dark:text-[#E8EDF2] mb-4">
              This Accessibility Statement will be updated as we improve our accessibility features 
              and as accessibility standards evolve. We will notify users of significant changes 
              through our website and app.
            </p>
          </section>
        </div>
      </div>

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
