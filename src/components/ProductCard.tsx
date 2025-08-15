"use client"

import { Product } from "@/app/lib/products"
import Image from "next/image"
import Link from "next/link"

type ProductCardProps = { product: Product }

export default function ProductCard({ product }: ProductCardProps) {
  const imageAltText = "Picture of a " + product.name

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="rounded-xl bg-pink-200 p-5 min-w-50 flex-col justify-items-center">
        <div className="w-45 h-45 relative rounded-2xl">
          <Image
            src={product.image}
            fill
            alt={imageAltText}
            className="rounded-md"
          />
        </div>
        <div className="pt-4 font-semibold"> {product.name}</div>
        <div> To do later: add to cart quick </div>
      </div>
    </Link>
  )
}
