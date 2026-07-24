import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

function PortfolioModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-all duration-200"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              {project.category}
            </span>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            </DialogHeader>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PortfolioModal;