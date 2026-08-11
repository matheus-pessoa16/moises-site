import React from 'react'
import { motion } from 'framer-motion'

/**
 * Consistent hero for inner pages: centered title with a gradient
 * highlight word, light-blue subtitle and subtle brand glows.
 */
export default function PageHero({ title, highlight, titleAfter = '', subtitle }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--accent))]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white font-display"
            style={{ letterSpacing: '-0.02em' }}
          >
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-gradient-brand">{highlight}</span>
              </>
            )}
            {titleAfter && ` ${titleAfter}`}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
