import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Upload, Send } from 'lucide-react'
import {
  N8N_WEBHOOK_URL,
  RESUME_MAX_SIZE_MB,
  RESUME_ALLOWED_TYPES,
  RESUME_ALLOWED_EXTENSIONS,
} from '@/config/site'

export default function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileError, setFileError] = useState('')
  const fileInputRef = useRef(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const validateFile = (file) => {
    if (!file) return 'Currículo é obrigatório'
    const maxSizeBytes = RESUME_MAX_SIZE_MB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      return `O arquivo excede o limite de ${RESUME_MAX_SIZE_MB} MB`
    }
    if (!RESUME_ALLOWED_TYPES.includes(file.type)) {
      return `Formato não suportado. Aceitos: ${RESUME_ALLOWED_EXTENSIONS.join(', ')}`
    }
    return ''
  }

  const onSubmit = async (data) => {
    const file = fileInputRef.current?.files?.[0]
    const error = validateFile(file)
    if (error) {
      setFileError(error)
      return
    }
    setFileError('')

    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('message', data.message)
      formData.append('resume', file)

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      toast.success('Candidatura enviada com sucesso! Entraremos em contato em breve.')
      reset()
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (err) {
      toast.error('Não foi possível enviar sua candidatura. Tente novamente em instantes.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="careers-form">
      <div>
        <Label htmlFor="careers-name" className="text-sm font-semibold mb-2 block text-white">
          Nome completo
        </Label>
        <Input
          id="careers-name"
          type="text"
          placeholder="Seu nome"
          className="text-foreground placeholder:text-muted-foreground"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1 font-medium" data-testid="error-name">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="careers-email" className="text-sm font-semibold mb-2 block text-white">
          E-mail
        </Label>
        <Input
          id="careers-email"
          type="email"
          placeholder="seu@email.com"
          className="text-foreground placeholder:text-muted-foreground"
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido',
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1 font-medium" data-testid="error-email">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="careers-phone" className="text-sm font-semibold mb-2 block text-white">
          Telefone
        </Label>
        <Input
          id="careers-phone"
          type="tel"
          placeholder="(00) 00000-0000"
          className="text-foreground placeholder:text-muted-foreground"
          {...register('phone', { required: 'Telefone é obrigatório' })}
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1 font-medium" data-testid="error-phone">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="careers-message" className="text-sm font-semibold mb-2 block text-white">
          Mensagem
        </Label>
        <Textarea
          id="careers-message"
          placeholder="Conte sobre você e sua experiência..."
          rows={5}
          className="text-foreground placeholder:text-muted-foreground resize-none"
          {...register('message', { required: 'Mensagem é obrigatória' })}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1 font-medium" data-testid="error-message">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="careers-resume" className="text-sm font-semibold mb-2 block text-white">
          Currículo (PDF, DOC ou DOCX — até {RESUME_MAX_SIZE_MB} MB)
        </Label>
        <Input
          id="careers-resume"
          type="file"
          accept={RESUME_ALLOWED_EXTENSIONS.join(',')}
          ref={fileInputRef}
          className="text-foreground file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer"
          data-testid="resume-input"
        />
        {fileError && (
          <p className="text-sm text-destructive mt-1 font-medium" data-testid="error-resume">{fileError}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full gradient-primary-secondary transition-all duration-300 active:scale-[0.98] text-base h-12 shadow-md hover:shadow-xl"
        data-testid="submit-careers"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar candidatura
          </>
        )}
      </Button>
    </form>
  )
}
