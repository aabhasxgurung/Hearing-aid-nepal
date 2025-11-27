"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PiStorefront,
  PiHeadset,
  PiWrench,
  PiShieldCheck,
} from "react-icons/pi";

export const featuresData = [
  {
    id: 1,
    Icon: PiStorefront,
    title: "Global Selection",
    description: "Curated collection of the world's finest hearing technology.",
  },
  {
    id: 2,
    Icon: PiHeadset,
    title: "Precision Fitting",
    description:
      "Audiologist-led customization for your unique hearing profile.",
  },
  {
    id: 3,
    Icon: PiWrench,
    title: "Expert Care",
    description: "Lifetime maintenance and fine-tuning support.",
  },
  {
    id: 4,
    Icon: PiShieldCheck,
    title: "Premium Assurance",
    description: "Comprehensive warranty and dedicated after-care service.",
  },
];

const Intro = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={container}
      className="relative py-32 bg-surface overflow-hidden"
    >
      <div className="w-full max-w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-mori text-foreground leading-tight"
          >
            REDISCOVER <br />
            <span className="font-editorial italic text-muted">Sound</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0 max-w-md text-foreground/60 font-mori text-lg"
          >
            We partner with top manufacturers to bring you the perfect fit,
            expert tuning, and lifetime care—so every conversation comes through
            loud and clear.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 border border-black/10 hover:border-black/30 transition-colors duration-500 bg-white/50 backdrop-blur-sm"
            >
              <div className="mb-8 text-foreground/40 group-hover:text-accent transition-colors duration-500">
                <feat.Icon size={48} />
              </div>
              <h3 className="text-xl font-mori text-foreground mb-4 uppercase tracking-wider">
                {feat.title}
              </h3>
              <p className="text-foreground/60 font-mori text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                {feat.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
