import React from 'react'

/**
 * Section header following the brand reference (textos.jpeg):
 * white bold title, short cyan gradient bar, light-blue subtitle.
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--secondary))]">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display"
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(199_90%_48%)]" />
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed font-medium">{subtitle}</p>
      )}
    </div>
  )
}
