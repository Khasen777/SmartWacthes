import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted/50 py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Smart Technology for Your <span className="text-primary">Active Lifestyle</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Discover our collection of premium smartwatches designed to enhance your daily life with cutting-edge
            technology.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/products">
              <Button size="lg" className="gap-1">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/collections/featured">
              <Button variant="outline" size="lg">
                View Featured
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Premium smartwatch"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}

