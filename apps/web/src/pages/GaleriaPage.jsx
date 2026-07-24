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
import { WhatsAppButton } from '@/components/WhatsAppLink.jsx'

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
                Nossa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))]">
                  galeria
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Explore a energia e a qualidade dos nossos projetos de comunicação visual.
              </p>
            </motion.div>
          </div>
        </section>

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
                      ? 'gradient-primary-secondary border-none shadow-md'
                      : 'hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]'
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
        <section className="py-20 bg-[hsl(var(--navy))] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--primary))/80] z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Inspirado pelos nossos projetos?</h2>
            <WhatsAppButton
              message="Olá! Vi a galeria e gostaria de criar um projeto."
              size="lg"
              className="gradient-accent border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Vamos criar o seu projeto
            </WhatsAppButton>
          </div>
        </section>

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