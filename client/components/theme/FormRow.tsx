export default function FormRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <label className="w-24 text-right text-3xl font-semibold">{label}</label>
      {children}
    </div>
  )
}
