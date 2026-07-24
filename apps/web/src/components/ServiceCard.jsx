import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, link, delay = 0, colorVar = '--primary' }) {
  // Pass the color variable as a CSS custom property for dynamic vibrant styling
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ '--card-accent': `var(${colorVar})` }}
      className="group relative bg-card rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
    >
      {/* Background Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--card-accent))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(var(--card-accent))] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[hsl(var(--card-accent))]/10 text-[hsl(var(--card-accent))] group-hover:bg-[hsl(var(--card-accent))] group-hover:text-white transition-colors duration-300 shadow-sm">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-[hsl(var(--navy))] group-hover:text-[hsl(var(--card-accent))] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {description}
        </p>
      </div>
      
      <div className="mt-auto relative z-10">
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-[hsl(var(--card-accent))] font-bold hover:gap-4 transition-all duration-300 bg-[hsl(var(--card-accent))]/5 px-4 py-2 rounded-lg group-hover:bg-[hsl(var(--card-accent))] group-hover:text-white"
        >
          Saiba mais
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;