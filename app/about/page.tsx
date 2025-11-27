"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiUsers, PiHeart, PiLightbulb } from "react-icons/pi";

const values = [
  {
    icon: PiHeart,
    title: "Compassion First",
    description:
      "We believe in treating every patient with empathy and understanding, recognizing that hearing loss is a personal journey.",
  },
  {
    icon: PiLightbulb,
    title: "Innovation Led",
    description:
      "We stay at the forefront of audiology technology to provide the most advanced and effective solutions available.",
  },
  {
    icon: PiUsers,
    title: "Community Focused",
    description:
      "We are dedicated to raising awareness and improving hearing health across Nepal through outreach and education.",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-mori text-foreground leading-[0.85] mb-12"
        >
          OUR <br />
          <span className="font-editorial italic text-muted">Story</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden"
        >
          <Image
            src="/home/about.jpg" // Reusing existing image for now
            alt="Team at Hearing Aid Nepal"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mori uppercase tracking-widest text-foreground/40 sticky top-32">
              Who We Are
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-xl md:text-2xl font-mori text-foreground/80 leading-relaxed">
            <p>
              Founded with a vision to revolutionize hearing care in Nepal,
              Hearing Aid Nepal has grown from a small clinic to a nationwide
              leader in audiology services.
            </p>
            <p>
              We understand that hearing is more than just a sense—it&apos;s how
              we connect with the world, our loved ones, and ourselves.
              That&apos;s why we don&apos;t just sell devices; we provide
              comprehensive hearing solutions tailored to your unique lifestyle.
            </p>
            <p>
              Our team of certified audiologists and support staff are committed
              to guiding you through every step of your hearing journey, from
              diagnosis to fitting and lifetime aftercare.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground mb-8 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-mori text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
