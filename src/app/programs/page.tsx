import Image from 'next/image'
import Link from 'next/link'

export default function ProgramsPage() {
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
    </main>
  )
}