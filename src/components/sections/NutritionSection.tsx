'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ExploreButton from '../ui/ExploreButton'

export default function NutritionSection() {
  const diseases = [
    'Obesity',
    'Cancer',
    'HIV/AIDS',
    'Weight gain',
    'Lupus',
    'Infertility',
    'Sickle Cell',
    'Type 2 Diabetes',
    'High Cholesterol',
    'Heart Disease',
  ]

  const [currentDiseaseIndex, setCurrentDiseaseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiseaseIndex((prevIndex) => (prevIndex + 1) % diseases.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [diseases.length])

  return (
    <section className="relative w-full h-[929px] xl:h-[736px] bg-gradient-to-b from-[#D7DCE9] to-[#FAFAFA]">
      <div className="max-w-[1512px] mx-auto px-4 xl:px-6 py-8 xl:py-16">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <div className="transform translate-y-0 xl:translate-y-20">
              <div className="text-[24px] xl:text-[57px] font-medium leading-[100%] tracking-[-2%] xl:tracking-[-1%] text-[#141414]">
                <div className="whitespace-nowrap">Heal with Plant-based Nutrition</div>
                <div>
                  Reverse <span className="text-[32px] xl:text-[69px] font-bold italic tracking-[0%] xl:tracking-normal text-[#8B5E3C] inline-block min-w-[200px] xl:min-w-[400px] transition-opacity duration-500">
                    {diseases[currentDiseaseIndex]}
                  </span>
                </div>
              </div>
              
              {/* Description Text */}
              <div className="mt-6 max-w-[343px] xl:max-w-[737px]">
                <p className="text-[14px] xl:text-[20px] font-normal leading-[150%] tracking-[1%] text-[#474747]">
                  Imagine a life free from obesity, diabetes, lupus, HIV/AIDS, sickle cell, and more—without dependence on medications. Science is confirming what nature has always known: <span className="font-semibold">whole-food, plant-based nutrition has the power to heal and restore your body</span>.<br />
                  Thousands have reclaimed their health—now it&apos;s your turn.<br />
                  Are you ready to take control of your well-being naturally?
                </p>
              </div>
              
              <div className="mt-6 xl:transform xl:translate-y-4">
                <ExploreButton />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center xl:justify-end h-full mt-8 xl:mt-0">
            <div className="xl:transform xl:-translate-x-12 xl:translate-y-10">
              <Image
                src="/nutrition-bowl.png"
                alt="Healthy plant-based nutrition ingredients"
                width={343}
                height={358}
                className="object-contain xl:w-[475px] xl:h-[496px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}