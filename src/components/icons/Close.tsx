import React from "react"
interface IconProps {
  className: string
  stockWidth: number
}

export default function Close({ className, stockWidth }: IconProps) {
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  )
}
