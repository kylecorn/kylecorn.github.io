'use client'

import { motion } from 'framer-motion'
import { User, Snowflake, Clock } from 'lucide-react'

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <User className="w-5 h-5 text-clay" />
        <h2 className="section-heading">Interests</h2>
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <div>
            <p className="text-stone font-sans text-base leading-relaxed">
              If I'm not coding, you'll find me doing all sorts of different things. I love to cook,
              play volleball, golf, or tennis, and watch movies. At 5 years old I started an elementary school Spanish Immersion program
              so now I'm conversationally fluent in Spanish. My favorite movie is "Mr. Fantastic Fox"
              and my favorite meal is Cajun Chicken Pasta. When I get the chance, I love to travel
              to new places and try new food. I've been all across the United States and to a number of countries.
              I'm super interested in trying new things and always down to have a conversation with someone new. If any of these things interest you
              or you have any questions, please reach out!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Currently Section */}
      <div className="mt-8 pt-6 border-t border-sand-dark">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-5 h-5 text-clay" />
          <h2 className="section-heading">More Recent</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <div>
            <p className="text-stone font-sans text-base leading-relaxed">
              This summer I moved out to Columbus, Ohio for an internship opportunity with Abercrombie and Fitch.
              I'm half way through the internship and have loved every bit of it! Super excited for this opportunity and 
              looking forward to seeing how the rest of the summer goes. Besides this big change, I've kept busy by rereading 
              "The Great Gatsby", learning some new meal prep recipes, and continuing my work with Syzygy. Even though Columubus 
              is a little intimidating as a Michigan student, I've managed to enjoy my time without starting too many fights.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
