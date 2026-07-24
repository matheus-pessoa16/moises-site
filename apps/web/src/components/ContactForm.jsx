import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    toast.success('Mensagem enviada com sucesso. Entraremos em contato em breve.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-semibold mb-2 block text-white">
          Nome completo
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          className="text-foreground placeholder:text-muted-foreground focus-visible:ring-[hsl(var(--primary))] h-12 text-base"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && (
          <p className="text-sm text-[hsl(var(--destructive))] mt-1 font-medium">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-semibold mb-2 block text-white">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          className="text-foreground placeholder:text-muted-foreground focus-visible:ring-[hsl(var(--primary))] h-12 text-base"
          {...register('email', { 
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          })}
        />
        {errors.email && (
          <p className="text-sm text-[hsl(var(--destructive))] mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-semibold mb-2 block text-white">
          Telefone
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          className="text-foreground placeholder:text-muted-foreground focus-visible:ring-[hsl(var(--primary))] h-12 text-base"
          {...register('phone', { required: 'Telefone é obrigatório' })}
        />
        {errors.phone && (
          <p className="text-sm text-[hsl(var(--destructive))] mt-1 font-medium">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="service" className="text-sm font-semibold mb-2 block text-white">
          Serviço de interesse
        </Label>
        <Select onValueChange={(value) => setValue('service', value)}>
          <SelectTrigger className="text-foreground focus:ring-[hsl(var(--primary))] h-12 text-base">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="led">LED em ícones e letreiros</SelectItem>
            <SelectItem value="impressao">Impressão rápida</SelectItem>
            <SelectItem value="laser">Cortes a laser</SelectItem>
            <SelectItem value="cnc">Router CNC</SelectItem>
            <SelectItem value="fardamentos">Fardamentos</SelectItem>
            <SelectItem value="brindes">Brindes</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register('service', { required: 'Selecione um serviço' })} />
        {errors.service && (
          <p className="text-sm text-[hsl(var(--destructive))] mt-1 font-medium">{errors.service.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-semibold mb-2 block text-white">
          Mensagem
        </Label>
        <Textarea
          id="message"
          placeholder="Descreva seu projeto ou necessidade..."
          rows={6}
          className="text-foreground placeholder:text-muted-foreground resize-none focus-visible:ring-[hsl(var(--primary))] text-base"
          {...register('message', { required: 'Mensagem é obrigatória' })}
        />
        {errors.message && (
          <p className="text-sm text-[hsl(var(--destructive))] mt-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        size="lg"
        disabled={isSubmitting}
        className="w-full gradient-primary-secondary transition-all duration-300 active:scale-[0.98] text-base h-12 shadow-md hover:shadow-xl"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;