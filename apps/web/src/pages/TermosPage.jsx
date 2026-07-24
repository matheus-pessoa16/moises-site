import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  FileText, BookOpen, Globe, PenTool, UploadCloud, Image, 
  Briefcase, CreditCard, Lock, Users, ShieldAlert, XOctagon, 
  FileWarning, RefreshCcw, Power, Scale, Mail, Calendar 
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermosPage() {
  const sections = [
    { id: 'introducao', title: '1. Introdução e Aceitação', icon: FileText },
    { id: 'definicoes', title: '2. Definições', icon: BookOpen },
    { id: 'uso', title: '3. Uso do Site', icon: Globe },
    { id: 'propriedade', title: '4. Propriedade Intelectual', icon: PenTool },
    { id: 'conteudo', title: '5. Conteúdo do Usuário', icon: UploadCloud },
    { id: 'direitos', title: '6. Direitos sobre Trabalhos', icon: Image },
    { id: 'portfolio', title: '7. Uso de Portfólio', icon: Briefcase },
    { id: 'pagamento', title: '8. Políticas de Pagamento', icon: CreditCard },
    { id: 'confidencialidade', title: '9. Confidencialidade', icon: Lock },
    { id: 'responsabilidades', title: '10. Responsabilidades', icon: Users },
    { id: 'limitacao', title: '11. Limitação de Responsabilidade', icon: ShieldAlert },
    { id: 'isencao', title: '12. Isenção de Garantias', icon: XOctagon },
    { id: 'indenizacao', title: '13. Indenização', icon: FileWarning },
    { id: 'modificacoes', title: '14. Modificações dos Termos', icon: RefreshCcw },
    { id: 'rescisao', title: '15. Rescisão e Suspensão', icon: Power },
    { id: 'lei', title: '16. Lei Aplicável e Jurisdição', icon: Scale },
    { id: 'contato', title: '17. Contato para Dúvidas', icon: Mail },
    { id: 'atualizacao', title: '18. Última Atualização', icon: Calendar },
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
        <title>Termos de Uso - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Termos de Uso da Moisés Nunes Comunicação Visual. Conheça as diretrizes, responsabilidades e políticas aplicáveis aos nossos serviços." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(var(--secondary))]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-sm font-semibold mb-6">
                <FileText className="w-4 h-4" />
                <span>Diretrizes e Regras</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--navy))]" style={{ letterSpacing: '-0.02em' }}>
                Termos de Uso
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Leia atentamente estes termos antes de utilizar os serviços e produtos da Moisés Nunes Comunicação Visual.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <span>Data de vigência: 15 de Maio de 2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Sidebar / Table of Contents */}
              <aside className="lg:w-1/3 xl:w-1/4 flex-shrink-0 hidden md:block">
                <div className="sticky top-28 bg-card rounded-2xl p-6 shadow-sm border max-h-[80vh] overflow-y-auto custom-scrollbar">
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-6">Índice</h3>
                  <nav className="flex flex-col gap-1.5">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="flex items-center gap-3 text-left px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 transition-colors duration-200"
                      >
                        <section.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <main className="lg:w-2/3 xl:w-3/4 max-w-3xl prose prose-slate prose-headings:text-[hsl(var(--navy))] prose-a:text-[hsl(var(--primary))]">
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="introducao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-[hsl(var(--primary))]" />
                    1. Introdução e Aceitação dos Termos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bem-vindo à <strong>Moisés Nunes Comunicação Visual</strong>. Ao acessar e utilizar nosso site, bem como ao contratar nossos serviços de comunicação visual, você expressamente concorda e aceita todos os termos e condições descritos neste documento.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Caso não concorde com qualquer parte destes Termos de Uso, solicitamos que não utilize nossos serviços ou acesse nosso site. Estes termos constituem um acordo legal vinculativo entre você ("Cliente" ou "Usuário") e a nossa empresa.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="definicoes" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-[hsl(var(--primary))]" />
                    2. Definições e Interpretações
                  </h2>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li><strong>Serviços:</strong> Inclui todos os trabalhos de comunicação visual, fachadas em ACM, impressão digital, cortes a laser, router CNC, fardamentos, brindes e qualquer outro produto oferecido pela empresa.</li>
                    <li><strong>Cliente:</strong> Qualquer pessoa física ou jurídica que contrate nossos serviços ou solicite orçamentos.</li>
                    <li><strong>Site:</strong> Nossa plataforma online acessível através do domínio moisesnunes.com.br (ou domínios relacionados).</li>
                    <li><strong>Projeto Final:</strong> A arte, peça física, fachada ou material impresso entregue como conclusão do serviço contratado.</li>
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="uso" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-[hsl(var(--primary))]" />
                    3. Uso do Site
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Você concorda em usar nosso site apenas para fins legais e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e usufruto do site por qualquer outra pessoa. Atividades proibidas incluem (mas não se limitam a):
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li>Tentativas de acesso não autorizado aos nossos sistemas.</li>
                    <li>Uso de robôs, spiders, scrapers ou outros meios automatizados para acessar o site.</li>
                    <li>Cópia, distribuição ou divulgação de qualquer parte do site sem permissão expressa.</li>
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="propriedade" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <PenTool className="w-6 h-6 text-[hsl(var(--primary))]" />
                    4. Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Todo o conteúdo presente no site (textos, gráficos, logotipos, ícones, imagens e softwares) é de propriedade exclusiva da Moisés Nunes Comunicação Visual ou de seus fornecedores de conteúdo, e é protegido pelas leis de direitos autorais brasileiras e internacionais. O uso não autorizado desse material constitui violação de nossos direitos.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="conteudo" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <UploadCloud className="w-6 h-6 text-[hsl(var(--primary))]" />
                    5. Conteúdo do Usuário
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ao nos fornecer imagens, logotipos, textos ou quaisquer outros materiais para a execução de um serviço, o Cliente garante que possui todos os direitos autorais, licenças e permissões necessárias para o uso desses materiais. A Moisés Nunes Comunicação Visual não se responsabiliza por infrações de direitos autorais causadas por arquivos enviados pelo Cliente.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="direitos" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Image className="w-6 h-6 text-[hsl(var(--primary))]" />
                    6. Direitos sobre Trabalhos e Projetos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Salvo acordo prévio em contrato específico, os arquivos editáveis (projetos fontes, vetores, arquivos de modelagem 3D) criados pela nossa equipe permanecem sob propriedade intelectual da Moisés Nunes Comunicação Visual. O Cliente adquire o produto final (material impresso, letreiro físico, fachada instalada) ou a licença de uso das artes finais aprovadas.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="portfolio" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[hsl(var(--primary))]" />
                    7. Uso de Portfólio e Galeria
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reservamo-nos o direito de fotografar os projetos executados e instalados e utilizar essas imagens em nosso portfólio, site, redes sociais e materiais promocionais, para fins de demonstração da nossa capacidade técnica. Caso o projeto contenha informações confidenciais não lançadas ao público, o Cliente deve nos notificar formalmente antes da conclusão.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="pagamento" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-[hsl(var(--primary))]" />
                    8. Políticas de Pagamento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As condições de pagamento serão especificadas no orçamento aprovado. Em regra geral, os projetos são iniciados mediante o pagamento de um sinal (entrada) de 50%, com o saldo remanescente pago na entrega ou instalação do material. Atrasos no pagamento do sinal resultarão no adiamento do cronograma de produção.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="confidencialidade" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-[hsl(var(--primary))]" />
                    9. Confidencialidade de Projetos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprometemo-nos a manter total sigilo sobre projetos, lançamentos e campanhas de clientes que não tenham sido veiculados ao público. Caso seja necessário assinar um Acordo de Não Divulgação (NDA), este deverá ser apresentado pelo Cliente no momento da solicitação de orçamento.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="responsabilidades" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[hsl(var(--primary))]" />
                    10. Responsabilidades do Cliente
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    É de inteira responsabilidade do Cliente:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6 list-disc pl-6">
                    <li>Revisar minuciosamente textos, cores e dimensões nas provas digitais antes de autorizar a produção física.</li>
                    <li>Garantir a veracidade e legalidade das informações a serem veiculadas.</li>
                    <li>Providenciar autorizações municipais e alvarás necessários para instalação de fachadas e tótens.</li>
                    <li>Garantir infraestrutura adequada (energia elétrica, alvenaria) no local de instalação para recebimento dos letreiros.</li>
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="limitacao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <ShieldAlert className="w-6 h-6 text-[hsl(var(--primary))]" />
                    11. Limitação de Responsabilidade
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Em nenhuma hipótese a Moisés Nunes Comunicação Visual será responsável por danos indiretos, lucros cessantes ou interrupções de negócios resultantes de atrasos justificados na entrega, falhas técnicas imprevistas, ou problemas de força maior. Nossa responsabilidade máxima limita-se ao valor total pago pelo projeto em questão.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="isencao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <XOctagon className="w-6 h-6 text-[hsl(var(--primary))]" />
                    12. Isenção de Garantias
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Embora utilizemos materiais de primeira linha e técnicas especializadas, pequenas variações de cores entre a tela (RGB) e a impressão física (CMYK), bem como dilatações naturais de materiais como ACM devido a intempéries climáticas, são características físicas da produção e não são consideradas defeitos, estando isentas de substituição gratuita.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="indenizacao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileWarning className="w-6 h-6 text-[hsl(var(--primary))]" />
                    13. Indenização
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Você concorda em defender, indenizar e isentar a Moisés Nunes Comunicação Visual de toda e qualquer reivindicação, perda, responsabilidade, dano e custo (incluindo honorários advocatícios) decorrentes de violação destes Termos ou da violação de direitos de propriedade intelectual causados por materiais fornecidos por você.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="modificacoes" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <RefreshCcw className="w-6 h-6 text-[hsl(var(--primary))]" />
                    14. Modificações dos Termos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reservamo-nos o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. A versão mais recente sempre estará disponível nesta página. O uso continuado de nossos serviços após tais alterações constituirá seu consentimento para tais mudanças.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="rescisao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Power className="w-6 h-6 text-[hsl(var(--primary))]" />
                    15. Rescisão e Suspensão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Podemos cancelar orçamentos, suspender serviços em andamento ou rescindir contratos caso o Cliente apresente comportamento abusivo, descumprimento dos prazos de pagamento ou violação de qualquer disposição destes Termos de Uso.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="lei" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-[hsl(var(--primary))]" />
                    16. Lei Aplicável e Jurisdição
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Quaisquer disputas ou controvérsias decorrentes destes Termos serão submetidas ao foro da Comarca de Pau dos Ferros, Estado do Rio Grande do Norte, renunciando-se a qualquer outro, por mais privilegiado que seja.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="contato" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
                    17. Contato para Dúvidas
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Se você tiver alguma dúvida sobre estes Termos de Uso, por favor, entre em contato conosco através dos seguintes canais:
                  </p>
                  <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <p className="text-[hsl(var(--navy))] font-medium mb-2">Moisés Nunes Comunicação Visual</p>
                    <p className="text-muted-foreground mb-1"><strong>E-mail:</strong> moises.nunes.cvisual@outlook.com</p>
                    <p className="text-muted-foreground mb-1"><strong>Telefone:</strong> (84) 92176-8017</p>
                    <p className="text-muted-foreground"><strong>Endereço:</strong> Pau dos Ferros, RN - Brasil</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} id="atualizacao" className="scroll-mt-28 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-[hsl(var(--primary))]" />
                    18. Data da Última Atualização
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Este documento de Termos de Uso foi atualizado pela última vez em <strong>15 de Maio de 2026</strong>.
                  </p>
                </motion.div>

              </main>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default TermosPage;