import Image from 'next/image'
import NutritionSection from '@/components/sections/NutritionSection'
import ExploreButton from '@/components/ui/ExploreButton'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  // Tags data
  const tags = [
    { label: "Health", width: "92px" },
    { label: "Nature", width: "93px" },
    { label: "Plant-based", width: "129px" },
    { label: "Diet", width: "75px" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-[1512px] h-[981px] mx-auto">
        <Image
          src="/hero-background.png"
          alt="Plant-based meals with fresh vegetables and fruits"
          fill
          className="object-cover"
          priority
        />
        
        {/* Logo and Brand Name - Top Left */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
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

        {/* Tags */}
        <div className="absolute top-[270px] left-6 z-10 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-[10px] h-[31px] rounded-full border border-[#999999] py-2 px-4"
              style={{ width: tag.width }}
            >
              {/* Green dot */}
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              {/* Tag text */}
              <span className="text-[#666666] text-[14px] font-normal leading-[110%] tracking-normal whitespace-nowrap">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
        {/* Main Headline */}
        <div className="absolute top-[330px] left-6 z-10 max-w-[760px]">
          <h2 className="text-[69px] font-semibold leading-[100%] tracking-[-2%]">
            <span className="text-[#141414]">Achieve </span>
            <span className="text-[#079C14] italic">Permanent</span>
            <br />
            <span className="text-[#079C14] italic">healing</span>
            <span className="text-[#141414]"> - without pills</span>
          </h2>
        </div>
        {/* Description Text */}
        <div className="absolute top-[490px] left-6 z-10 max-w-[758px]">
          <p className="text-[20px] font-normal leading-[150%] tracking-normal text-[#474747]">
            Are you frustrated with medications that only manage symptoms while the root 
            cause remains unaddressed?<br />
            Discover a proven, natural approach to healing your body from the inside out—
            free from side effects and dependency on prescriptions.
          </p>
        </div>
        {/* Trust Badge */}
        <div className="absolute top-[630px] left-6 z-10 flex items-center gap-3">
          <Image
            src="/heroicon.png"
            alt="Trust badge icon"
            width={24}
            height={24}
            className="object-contain flex-shrink-0"
          />
          <span className="text-[14px] font-normal leading-[140%] tracking-normal text-[#4D4D4D] whitespace-nowrap">
            Tried and proven by over 2000 patients
          </span>
        </div>
        {/* Buttons */}
        <div className="absolute top-[680px] left-6 z-10 flex gap-4">
          {/* First Button */}
          <button className="flex items-center gap-4 w-[274px] h-[64px] bg-[#04640C] rounded-lg px-8 py-5">
            <Image
              src="/button1icon.png"
              alt="Book consultation icon"
              width={24}
              height={24}
              className="object-contain flex-shrink-0"
            />
            <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#FAFAFA]">
              Book a consultation
            </span>
          </button>

          {/* Second Button */}
          <ExploreButton />
        </div>
      </section>

      {/* Nutrition Section */}
      <NutritionSection />
      <BenefitsSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}