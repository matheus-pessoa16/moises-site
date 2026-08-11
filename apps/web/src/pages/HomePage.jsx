import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CampaignBanner from '@/components/CampaignBanner.jsx';
import CampaignCards from '@/components/CampaignCards.jsx';
import CtaSection from '@/components/CtaSection.jsx';
import { WhatsAppButton } from '@/components/WhatsAppLink.jsx';
function HomePage() {
  return <>
      <Helmet>
        <title>Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Comunicação visual profissional para eventos. LED, impressão rápida, cortes a laser, CNC, fardamentos e brindes personalizados." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[hsl(var(--navy))]">
          <div className="absolute inset-0 z-0">
            <img src="https://horizons-cdn.hostinger.com/8cf04d40-a2cd-4e8d-966c-90768c888606/fachada-moises-DLQmZ.png" alt="Comunicação visual para eventos" className="w-full h-full object-cover" />
            {/* Legibility gradients — keep the facade visible on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#01154A] via-[#01154A]/75 to-[#01154A]/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#01154A] via-[#01154A]/50 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7
            }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] animate-pulse"></span>
                  Especialistas em Comunicação Visual
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Há mais de 13 anos <span className="text-gradient-brand">imprimindo a sua história</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl font-medium">
                  Soluções criativas e vibrantes em impressão, LED e personalização para destacar seu evento e negócio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton
                    message="Olá! Gostaria de solicitar um orçamento para comunicação visual."
                    size="lg"
                    className="gradient-primary-secondary h-14 px-8 text-lg shadow-lg hover:shadow-[hsl(var(--primary))/30] transition-all duration-300 active:scale-[0.98]"
                  >
                    Solicitar orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </WhatsAppButton>
                  <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-[hsl(var(--navy))] hover:bg-white/90 shadow-lg transition-all duration-300 active:scale-[0.98]">
                    <Link to="/servicos">
                      Conheça nossos serviços
                    </Link>
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60 font-medium">
                  <span>13+ anos de mercado</span>
                  <span className="w-1 h-1 rounded-full bg-[hsl(var(--secondary))]"></span>
                  <span>Pau dos Ferros/RN</span>
                  <span className="w-1 h-1 rounded-full bg-[hsl(var(--secondary))]"></span>
                  <span>Resposta rápida no WhatsApp</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Campaign Banner */}
        <CampaignBanner />

        {/* Campaign Cards */}
        <CampaignCards />

        {/* CTA Section */}
        <CtaSection
          title="Pronto para destacar o seu negócio?"
          subtitle="Transforme o visual da sua marca com a nossa expertise. Solicite um orçamento sem compromisso e veja suas ideias ganharem vida."
          ctaLabel="Fale conosco agora"
          ctaMessage="Olá! Gostaria de falar sobre um projeto de comunicação visual."
        />

        <Footer />
      </div>
    </>;
}
export default HomePage;