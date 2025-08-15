"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/products/waffle-socks", label: "Waffle Socks" },

  { href: "/test", label: "Test" },
]
export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="bg-green-100 p-4 flex gap-4">
      {links.map(({ href, label }) => {
        return (
          <Link
            href={href}
            key={href}
            className="hover:bg-amber-200 bg-green-200 p-4"
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
