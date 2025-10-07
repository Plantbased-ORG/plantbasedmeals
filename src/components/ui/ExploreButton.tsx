'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ExploreButton() {
  return (
    <Link href="/programs">
      <button className="flex items-center gap-4 w-[289px] h-[64px] bg-gray-800 rounded-lg px-8 py-5">
        <Image
          src="/button2icon.png"
          alt="Explore programs icon"
          width={24}
          height={24}
          className="object-contain flex-shrink-0"
        />
        <span className="text-[18px] font-medium leading-[100%] tracking-normal text-[#77F981] whitespace-nowrap">
          Explore our programs
        </span>
      </button>
    </Link>
  )
}