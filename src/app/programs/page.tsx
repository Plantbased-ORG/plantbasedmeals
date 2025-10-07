import Image from 'next/image'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
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
    </main>
  )
}