export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="rounded-[40px] bg-[#d7d9c5] px-12 py-4 text-center text-[clamp(14px,3vw,20px)] font-semibold text-[#2f2f2f] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  )
}
