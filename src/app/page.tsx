import Link from "next/link"
export default function Home() {
  return (
    <div className="flex-col">
      <main className="bg-pink-300">
        <div className="bg-amber-400"> May test</div>
        <Link href="about"> Link </Link>
      </main>
      <footer className="bg-green-200">footer</footer>
    </div>
  )
}
