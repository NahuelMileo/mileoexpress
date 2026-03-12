import GaleriaComponent from "@/components/Galeria"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape at sunset",
    title: "Alpine Summit",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Lake with mountain reflection",
    title: "Mirror Lake",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Foggy forest in the morning",
    title: "Misty Woods",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Sunlight through forest trees",
    title: "Forest Light",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Mountain with lake view",
    title: "Valley Vista",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    alt: "Peaceful river scene",
    title: "Tranquil Stream",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Rolling green hills",
    title: "Emerald Hills",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Tropical beach at sunset",
    title: "Golden Shore",
    category: "Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "Starry night over mountains",
    title: "Night Sky",
    category: "Astrophotography",
  },
]

export default function Galeria() {
  return (
    <section className="container mx-auto px-4 pb-24">
          <GaleriaComponent images={galleryImages} columns={3} />
      </section>
  )
}
