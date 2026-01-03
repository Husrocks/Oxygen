'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube, Send, Shield, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Classes', href: '#classes' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Gallery', href: '#gallery' },
]

const supportLinks = [
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Careers', href: '#careers' },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Follow us on Instagram' },
  { icon: Facebook, href: '#', label: 'Follow us on Facebook' },
  { icon: Twitter, href: '#', label: 'Follow us on Twitter' },
  { icon: Youtube, href: '#', label: 'Follow us on YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-bg border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="text-3xl font-bold uppercase tracking-wider text-accent-green font-display mb-4 inline-block hover:scale-105 transition-transform"
            >
              Oxygen
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind with our state-of-the-art facilities
              and expert guidance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-accent-green flex items-center justify-center text-gray-400 hover:text-dark-bg transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-dark-text mb-6 font-display">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-gray-400 hover:text-accent-green transition-colors duration-300 relative inline-block group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-dark-text mb-6 font-display">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-green transition-colors duration-300 relative inline-block group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-dark-text mb-6 font-display">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe to get updates on new programs and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-dark-text placeholder-gray-500 focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 transition-all"
                  aria-label="Email for newsletter"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-4 py-3 bg-accent-green text-dark-bg rounded-lg hover:bg-accent-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              {submitted && (
                <motion.p
                  className="text-accent-green text-sm flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  Subscribed successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oxygen. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4 text-accent-green" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <CheckCircle className="w-4 h-4 text-accent-green" />
              <span>Quality Assured</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

