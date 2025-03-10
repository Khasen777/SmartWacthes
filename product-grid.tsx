"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

// Sample product data - expanded for product listing page
const products = [
  {
    id: 1,
    name: "ProFit X1",
    description: "Advanced fitness tracking with heart rate monitoring",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "SmartLife Pro",
    description: "Premium smartwatch with AMOLED display",
    price: 299.99,
    originalPrice: 349.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
    rating: 4.9,
    reviews: 86,
  },
  {
    id: 3,
    name: "FitTrack Pulse",
    description: "Waterproof fitness tracker with sleep analysis",
    price: 149.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
    rating: 4.7,
    reviews: 215,
  },
  {
    id: 4,
    name: "TechWear Elite",
    description: "Premium smartwatch with cellular connectivity",
    price: 349.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 5,
    name: "SportTrack GPS",
    description: "GPS-enabled sports watch for runners and cyclists",
    price: 229.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 6,
    name: "KidSafe Watch",
    description: "Child-friendly smartwatch with GPS tracking",
    price: 129.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.4,
    reviews: 63,
  },
  {
    id: 7,
    name: "LuxeTime Gold",
    description: "Luxury smartwatch with premium metal finish",
    price: 399.99,
    originalPrice: 449.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Premium",
    rating: 4.9,
    reviews: 47,
  },
  {
    id: 8,
    name: "HealthMonitor Pro",
    description: "Advanced health tracking with ECG and blood oxygen",
    price: 279.99,
    originalPrice: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.7,
    reviews: 105,
  },
  {
    id: 9,
    name: "SleepWell Band",
    description: "Specialized sleep tracking wearable",
    price: 99.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.3,
    reviews: 78,
  },
  {
    id: 10,
    name: "AquaFit Swim",
    description: "Waterproof smartwatch for swimmers",
    price: 189.99,
    originalPrice: 209.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.6,
    reviews: 52,
  },
  {
    id: 11,
    name: "BusinessTime Pro",
    description: "Professional smartwatch with calendar integration",
    price: 249.99,
    originalPrice: 279.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 12,
    name: "FashionWatch Slim",
    description: "Ultra-thin smartwatch with fashion-forward design",
    price: 219.99,
    originalPrice: 239.99,
    image: "/placeholder.svg?height=300&width=300",
    badge: null,
    rating: 4.4,
    reviews: 83,
  },
]

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
      toast({
        description: "Removed from wishlist",
      })
    } else {
      setFavorites([...favorites, id])
      toast({
        description: "Added to wishlist",
      })
    }
  }

  const addToCart = (product: (typeof products)[0]) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart
                className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
              />
              <span className="sr-only">Add to favorites</span>
            </Button>
            {product.badge && (
              <Badge className="absolute left-2 top-2" variant={product.badge === "Sale" ? "destructive" : "default"}>
                {product.badge}
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="space-y-1">
              <Link href={`/products/${product.id}`} className="block">
                <h3 className="font-semibold">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                ★ {product.rating} ({product.reviews})
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full gap-1" onClick={() => addToCart(product)}>
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

