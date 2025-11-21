import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}
export default function ThemedText({ children, className = '' }: Props) {
  return (
    <h1
      className={`text-[clamp(14px,3vw,20px)] font-semibold text-[#5c5c5c] ${className}`}
    >
      {children}
    </h1>
  )
}
