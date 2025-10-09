'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

// TypeScript interface for Program data structure
interface Program {
  id: string
  title: string
  description: string
  image: string
  slug: string
}

export default function ProgramDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [program, setProgram] = useState<Program | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch single program from API
  useEffect(() => {
    async function fetchProgram() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://plantbased-backend.onrender.com'
        const response = await fetch(`${apiUrl}/api/v1/programs/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch program: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.json()
        setProgram(data)
      } catch (err) {
        console.error('Error fetching program:', err)
        setError(err instanceof Error ? err.message : 'An error occurred while fetching program')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProgram()
    }
  }, [slug])

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
        <Link href="/programs" className="flex items-center">
          <Image
            src="/back-arrow.png"
            alt="Back to programs"
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

          {/* Healing Programs */}
          <Link href="/programs">
            <span className="text-[18px] font-normal leading-[100%] tracking-normal text-[#474747]">
              Healing Programs
            </span>
          </Link>

          {/* Separator */}
          <span className="text-[18px] text-[#474747]">/</span>

          {/* Current Page - Dynamic Program Name */}
          <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#2E2E2E]">
            {loading ? 'Loading...' : program?.title || 'Program'}
          </span>
        </div>
      </div>

      {/* Program Details Content will go here */}
      <div className="absolute top-48 left-33 z-10">
        {loading && (
          <p className="text-[#474747]">Loading program details...</p>
        )}
        
        {error && (
          <p className="text-red-600">Error: {error}</p>
        )}
        
        {!loading && !error && program && (
          <div>
            {/* Program details content will be added here */}
            <h2 className="text-[57px] font-medium leading-[110%] tracking-normal text-[#141414]">
              {program.title}
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}