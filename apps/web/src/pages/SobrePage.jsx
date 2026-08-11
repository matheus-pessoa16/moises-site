import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';
function SobrePage() {
  const values = [{
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Compromisso com excelência em cada projeto, utilizando materiais de primeira linha e acabamento impecável.',
    color: '--primary'
  }, {
    icon: Zap,
    title: 'Agilidade Notável',
    description: 'Prazos rigorosamente cumpridos e entregas rápidas com a mesma perfeição visual.',
    color: '--secondary'
  }, {
    icon: Target,
    title: 'Inovação Constante',
    description: 'Sempre à frente com as últimas tendências e tecnologias em impressão e iluminação LED.',
    color: '--accent'
  }, {
    icon: Users,
    title: 'Foco Total no Cliente',
    description: 'Atendimento humanizado e soluções sob medida para destacar a identidade única do seu negócio.',
    color: '--primary'
  }];
  return <>
      <Helmet>
        <title>Sobre - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Conheça a história, missão e valores da Moisés Nunes Comunicação Visual. Qualidade, agilidade e inovação em cada projeto." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <PageHero
          title="Nossa"
          highlight="história"
          subtitle="Transformando a paisagem visual de eventos e empresas com paixão, cor e precisão técnica."
        />

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-bold text-sm mb-6">
                  Tradição & Inovação
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Moldando a comunicação visual</h2>
                <div className="space-y-6 text-[hsl(var(--muted-foreground))] leading-relaxed text-lg">
                  <p>
                    Somos <strong className="text-white">Moisés Nunes Comunicação Visual,</strong> há mais de 13 anos no mercado atuando na área de impressão, oferecendo aos nossos clientes as melhores soluções em impressão de alta qualidade e rapidez na entrega. Nossa finalidade é sempre prestar serviços de qualidade com competência e pontualidade.
                  </p>
                  <p>
                  Nossa empresa é dividida em setores de atendimento, gráfica rápida, fardamentos, produção de materiais gráficos e fachadas.
                  </p>
                  <p>
                  Contamos com uma equipe de funcionários qualificados para o seu determinado setor. Equipamentos calibrados e softwares modernos, garantindo a qualidade dos seus materiais impressos.
                  </p>
                </div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                  <img src="https://horizons-cdn.hostinger.com/8cf04d40-a2cd-4e8d-966c-90768c888606/impressao3d-weVlm.jpeg" alt="Equipe Moisés Nunes Comunicação Visual" className="w-full h-full object-cover aspect-square md:aspect-[4/5]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/50 border-t border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-center mb-20">
              <SectionHeader title="O que nos move" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-card p-8 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group" style={{
              '--val-color': `var(${value.color})`
            }}>
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(var(--val-color))]/10 text-[hsl(var(--val-color))] group-hover:bg-[hsl(var(--val-color))] group-hover:text-white transition-colors duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[hsl(var(--card))] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--secondary))]/20 via-transparent to-[hsl(var(--accent))]/20 z-0"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                  Faça parte da nossa história
                </h2>
                <p className="text-xl text-[hsl(var(--muted-foreground))] mb-10">
                  Estamos prontos para assumir o desafio do seu próximo projeto visual.
                </p>
                <Button asChild size="lg" className="gradient-primary-secondary text-lg h-14 px-10 rounded-full shadow-[0_0_20px_hsl(var(--accent))/40] hover:shadow-[0_0_30px_hsl(var(--accent))/60] transition-all duration-300">
                  <Link to="/contato">Iniciar projeto agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default SobrePage;