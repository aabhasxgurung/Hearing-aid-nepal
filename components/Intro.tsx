"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    id: 1,
    title: "Engineered for Real Life",
    description:
      "Devices optimized for clarity, spatial awareness, and comfort.",
  },
  {
    id: 2,
    title: "Global Standards",
    description:
      "Technology and protocols used in leading international audiology centers.",
  },
  {
    id: 3,
    title: "Personal Acoustic Mapping",
    description:
      "Fitting calibrated to individual listening profiles, not generic presets.",
  },
];

const Intro = () => {
  const container = useRef(null);

  return (
    <section
      ref={container}
      className="relative py-32 md:py-48 bg-surface overflow-hidden"
    >
      <div className="w-full max-w-[90%] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-mori text-foreground leading-[0.9] tracking-tight max-w-4xl"
          >
            Where sound meets precision.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 lg:mt-2 max-w-md text-foreground/70 font-mori text-lg md:text-xl leading-relaxed"
          >
            We combine advanced hearing engineering, global-grade devices, and
            tailored acoustic fitting to create environments where sound feels
            natural not amplified.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 border-t border-black/10 pt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl font-mori text-foreground tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-foreground/60 font-mori text-base leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
