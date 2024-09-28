"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "/jane-doe.jpg",
      bio: "Tech enthusiast with a passion for innovative products.",
    },
    {
      name: "John Smith",
      role: "Lead Designer",
      image: "/john-smith.jpg",
      bio: "Creative mind behind our unique product designs.",
    },
    // ... Add more team members as needed
  ]

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
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
                <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-gray-800 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
                About Virtual Vibes
              </h1>
              <p className="text-xl mb-8">
                Virtual Vibes was founded with a vision to bridge the gap between technology and fashion. We believe in creating products that not only look great but also resonate with the tech-savvy generation.
              </p>
              <Button size="lg" variant="secondary">
                Join Our Team
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[calc(100vh-4rem)]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
            <Image
              src="/about-hero.jpg"
              alt="About Virtual Vibes"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                  <CardTitle className="text-xl text-center mt-4">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center font-semibold mb-2">{member.role}</p>
                  <p className="text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer>
        {/* Copy the footer from the main page if it exists */}
      </footer>
    </div>
  )
}
