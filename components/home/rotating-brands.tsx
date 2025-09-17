"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const brands = [
  { name: "Fenty Beauty", logo: "/fenty-beauty-logo.jpg" },
  { name: "Chamberlain Coffee", logo: "/chamberlain-coffee-logo.jpg" },
  { name: "MrBeast", logo: "/mrbeast-logo.jpg" },
  { name: "Glossier", logo: "/glossier-logo.jpg" },
  { name: "Patagonia", logo: "/patagonia-logo.jpg" },
  { name: "Warby Parker", logo: "/warby-parker-logo.jpg" },
  { name: "Allbirds", logo: "/allbirds-logo.jpg" },
  { name: "Away", logo: "/away-luggage-logo.jpg" },
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
    <div className="w-full overflow-hidden">
      <div className="flex space-x-8 animate-pulse">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all duration-500 ${
              index === currentIndex ? "opacity-100 scale-110" : "opacity-60 scale-100"
            }`}
          >
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingBrands
