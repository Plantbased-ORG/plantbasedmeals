import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section className="relative w-full h-[920px]">
      {/* Background Image */}
      <Image
        src="/testimonials-bg.png"
        alt="Testimonials background with plant-based ingredients"
        fill
        className="object-cover"
      />
    </section>
  )
}