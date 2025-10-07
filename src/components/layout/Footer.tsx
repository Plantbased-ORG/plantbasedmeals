import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative w-full h-[759px] bg-[#001B02]">
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side - Logo and Brand */}
          <div>
            <div className="flex items-center gap-3">
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
          </div>

          {/* Right Side - Programs */}
          <div>
            {/* Programs content will be added here */}
          </div>
        </div>
      </div>
    </footer>
  )
}