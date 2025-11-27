"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PiCheckCircle } from "react-icons/pi";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5k+", label: "Happy Customers" },
    { number: "20+", label: "Partners" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-mori text-foreground mb-12 leading-[0.9]">
              YOUR JOURNEY TO <br />
              <span className="font-editorial italic text-muted">
                Better Hearing
              </span>
            </h2>

            <div className="space-y-8 text-foreground/70 font-mori text-lg leading-relaxed max-w-xl">
              <p>
                We started Nepal Hearing Aid to create a single destination for
                hearing aid research, shopping, and expert care. We're glad
                you're here.
              </p>
              <p>
                As Nepal's pioneering hearing aid center, we've been
                transforming lives since our inception. Our mission is simple:
                to reconnect you with the sounds that matter most.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-12 mt-16 border-t border-black/10 pt-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-mori font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-foreground/40 font-mori text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/home/about.jpg"
                fill
                alt="About Nepal Hearing Aid"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
