'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

// TypeScript interface for backend API response
interface ProgramFromAPI {
  program: {
    id: number
    name: string
    short_description: string
    main_image_url: string
  }
  pricing_plans: Array<{
    id: number
    name: string
    subtitle: string
    price: number
    features: string[]
  }>
}

export default function ChoosePackagePage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [programName, setProgramName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        
        const data: ProgramFromAPI[] = await response.json()
        
        // Find the program that matches the slug
        const matchedProgram = data.find((item: ProgramFromAPI) => {
          const programSlug = item.program.name.toLowerCase().replace(/\s+/g, '-')
          return programSlug === slug
        })
        
        if (!matchedProgram) {
          throw new Error('Program not found')
        }
        
        setProgramName(matchedProgram.program.name)
        
      } catch (err) {
        console.error('Error fetching program:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
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
        <Link href={`/programs/${slug}`} className="flex items-center">
          <Image
            src="/back-arrow.png"
            alt="Back to program"
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
              {loading ? 'Loading...' : programName || 'Program'}
            </span>
          </Link>

          {/* Separator */}
          <span className="text-[18px] text-[#474747]">/</span>

          {/* Current Page - Choose Package */}
          <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#2E2E2E]">
            Choose Package
          </span>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="absolute top-48 left-33 z-10">
          <p className="text-red-600">Error: {error}</p>
        </div>
      )}

      {/* Choose a Package Section - Centered */}
      {!loading && !error && (
        <div className="w-full mt-[250px]">
          {/* Main Heading */}
          <h2 className="text-[57px] font-medium leading-[110%] tracking-normal text-center text-[#141414] mb-4">
            Choose a Package
          </h2>
          
          {/* Subtitle/Description */}
          <p className="text-[18px] font-normal leading-[150%] tracking-normal text-center text-[#474747] max-w-[800px] mx-auto mb-12">
            Our expertly designed programs are tailored to optimize your body for lasting vitality, energy, and well-being—not just temporary results. Choose a plan that aligns with your goals and budget.
          </p>
          
          {/* Green Plant Background - positioned below headers */}
          <div className="absolute top-[430px] left-0 w-full h-[600px] pointer-events-none z-0">
            <Image
              src="/package-plants-bg.png"
              alt="Decorative plants background"
              fill
              className="object-cover opacity-40"
            />
          </div>
          
          {/* Package cards will be added here */}
          <div className="relative z-10 flex justify-center gap-16 mt-12 px-4">
            {/* Basic Card */}
            <div className="w-[403px] h-[947px] bg-white rounded-[24px] border border-gray-200 pt-[60px] pr-6 pb-[60px] pl-6">
              {/* Package Name */}
              <h3 className="text-[33px] font-medium leading-[110%] tracking-normal text-[#EB7E29] mb-3">
                Basic
              </h3>
              
              {/* Subtitle */}
              <p className="text-[16px] font-normal leading-[110%] tracking-normal text-[#141414] mb-6">
                Your foundation for a healthier life!
              </p>
              
              {/* Price */}
              <p className="text-[48px] font-medium leading-[110%] tracking-normal text-[#141414] mb-8">
                ₦500,000.00
              </p>
              
              {/* Get Started Button */}
              <button className="w-[355px] h-[62px] rounded-full border border-[#141414] px-8 py-5 flex items-center justify-center gap-4 mb-8">
                <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#141414]">
                  Get started
                </span>
              </button>
              
              {/* Access Text */}
              <p className="text-[16px] font-medium leading-[110%] tracking-normal text-[#141414] mb-4">
                You'd gain access to:
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Full Body scan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Personalized meal plans
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Coaching and lifestyle guidance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Detox and body cleansing strategies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Exclusive health and wellness resources
                  </span>
                </li>
              </ul>
            </div>

            {/* Premium Card */}
            <div className="w-[403px] h-[947px] bg-gradient-to-br from-[#0D8E18] to-[#0C4811] rounded-[24px] border border-gray-200 pt-[60px] pr-6 pb-[60px] pl-6">
              {/* Package Name */}
              <h3 className="text-[33px] font-medium leading-[110%] tracking-normal text-[#FAFAFA] mb-3">
                Premium
              </h3>
              
              {/* Subtitle */}
              <p className="text-[16px] font-normal leading-[110%] tracking-normal text-[#C4D4C5] mb-6">
                Upgrade to an elite level of health!
              </p>
              
              {/* Price */}
              <p className="text-[48px] font-medium leading-[110%] tracking-normal text-[#FAFAFA] mb-8">
                ₦1,200,000.00
              </p>
              
              {/* Get Started Button */}
              <button className="w-[355px] h-[62px] rounded-full border border-[#FAFAFA] bg-white px-8 py-5 flex items-center justify-center gap-4 mb-8">
                <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#04640C]">
                  Get started
                </span>
              </button>
              
              {/* Access Text */}
              <p className="text-[16px] font-medium leading-[110%] tracking-normal text-[#FAFAFA] mb-4">
                You'd gain access to:
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-white.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#C4D4C5]">
                    Basic Package
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-white.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#C4D4C5]">
                    Advanced metabolic reprogramming
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-white.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#C4D4C5]">
                    Private coaching sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-white.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#C4D4C5]">
                    Stress and lifestyle optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-white.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#C4D4C5]">
                    Supplement recommendations
                  </span>
                </li>
              </ul>
            </div>

            {/* Executive Card */}
            <div className="w-[403px] h-[947px] bg-white rounded-[24px] border border-gray-200 pt-[60px] pr-6 pb-[60px] pl-6">
              {/* Package Name */}
              <h3 className="text-[33px] font-medium leading-[110%] tracking-normal text-[#EB7E29] mb-3">
                Executive
              </h3>
              
              {/* Subtitle */}
              <p className="text-[16px] font-normal leading-[110%] tracking-normal text-[#141414] mb-6">
                The Ultimate Health Transformation
              </p>
              
              {/* Price */}
              <p className="text-[48px] font-medium leading-[110%] tracking-normal text-[#141414] mb-8">
                ₦6,000,000.00
              </p>
              
              {/* Get Started Button */}
              <button className="w-[355px] h-[62px] rounded-full border border-[#141414] px-8 py-5 flex items-center justify-center gap-4 mb-8">
                <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#141414]">
                  Get started
                </span>
              </button>
              
              {/* Access Text */}
              <p className="text-[16px] font-medium leading-[110%] tracking-normal text-[#141414] mb-4">
                You'd gain access to:
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Premium Package
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    24/7 access to health experts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Full-body detox and electrification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Luxury wellness retreat and spa
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Holistic therapy sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Personalized workouts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src="/check-icon-orange.png"
                    alt="Check"
                    width={20}
                    height={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-[16px] font-normal leading-[150%] tracking-normal text-[#141414]">
                    Lifetime access to health materials
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}