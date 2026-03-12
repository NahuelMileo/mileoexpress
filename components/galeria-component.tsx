"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  src: string
  alt: string
  title?: string
  category?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  className?: string
}

export function GaleriaComponent({ images, columns = 3, className }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
    setSelectedIndex(null)
  }

  const goToPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
  }

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeLightbox()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, selectedIndex])

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <>
      <div className={cn("grid gap-4", gridCols[columns], className)}>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-5xl border-none bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">
            {selectedIndex !== null ? images[selectedIndex]?.title || "Gallery image" : "Gallery"}
          </DialogTitle>
          {selectedIndex !== null && (
            <div className="relative">
              {/* Close button */}
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 z-50 text-foreground/70 hover:text-foreground hover:bg-transparent"
                >
                  <X className="size-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 z-50 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ChevronLeft className="size-6" />
                <span className="sr-only">Previous image</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-2 top-1/2 z-50 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ChevronRight className="size-6" />
                <span className="sr-only">Next image</span>
              </Button>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  width={1200}
                  height={800}
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              </div>

              {/* Image info */}
              <div className="mt-4 text-center">
                {images[selectedIndex].title && (
                  <h3 className="text-lg font-medium text-foreground">
                    {images[selectedIndex].title}
                  </h3>
                )}
                {images[selectedIndex].category && (
                  <p className="text-sm text-muted-foreground">
                    {images[selectedIndex].category}
                  </p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

interface GalleryItemProps {
  image: GalleryImage
  onClick: () => void
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <button
      onClick={onClick}
      className="group relative block overflow-hidden rounded-lg bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/40" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {image.category && (
            <span className="mb-2 text-xs font-medium uppercase tracking-widest text-background/80">
              {image.category}
            </span>
          )}
          {image.title && (
            <h3 className="text-center text-lg font-semibold text-background">
              {image.title}
            </h3>
          )}
        </div>
      </AspectRatio>
    </button>
  )
}
