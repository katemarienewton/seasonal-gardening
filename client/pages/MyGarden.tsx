export default function MyGarden() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">My Garden</h1>

      <p className="mb-10 text-lg text-muted-foreground">
        Welcome to your garden - this is a placeholder at the mo.
      </p>

      <div className="flex max-w-sm flex-col gap-6">
        <button
          className="w-full rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-foreground transition hover:bg-muted"
          onClick={() =>
            console.log(
              "clickety clack - you pressed a button, but manage my garden isn't ready yet",
            )
          }
        >
          Manage My Garden
        </button>

        <button
          className="w-full rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition hover:bg-muted"
          onClick={() => console.log('My Account has been clicked')}
        >
          My Account
        </button>
      </div>
    </div>
  )
}
