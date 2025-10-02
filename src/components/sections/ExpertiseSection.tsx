import Image from 'next/image'

export default function ExpertiseSection() {
  return (
    <section className="relative w-full h-[628px] bg-gradient-to-t from-[#DDFDDF] to-[#FAFAFA]">
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-[57px] font-medium leading-[120%] tracking-[-1%] text-[#141414]">
              Expertise you can trust
            </h2>
            
            <p className="text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747] mt-6">
              We are trained and certified by renowned institutions, ensuring that you receive reliable and evidence-based guidance on your journey to natural healing. With certifications from UK CPD, the UK Register of Learning Providers (UKRLP), and La Plage Metaverse, we combine modern knowledge with holistic traditions to provide you with the best plant-based health solutions.<br />
              Trust in our expertise as we help you harness the power of nature for optimal well-being.
            </p>

            {/* Certification Logos */}
            <div className="mt-8">
              <Image
                src="/certification-logos.png"
                alt="CPD, La Plage, and UKRLP certification logos"
                width={300}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/certificates.png"
              alt="Professional certifications and credentials"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}