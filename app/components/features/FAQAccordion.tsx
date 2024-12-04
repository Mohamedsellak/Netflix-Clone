'use client'

import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  }
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-xl bg-[#2D2D2D] transition-colors hover:bg-[#4D4D4D]">
          <button
            className="w-full p-6 text-left flex items-center justify-between"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-2xl">{faq.question}</span>
            {openIndex === index ? (
              <X className="w-8 h-8 transition-transform" />
            ) : (
              <Plus className="w-8 h-8 transition-transform" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-6 pt-0 text-xl">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 