"use client"

import { useState } from "react"
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

export default function RotatingBrands() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-lg font-semibold text-white/90">Trusted by Leading Brands</h3>
      </div>

      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className={`flex space-x-8 ${isPaused ? "pause-animation" : "brand-scroll"}`}>
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-24 h-24 relative bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-24 h-24 relative bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {brands.slice(0, 4).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 animate-pulse"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
