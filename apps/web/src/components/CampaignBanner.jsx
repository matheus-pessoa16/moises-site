import React, { useState } from 'react'
import { SHOW_CAMPAIGN_BANNER, CAMPAIGN_SVG_URL } from '@/config/site'

export default function CampaignBanner() {
  const [imgError, setImgError] = useState(false)

  if (!SHOW_CAMPAIGN_BANNER || imgError) return null

  return (
    <section className="w-full" aria-label="Campanhas Moisés Nunes Comunicação Visual">
      <img
        src={CAMPAIGN_SVG_URL}
        alt="Campanhas Moisés Nunes Comunicação Visual"
        className="w-full h-auto block"
        onError={() => setImgError(true)}
      />
    </section>
  )
}
