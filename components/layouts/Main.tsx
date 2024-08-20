"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from 'react'
import DotPattern from "../ui/dot-pattern";
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {
    children: React.ReactNode
}

const Main = ({children}: Props) => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="z-0 px-10 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow">
      <div>
        {children}
        
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  )
}

export default Main