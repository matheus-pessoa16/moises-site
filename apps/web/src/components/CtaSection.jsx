import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WhatsAppButton } from '@/components/WhatsAppLink.jsx'

/**
 * Shared closing CTA: elevated navy panel, brand hairline on top,
 * subtle cyan glow and the signature cyan gradient WhatsApp button.
 */
export default function CtaSection({ title, subtitle, ctaLabel, ctaMessage }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-card border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="absolute top-0 inset-x-0 h-[2px] hairline-gradient"></div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[hsl(var(--secondary))]/10 rounded-full blur-3xl pointer-events-none"></div>
          <h2
            className="relative text-3xl md:text-5xl font-extrabold mb-6 text-white font-display"
            style={{ letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="relative text-xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <WhatsAppButton
            message={ctaMessage}
            size="lg"
            className="relative gradient-primary-secondary h-14 px-10 text-lg shadow-lg transition-all duration-300 active:scale-[0.98]"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 w-5 h-5" />
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
