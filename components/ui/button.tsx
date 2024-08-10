import React from 'react'

type Props = {
    text: string
}

export const Button = ({text}: Props) => {
  return (
    <button type="button" className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
  {text}
</button>
  )
}

