"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import Magnetic from "@/components/Magnetic";

const AccessoriesPage = () => {
  const accessories = products.filter((p) => p.category === "Accessories");

  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-mori text-foreground leading-[0.85] mb-12"
        >
          ESSENTIAL <br />
          <span className="font-editorial italic text-muted">Accessories</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-square bg-surface rounded-2xl overflow-hidden mb-6 p-8 flex items-center justify-center relative border border-black/5 hover:border-accent/30 transition-colors duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                />

                {/* Quick Add / View Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Magnetic>
                    <Link
                      href={`/products/${item.id}`}
                      className="bg-white text-accent px-6 py-3 rounded-full font-mori text-xs uppercase tracking-widest shadow-lg"
                    >
                      View Details
                    </Link>
                  </Magnetic>
                </div>
              </div>

              <div>
                <span className="text-xs font-mori text-accent uppercase tracking-widest mb-2 block">
                  {item.subcategory || "Accessory"}
                </span>
                <h3 className="text-xl font-mori text-foreground mb-1 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-foreground/60 text-sm">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AccessoriesPage;
