import Image from 'next/image'

export default function BenefitsSection() {
  return (
    <section className="relative w-full h-[804px] bg-[#FAFAFA]">
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/benefits-plate.png"
              alt="Colorful plant-based foods arrangement"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[57px] font-medium leading-[100%] tracking-[-1%] text-[#141414] max-w-[660px]">
              What makes our approach different?
            </h2>
            
            <p className="text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747] mt-6 max-w-[660px]">
              Most treatments provide only temporary relief, but this approach focuses on true healing by addressing the root cause of your health concerns. Experience:
            </p>

            {/* Benefits List */}
            <div className="mt-6 space-y-4 max-w-[660px]">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icon-relief.png"
                  alt="Relief icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal text-[#474747]">
                  Lasting relief from chronic conditions for a longer, healthier life
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icon-energy.png"
                  alt="Energy icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal text-[#474747]">
                  Increased energy and vitality every day
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icon-immune.png"
                  alt="Immune system icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal text-[#474747]">
                  A resilient immune system that naturally defends against illness
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icon-balance.png"
                  alt="Balance icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[20px] font-medium leading-[150%] tracking-normal text-[#474747]">
                  Balanced hormones for improved sleep, mood, and overall well-being
                </p>
              </div>
            </div>

            {/* Closing Text */}
            <p className="text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747] mt-6 max-w-[660px]">
              This isn&apos;t about restrictive dieting or temporary fixes—it&apos;s about real, lasting healing through the power of plant-based nutrition and simple, effective lifestyle changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}