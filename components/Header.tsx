"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <header
      ref={container}
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-[#F3F2ED]"
    >
      {/* Column 1: Text Content */}
      <div className="col-span-1 lg:col-span-5 flex flex-col justify-center px-8 md:px-16 py-24 lg:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block font-mori text-xs uppercase tracking-[0.2em] mb-8 text-black/60">
            Nepal Hearing Aid
          </span>
          <h1 className="text-5xl md:text-7xl font-mori text-foreground leading-[1.1] mb-8">
            Empowering Nepal to <br />
            <span className="font-editorial italic font-normal text-muted">
              Hear
            </span>{" "}
            Clearly Again
          </h1>
          <p className="text-lg text-foreground/70 font-mori max-w-md leading-relaxed">
            We bring the world&apos;s most advanced hearing technology to you,
            combining medical precision with personalized care to restore your
            connection to the world.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-mori">
              Scroll to Discover
            </span>
            <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden">
              <div className="w-full h-full bg-foreground/60 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Column 2: Image 1 */}
      <div className="col-span-1 lg:col-span-4 relative h-[60vh] lg:h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <Image
            src="/home/hero-light.jpg"
            fill
            alt="Advanced Hearing Technology"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-white font-mori text-2xl mb-2">
              Advanced Technology
            </h3>
            <p className="text-white/80 font-mori text-sm max-w-xs">
              State-of-the-art devices from global leaders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Column 3: Image 2 */}
      <div className="col-span-1 lg:col-span-3 relative h-[60vh] lg:h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <Image
            src="/home/banner1.jpeg"
            fill
            alt="Expert Care"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-white font-mori text-2xl mb-2">Expert Care</h3>
            <p className="text-white/80 font-mori text-sm max-w-xs">
              Certified audiologists dedicated to your hearing health.
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
