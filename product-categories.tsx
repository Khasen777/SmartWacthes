import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

// Sample category data
const categories = [
  {
    id: 1,
    name: "Fitness Trackers",
    description: "Track your workouts and health metrics",
    image: "/placeholder.svg?height=200&width=200",
    slug: "fitness-trackers",
  },
  {
    id: 2,
    name: "Luxury Watches",
    description: "Premium designs with advanced features",
    image: "/placeholder.svg?height=200&width=200",
    slug: "luxury-watches",
  },
  {
    id: 3,
    name: "Sports Watches",
    description: "Durable watches for active lifestyles",
    image: "/placeholder.svg?height=200&width=200",
    slug: "sports-watches",
  },
  {
    id: 4,
    name: "Kids Smartwatches",
    description: "Safe and fun wearables for children",
    image: "/placeholder.svg?height=200&width=200",
    slug: "kids-smartwatches",
  },
]

export default function ProductCategories() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.slug}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-square overflow-hidden bg-muted/50">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

