import React from "react"
interface IconProps {
  className: string
  stockWidth: number
}

export default function Menu({ className, stockWidth }: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={stockWidth}
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </>
  )
}
