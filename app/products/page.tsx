"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { products } from "@/data/products";

const categories = [
  "All",
  "Receiver-in-Canal",
  "Behind-the-Ear",
  "Invisible-in-Canal",
  "Pocket Hearing Aids",
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter out accessories from the main product list
  const mainProducts = products.filter((p) => p.category !== "Accessories");

  const filteredProducts =
    activeCategory === "All"
      ? mainProducts
      : mainProducts.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <h1 className="text-6xl md:text-9xl font-mori text-foreground leading-[0.85] mb-12">
          PREMIUM <br />
          <span className="font-editorial italic text-muted">Devices</span>
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-mori text-sm uppercase tracking-widest ${
                activeCategory === cat
                  ? "bg-accent text-white border-accent"
                  : "bg-transparent text-foreground/60 border-black/10 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative aspect-[4/5] bg-surface rounded-2xl overflow-hidden mb-6 border border-black/5 group-hover:border-accent/30 transition-colors duration-500">
                    <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700 ease-out">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={500}
                        className="object-contain w-full h-full drop-shadow-xl"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white text-accent px-8 py-4 rounded-full font-mori text-xs uppercase tracking-widest transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                        View Details
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-mori text-foreground mb-1 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted text-sm uppercase tracking-wider">
                        {product.category}
                      </p>
                    </div>
                    <span className="font-mori text-accent font-bold">
                      {product.price}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
};

export default ProductsPage;
