import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, Share2, Cookie, UserCheck, Clock, Link as LinkIcon, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPage() {
  const sections = [
    { id: 'introducao', title: '1. Introdução', icon: FileText },
    { id: 'coleta', title: '2. Informações que Coletamos', icon: Database },
    { id: 'uso', title: '3. Como Usamos suas Informações', icon: Eye },
    { id: 'compartilhamento', title: '4. Compartilhamento de Dados', icon: Share2 },
    { id: 'cookies', title: '5. Cookies e Rastreamento', icon: Cookie },
    { id: 'direitos', title: '6. Seus Direitos (LGPD)', icon: UserCheck },
    { id: 'seguranca', title: '7. Segurança dos Dados', icon: Lock },
    { id: 'retencao', title: '8. Retenção de Dados', icon: Clock },
    { id: 'terceiros', title: '9. Políticas de Terceiros', icon: LinkIcon },
    { id: 'contato', title: '10. Contato', icon: Mail },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Política de Privacidade e Proteção de Dados da Moisés Nunes Comunicação Visual. Saiba como tratamos seus dados em conformidade com a LGPD." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(var(--primary))]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                <span>Transparência e Segurança</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--navy))]" style={{ letterSpacing: '-0.02em' }}>
                Política de Privacidade
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Entenda como a Moisés Nunes Comunicação Visual coleta, usa e protege suas informações pessoais em conformidade com a LGPD.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <span>Data de vigência: 15 de Maio de 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></span>
                <span>Última atualização: 15 de Maio de 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Sidebar / Table of Contents */}
              <aside className="lg:w-1/3 xl:w-1/4 flex-shrink-0">
                <div className="sticky top-28 bg-card rounded-2xl p-6 shadow-sm border">
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-6">Índice</h3>
                  <nav className="flex flex-col gap-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 transition-colors duration-200"
                      >
                        <section.icon className="w-4 h-4 flex-shrink-0" />
                        <span>{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:w-2/3 xl:w-3/4 max-w-3xl prose prose-slate prose-headings:text-[hsl(var(--navy))] prose-a:text-[hsl(var(--primary))]">
                
                <div id="introducao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-[hsl(var(--primary))]" />
                    1. Introdução
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A <strong>Moisés Nunes Comunicação Visual</strong> ("nós", "nosso" ou "empresa") está comprometida em proteger a sua privacidade e garantir a segurança dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, processamos e divulgamos suas informações quando você utiliza nosso site e nossos serviços.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar nosso site ou utilizar nossos serviços, você concorda com as práticas descritas nesta política. Este documento foi elaborado em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
                  </p>
                </div>

                <div id="coleta" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6 text-[hsl(var(--primary))]" />
                    2. Informações que Coletamos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li><strong>Dados de Contato:</strong> Nome, endereço de e-mail, número de telefone e nome da empresa, fornecidos voluntariamente ao preencher formulários de orçamento ou contato.</li>
                    <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site e outras estatísticas de diagnóstico.</li>
                    <li><strong>Dados de Interação:</strong> Informações sobre como você interage com nossos anúncios e campanhas de marketing.</li>
                  </ul>
                </div>

                <div id="uso" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-[hsl(var(--primary))]" />
                    3. Como Usamos suas Informações
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos as informações coletadas para as seguintes finalidades:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li>Fornecer, operar e manter nossos serviços de comunicação visual.</li>
                    <li>Processar orçamentos e responder às suas dúvidas e solicitações.</li>
                    <li>Melhorar, personalizar e expandir nosso site e ofertas.</li>
                    <li>Compreender e analisar como você usa nosso site.</li>
                    <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
                    <li>Comunicar-nos com você para fins de atendimento ao cliente, atualizações e marketing (com seu consentimento).</li>
                    <li>Encontrar e prevenir fraudes.</li>
                  </ul>
                </div>

                <div id="compartilhamento" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Share2 className="w-6 h-6 text-[hsl(var(--primary))]" />
                    4. Compartilhamento de Dados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes situações:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li><strong>Provedores de Serviço:</strong> Compartilhamos dados com empresas terceirizadas que facilitam nosso serviço (ex: hospedagem de site, análise de dados, atendimento ao cliente).</li>
                    <li><strong>Parceiros de Marketing:</strong> Plataformas como META (Facebook/Instagram) para fins de publicidade direcionada e análise de métricas.</li>
                    <li><strong>Obrigação Legal:</strong> Quando exigido por lei, intimação ou processo legal semelhante.</li>
                  </ul>
                </div>

                <div id="cookies" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-[hsl(var(--primary))]" />
                    5. Cookies e Tecnologias de Rastreamento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso site e armazenar certas informações.
                  </p>
                  <div className="bg-muted p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-[hsl(var(--navy))] mb-3">Pixel do Facebook (META) e Rastreamento de Conversão</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nosso site utiliza o Pixel do Facebook, uma ferramenta de análise da META Platforms, Inc. Esta ferramenta nos permite rastrear o comportamento dos usuários após clicarem em um anúncio do Facebook ou Instagram, medindo a eficácia de nossas campanhas publicitárias (rastreamento de conversão).
                      <br /><br />
                      Os dados coletados através do Pixel são anônimos para nós, mas são armazenados e processados pela META, que pode vincular essas informações à sua conta na rede social e utilizá-las para seus próprios fins promocionais, de acordo com a Política de Uso de Dados da META.
                    </p>
                  </div>
                </div>

                <div id="direitos" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-[hsl(var(--primary))]" />
                    6. Seus Direitos (LGPD)
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos em relação aos seus dados pessoais:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li><strong>Confirmação e Acesso:</strong> Direito de confirmar a existência de tratamento e acessar seus dados.</li>
                    <li><strong>Correção:</strong> Direito de corrigir dados incompletos, inexatos ou desatualizados.</li>
                    <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Direito de solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a lei.</li>
                    <li><strong>Portabilidade:</strong> Direito de solicitar a transferência dos seus dados a outro fornecedor de serviço.</li>
                    <li><strong>Revogação do Consentimento:</strong> Direito de revogar o consentimento a qualquer momento, sem afetar a legalidade do tratamento realizado anteriormente.</li>
                  </ul>
                </div>

                <div id="seguranca" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-[hsl(var(--primary))]" />
                    7. Segurança dos Dados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A segurança dos seus dados é importante para nós. Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                  </p>
                </div>

                <div id="retencao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-[hsl(var(--primary))]" />
                    8. Retenção de Dados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reteremos suas informações pessoais apenas pelo tempo necessário para os fins definidos nesta Política de Privacidade. Reteremos e usaremos suas informações na medida do necessário para cumprir nossas obrigações legais, resolver disputas e aplicar nossas políticas.
                  </p>
                </div>

                <div id="terceiros" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <LinkIcon className="w-6 h-6 text-[hsl(var(--primary))]" />
                    9. Links para Políticas de Terceiros
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, será direcionado para o site desse terceiro. Recomendamos fortemente que você revise a Política de Privacidade de todos os sites que visitar.
                  </p>
                  <div className="flex flex-col gap-3 mt-4">
                    <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:underline font-medium">
                      Política de Privacidade da META (Facebook/Instagram)
                    </a>
                  </div>
                </div>

                <div id="contato" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
                    10. Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Se você tiver alguma dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos sob a LGPD, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através dos seguintes canais:
                  </p>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <p className="text-[hsl(var(--navy))] font-medium mb-2">Moisés Nunes Comunicação Visual</p>
                    <p className="text-muted-foreground mb-1"><strong>E-mail:</strong> moises.nunes.cvisual@outlook.com</p>
                    <p className="text-muted-foreground mb-1"><strong>Telefone:</strong> (84) 92176-8017</p>
                    <p className="text-muted-foreground"><strong>Endereço:</strong> Pau dos Ferros, RN - Brasil</p>
                  </div>
                </div>

              </main>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default PrivacyPage;