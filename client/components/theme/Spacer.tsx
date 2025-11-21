interface Props {
  className?: string
}

export default function Spacer({ className = '' }: Props) {
  return <div className={`h-20 w-full ${className}`}></div>
}
