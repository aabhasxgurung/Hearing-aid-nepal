"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlus, PiMinus } from "react-icons/pi";

const faqs = [
  {
    question: "How do I know if I need a hearing aid?",
    answer:
      "Common signs include asking people to repeat themselves, turning up the TV volume, or struggling to follow conversations in noisy environments. We recommend a professional hearing test for a definitive diagnosis.",
  },
  {
    question: "How long do hearing aid batteries last?",
    answer:
      "Standard batteries typically last 3-10 days depending on usage and size. Rechargeable models can last a full day (24 hours) on a single charge.",
  },
  {
    question: "Do you offer a trial period?",
    answer:
      "Yes, we offer a risk-free trial period for most of our devices. This allows you to experience the benefits in your daily life before making a final commitment.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All our premium devices come with a standard 2-year manufacturer warranty covering defects and repairs. Extended warranty options are also available.",
  },
];

const SupportPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="bg-background min-h-screen pt-32 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-mori text-foreground leading-[0.85] mb-12"
        >
          HERE TO <br />
          <span className="font-editorial italic text-muted">Help</span>
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-black/10"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-2xl font-mori text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <span className="text-foreground/40 group-hover:text-accent transition-colors">
                  {activeIndex === index ? (
                    <PiMinus size={24} />
                  ) : (
                    <PiPlus size={24} />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-foreground/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
