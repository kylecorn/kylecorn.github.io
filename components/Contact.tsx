'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, FileText, ExternalLink, Download, Github } from 'lucide-react'
import { bio } from '@/lib/data'
import { useState } from 'react'

export default function Contact() {
  const [showResume, setShowResume] = useState(false)

  const contactLinks = [
    {
      icon: Mail,
      label: bio.email,
      href: `mailto:${bio.email}`,
    },
    {
      icon: Phone,
      label: bio.phone,
      href: `tel:${bio.phone}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      href: bio.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: bio.github,
      external: true,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <h2 className="section-heading mb-8">Get In Touch</h2>

      {/* Contact links */}
      <div className="space-y-3 mb-8">
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-3 rounded border border-sand-dark hover:border-ink/30 hover:bg-white/50 transition-colors duration-200 group"
            >
              <div className="p-2 rounded border border-sand-dark text-dusk">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm text-ink flex-1">
                {link.label}
              </span>
              {link.external && (
                <ExternalLink className="w-4 h-4 text-stone opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
          )
        })}
      </div>

      {/* Resume section */}
      <div className="pt-6 border-t border-sand-dark">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-clay" />
          <h3 className="font-mono text-sm font-semibold text-stone uppercase tracking-wider">
            Resume
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={bio.resume}
            download
            className="btn-primary flex items-center justify-center gap-2 flex-1"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <button
            onClick={() => setShowResume(!showResume)}
            className="btn-primary flex items-center justify-center gap-2 flex-1"
          >
            <FileText className="w-4 h-4" />
            <span>{showResume ? 'Hide' : 'View'} Resume</span>
          </button>
        </div>
      </div>

      {/* Resume viewer */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded border border-sand-dark overflow-hidden bg-sand/40"
          >
            <iframe
              src={`${bio.resume}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-[600px]"
              title="Resume"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
