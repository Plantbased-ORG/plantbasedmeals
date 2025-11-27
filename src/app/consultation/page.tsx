'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Logo and Brand Name - Top */}
      <div className="pt-4 px-4 xl:pt-6 xl:px-6 flex items-center gap-2 xl:gap-3">
        <Image
          src="/logo.png"
          alt="PlantBased Meals Logo"
          width={48}
          height={48}
          className="object-contain xl:w-[60px] xl:h-[60px]"
        />
        <h1 className="text-[20px] xl:text-[28px] font-semibold leading-[110%] tracking-normal">
          <span className="text-[#29A248]">PLANTBASED</span>{' '}
          <span className="text-[#EB7E29]">MEALS</span>
        </h1>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="px-4 xl:px-6 mt-4 flex items-center gap-2">
        {/* Back Arrow */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/back-arrow.png"
            alt="Back"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Home Link */}
        <Link href="/" className="text-[18px] font-normal leading-[100%] tracking-[0%] text-[#141414] hover:underline">
          Home
        </Link>

        {/* Separator */}
        <span className="text-[18px] text-[#141414]">/</span>

        {/* Current Page */}
        <span className="text-[18px] font-medium leading-[100%] tracking-[0%] text-[#2E2E2E]">
          Book an Appointment
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-4 xl:px-6 py-8 xl:py-12">
        {/* Header */}
        <h1 className="text-[57px] font-medium leading-[110%] tracking-[0%] text-center text-[#141414] mb-6">
          Book an Appointment
        </h1>

        {/* Description */}
        <p className="text-[18px] font-normal leading-[150%] tracking-[0%] text-center text-[#474747] mb-8">
          Schedule a personalized consultation with our experts and get tailored<br />
          guidance on plant-based healing, nutrition, and wellness.
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/clock-icon.png"
            alt="Duration"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#756C6C]">
            1 hr
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <Image
            src="/naira-icon.png"
            alt="Price"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-[18px] font-medium leading-[150%] tracking-[0%] text-[#756C6C]">
            ₦ 50,000.00
          </span>
        </div>

        {/* Consultation Details */}
        <div className="text-[18px] font-normal leading-[150%] tracking-[0%] text-[#474747] mb-8">
          <p className="mb-4">
            Your consultation is designed to give you personalized guidance on your wellness journey. During the session, we will:
          </p>
          
          <div className="space-y-3">
            <p>
              ✅ <span className="font-semibold">Assess Your Health & Goals</span> – Discuss your current lifestyle, diet, and any health concerns you're facing.
            </p>
            
            <p>
              ✅ <span className="font-semibold">Identify the Root Cause</span> – Go beyond symptoms to uncover the underlying issues affecting your well-being.
            </p>
            
            <p>
              ✅ <span className="font-semibold">Create a Custom Nutrition & Lifestyle Plan</span> – Receive tailored recommendations for healing foods, meal planning, and lifestyle adjustments that fit your needs.
            </p>
            
            <p>
              ✅ <span className="font-semibold">Provide Expert Guidance & Support</span> – Get science-backed insights on plant-based healing and sustainable wellness strategies.
            </p>
            
            <p>
              ✅ <span className="font-semibold">Outline Clear Next Steps</span> – Walk away with an action plan you can start immediately for real, lasting results.
            </p>
            
            <p className="mt-4">
              💡 This is your time to ask questions, gain clarity, and take control of your health—naturally. We're here to guide you every step of the way!
            </p>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-[236px] h-[62px] bg-[#04640C] rounded-lg px-8 py-5 cursor-pointer hover:bg-[#035509] transition-colors">
          <span className="text-[18px] font-medium leading-[100%] tracking-[0%] text-[#FAFAFA] whitespace-nowrap">
            Pay for consultation
          </span>
        </button>
      </div>
    </main>
  )
}