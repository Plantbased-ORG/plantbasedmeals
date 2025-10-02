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

      {/* Content */}
      <div className="relative z-10 max-w-[1512px] mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-[57px] font-medium leading-[120%] tracking-[-1%] text-[#141414] text-center">
          Our customers think highly of us
        </h2>
      </div>
    </section>
  )
}