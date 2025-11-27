"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/home/hero-light.jpg" // Assuming a light version exists or will be added
          alt="Hearing Aid Hero"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="flex flex-col items-center justify-center leading-[0.85] tracking-tighter mb-8">
            <span className="text-[12vw] md:text-[10rem] font-bold font-mori text-foreground">
              HEAR
            </span>
            <span className="text-[12vw] md:text-[10rem] font-editorial italic font-normal text-muted">
              Life
            </span>
          </h1>

          <p className="font-mori text-lg md:text-xl text-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Experience the world in full fidelity. Advanced hearing technology
            designed for the modern lifestyle.
          </p>

          <Magnetic>
            <Link href="/products">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full overflow-hidden transition-all hover:bg-foreground hover:text-white">
                <span className="relative z-10 font-mori text-sm uppercase tracking-widest font-bold">
                  Explore Devices
                </span>
                <span className="relative z-10 group-hover:rotate-45 transition-transform duration-300">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </Magnetic>
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
    </header>
  );
};

export default Header;
