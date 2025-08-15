import Link from "next/link"
import { PRODUCTS } from "../lib/products"
import ProductCard from "@/components/ProductCard"

export default function Products() {
  return (
    <div className="flex flex-col gap-4 max-w-[1400px] bg-pink-100 justify-self-center ">
      <div className="text-2xl font-bold"> Products </div>
      <ul className="flex gap-5 flex-wrap bg-blue-300 sm:bg-green-300 justify-center sm:justify-start">
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
