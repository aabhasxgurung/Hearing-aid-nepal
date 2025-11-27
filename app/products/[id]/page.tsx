"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { PiCheckCircle, PiArrowLeft } from "react-icons/pi";
import Magnetic from "@/components/Magnetic";
import { products } from "@/data/products";

const ProductDetailPage = () => {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-mori text-foreground mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-accent hover:underline font-mori uppercase tracking-widest"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors font-mori text-sm uppercase tracking-widest"
        >
          <PiArrowLeft /> Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-surface rounded-3xl overflow-hidden flex items-center justify-center p-12"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Product Details */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-accent/20 text-accent font-mori text-xs uppercase tracking-widest mb-6">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-mori text-foreground leading-[0.9] mb-6">
                {product.name}
              </h1>
              <p className="text-2xl font-mori text-foreground/80 mb-8">
                {product.price}
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed mb-12 max-w-md">
                {product.description}
              </p>

              <div className="flex gap-4 mb-16">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="bg-accent text-white px-10 py-5 rounded-full font-mori text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                  >
                    Inquire Now
                  </Link>
                </Magnetic>
              </div>

              {/* Quick Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="border-t border-black/10 pt-8">
                  <h3 className="font-mori text-sm uppercase tracking-widest text-foreground/40 mb-6">
                    Key Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-y-4">
                    {product.specs.map((spec, i) => (
                      <div key={i}>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">
                          {spec.label}
                        </p>
                        <p className="text-foreground font-mori">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <section className="bg-surface py-32 mb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white text-accent flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {feature.icon && <feature.icon size={32} />}
                  </div>
                  <h3 className="text-xl font-mori text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-mori text-foreground mb-12">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/products/${related.id}`}
                className="group block"
              >
                <div className="aspect-[4/5] bg-surface rounded-xl overflow-hidden mb-6 p-8 flex items-center justify-center relative">
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={300}
                    height={400}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-mori text-foreground group-hover:text-accent transition-colors">
                  {related.name}
                </h3>
                <p className="text-foreground/60 text-sm mt-1">
                  {related.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetailPage;
