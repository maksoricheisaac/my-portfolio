"use client";

import { cn } from "@/lib/utils";
import React from 'react'
import DotPattern from "../ui/dot-pattern";
import Image from "next/image";
import me from '../../public/images/me.png'

type Props = {
    children: React.ReactNode
}

const Main = ({children}: Props) => {
  return (
    <div className="px-10 md:px-[200px] relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow">
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