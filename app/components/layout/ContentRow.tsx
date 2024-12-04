'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ContentItem {
  id: number
  title: string
  image: string
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
}

export default function ContentRow({ title, items }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative group px-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {/* Scroll Buttons */}
      <button 
        className="absolute left-0 top-1/2 z-10 bg-black/50 p-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute right-0 top-1/2 z-10 bg-black/50 p-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Row */}
      <div 
        ref={rowRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex-none w-[200px] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              width={200}
              height={300}
              className="w-full h-[300px] object-cover rounded"
            />
            <p className="mt-2 text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 