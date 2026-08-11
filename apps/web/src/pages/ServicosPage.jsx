import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lightbulb, Printer, Scissors, Car, Shirt, Gift, PartyPopper, Store, Building2, Sticker, FileText, Check } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '@/components/WhatsAppLink.jsx';
import PageHero from '@/components/PageHero.jsx';
import CtaSection from '@/components/CtaSection.jsx';

function ServicosPage() {
  const services = [
  {
    id: 'led',
    icon: Lightbulb,
    title: 'Fachadas em ACM',
    description: 'Fachadas em ACM de alta qualidade que destacam sua marca com durabilidade e impacto visual. Utilizamos materiais premium e iluminação LED para garantir visibilidade 24 horas por dia.',
    image: 'https://horizons-cdn.hostinger.com/8cf04d40-a2cd-4e8d-966c-90768c888606/b08f42727d5c43268a55d2df057e9638.jpg',
    imageAlt: 'Fachada em ACM vermelha com logo SEU CHICO CONVENIÊNCIA em letras brancas 3D, iluminada com spots de LED',
    colorVar: '--secondary',
    benefits: [
      'Alta durabilidade e resistência',
      'Visibilidade noturna garantida com spot de LED',
      'Manutenção simplificada',
      'Design personalizado'
    ]
  },
  {
    id: 'evento',
    icon: PartyPopper,
    title: 'Eventos',
    description: 'Estruturas profissionais para eventos de todos os tamanhos. Montagem de pórticos, camarotes, pontos de venda e ambientação completa para feiras, shows e eventos corporativos.',
    image: 'https://lh3.googleusercontent.com/d/1kYT20yjI-B6chpBdskr5ErMkRArqoyiZ=w1000?authuser=0',
    imageAlt: 'Pórtico da Finecap 2024',
    colorVar: '--accent',
    benefits: [
      'Estruturas robustas e seguras',
      'Montagem e desmontagem rápida',
      'Projetos personalizados',
      'Experiência em grandes eventos',
      'Atendimento de ponta a ponta'
    ]
  },
  {
    id: 'impressao',
    icon: Printer,
    title: 'Impressão 3D',
    description: 'Impressão 3D profissional com cores vibrantes e acabamento resistente. Ideal para maquetes, mascotes, troféus e peças personalizadas com alta qualidade.',
    image: 'https://lh3.googleusercontent.com/d/1HaMHametd2kV9BIC-bBw_LzF_8vXc0G0=w1000?authuser=0',
    imageAlt: 'Impressão de maquete 3D, com cores vibrantes e acabamento resistente',
    colorVar: '--secondary',
    benefits: [
      'Alta resolução de impressão',
      'Cores vibrantes e duráveis',
      'Acabamento profissional',
      'Materiais resistentes',
      'Projetos personalizados'
    ]
  },
  {
    id: 'laser',
    icon: Scissors,
    title: 'Corte a Laser',
    description: 'Precisão milimétrica em cortes a laser para diversos materiais. Ideal para projetos que exigem acabamento perfeito e detalhes complexos em acrílico, MDF e outros.',
    image: 'https://lh3.googleusercontent.com/d/1qddVMZliepP-4nBA9Rk9hJcJay91883N=w1000?authuser=0',
    imageAlt: 'Peça decorativa em acrílico com corte a laser de precisão',
    colorVar: '--accent',
    benefits: [
      'Precisão absoluta nos cortes',
      'Acabamento limpo e profissional',
      'Versatilidade de materiais',
      'Projetos personalizados',
      'Rapidez na execução'
    ]
  },
  {
    id: 'fardamentos',
    icon: Shirt,
    title: 'Fardamentos',
    description: 'Uniformes personalizados que fortalecem a identidade visual da sua equipe. Qualidade superior em tecidos, bordados e acabamentos para empresas e eventos.',
    image: 'https://lh3.googleusercontent.com/d/1VsIJUJf0CkuYFNCOcWcISr0UzvYZweVE=w1000?authuser=0',
    imageAlt: 'Linha completa de uniformes personalizados para equipe corporativa',
    colorVar: '--secondary',
    benefits: [
      'Tecidos de alta qualidade',
      'Personalização completa',
      'Diversos modelos disponíveis',
      'Tamanhos variados',
      'Entrega programada'
    ]
  },
  {
    id: 'toldo',
    icon: Store,
    title: 'Toldos',
    description: 'Toldos personalizados com design e cores da sua marca. Soluções de alta qualidade e durabilidade para comércios, escritórios e residências.',
    image: 'https://lh3.googleusercontent.com/d/1W3BcpxPxgmYE0LhfD4GIrIggWWgP2wP8=w1000?authuser=0',
    imageAlt: 'Toldo personalizado com design e cores da marca',
    colorVar: '--primary',
    benefits: [
      'Alta qualidade e durabilidade',
      'Design personalizado',
      'Proteção solar eficiente',
      'Instalação profissional',
      'Manutenção simplificada'
    ]
  },
  {
    id: 'fachada',
    icon: Building2,
    title: 'Fachadas e Letreiros',
    description: 'Fachadas profissionais para empresas de todos os tamanhos. Letreiros luminosos, sinalização interna e externa com qualidade excepcional.',
    image: 'https://lh3.googleusercontent.com/d/1zYhRTijnT2tj52ix_0zzNUqPa1b67ERX=w1000?authuser=0',
    imageAlt: 'Fachada profissional para empresas com qualidade excepcional',
    colorVar: '--secondary',
    benefits: [
      'Projetos sob medida',
      'Materiais de alta qualidade',
      'Instalação profissional',
      'Manutenção preventiva',
      'Visibilidade impactante'
    ]
  },
  {
    id: 'brinde',
    icon: Gift,
    title: 'Brindes',
    description: 'Brindes corporativos personalizados que encantam e fortalecem sua marca. Amplo catálogo de produtos incluindo agendas, canecas, crachás e muito mais.',
    image: 'https://lh3.googleusercontent.com/d/151ogyxesWMh5wX8m-wL9nPREYb0gA_hk=w1000?authuser=0',
    imageAlt: 'Kit de brindes corporativos personalizados',
    colorVar: '--accent',
    benefits: [
      'Amplo catálogo de produtos',
      'Personalização exclusiva',
      'Qualidade garantida',
      'Entrega pontual',
      'Consultoria especializada'
    ]
  },
  {
    id: 'adesivacao',
    icon: Sticker,
    title: 'Adesivação',
    description: 'Adesivação profissional e de alta qualidade para estruturas comerciais. Soluções estéticas para consultórios, lojas e ambientes corporativos.',
    image: 'https://lh3.googleusercontent.com/d/1wS7vhY3Vu1zOgdibVRbblNvuxusr7w7a=w1000?authuser=0',
    imageAlt: 'Adesivação estética para consultório de dentista',
    colorVar: '--primary',
    benefits: [
      'Alta durabilidade',
      'Reprodução fiel de projetos',
      'Qualidade de impressão',
      'Acabamento superior',
      'Aplicação profissional'
    ]
  },
  {
    id: 'grafica_rapida',
    icon: FileText,
    title: 'Gráfica Rápida',
    description: 'Soluções gráficas rápidas e de qualidade para todas as suas necessidades. Impressões, crachás, pulseiras sinalizadoras e material corporativo.',
    image: 'https://lh3.googleusercontent.com/d/19LjW-GeRJGFrXe141Oxh7Fb7DoCfX9v2=w1000?authuser=0',
    imageAlt: 'Impressões personalizadas de alta qualidade',
    colorVar: '--secondary',
    benefits: [
      'Entrega rápida',
      'Alta qualidade de impressão',
      'Diversos materiais',
      'Atendimento personalizado',
      'Preços competitivos'
    ]
  },
  {
    id: 'frota',
    icon: Car,
    title: 'Frotas',
    description: 'Adesivação personalizada de alta qualidade para frotas de veículos. Atendemos empresas privadas e órgãos públicos com excelência.',
    image: 'https://lh3.googleusercontent.com/d/1YeNQW_mB47oM8oIwvFfPN8IN2NrCDz0B=w1000?authuser=0',
    imageAlt: 'Adesivação personalizada para veículos de empresas',
    colorVar: '--primary',
    benefits: [
      'Padronização da frota',
      'Alta durabilidade',
      'Reprodução fiel de projetos',
      'Qualidade profissional',
      'Produção em escala'
    ]
  }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Conheça nossos serviços: Fachadas em ACM, impressão rápida, cortes a laser, Router CNC, fardamentos e brindes personalizados." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <PageHero
          title="Nossos"
          highlight="serviços"
          subtitle="Soluções vibrantes e completas em comunicação visual com qualidade profissional e atendimento personalizado."
        />

        {/* Services Detail Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ '--section-accent': `var(${service.colorVar})` }}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[hsl(var(--section-accent))]/10 text-[hsl(var(--section-accent))] shadow-sm">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="space-y-4 mb-10">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="mt-1.5 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-[hsl(var(--section-accent))]/20 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-[hsl(var(--section-accent))] font-bold" />
                            </div>
                          </div>
                          <span className="text-foreground font-medium text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <WhatsAppButton
                        message="Olá! Gostaria de solicitar um orçamento."
                        size="lg"
                        className="gradient-primary-secondary transition-all duration-300 active:scale-[0.98] shadow-md"
                      >
                        Solicitar orçamento
                      </WhatsAppButton>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-[hsl(var(--section-accent))]/40 text-[hsl(var(--section-accent))] hover:bg-[hsl(var(--section-accent))]/10 transition-all duration-300"
                      >
                        <Link to={`/galeria?category=${service.id}`}>
                          Ver na galeria
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative group ring-1 ring-white/10">
                      <div className="absolute inset-0 bg-[hsl(var(--section-accent))]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={service.image} 
                        alt={service.imageAlt}
                        className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Precisa de um orçamento personalizado?"
          subtitle="Nossa equipe está pronta para atender suas necessidades e criar a solução perfeita, com as cores e o impacto que sua marca exige."
          ctaLabel="Entre em contato agora"
          ctaMessage="Olá! Preciso de um orçamento personalizado."
        />

        <Footer />
      </div>
    </>
  );
}

export default ServicosPage;