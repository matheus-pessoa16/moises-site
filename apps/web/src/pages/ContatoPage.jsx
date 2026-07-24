import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContatoPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(84) 92176-8017',
      link: 'tel:+5584921768017',
      color: '--primary'
    }, 
    {
      icon: Mail,
      title: 'E-mail',
      content: 'moises.nunes.cvisual@outlook.com',
      link: 'mailto:moises.nunes.cvisual@outlook.com',
      color: '--secondary'
    }, 
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Pau dos Ferros, RN',
      link: null,
      color: '--warning'
    }, 
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 07:30 às 17:30 | Sáb: 08:00 às 12:00',
      link: null,
      color: '--accent'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Contato - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Entre em contato com a Moisés Nunes Comunicação Visual. Solicite seu orçamento e tire suas dúvidas." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--warning))]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--navy))]" style={{ letterSpacing: '-0.02em' }}>
                Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--warning))] to-[hsl(var(--destructive))]">conversar?</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Sua marca precisa de um upgrade visual? Preencha o formulário abaixo e receba um atendimento ágil e especializado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-2xl border border-border/50 relative overflow-hidden">
                  {/* Subtle top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 gradient-primary-secondary"></div>
                  
                  <h2 className="text-3xl font-extrabold mb-8 text-[hsl(var(--navy))]">Envie seu projeto</h2>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }} 
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-extrabold mb-8 text-[hsl(var(--navy))]">Canais de atendimento</h2>
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-5 items-start p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300 group" style={{ '--info-color': `var(${info.color})` }}>
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--info-color))]/10 text-[hsl(var(--info-color))] flex items-center justify-center group-hover:bg-[hsl(var(--info-color))] group-hover:text-white transition-colors duration-300 shadow-sm">
                            <info.icon className="w-7 h-7" />
                          </div>
                        </div>
                        <div className="pt-1">
                          <h3 className="font-bold text-[hsl(var(--navy))] mb-1 text-lg">{info.title}</h3>
                          {info.link ? (
                            <a href={info.link} className="text-muted-foreground hover:text-[hsl(var(--info-color))] font-medium transition-colors duration-200 text-lg">
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground font-medium text-lg">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info / CTA */}
                <div className="bg-[hsl(var(--navy))] rounded-3xl p-8 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--primary))]/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <h3 className="font-bold mb-4 text-white text-2xl">Atendimento Expresso</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    Valorizamos o seu tempo. Respondemos todas as solicitações rapidamente. Para demandas urgentes, recomendamos o contato telefônico.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
export default ContatoPage;