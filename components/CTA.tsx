"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const CTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-black/5">
      <div className="w-full max-w-[90%] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mori text-5xl md:text-8xl mb-12 leading-[0.9] text-foreground">
            READY TO HEAR <br />
            <span className="font-editorial italic text-muted">The World?</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Magnetic>
              <Link
                href="/contact"
                className="bg-foreground text-white px-10 py-5 rounded-full font-mori text-sm uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Book Appointment
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="bg-transparent border border-black/20 text-foreground px-10 py-5 rounded-full font-mori text-sm uppercase tracking-widest hover:bg-foreground hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
