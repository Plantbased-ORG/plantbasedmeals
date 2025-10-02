import Image from 'next/image'
import ExploreButton from '../ui/ExploreButton'

export default function NutritionSection() {
  return (
    <section className="relative w-full h-[736px] bg-gradient-to-b from-[#D7DCE9] to-[#FAFAFA]">
      <div className="max-w-[1512px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <div className="transform translate-y-20">
              <h2 className="text-[57px] font-medium leading-[100%] tracking-[-1%] text-[#141414] whitespace-nowrap">
                Heal with Plant-based Nutrition
              </h2>
              <p className="text-[57px] font-medium leading-[100%] tracking-[-1%] text-[#141414]">
                Reverse <span className="text-[69px] font-bold italic tracking-normal text-[#8B5E3C]">Obesity</span>
              </p>
              
              {/* Description Text */}
              <div className="mt-6 max-w-[737px]">
                <p className="text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747]">
                  Imagine a life free from obesity, diabetes, lupus, HIV/AIDS, sickle cell, and more—without dependence on medications. Science is confirming what nature has always known: <span className="font-semibold">whole-food, plant-based nutrition has the power to heal and restore your body</span>.<br />
                  Thousands have reclaimed their health—now it's your turn.<br />
                  Are you ready to take control of your well-being naturally?
                </p>
              </div>
              
              <div className="transform translate-y-4">
                <ExploreButton />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-end h-full">
            <div className="transform -translate-x-12 translate-y-10">
              <Image
                src="/nutrition-bowl.png"
                alt="Healthy plant-based nutrition ingredients"
                width={475}
                height={496}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}