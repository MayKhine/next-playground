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
    <article className="flex">
      <div>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={imageAltText}
          // sizes="(max-width: 768px) 100vw, 50vw"
          // className="object-cover"
        />
      </div>
      <div className="bg-pink-20">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="mt-2 text-slate-300">{product.blurb}</p>
        <p className="mt-4 text-xl font-bold">${product.price}</p>
      </div>
    </article>
  )
}
