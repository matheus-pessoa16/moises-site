import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

export default function AlbumModal({ album, isOpen, onClose }) {
  if (!album) return null

  const hasMultiple = album.media.length > 1

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-white">{album.title}</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Carousel opts={{ loop: hasMultiple, align: 'start' }}>
            <CarouselContent>
              {album.media.map((item) => (
                <CarouselItem key={item.subId}>
                  <div className="flex items-center justify-center bg-muted/30 rounded-lg overflow-hidden" style={{ minHeight: '300px', maxHeight: '70vh' }}>
                    {item.type === 'google-drive-video' ? (
                      <div className="w-full text-center p-4">
                        <iframe
                          src={`https://drive.google.com/file/d/${item.driveFileId}/preview`}
                          title={item.title || 'Vídeo'}
                          allow="autoplay; encrypted-data; fullscreen"
                          className="w-full mx-auto"
                          style={{ maxWidth: '640px', height: '360px', border: 'none' }}
                        />
                        <a
                          href={`https://drive.google.com/file/d/${item.driveFileId}/view`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-sm text-primary hover:underline"
                        >
                          Abrir vídeo no Google Drive
                        </a>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title || album.title}
                        className="w-full h-full object-contain"
                        style={{ maxHeight: '70vh' }}
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {hasMultiple && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}
