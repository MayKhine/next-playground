"use client"
import Link from "next/link"

type LinkButtonProps = {
  label: string
  href: string
  width?: string
}
export default function LinkButton({ label, href, width }: LinkButtonProps) {
  return (
    <Link
      href={href}
      // className="hover:bg-amber-200 bg-green-200 p-4 w-25 text-center font-bold rounded-xl"
      className={`hover:bg-amber-200 bg-green-200 p-4 ${
        width || "w-25"
      } text-center font-bold rounded-xl`}
    >
      {label}
    </Link>
  )
}
