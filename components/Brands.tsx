"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  "Phonak",
  "Oticon",
  "Starkey",
  "Widex",
  "Signia",
  "Resound",
  "Unitron",
  "Bernafon",
];

const Brands = () => {
  return (
    <section className="py-20 bg-surface border-y border-black/5 overflow-hidden">
      <div className="flex relative overflow-hidden">
        <motion.div
          className="flex gap-24 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl font-mori font-bold text-foreground/20 uppercase hover:text-foreground transition-colors duration-500 cursor-default tracking-tight"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
