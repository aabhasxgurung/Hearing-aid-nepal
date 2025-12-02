"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const products = [
  {
    id: 1,
    name: "Phonak Audéo Lumity",
    category: "Receiver-in-Canal",
    price: "Rs. 45,000",
    image: "/products/phonak.png",
  },
  {
    id: 2,
    name: "Oticon Real",
    category: "Invisible-in-Canal",
    price: "Rs. 52,000",
    image: "/products/oticon.png",
  },
  {
    id: 3,
    name: "Starkey Genesis AI",
    category: "Behind-the-Ear",
    price: "Rs. 48,000",
    image: "/products/starkey.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-32 bg-background">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-5xl md:text-8xl font-mori text-foreground leading-[0.85]">
            SELECTED <br />
            <span className="font-editorial italic text-muted">Devices</span>
          </h2>
          <div className="hidden md:block">
            <Magnetic>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 border border-black/10 rounded-full text-sm uppercase tracking-widest hover:bg-foreground hover:text-white transition-all duration-300"
              >
                View All Collection
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] bg-surface overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-12 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-muted">
                  {product.category}
                </span>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-mori text-foreground group-hover:underline decoration-1 underline-offset-4 transition-all">
                    {product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:hidden text-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-4 border border-black/10 rounded-full text-sm uppercase tracking-widest hover:bg-foreground hover:text-white transition-all duration-300"
          >
            View All Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
