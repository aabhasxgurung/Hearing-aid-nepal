"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PiEar,
  PiMapPin,
  PiStethoscope,
  PiWrench,
  PiWaveform,
} from "react-icons/pi";
import Link from "next/link";

const About = () => {
  const brandLogos = [
    "/home/phonak.png",
    "/home/oticon.png",
    "/home/starkey.png",
    "/home/signia.png",
    "/home/resound.png",
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-mori text-foreground mb-4">
            Excellence in{" "}
            <span className="text-muted italic font-editorial">
              Hearing Care
            </span>
          </h2>
          <p className="text-foreground/60 font-mori text-lg">
            Combining medical expertise with the world&apos;s most advanced
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. Legacy Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <PiWaveform size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-foreground">
                <PiEar size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-mori font-bold text-foreground mb-2">
                25+ Years
              </h3>
              <p className="text-foreground/60 font-mori text-sm md:text-base">
                A trusted legacy in hearing care across Nepal.
              </p>
            </div>
          </motion.div>

          {/* 2. Patients Served Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-mori font-bold text-foreground mb-2">
              15k+
            </div>
            <p className="text-foreground/60 font-mori text-sm">
              Lives Improved
            </p>
            <div className="mt-4 flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
          </motion.div>

          {/* 3. Nepal Map Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 row-span-1 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute inset-0">
              {/* Abstract Map Representation */}
              {/* <svg
                viewBox="0 0 200 150"
                className="w-full h-full text-foreground fill-current"
              >
                <path
                  d="M20,100 Q50,50 100,80 T180,60"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="80" r="3" />
                <circle cx="90" cy="70" r="3" />
                <circle cx="120" cy="90" r="3" />
                <circle cx="150" cy="60" r="3" />
              </svg> */}
              <div className=" overflow-hidden h-72 w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://api.mapbox.com/styles/v1/axbhxs/cmiob1qhv014y01s66n2l3g8f.html?title=false&access_token=pk.eyJ1IjoiYXhiaHhzIiwiYSI6ImNtY3NxdWNhNDAzcDcyaXFxbmpyZmY3cTcifQ.rRjCiyOkfLBOPyYDq1yInQ&zoomwheel=false#16/27.7350/85.3313"
                  title="Aabhas"
                ></iframe>
              </div>
            </div>
            <div className="relative h-full flex flex-col justify-end">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-mori font-bold text-foreground mb-2">
                  Our Location{" "}
                </h3>
                <div className="mb-auto">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-foreground">
                    <PiMapPin size={20} />
                  </div>
                </div>
              </div>
              <p className="text-foreground/60 font-mori text-sm">
                Maharajgunj, Kathmandu
              </p>
            </div>
          </motion.div>

          {/* 4. Global Technology Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center"
          >
            <h3 className="text-lg font-mori font-bold text-foreground mb-6">
              International Technology
            </h3>
            <div className="flex flex-wrap gap-8 items-center justify-start opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {brandLogos.map((logo, index) => (
                <div key={index} className="relative h-8 w-20">
                  <Image
                    src={logo}
                    alt="Brand Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Audiologists Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-foreground">
              <PiStethoscope size={20} />
            </div>
            <h3 className="text-lg font-mori font-bold text-foreground mb-2">
              Certified Experts
            </h3>
            <p className="text-foreground/60 font-mori text-sm">
              Expert fitting & evaluation.
            </p>
          </motion.div>

          {/* 6. Free Hearing Test Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-mori font-bold text-foreground mb-2">
                Free Hearing Test
              </h3>
              <p className="text-foreground/60 font-mori text-sm mb-6">
                Book your evaluation today.
              </p>
            </div>
            <Link href="/book">
              <button className="w-full py-3 bg-[#D2042D] text-white rounded-full font-mori text-sm font-medium hover:bg-[#b00326] transition-colors">
                Book Your Test
              </button>
            </Link>
          </motion.div>

          {/* 7. Support Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-foreground">
              <PiWrench size={20} />
            </div>
            <h3 className="text-lg font-mori font-bold text-foreground mb-2">
              Lifetime Care
            </h3>
            <p className="text-foreground/60 font-mori text-sm">
              Service & repairs included.
            </p>
          </motion.div>

          {/* 8. Care Journey Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-mori font-bold text-foreground mb-6">
              Your Hearing Journey
            </h3>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10" />
              {["Evaluate", "Fit", "Adjust", "Enjoy"].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white px-2"
                >
                  <div className="w-3 h-3 rounded-full bg-[#D2042D] mb-2" />
                  <span className="text-xs font-mori text-foreground/60 uppercase tracking-wider">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
