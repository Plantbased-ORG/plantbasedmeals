'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BookConsultationButton() {
  return (
    <Link href="/consultation">
      <button className="flex items-center justify-center gap-4 w-[274px] h-[64px] bg-[#04640C] rounded-lg px-8 py-5 cursor-pointer hover:bg-[#035509] transition-colors">
        <Image
          src="/button1icon.png"
          alt="Book consultation icon"
          width={24}
          height={24}
          className="object-contain flex-shrink-0"
        />
        <span className="text-[18px] font-medium leading-[100%] tracking-[0%] text-[#FAFAFA] whitespace-nowrap">
          Book a consultation
        </span>
      </button>
    </Link>
  )
}