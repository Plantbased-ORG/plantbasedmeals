'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/layout/Footer'

// TypeScript interface for backend API response
interface ProgramFromAPI {
  program: {
    id: number
    name: string
    short_description: string
    main_image_url: string
    intro_description: string
    main_content_image_url: string
    what_causes: string
    what_causes_image_url: string
    health_risks: string
    health_risks_image_url: string
    strategies: string
    strategies_image_url: string
    conclusion: string
    conclusion_image_url: string
  }
}

// TypeScript interface for Program data structure
interface Program {
  id: number
  title: string
  description: string
  image: string
  slug: string
  intro_description: string
  main_content_image_url: string
  what_causes: string
  what_causes_image_url: string
  health_risks: string
  health_risks_image_url: string
  strategies: string
  strategies_image_url: string
  conclusion: string
  conclusion_image_url: string
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
        
        // First, get all programs to find the matching slug
        const response = await fetch(`${apiUrl}/api/v1/programs`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch programs: ${response.status}`)
        }
        
        const data: ProgramFromAPI[] = await response.json()
        
        // Find the program that matches the slug
        const matchedProgram = data.find((item: ProgramFromAPI) => {
          const programSlug = item.program.name.toLowerCase().replace(/\s+/g, '-')
          return programSlug === slug
        })
        
        if (!matchedProgram) {
          throw new Error('Program not found')
        }
        
        // Transform to match your interface
        setProgram({
          id: matchedProgram.program.id,
          title: matchedProgram.program.name,
          description: matchedProgram.program.short_description,
          image: matchedProgram.program.main_image_url,
          slug: slug,
          intro_description: matchedProgram.program.intro_description,
          main_content_image_url: matchedProgram.program.main_content_image_url,
          what_causes: matchedProgram.program.what_causes,
          what_causes_image_url: matchedProgram.program.what_causes_image_url,
          health_risks: matchedProgram.program.health_risks,
          health_risks_image_url: matchedProgram.program.health_risks_image_url,
          strategies: matchedProgram.program.strategies,
          strategies_image_url: matchedProgram.program.strategies_image_url,
          conclusion: matchedProgram.program.conclusion,
          conclusion_image_url: matchedProgram.program.conclusion_image_url,
        })
        
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
          <div className="relative">
            {/* Program details content will be added here */}
            <h2 className="text-[57px] font-medium leading-[110%] tracking-normal text-[#141414]">
              {program.title}
            </h2>
            
            {/* Get Program Button */}
            <button className="absolute top-0 left-[966px] w-[173px] h-[62px] bg-[#04640C] rounded-lg px-8 py-5 flex items-center justify-center gap-4">
              <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FAFAFA]">
                Get Program
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Divider */}
      <div className="absolute top-[292px] left-[120px] w-[1272px] h-0 border-t border-[#CCCCCC80]"></div>

      {/* Program Content Sections */}
      {!loading && !error && program && (
        <>
          <div className="absolute top-[332px] left-[120px] w-[1032px]">
            {/* Introduction */}
            <p className="text-[24px] font-normal leading-[160%] tracking-[0.02em] text-[#474747] mb-8 whitespace-pre-line">
              {program.intro_description}
            </p>

            {/* Main Content Image */}
            <div className="relative w-[1032px] h-[602px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={program.main_content_image_url}
                alt="Introduction"
                fill
                className="object-cover"
              />
            </div>

            {/* What Causes Section */}
            <h3 className="text-[40px] font-semibold leading-[120%] tracking-[0.02em] text-[#141414] mb-6">
              What Causes {program.title}?
            </h3>
            <p className="text-[24px] font-normal leading-[160%] tracking-[0.02em] text-[#474747] mb-8 whitespace-pre-line">
              {program.what_causes}
            </p>

            {/* What Causes Image */}
            <div className="relative w-[1032px] h-[689px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={program.what_causes_image_url}
                alt="What Causes"
                fill
                className="object-cover"
              />
            </div>

            {/* Health Risks Section */}
            <h3 className="text-[40px] font-semibold leading-[120%] tracking-[0.02em] text-[#141414] mb-6">
              Health Risks Associated with {program.title}
            </h3>
            <p className="text-[24px] font-normal leading-[160%] tracking-[0.02em] text-[#474747] mb-8 whitespace-pre-line">
              {program.health_risks}
            </p>

            {/* Health Risks Image */}
            <div className="relative w-[1032px] h-[766px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={program.health_risks_image_url}
                alt="Health Risks"
                fill
                className="object-cover"
              />
            </div>

            {/* Strategies Section */}
            <h3 className="text-[40px] font-semibold leading-[120%] tracking-[0.02em] text-[#141414] mb-6">
              Strategies for Managing and Preventing {program.title}
            </h3>
            <p className="text-[24px] font-normal leading-[160%] tracking-[0.02em] text-[#474747] mb-8 whitespace-pre-line">
              {program.strategies}
            </p>

            {/* Strategies Image */}
            <div className="relative w-[1032px] h-[766px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={program.strategies_image_url}
                alt="Strategies"
                fill
                className="object-cover"
              />
            </div>

            {/* Conclusion Section */}
            <h3 className="text-[40px] font-semibold leading-[120%] tracking-[0.02em] text-[#141414] mb-6">
              Conclusion
            </h3>
            <p className="text-[24px] font-normal leading-[160%] tracking-[0.02em] text-[#474747] mb-12 whitespace-pre-line">
              {program.conclusion}
            </p>

            {/* Get This Program Now Button */}
            <button className="w-[250px] h-[62px] bg-[#04640C] rounded-lg px-8 py-5 flex items-center justify-center gap-4 mb-12">
              <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FAFAFA]">
                Get this program now
              </span>
            </button>
          </div>

          {/* Footer - positioned right after content with proper spacing */}
          <div className="absolute top-[4100px] w-full">
            <Footer />
          </div>
        </>
      )}
    </main>
  )
}