import Link from "next/link"
import { PRODUCTS } from "../lib/products"
import ProductCard from "@/components/ProductCard"

export default function Products() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold"> Products </div>
      <ul className="flex gap-4">
        {PRODUCTS.map((product) => {
          return (
            <li key={product.slug}>
              {/* <Link href={`/products/${product.slug}`}>{product.name}</Link> */}
              <ProductCard product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
