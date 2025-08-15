import { getProduct, PRODUCTS } from "@/app/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params // wait
  const product = getProduct(slug)
  if (!product) return notFound()
  const imageAltText = "Picture of a " + product.name
  return (
    <article className="flex flex-col sm:flex-row gap-4">
      <div className="min-w-100 min-h-100 relative">
        <Image
          src={product.image}
          fill
          alt={imageAltText}
          className="rounded-xl"
        />
      </div>
      <div className="bg-pink-20 flex-col flex min-w-100">
        <p className="text-2xl font-semibold">{product.name}</p>
        <p className="mt-2 text-slate-800  break-wordsbg-pink-100">
          {product.blurb}
        </p>
        <p className="pt-4 text-xl font-bold">${product.price}</p>
      </div>
    </article>
  )
}
