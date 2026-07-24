import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import CareersForm from '@/components/CareersForm.jsx'

function TrabalheConoscoPage() {
  return (
    <>
      <Helmet>
        <title>Trabalhe Conosco - Moisés Nunes Comunicação Visual</title>
        <meta
          name="description"
          content="Faça parte da equipe Moisés Nunes Comunicação Visual. Envie seu currículo e venha criar comunicação visual com a gente."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(var(--accent))]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                Trabalhe{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))]">
                  conosco
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Envie seu currículo e venha fazer parte da nossa equipe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-2">Envie sua candidatura</h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e anexe seu currículo em PDF, DOC ou DOCX (até 10 MB).
                </p>
                <CareersForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TrabalheConoscoPage
