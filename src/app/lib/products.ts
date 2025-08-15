export type Product = {
  slug: string
  name: string
  price: number
  image: string //path under public
  blurb: string // short snippet of preview text
}

export const PRODUCTS: Product[] = [
  {
    slug: "waffle-socks",
    name: "Waffle Socks",
    price: 12,
    image: "/products/waffle-socks.png",
    blurb: "Cozy, breathable socks with waffle texture.",
  },
  {
    slug: "matcha-mug",
    name: "Matcha Mug",
    price: 24,
    image: "/products/matcha-mug.png",
    blurb: "Stoneware mug perfect for slow mornings.",
  },
  {
    slug: "desk-plant",
    name: "Desk Plant",
    price: 18,
    image: "/products/desk-plant.png",
    blurb: "Low-maintenance green buddy for your workspace.",
  },

  {
    slug: "salad-pod",
    name: "Salad Pod",
    price: 25,
    image: "/products/salad-pod.png",
    blurb:
      "A fresher way to take your salad on the go—no leaks, no soggy greens, just crisp perfection anywhere.",
  },
]

export const getProduct = (slug: string) => {
  return PRODUCTS.find((p) => p.slug === slug)
}
