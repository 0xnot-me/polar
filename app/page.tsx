"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Component() {
  const stores = [
    {
      name: "Etsy Store",
      description: "Handmade and vintage items, craft supplies. Our Etsy store features a wide range of unique, handcrafted products perfect for those seeking one-of-a-kind gifts or special items for their home.",
      logo: "/placeholder.svg?height=200&width=200",
      url: "https://www.etsy.com/your-store",
    },
    {
      name: "Printify Store",
      description: "Custom print-on-demand products. With our Printify store, you can find a variety of personalized items, from t-shirts and mugs to phone cases and wall art, all featuring your favorite designs.",
      logo: "/placeholder.svg?height=200&width=200",
      url: "https://printify.com/your-store",
    },
    {
      name: "Shopify Store",
      description: "Your main e-commerce platform. Our Shopify store is the central hub for all our products, offering a seamless shopping experience with a wide range of items, from everyday essentials to luxury goods.",
      logo: "/placeholder.svg?height=200&width=200",
      url: "https://your-store.myshopify.com",
    },
  ]

  const products = [
    {
      name: "Tech Vibe T-Shirt",
      description: "Show off your tech passion with our signature tee.",
      image: "/product1.jpg",
      price: "$24.99",
    },
    {
      name: "Coder's Mug",
      description: "Fuel your coding sessions with this sleek mug.",
      image: "/product2.jpg",
      price: "$14.99",
    },
    {
      name: "Virtual Reality Headset",
      description: "Immerse yourself in virtual worlds with our VR headset.",
      image: "/product3.jpg",
      price: "$299.99",
    },
    {
      name: "Smart Home Hub",
      description: "Control your entire home with this intuitive smart hub.",
      image: "/product4.jpg",
      price: "$149.99",
    },
    {
      name: "Wireless Earbuds",
      description: "Experience crystal-clear audio with our wireless earbuds.",
      image: "/product5.jpg",
      price: "$79.99",
    },
    {
      name: "Drone with 4K Camera",
      description: "Capture stunning aerial footage with our high-tech drone.",
      image: "/product6.jpg",
      price: "$499.99",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-full">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={62}
                  height={62}
                  className=""
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-gray-800 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-full sm:w-64"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex-grow bg-black text-white flex items-stretch pt-16">
        <div className="w-full flex flex-col md:flex-row relative overflow-hidden">
          <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-10">
            <div className="max-w-xl mx-auto">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
                Welcome to Virtual Vibes
              </h1>
              <p className="text-xl mb-8">
              At Virtual Vibes, we offer a unique range of tech-inspired products, including trendy shirts and other cool gear. Our mission is to help you express your love for technology in both the virtual and physical worlds. Whether you're rocking a shirt that showcases your passion for tech or exploring our innovative products, Virtual Vibes has you covered. Join the movement, vibe with technology, and make a statement in our connected world!
              </p>
              <Button size="lg" variant="secondary">
                Explore Now
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[calc(100vh-4rem)]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
            <video
              className="w-full h-full object-cover"
              src="hero.mp4"
              title="Platform Overview"
              controls={false}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-6xl mx-auto my-12 relative"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.name} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                  <CardTitle className="text-xl text-center mt-4">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                  <p className="text-lg font-bold text-center mt-2">{product.price}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>

      <main className="bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Stores</h2>
          <div className="space-y-12">
            {stores.map((store, index) => (
              <Card key={store.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/3 flex items-center justify-center p-8">
                    <Image
                      src={store.logo}
                      alt={`${store.name} logo`}
                      width={200}
                      height={200}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center p-8">
                    <CardHeader>
                      <CardTitle className="text-3xl mb-4">{store.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg mb-6">{store.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild size="lg">
                        <a href={store.url} target="_blank" rel="noopener noreferrer">
                          Visit Store
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

     
    </div>
  )
}