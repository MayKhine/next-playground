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
  {
    slug: "pineapple-hat",
    name: "Pineapple Hat",
    price: 15,
    image: "/products/pineapple-hat.png",
    blurb: "Pineapple to bring some fun and color to your summer days.",
  },
  {
    slug: "weather-water",
    name: "Weather Water",
    price: 45,
    image: "/products/weather-water.png",
    blurb:
      "A mesmerizing meteorological object that changes its appearance based on daily atmospheric fluctuations.",
  },
  {
    slug: "veggie-steamer",
    name: "Microwave Veggie Steamer",
    price: 45,
    image: "/products/veggie-steamer.png",
    blurb: "Stoneware steamer microwaves veggies fast, without added fat",
  },
]

export const getProduct = (slug: string) => {
  return PRODUCTS.find((p) => p.slug === slug)
}
