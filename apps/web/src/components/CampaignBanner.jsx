import React, { useState } from 'react'
import { SHOW_CAMPAIGN_BANNER, CAMPAIGN_SVG_URL } from '@/config/site'

export default function CampaignBanner() {
  const [imgError, setImgError] = useState(false)

  if (!SHOW_CAMPAIGN_BANNER) return null

  return (
    <section className="w-full" aria-label="Campanhas Moisés Nunes Comunicação Visual">
      {imgError && <div className="w-full h-32 bg-primary/20" />}
      <img
        src={CAMPAIGN_SVG_URL}
        alt="Campanhas Moisés Nunes Comunicação Visual"
        className={`w-full h-auto block ${imgError ? 'hidden' : ''}`}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
      />
    </section>
  )
}
