import Image from 'next/image'
import Link from 'next/link'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Logo and Brand Name - Top Left (shifted right) */}
      <div className="absolute top-6 left-12 z-10 flex items-center gap-3">
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
      <div className="absolute top-24 left-12 z-10 flex items-center gap-2">
        {/* Back Arrow */}
        <Link href="/" className="flex items-center">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path 
              d="M12.5 15L7.5 10L12.5 5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>

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
    </main>
  )
}