"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiQuotesFill, PiArrowLeft, PiArrowRight } from "react-icons/pi";
import Magnetic from "./Magnetic";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Teacher",
    content:
      "The service at Hearing Aid Nepal was exceptional. They took the time to understand my lifestyle and recommended a device that has truly changed how I interact with my students.",
    image: "/testimonials/t1.jpg",
  },
  {
    id: 2,
    name: "Rajesh Hamal",
    role: "Musician",
    content:
      "As a musician, sound quality is everything. The team helped me find a hearing aid that preserves the natural fidelity of music. It's been a game-changer for my performances.",
    image: "/testimonials/t2.jpg",
  },
  {
    id: 3,
    name: "Anita Gurung",
    role: "Retired Nurse",
    content:
      "I was hesitant at first, but the staff made me feel so comfortable. The after-care support is wonderful. I'm enjoying family gatherings again without feeling left out.",
    image: "/testimonials/t3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-mori text-foreground mb-8 leading-[0.9]">
              STORIES OF <br />
              <span className="font-editorial italic text-muted">Sound</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-md">
              Hear from those who have rediscovered the joy of clear hearing
              with us.
            </p>

            <div className="flex gap-4 mt-12">
              <Magnetic>
                <button
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  <PiArrowLeft size={24} />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={handleNext}
                  className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-all duration-300"
                >
                  <PiArrowRight size={24} />
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-12 rounded-2xl border border-black/5 relative"
              >
                <PiQuotesFill className="text-foreground/10 text-6xl mb-8" />
                <p className="font-mori text-2xl md:text-3xl text-foreground/90 mb-12 leading-relaxed">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>
                <div>
                  <h4 className="font-mori text-xl text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-foreground/40 text-sm uppercase tracking-widest mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
