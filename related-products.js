"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

// Sample related products data
const relatedProducts = [
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
]

export default function RelatedProducts() {
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

  const addToCart = (product: (typeof relatedProducts)[0]) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {relatedProducts.map((product) => (
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

