import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import RelatedProducts from "@/components/related-products"

// This would typically come from a database or API
const product = {
  id: 1,
  name: "ProFit X1 Smartwatch",
  description:
    "The ProFit X1 is our most advanced fitness tracking smartwatch. With continuous heart rate monitoring, sleep analysis, and 50+ sport modes, it's the perfect companion for your active lifestyle. The vibrant AMOLED display offers crystal clear visibility even in bright sunlight, while the 7-day battery life ensures you're never left without your fitness data.",
  price: 199.99,
  originalPrice: 249.99,
  rating: 4.8,
  reviews: 124,
  features: [
    "Advanced heart rate monitoring",
    "Sleep tracking and analysis",
    "50+ sport modes",
    "Water resistant to 50m",
    "7-day battery life",
    "AMOLED display",
    "GPS tracking",
    "Smartphone notifications",
  ],
  specs: {
    display: "1.4 inch AMOLED, 454 x 454 pixels",
    battery: "Up to 7 days (normal use), 14 days (battery saver mode)",
    waterResistance: "5 ATM (50 meters)",
    connectivity: "Bluetooth 5.0, GPS",
    sensors: "Accelerometer, Gyroscope, Heart Rate, SpO2",
    compatibility: "iOS 11.0+, Android 6.0+",
    dimensions: "45 x 45 x 11.4 mm",
    weight: "32g (without strap)",
  },
  colors: ["Black", "Silver", "Blue"],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Smart</span>Watch
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-primary">
              Products
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-primary">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/account" className="hidden md:block">
              <Button variant="ghost" size="sm">
                Account
              </Button>
            </Link>
            <Link href="/cart">
              <Button size="sm" className="hidden md:flex">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border bg-muted/50">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border bg-muted/50">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Color</h3>
                  <div className="mt-2 flex gap-2">
                    {product.colors.map((color) => (
                      <Button key={color} variant="outline" className="rounded-full px-4">
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 gap-2">
                    <ShoppingCart className="h-5 w-5" /> Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-medium">Key Features</h3>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 space-y-4">
                <p>
                  The ProFit X1 is designed for fitness enthusiasts who demand the best in tracking technology. With its
                  comprehensive suite of sensors, it provides accurate data for all your workouts and daily activities.
                </p>
                <p>
                  The vibrant AMOLED display offers crystal clear visibility even in bright sunlight, while the
                  intuitive interface makes it easy to navigate through your stats and settings. The watch face is
                  customizable with multiple options to suit your style.
                </p>
                <p>
                  With 50+ sport modes, you can track everything from running and cycling to swimming and yoga. The
                  watch automatically detects and records your workouts, so you never miss capturing your activity data.
                </p>
                <p>
                  The 7-day battery life ensures you're never left without your fitness companion, even during extended
                  trips away from power sources. When it's time to recharge, the magnetic charging cable makes it quick
                  and easy.
                </p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <h4 className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</h4>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold">{product.rating}</div>
                      <div className="flex justify-center">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{product.reviews} reviews</div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center gap-2">
                            <div className="text-sm font-medium w-2">{star}</div>
                            <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full bg-primary"
                                style={{
                                  width: `${
                                    star === 5
                                      ? "70%"
                                      : star === 4
                                        ? "20%"
                                        : star === 3
                                          ? "5%"
                                          : star === 2
                                            ? "3%"
                                            : "2%"
                                  }`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Write a Review</Button>
                  <div className="space-y-4">
                    <div className="space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Sarah J.</div>
                        <div className="text-sm text-muted-foreground">2 weeks ago</div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                      </div>
                      <p className="text-sm">
                        I've been using the ProFit X1 for two weeks now and I'm impressed with the accuracy of the heart
                        rate monitor and sleep tracking. The battery life is excellent - I only need to charge it once a
                        week.
                      </p>
                    </div>
                    <div className="space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Michael T.</div>
                        <div className="text-sm text-muted-foreground">1 month ago</div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                            />
                          ))}
                      </div>
                      <p className="text-sm">
                        Great smartwatch for the price. The display is bright and responsive, and I love the variety of
                        workout modes. The only downside is that the GPS can take a while to connect sometimes.
                      </p>
                    </div>
                    <div className="space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Jessica L.</div>
                        <div className="text-sm text-muted-foreground">2 months ago</div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                            />
                          ))}
                      </div>
                      <p className="text-sm">
                        Absolutely love this watch! The sleep tracking has helped me improve my sleep habits, and the
                        workout tracking is spot on. The battery life is impressive - I can go a full week between
                        charges with normal use.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <RelatedProducts />
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/featured" className="text-sm text-muted-foreground hover:text-foreground">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="text-sm text-muted-foreground hover:text-foreground">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="text-sm text-muted-foreground hover:text-foreground">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest products and deals.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartWatch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

