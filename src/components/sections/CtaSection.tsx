export default function CtaSection() {
  return (
    <section className="relative w-full h-[556px] bg-[#F3F3F3]">
      <div className="max-w-[1512px] mx-auto px-6 py-16 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-[57px] font-medium leading-[100%] tracking-[1%] text-[#141414] text-center max-w-[935px]">
          Take Control of Your Health—See<br />
          Results within <span className="font-bold italic text-[#079C14]">90 days!!</span>
        </h2>

        {/* Description */}
        <p className="text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747] text-center mt-6 max-w-[935px]">
          Reverse chronic conditions, boost immunity, and restore balance with the power of plant-based nutrition. Backed by science and rooted in nature, this holistic approach helps you achieve lasting wellness within 90 days—naturally.
        </p>
      </div>
    </section>
  )
}