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
            <img src="https://horizons-cdn.hostinger.com/8cf04d40-a2cd-4e8d-966c-90768c888606/fachada-moises-DLQmZ.png" alt="Comunicação visual para eventos" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
            {/* Vibrant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--navy))] via-[hsl(var(--navy))/80] to-[hsl(var(--primary))/40]"></div>
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
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))] animate-pulse"></span>
                  Especialistas em Comunicação Visual
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Há mais de 13 anos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))]">imprimindo a sua história</span>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Campaign Banner */}
        <CampaignBanner />

        {/* Campaign Cards */}
        <CampaignCards />

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--navy))] z-0"></div>
          {/* Vibrant abstract background elements */}
          <div className="absolute inset-0 opacity-30 z-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--accent)),_transparent_70%),_radial-gradient(circle_at_top_right,_hsl(var(--primary)),_transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
                Pronto para destacar o seu negócio?
              </h2>
              <p className="text-xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
                Transforme o visual da sua marca com a nossa expertise. Solicite um orçamento sem compromisso e veja suas ideias ganharem vida.
              </p>
              <WhatsAppButton
                message="Olá! Gostaria de falar sobre um projeto de comunicação visual."
                size="lg"
                className="gradient-warm h-14 px-10 text-lg shadow-[0_0_30px_hsl(var(--warning))/30] transition-all duration-300 active:scale-[0.98]"
              >
                Fale conosco agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </WhatsAppButton>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default HomePage;