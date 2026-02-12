'use client'

import { motion } from 'framer-motion'
import { User, Snowflake, Clock } from 'lucide-react'

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="col-span-full lg:col-span-6 bento-card group relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/0 via-accent-amber/0 to-accent-teal/0 group-hover:from-accent-coral/10 group-hover:via-accent-amber/5 group-hover:to-accent-teal/10 transition-all duration-500 pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-6">
        <User className="w-5 h-5 text-accent-pink" />
        <h2 className="mono-heading">Interests</h2>
      </div>
      
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <Snowflake className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-text-muted font-sans text-base leading-relaxed">
              If I'm not coding, you'll find me doing all sorts of different things. I love to cook,
              play volleball and tennis, and watch movies. At 5 years old I started a Spanish Immersion program
              so now I'm conversationally fluent in Spanish. My favorite movie is "Mr. Fantastic Fox" 
              and my favorite meal is Cajun Chicken Pasta. When I get the chance, I love to travel 
              to new places and try new food. I've been all across the United States (my favorite States
              I've visited are Colorado, Calidornia, and Arizona) and I've traveled to a few countries
              (most notable was the Galapagos Islands in Ecuador)as well. I'm always interested in trying new things
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Currently Section */}
      <div className="mt-8 pt-6 border-t border-border-gray/30">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-5 h-5 text-accent-amber" />
          <h2 className="mono-heading">More Recent</h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <Snowflake className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-text-muted font-sans text-base leading-relaxed">
              This past month I finished reading "The Five Dysfunctions of a Team" by Patrick Lencioni which I thought
              was a super interesting take on team dynamics. I'm hoping to be able to implement some of these ideas
              into my professional life moving forward. I also took a snowboarding trip to Crested Butte, Colorado, 
              where I got to try out my new Rekkie ski googles. Although I might not be the best snowboarder, I'm
              proud to say I handled myself pretty well. Last, I started working with Syzergy (an AI consulting
              company startup) and as we close up our current project, I'm excited to jump into our next one soon.

            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="mt-6 pt-6 border-t border-border-gray/30">
        <p className="font-mono text-xs text-text-muted/50 text-center">
          {'//'} More updates coming soon...
        </p>
      </div>
    </motion.div>
  )
}
