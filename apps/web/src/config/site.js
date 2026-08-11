export const WHATSAPP_NUMBER = '5584921768017'

export function WHATSAPP_URL(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ''}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/moisesnunescv/'

export const LOGO_URL =
  'https://lh3.googleusercontent.com/d/18xOXZzf3FW_ptUF9UNNSdTxL6ec5QnfY=w1000?authuser=0'

export const N8N_WEBHOOK_URL =
  'https://n8n.devsr.com.br/webhook/moisesNunesAnalise'

export const SHOW_CAMPAIGN_BANNER = false

export const CAMPAIGN_SVG_URL =
  'https://lh3.googleusercontent.com/d/1UePH9sYu6RP88jlK6XFMjurKBIBbVqDs=w1000?authuser=0'

export const RESUME_MAX_SIZE_MB = 10

export const RESUME_ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const RESUME_ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']
