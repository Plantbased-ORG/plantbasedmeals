import Image from 'next/image'
import BookConsultationButton from '../ui/BookConsultationButton'

export default function Footer() {
  return (
    <footer className="relative w-full h-[759px] bg-[#001B02]">
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side - Logo and Brand */}
          <div className="mt-8">
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

            {/* Description */}
            <p className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#CCD1CD] mt-6 max-w-[450px]">
              True healing starts from within. We harness the<br />
              power of whole foods and natural remedies to<br />
              restore balance, boost immunity, and reverse<br />
              chronic conditions—backed by both ancient<br />
              wisdom and modern science.
            </p>

            {/* Button */}
            <BookConsultationButton />
          </div>

          {/* Right Side - Programs */}
          <div className="mt-8">
            <h3 className="text-[28px] font-semibold leading-[120%] tracking-[-1%] text-[#E5E7E5] mb-6">
              Programs
            </h3>

            {/* Three Column Program List */}
            <div className="grid grid-cols-3 gap-x-8 mb-12">
              {/* Column 1 */}
              <ul className="space-y-3">
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Cancer
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  HIV/AIDS
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Obesity
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Weight gain
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-3">
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Lupus
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Cancer
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Infertility
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Sickle Cell
                </li>
              </ul>

              {/* Column 3 */}
              <ul className="space-y-3">
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Type 2 Diabetes
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  High Cholesterol
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Heart Disease
                </li>
                <li className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#B1B4B2]">
                  Digestive Disorders
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-[28px] font-semibold leading-[120%] tracking-[-1%] text-[#E5E7E5] mb-4">
                Subscribe to our Newsletter
              </h4>
              <p className="text-[18px] font-normal leading-[150%] tracking-[-1%] text-[#CCD1CD] mb-6">
                Gain access to expert insights on plant-based healing, natural remedies, practical wellness tips. Plus, get exclusive discounts, special offers, and early access to our latest products and resources!
              </p>

              {/* Email Input and Subscribe Button */}
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your mail address"
                  className="w-[515px] h-[62px] bg-[#FAFAFA] rounded-l-lg py-5 px-6 text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747] placeholder:text-[#474747] focus:outline-none"
                />
                <button className="w-[151px] h-[62px] bg-[#333333] rounded-r-lg py-5 px-8 text-[18px] font-medium leading-[100%] tracking-normal text-[#77F981]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}