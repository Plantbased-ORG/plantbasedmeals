'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function EnterDetailsPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [programName, setProgramName] = useState<string>('')
  const [loading, setLoading] = useState(true)

  // Fetch program to get the name for breadcrumb
  useEffect(() => {
    async function fetchProgram() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://plantbased-backend.onrender.com'
        
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
        
        const data = await response.json()
        
        const matchedProgram = data.find((item: any) => {
          const programSlug = item.program.name.toLowerCase().replace(/\s+/g, '-')
          return programSlug === slug
        })
        
        if (matchedProgram) {
          setProgramName(matchedProgram.program.name)
        }
        
      } catch (err) {
        console.error('Error fetching program:', err)
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
      {/* Logo and Brand Name - Top Left */}
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

      {/* Breadcrumb Navigation */}
      <div className="absolute top-32 left-23 z-10 flex items-center gap-6">
        {/* Back Arrow */}
        <Link href={`/programs/${slug}/choose-package`} className="flex items-center">
          <Image
            src="/back-arrow.png"
            alt="Back to choose package"
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

          {/* Program Name */}
          <Link href={`/programs/${slug}`}>
            <span className="text-[18px] font-normal leading-[100%] tracking-normal text-[#474747]">
              {loading ? 'Loading...' : programName || 'Obesity'}
            </span>
          </Link>

          {/* Separator */}
          <span className="text-[18px] text-[#474747]">/</span>

          {/* Choose Package */}
          <Link href={`/programs/${slug}/choose-package`}>
            <span className="text-[18px] font-normal leading-[100%] tracking-normal text-[#474747]">
              Choose Package
            </span>
          </Link>

          {/* Separator */}
          <span className="text-[18px] text-[#474747]">/</span>

          {/* Current Page - Enter your details */}
          <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#2E2E2E]">
            Enter your details
          </span>
        </div>
      </div>
    </main>
  )
}