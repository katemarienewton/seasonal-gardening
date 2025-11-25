interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function InputSelect({
  className = '',
  ...props
}: InputSelectProps) {
  return (
    <div className="relative flex w-[18rem] max-w-full items-center justify-center">
      <select
        {...props}
        style={{ textAlignLast: 'center' }}
        className={`
      w-full
      appearance-none
      rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      leading-[1.5]
      text-[#2f2f2f]
      ${className}
    `}
      />
    </div>
  )
}
