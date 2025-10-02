'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: string
  name: string
  location: string
  review: string
  avatar?: string
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch testimonials from your backend API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials') // Replace with your actual API endpoint
        
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials')
        }
        
        const data = await response.json()
        setTestimonials(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Split testimonials into two rows for animation
  const upperRow = testimonials.filter((_, index) => index % 2 === 0)
  const lowerRow = testimonials.filter((_, index) => index % 2 !== 0)

  if (loading) {
    return (
      <section className="relative w-full h-[920px]">
        <Image
          src="/testimonials-bg.png"
          alt="Testimonials background with plant-based ingredients"
          fill
          className="object-cover"
        />
        <div className="relative z-10 max-w-[1512px] mx-auto px-6 py-16">
          <h2 className="text-[57px] font-medium leading-[120%] tracking-[-1%] text-[#141414] text-center">
            Our customers think highly of us
          </h2>
          <p className="text-center mt-8 text-[#474747]">Loading testimonials...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative w-full h-[920px]">
        <Image
          src="/testimonials-bg.png"
          alt="Testimonials background with plant-based ingredients"
          fill
          className="object-cover"
        />
        <div className="relative z-10 max-w-[1512px] mx-auto px-6 py-16">
          <h2 className="text-[57px] font-medium leading-[120%] tracking-[-1%] text-[#141414] text-center">
            Our customers think highly of us
          </h2>
          <p className="text-center mt-8 text-red-600">Error: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full h-[920px] overflow-hidden">
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
        <h2 className="text-[57px] font-medium leading-[120%] tracking-[-1%] text-[#141414] text-center mb-12">
          Our customers think highly of us
        </h2>

        {/* Upper Row - Moving Left */}
        <div className="mb-6 animate-scroll-left">
          <div className="flex gap-6">
            {upperRow.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[420px] h-[260px] flex flex-col justify-between rounded-xl p-4 bg-[#FAFAFA] flex-shrink-0"
              >
                {/* Review Text */}
                <p className="text-[14px] font-normal leading-[150%] text-[#141414]">
                  {testimonial.review}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold leading-[100%] tracking-normal text-[#141414]">
                      {testimonial.name}
                    </p>
                    <p className="text-[14px] font-normal leading-[100%] tracking-normal text-[#474747] mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Row - Moving Right */}
        <div className="animate-scroll-right">
          <div className="flex gap-6">
            {lowerRow.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[420px] h-[260px] flex flex-col justify-between rounded-xl p-4 bg-[#FAFAFA] flex-shrink-0"
              >
                {/* Review Text */}
                <p className="text-[14px] font-normal leading-[150%] text-[#141414]">
                  {testimonial.review}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold leading-[100%] tracking-normal text-[#141414]">
                      {testimonial.name}
                    </p>
                    <p className="text-[14px] font-normal leading-[100%] tracking-normal text-[#474747] mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}