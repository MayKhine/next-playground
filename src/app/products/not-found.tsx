import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-red-400 p-10">
      <p>PRODUCT not found</p>

      <Link href="/" className="p-2 bg-green-100">
        Go Home
      </Link>
    </div>
  )
}
