export default function MyGarden() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#2f2f2f] mb-6">
        My Garden
      </h1>

      <p className="text-lg text-[#4a4a4a] mb-10">
        Welcome to your garden - this is a placeholder at the mo.
      </p>

      <div className="flex flex-col gap-6 max-w-sm">
        <button
          className="w-full rounded-full bg-[#e3ead4] px-8 py-4 text-lg font-semibold text-[#2f2f2f] hover:bg-[#b9c3a8] transition"
          onClick={() => console.log("clickety clack - you pressed a button, but manage my garden isn't ready yet")}
        >
          Manage My Garden
        </button>

        <button
          className="w-full rounded-full bg-[#e5e4e3] px-8 py-4 text-lg font-semibold text-[#2f2f2f] hover:bg-[#cfcfcf] transition"
          onClick={() => console.log("My Account has been clicked")}
        >
          My Account
        </button>
      </div>
    </div>
  )
}