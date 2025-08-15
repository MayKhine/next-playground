import Link from "next/link"
export default function Home() {
  return (
    <div
      className="flex flex-col gap-10 max-w-[1400px] p-10 justify-self-center min-h-[calc(100vh-220px)] 
      justify-center
      justify-items-center
      "
    >
      <section className="flex flex-col text-2xl rounded-2xl pl-10 pr-10">
        <p>
          Welcome to Welcome to <span className="font-bold">Playground</span>!
        </p>
        <p className="italic text-xl">
          A colorful corner of the internet where you’ll find {}
          <strong>unique, fun gifts</strong> to brighten everyday moments.
        </p>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-5">
        <Link
          href="/products"
          className="inline-flex items-center rounded-full bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-green-400"
        >
          Shop gifts
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center rounded-full  bg-pink-400 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          What is Playground?
        </Link>
      </section>
      <section aria-labelledby="features" className="flex flex-col gap-3">
        <p
          id="features"
          className="text-center text-xl font-bold sm:text-2xl text-purple-900"
        >
          Playful picks, curated for smiles
        </p>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <li className="rounded-2xl bg-yellow-100 p-5">
            <h3 className="mb-1 text-lg font-semibold">Color‑happy</h3>
            <p className="text-neutral-600">
              Candy palettes and joyful design in every item.
            </p>
          </li>
          <li className="rounded-2xl bg-yellow-100 p-5">
            <h3 className="mb-1 text-lg font-semibold">Small‑batch</h3>
            <p className="text-neutral-600">
              One‑of‑a‑kind pieces from indie makers and artists.
            </p>
          </li>
          <li className="rounded-2xl bg-yellow-100 p-5">
            <h3 className="mb-1 text-lg font-semibold">Gift‑ready</h3>
            <p className="text-neutral-600">
              Cute packaging and easy notes for instant delight.
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}
