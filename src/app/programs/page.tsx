'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// TypeScript interface for Program data structure
interface Program {
  id: string
  title: string
  description: string
  image: string
  slug: string
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch programs from API
  useEffect(() => {
    async function fetchPrograms() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://plantbased-backend.onrender.com'
        const response = await fetch(`${apiUrl}/api/v1/programs`)
        
        if (!response.ok) throw new Error('Failed to fetch programs')
        
        const data = await response.json()
        setPrograms(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Logo and Brand Name - Top Left (shifted more to the right) */}
      <div className="absolute top-6 left-34 z-10 flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="PlantBased Meals Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <h1 className="text-[28px] font-semibold leading-[110%] tracking-normal">
          <span className="text-[#29A248]">PLANTBASED</span>{' '}
          <span className="text-[#EB7E29]">MEALS</span>
        </h1>
      </div>

      {/* Breadcrumb Navigation (shifted down) */}
      <div className="absolute top-32 left-23 z-10 flex items-center gap-6">
        {/* Back Arrow - Import as Image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/back-arrow.png"
            alt="Back to home"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Home and Navigation */}
        <div className="flex items-center gap-2">
          {/* Home */}
          <Link href="/">
            <span className="text-[18px] font-normal leading-[100%] tracking-normal text-[#474747]">
              Home
            </span>
          </Link>

          {/* Separator */}
          <span className="text-[18px] text-[#474747]">/</span>

          {/* Current Page */}
          <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#2E2E2E]">
            Healing Programs
          </span>
        </div>
      </div>

      {/* Page Heading */}
      <div className="absolute top-48 left-33 z-10">
        <h2 className="text-[57px] font-medium leading-[110%] tracking-normal text-[#141414]">
          Explore our Healing Programs
        </h2>
      </div>

      {/* Horizontal Divider Line */}
      <div className="absolute top-[292px] left-[120px] w-[1272px] h-0 border-t border-[#CCCCCC80]"></div>

      {/* Search Bar */}
      <div className="absolute top-[316px] left-[120px] w-[620px] h-[56px] bg-[#F5F5F5] rounded-lg p-4 flex items-center gap-[10px]">
        <Image
          src="/search-icon.png"
          alt="Search"
          width={24}
          height={24}
          className="object-contain"
        />
        <input
          type="text"
          placeholder="Search for a program"
          className="flex-1 bg-transparent text-[20px] font-medium leading-[110%] tracking-normal text-[#7A7A7A] placeholder:text-[#7A7A7A] focus:outline-none"
        />
      </div>

      {/* Programs Grid Container */}
      <div className="absolute top-[404px] left-[120px] w-[1272px] h-[1222px] overflow-y-auto">
        <div className="grid grid-cols-4 gap-8">
          {loading && (
            <div className="col-span-4 text-center text-[#474747] py-8">
              Loading programs...
            </div>
          )}

          {error && (
            <div className="col-span-4 text-center text-red-600 py-8">
              Error: {error}
            </div>
          )}

          {!loading && !error && programs.length === 0 && (
            <div className="col-span-4 text-center text-[#474747] py-8">
              No programs available yet.
            </div>
          )}

          {!loading && !error && programs.map((program) => (
            <div
              key={program.id}
              className="w-[294px] min-w-[294px] h-[386px] flex flex-col gap-4"
            >
              {/* Program Image */}
              <div className="w-[294px] h-[240px] relative overflow-hidden rounded-lg">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Program Title */}
              <h3 className="text-[20px] font-medium leading-[110%] tracking-normal text-[#2E2E2E]">
                {program.title}
              </h3>

              {/* Program Description */}
              <p className="text-[16px] font-normal leading-[150%] tracking-normal text-[#474747] line-clamp-2">
                {program.description}
              </p>

              {/* Read Full Program Link */}
              <Link href={`/programs/${program.slug}`}>
                <span className="text-[18px] font-medium leading-[110%] tracking-normal text-[#04640C] hover:underline">
                  READ FULL PROGRAM
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}