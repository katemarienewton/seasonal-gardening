import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}
export default function ThemedH1({ children, className = '' }: Props) {
  return (
    <h1
      className={`text-[clamp(20px,6vw,40px)] font-bold text-[#2f2f2f] ${className}`}
    >
      {children}
    </h1>
  )
}
