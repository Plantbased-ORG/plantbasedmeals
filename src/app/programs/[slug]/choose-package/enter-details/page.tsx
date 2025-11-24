'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import type { E164Number } from 'libphonenumber-js/core'

interface Program {
  program: {
    name: string
  }
}

interface PaystackResponse {
  reference: string
}

interface PaystackHandler {
  openIframe: () => void
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string | undefined
        email: string
        amount: number
        currency: string
        ref: string
        metadata: {
          custom_fields: Array<{
            display_name: string
            variable_name: string
            value: string
          }>
        }
        onClose: () => void
        callback: (response: PaystackResponse) => void
      }) => PaystackHandler
    }
  }
}

export default function EnterDetailsPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const [programName, setProgramName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>()
  
  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
  })


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
        
        const data: Program[] = await response.json()
        
        const matchedProgram = data.find((item: Program) => {
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

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Send email to CEO with form details
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://plantbased-backend.onrender.com'
      
      await fetch(`${apiUrl}/api/v1/send-customer-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          nationality: formData.nationality,
          phoneNumber: phoneNumber,
          program: programName,
          package: 'Premium', // TODO: Get from URL params
        }),
      })

      // Initialize Paystack payment with pre-filled email
      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: formData.email,
        amount: 15000000, // TODO: Get price from URL params (amount in kobo)
        currency: 'NGN',
        ref: `${Date.now()}_${formData.email}`,
        metadata: {
          custom_fields: [
            {
              display_name: 'Full Name',
              variable_name: 'full_name',
              value: formData.fullName,
            },
            {
              display_name: 'Phone Number',
              variable_name: 'phone_number',
              value: phoneNumber || '',
            },
            {
              display_name: 'Nationality',
              variable_name: 'nationality',
              value: formData.nationality,
            },
            {
              display_name: 'Program',
              variable_name: 'program',
              value: programName,
            },
          ],
        },
        onClose: function() {
          alert('Payment window closed')
        },
        callback: function(response: PaystackResponse) {
          // Payment successful
          alert('Payment successful! Reference: ' + response.reference)
          // TODO: Verify payment on backend and redirect user
        },
      })

      handler.openIframe()
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

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

      {/* Main Heading - Enter your details */}
      <div className="w-full mt-[250px] flex justify-center">
        <h2 className="text-[57px] font-medium leading-[110%] tracking-[0%] text-center text-[#141414]">
          Enter your details
        </h2>
      </div>

      {/* Subtitle paragraph */}
      <div className="w-full mt-4 flex justify-center">
        <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-center text-[#474747]">
          You have selected the Premium package. To allow us to track your<br />payment, enter the following details
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full mt-12 flex justify-center px-4">
        <form onSubmit={handleSubmit} className="w-[620px]">
          {/* Full name */}
          <div className="mb-6">
            <label 
              htmlFor="fullName" 
              className="block text-[20px] font-medium leading-[110%] tracking-[0%] text-[#474747] mb-2"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Joseph Okoye"
              required
              className="w-[620px] h-[62px] px-4 py-5 rounded-[8px] border border-[#D7DCE999] bg-[#F5F5F5] text-[16px] text-[#141414] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#29A248]"
            />
          </div>

          {/* Email address */}
          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="block text-[20px] font-medium leading-[110%] tracking-[0%] text-[#474747] mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="discusswithjoseph@gmail.com"
              required
              className="w-[620px] h-[62px] px-4 py-5 rounded-[8px] border border-[#D7DCE999] bg-[#F5F5F5] text-[16px] text-[#141414] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#29A248]"
            />
          </div>

          {/* Nationality */}
          <div className="mb-6">
            <label 
              htmlFor="nationality" 
              className="block text-[20px] font-medium leading-[110%] tracking-[0%] text-[#474747] mb-2"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              placeholder="Nigeria"
              required
              className="w-[620px] h-[62px] px-4 py-5 rounded-[8px] border border-[#D7DCE999] bg-[#F5F5F5] text-[16px] text-[#141414] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#29A248]"
            />
          </div>

          {/* Phone number */}
          <div className="mb-8">
            <label 
              htmlFor="phoneNumber" 
              className="block text-[20px] font-medium leading-[110%] tracking-[0%] text-[#474747] mb-2"
            >
              Phone number
            </label>
            <PhoneInput
              international
              defaultCountry="NG"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="w-[620px] h-[62px] px-4 py-5 rounded-[8px] border border-[#D7DCE999] bg-[#F5F5F5] text-[16px] text-[#141414] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#29A248]"
            />
          </div>

          {/* Proceed to payment button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-[238px] h-[62px] px-8 py-5 rounded-[8px] bg-[#04640C] hover:bg-[#03550A] transition-colors flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-[18px] font-medium leading-[100%] tracking-[0%] text-[#FAFAFA]">
              {submitting ? 'Processing...' : 'Proceed to payment'}
            </span>
          </button>
        </form>
      </div>
    </main>
  )
}