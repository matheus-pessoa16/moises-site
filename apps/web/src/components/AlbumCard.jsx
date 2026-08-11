import React from 'react'
import { motion } from 'framer-motion'

export default function AlbumCard({ album, onClick, delay = 0 }) {
  const categoryLabel = album.categoryLabel || album.category

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      onClick={() => onClick(album)}
      className="album-card cursor-pointer rounded-xl overflow-hidden bg-card border border-white/10 hover:border-[hsl(var(--secondary))]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--secondary))]/10"
    >
      <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-contain"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="px-4 py-3">
        <span className="inline-block text-xs font-medium text-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/10 rounded-full px-3 py-1 mb-1">
          {categoryLabel}
        </span>
        <h3 className="text-sm font-semibold text-white truncate font-display">{album.title}</h3>
      </div>
    </motion.div>
  )
}
