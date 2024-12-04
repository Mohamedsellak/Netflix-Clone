'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const carouselItems = [
  {
    id: 1,
    image: 'https://picsum.photos/1200/600?random=1',
    title: 'Stranger Things',
    description: 'A Netflix Original Series',
  },
  {
    id: 2,
    image: 'https://picsum.photos/1200/600?random=2',
    title: 'The Crown',
    description: 'A Netflix Original Series',
  },
  {
    id: 3,
    image: 'https://picsum.photos/1200/600?random=3',
    title: 'Wednesday',
    description: 'A Netflix Original Series',
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black">
            <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
            <p className="text-xl">{item.description}</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 