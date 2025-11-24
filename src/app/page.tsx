import Image from 'next/image'
import NutritionSection from '@/components/sections/NutritionSection'
// import ExploreButton from '@/components/ui/ExploreButton'
import BenefitsSection from '@/components/sections/BenefitsSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  // Tags data
  const tags = [
    { label: "Health" },
    { label: "Nature" },
    { label: "Plant-based" },
    { label: "Diet" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Background Image Only */}
      <section className="relative w-full h-[734px] xl:h-[981px]">
        <Image
          src="/hero-background.png"
          alt="Plant-based meals with fresh vegetables and fruits"
          fill
          className="object-cover"
          priority
        />
        
        {/* Logo and Brand Name - Top Left */}
        <div className="absolute top-4 left-4 xl:top-6 xl:left-6 z-10 flex items-center gap-2 xl:gap-3">
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

        {/* Tags */}
        <div className="absolute top-[180px] left-4 xl:top-[270px] xl:left-6 z-10 flex flex-nowrap gap-2 overflow-x-hidden">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-[6px] xl:gap-[10px] h-[28px] xl:h-[31px] rounded-full border border-[#999999] py-1.5 xl:py-2 px-3 xl:px-4 flex-shrink-0"
            >
              {/* Green dot */}
              <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              {/* Tag text */}
              <span className="text-[#666666] text-[12px] xl:text-[14px] font-normal leading-[110%] tracking-normal whitespace-nowrap">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
        {/* Main Headline */}
        <div className="absolute top-[232px] left-4 xl:top-[330px] xl:left-6 z-10 max-w-[343px] xl:max-w-[760px]">
          <h2 className="text-[32px] xl:text-[69px] font-semibold leading-[100%] tracking-[-2%]">
            <span className="text-[#141414]">Achieve </span>
            <span className="text-[#079C14] italic">Permanent</span>
            <br />
            <span className="text-[#079C14] italic">healing</span>
            <span className="text-[#141414]"> - without pills</span>
          </h2>
        </div>
        {/* Description Text */}
        <div className="absolute top-[320px] xl:top-[490px] left-4 xl:left-6 z-10 max-w-[343px] xl:max-w-[758px]">
          <p className="text-[14px] xl:text-[20px] font-normal leading-[150%] tracking-normal text-[#474747]">
            Are you frustrated with medications that only manage symptoms while the root 
            cause remains unaddressed?
            <br className="hidden xl:block" />
            <span className="hidden xl:inline"><br /></span>
            <span className="xl:hidden"> </span>
            Discover a proven, natural approach to healing your body from the inside out—
            free from side effects and dependency on prescriptions.
          </p>
        </div>
        {/* Trust Badge */}
        <div className="absolute top-[448px] xl:top-[630px] left-4 xl:left-6 z-10 flex items-center gap-2 xl:gap-3">
          <Image
            src="/heroicon.png"
            alt="Trust badge icon"
            width={20}
            height={20}
            className="object-contain flex-shrink-0 xl:w-6 xl:h-6"
          />
          <span className="text-[12px] xl:text-[14px] font-normal leading-[140%] tracking-normal text-[#4D4D4D]">
            Tried and proven by over 2000 patients
          </span>
        </div>
        {/* Buttons */}
        <div className="absolute top-[480px] left-4 xl:top-[680px] xl:left-6 z-10 flex flex-row gap-2 xl:gap-4">
          {/* First Button */}
          <button className="flex items-center justify-center gap-2 xl:gap-4 w-[170px] xl:w-[274px] h-[40px] xl:h-[64px] bg-[#04640C] rounded-lg px-4 xl:px-8 py-3 xl:py-5">
            <Image
              src="/button1icon.png"
              alt="Book consultation icon"
              width={16}
              height={16}
              className="object-contain flex-shrink-0 xl:w-6 xl:h-6"
            />
            <span className="text-[12px] xl:text-[18px] font-medium leading-[100%] tracking-[0%] text-[#FAFAFA] whitespace-nowrap">
              Book a consultation
            </span>
          </button>

          {/* Second Button */}
          <button className="flex items-center justify-center gap-2 xl:gap-4 w-[157px] xl:w-[274px] h-[40px] xl:h-[64px] bg-[#2C3E50] rounded-lg px-4 xl:px-8 py-3 xl:py-5">
            <Image
              src="/button2icon.png"
              alt="Explore programs icon"
              width={16}
              height={16}
              className="object-contain flex-shrink-0 xl:w-6 xl:h-6"
            />
            <span className="text-[12px] xl:text-[18px] font-medium leading-[100%] tracking-[0%] text-[#FAFAFA] whitespace-nowrap">
              Explore our programs
            </span>
          </button>
        </div>
      </section>

      {/* Nutrition Section */}
      <NutritionSection />
      <BenefitsSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}