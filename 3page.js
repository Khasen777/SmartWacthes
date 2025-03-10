import Link from "next/link"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
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
                  className="h-5 w-5"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
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
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <Input type="search" placeholder="Search products..." className="pl-8 w-full md:w-[300px]" />
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
            <div className="hidden lg:block">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="category-all" defaultChecked />
                      <Label htmlFor="category-all" className="text-sm font-medium">
                        All Products
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="category-fitness" />
                      <Label htmlFor="category-fitness" className="text-sm font-medium">
                        Fitness Trackers
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="category-luxury" />
                      <Label htmlFor="category-luxury" className="text-sm font-medium">
                        Luxury Watches
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="category-sports" />
                      <Label htmlFor="category-sports" className="text-sm font-medium">
                        Sports Watches
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="category-kids" />
                      <Label htmlFor="category-kids" className="text-sm font-medium">
                        Kids Smartwatches
                      </Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="price-min">Min</Label>
                      <Input id="price-min" type="number" placeholder="$0" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price-max">Max</Label>
                      <Input id="price-max" type="number" placeholder="$500" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="feature-heart-rate" />
                      <Label htmlFor="feature-heart-rate" className="text-sm font-medium">
                        Heart Rate Monitor
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="feature-gps" />
                      <Label htmlFor="feature-gps" className="text-sm font-medium">
                        GPS
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="feature-waterproof" />
                      <Label htmlFor="feature-waterproof" className="text-sm font-medium">
                        Waterproof
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="feature-sleep" />
                      <Label htmlFor="feature-sleep" className="text-sm font-medium">
                        Sleep Tracking
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="feature-cellular" />
                      <Label htmlFor="feature-cellular" className="text-sm font-medium">
                        Cellular Connectivity
                      </Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Brands</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-all" defaultChecked />
                      <Label htmlFor="brand-all" className="text-sm font-medium">
                        All Brands
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-apple" />
                      <Label htmlFor="brand-apple" className="text-sm font-medium">
                        Apple
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-samsung" />
                      <Label htmlFor="brand-samsung" className="text-sm font-medium">
                        Samsung
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-fitbit" />
                      <Label htmlFor="brand-fitbit" className="text-sm font-medium">
                        Fitbit
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-garmin" />
                      <Label htmlFor="brand-garmin" className="text-sm font-medium">
                        Garmin
                      </Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
            <div>
              <ProductGrid />
            </div>
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

