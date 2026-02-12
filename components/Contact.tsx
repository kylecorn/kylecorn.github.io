'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, FileText, ExternalLink, Download, MessageCircle, Github } from 'lucide-react'
import { bio } from '@/lib/data'
import { useState } from 'react'

export default function Contact() {
  const [showResume, setShowResume] = useState(false)

  const contactLinks = [
    {
      icon: Mail,
      label: bio.email,
      href: `mailto:${bio.email}`,
      color: 'accent-coral',
    },
    {
      icon: Phone,
      label: bio.phone,
      href: `tel:${bio.phone}`,
      color: 'accent-teal',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      href: bio.linkedin,
      external: true,
      color: 'accent-pink',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: bio.github,
      external: true,
      color: 'accent-amber',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle className="w-5 h-5 text-accent-amber" />
        <h2 className="mono-heading">Get In Touch</h2>
      </div>
      
      {/* Contact links */}
      <div className="space-y-4 mb-8">
        {contactLinks.map((link, index) => {
          const Icon = link.icon
          const colorClasses = {
            'accent-coral': 'bg-accent-coral/10 border-accent-coral/20 group-hover:bg-accent-coral/20 text-accent-coral',
            'accent-teal': 'bg-accent-teal/10 border-accent-teal/20 group-hover:bg-accent-teal/20 text-accent-teal',
            'accent-pink': 'bg-accent-pink/10 border-accent-pink/20 group-hover:bg-accent-pink/20 text-accent-pink',
            'accent-amber': 'bg-accent-amber/10 border-accent-amber/20 group-hover:bg-accent-amber/20 text-accent-amber',
          }
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-3 rounded-lg border border-border-gray hover:border-accent-coral/50 bg-warm-gray/30 hover:bg-warm-gray/50 transition-all duration-300 group"
            >
              <div className={`p-2 rounded-lg border transition-colors ${colorClasses[link.color as keyof typeof colorClasses]}`}>
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-sm text-white group-hover:text-accent-coral transition-colors flex-1">
                {link.label}
              </span>
              {link.external && (
                <ExternalLink className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent-coral transition-all" />
              )}
            </motion.a>
          )
        })}
      </div>
      
      {/* Resume section */}
      <div className="pt-6 border-t border-border-gray/30">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-accent-pink" />
          <h3 className="font-mono text-sm font-semibold text-text-muted uppercase tracking-wider">
            Resume
          </h3>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={bio.resume}
            download
            className="btn-primary flex items-center justify-center gap-2 flex-1 group/btn"
          >
            <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
            <span>Download PDF</span>
          </a>
          <button
            onClick={() => setShowResume(!showResume)}
            className="btn-primary flex items-center justify-center gap-2 flex-1 group/btn"
          >
            <FileText className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
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
            className="rounded-lg border border-border-gray overflow-hidden bg-warm-gray/20"
          >
            <iframe
              src={`${bio.resume}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-[600px]"
              title="Resume"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer note */}
      <div className="mt-8 pt-6 border-t border-border-gray/30">
        <p className="font-mono text-xs text-text-muted/50 text-center">
          {'//'} Always open to new opportunities and collaborations
        </p>
      </div>
    </motion.div>
  )
}
