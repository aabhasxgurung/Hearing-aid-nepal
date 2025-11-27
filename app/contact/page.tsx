"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const ContactPage = () => {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-mori text-foreground leading-[0.85] mb-12"
            >
              GET IN <br />
              <span className="font-editorial italic text-muted">Touch</span>
            </motion.h1>

            <div className="space-y-12 text-lg font-mori text-foreground/80">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">
                  Visit Us
                </h3>
                <p>Kathmandu, Nepal</p>
                <p>New Baneshwor, Plaza 2nd Floor</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">
                  Contact
                </h3>
                <p>+977 9800000000</p>
                <p>info@hearingaidnepal.com</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-foreground/40 mb-4">
                  Hours
                </h3>
                <p>Sun - Fri: 10:00 AM - 6:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface p-12 rounded-2xl"
          >
            <form className="space-y-8">
              <div>
                <label className="block text-sm uppercase tracking-widest text-foreground/40 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black/10 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-foreground/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-black/10 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-foreground/40 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-black/10 py-4 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  className="w-full bg-foreground text-white py-4 rounded-full font-mori uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Send Message
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
