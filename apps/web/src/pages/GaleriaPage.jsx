import React, { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import AlbumCard from '@/components/AlbumCard.jsx'
import AlbumModal from '@/components/AlbumModal.jsx'
import { Button } from '@/components/ui/button'
import { categories, albums } from '@/data/albums'
import PageHero from '@/components/PageHero.jsx'
import CtaSection from '@/components/CtaSection.jsx'

function GaleriaPage() {
  const [searchParams] = useSearchParams()
  const urlCategory = searchParams.get('category')
  const validCategory = categories.find((c) => c.id === urlCategory)?.id
  const [selectedCategory, setSelectedCategory] = useState(validCategory || 'all')

  useEffect(() => {
    if (validCategory && validCategory !== selectedCategory) {
      setSelectedCategory(validCategory)
    }
  }, [validCategory, selectedCategory])
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredAlbums = useMemo(() => {
    if (selectedCategory === 'all') return albums
    return albums.filter((album) => album.category === selectedCategory)
  }, [selectedCategory])

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album)
    setIsModalOpen(true)
  }

  const categoryLabel = (catId) => {
    const cat = categories.find((c) => c.id === catId)
    return cat ? cat.label : catId
  }

  return (
    <>
      <Helmet>
        <title>Galeria - Moisés Nunes Comunicação Visual</title>
        <meta
          name="description"
          content="Confira nosso portfólio de projetos em comunicação visual: LED, impressão, cortes a laser, fardamentos e brindes."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <PageHero
          title="Nossa"
          highlight="galeria"
          subtitle="Explore a energia e a qualidade dos nossos projetos de comunicação visual."
        />

        {/* Filter Section */}
        <section className="py-10 border-b relative z-20 bg-background/80 backdrop-blur-sm sticky top-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 active:scale-[0.98] rounded-full px-6 ${
                    selectedCategory === category.id
                      ? 'gradient-primary-secondary text-white border-none'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredAlbums.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredAlbums.map((album, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={album.id}
                  >
                    <AlbumCard
                      album={{ ...album, categoryLabel: categoryLabel(album.category) }}
                      onClick={handleAlbumClick}
                      delay={0}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-32">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--muted))] mb-4">
                  <span className="text-2xl text-[hsl(var(--muted-foreground))]">?</span>
                </div>
                <p className="text-white font-medium text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Inspirado pelos nossos projetos?"
          ctaLabel="Vamos criar o seu projeto"
          ctaMessage="Olá! Vi a galeria e gostaria de criar um projeto."
        />

        <Footer />
      </div>

      <AlbumModal
        album={selectedAlbum}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default GaleriaPage