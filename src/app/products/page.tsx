import Link from "next/link"
import { PRODUCTS } from "../lib/products"

export default function Products() {
  return (
    <div>
      HI this is products page
      <ul className="flex gap-1">
        {PRODUCTS.map((product) => {
          return (
            <li key={product.slug} className="p-5 bg-pink-200">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
