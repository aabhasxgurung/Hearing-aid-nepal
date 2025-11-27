"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiEar, PiSliders, PiStethoscope, PiSpeakerHigh } from "react-icons/pi";

const services = [
  {
    icon: PiEar,
    title: "Comprehensive Hearing Tests",
    description:
      "State-of-the-art diagnostic testing to accurately assess your hearing profile and identify specific needs.",
  },
  {
    icon: PiSliders,
    title: "Precision Fitting & Tuning",
    description:
      "Expert calibration of your hearing aids using Real Ear Measurement (REM) to ensure optimal performance and comfort.",
  },
  {
    icon: PiStethoscope,
    title: "Tinnitus Management",
    description:
      "Specialized therapies and device features designed to alleviate the symptoms of ringing in the ears.",
  },
  {
    icon: PiSpeakerHigh,
    title: "Custom Ear Protection",
    description:
      "Tailor-made earplugs for musicians, swimmers, and industrial workers to prevent hearing loss before it starts.",
  },
];

const SolutionsPage = () => {
  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-mori text-foreground leading-[0.85] mb-12"
        >
          EXPERT <br />
          <span className="font-editorial italic text-muted">Solutions</span>
        </motion.h1>
        <p className="text-xl md:text-2xl font-mori text-foreground/70 max-w-3xl leading-relaxed">
          We offer more than just devices. Our comprehensive audiological
          services ensure you get the most out of your hearing health journey.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group border-t border-black/10 pt-12"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-white transition-colors duration-300 shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-mori text-foreground mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;
