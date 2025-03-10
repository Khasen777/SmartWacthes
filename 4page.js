import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import ProductCategories from "@/components/product-categories"
import HeroSection from "@/components/hero-section"

export default function Home() {
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
            <Link href="/products" className="text-sm font-medium hover:text-primary">
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
        <HeroSection />
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular smartwatches this season.</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <FeaturedProducts />
        </section>
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
            <p className="text-muted-foreground">Find the perfect smartwatch for your lifestyle.</p>
          </div>
          <ProductCategories />
        </section>
        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Free Shipping</h3>
                <p className="text-muted-foreground">On all orders over $50</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground">Protected by industry standards</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 10H3" />
                    <path d="M21 6H3" />
                    <path d="M21 14H3" />
                    <path d="M21 18H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Returns</h3>
                <p className="text-muted-foreground">30-day money back guarantee</p>
              </div>
            </div>
          </div>
        </section>
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

