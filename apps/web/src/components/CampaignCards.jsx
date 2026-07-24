import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { campaigns } from '@/data/campaigns'

export default function CampaignCards() {
  return (
    <section className="py-16 bg-background" data-testid="campaign-cards">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="campaign-card rounded-lg overflow-hidden bg-card border border-border"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-contain"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{campaign.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
                {campaign.ctaLink ? (
                  <Button asChild variant="outline" size="sm">
                    <Link to={campaign.ctaLink}>{campaign.ctaText || 'Saiba mais'}</Link>
                  </Button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
