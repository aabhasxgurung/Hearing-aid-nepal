"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Phonak", src: "/home/phonak.png" },
  { name: "Oticon", src: "/home/oticon.png" },
  { name: "Starkey", src: "/home/starkey.png" },
  { name: "Signia", src: "/home/signia.png" },
  { name: "Resound", src: "/home/resound.png" },
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
            <div
              key={index}
              className="relative w-[250px] h-[100px] opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
