import React from 'react'
import { WHATSAPP_URL } from '@/config/site'
import { Button } from '@/components/ui/button'

export function WhatsAppLink({ message = '', children, className }) {
  return (
    <a
      href={WHATSAPP_URL(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export function WhatsAppButton({ message = '', children, variant = 'default', size, className }) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <WhatsAppLink message={message}>{children}</WhatsAppLink>
    </Button>
  )
}
