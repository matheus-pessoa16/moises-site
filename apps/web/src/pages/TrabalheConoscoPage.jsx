import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import CareersForm from '@/components/CareersForm.jsx'
import PageHero from '@/components/PageHero.jsx'

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
        <PageHero
          title="Trabalhe"
          highlight="conosco"
          subtitle="Envie seu currículo e venha fazer parte da nossa equipe."
        />

        {/* Form Section */}
        <section className="py-20 pb-32 bg-background flex-1">
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
