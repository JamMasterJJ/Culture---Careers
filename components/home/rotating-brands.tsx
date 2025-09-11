"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const brands = [
  {
    name: "Fenty Beauty",
    logo: "/stylish-woman-sunglasses.png",
  },
  {
    name: "Prime",
    logo: "/logan-paul-ksi.png",
  },
  {
    name: "Chamberlain Coffee",
    logo: "/emma-chamberlain-inspired.png",
  },
  {
    name: "Overtime",
    logo: "/dan-porter-zack-weiner.png",
  },
  {
    name: "WHOOP",
    logo: "/will-ahmed.png",
  },
  {
    name: "Generic Brand",
    logo: "/generic-placeholder-icon.png",
  },
]

export function RotatingBrands() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">Trusted by leading creator economy companies</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {brands.concat(brands).map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="flex-shrink-0 w-1/3 px-4">
                <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#4D7C4D]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
