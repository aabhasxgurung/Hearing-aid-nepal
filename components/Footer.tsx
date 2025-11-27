"use client";
import React from "react";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiTwitterLogo,
  PiLinkedinLogo,
} from "react-icons/pi";
import Magnetic from "./Magnetic";

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-black/5">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="block mb-8 group">
              <span className="font-mori text-4xl md:text-6xl text-foreground font-bold tracking-tighter">
                HEARING
                <span className="font-editorial font-normal italic ml-2 text-muted group-hover:text-accent transition-colors duration-500">
                  Aid
                </span>
              </span>
            </Link>
            <p className="text-foreground/60 text-lg max-w-md leading-relaxed font-mori">
              Restoring the joy of hearing with advanced technology and
              compassionate care. Your journey to better hearing starts here.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mori text-xs uppercase tracking-widest text-foreground/40 mb-8">
                Explore
              </h4>
              <ul className="space-y-4">
                {["About Us", "Shop Devices", "Our Services", "Journal"].map(
                  (item) => (
                    <li key={item}>
                      <Magnetic>
                        <Link
                          href="#"
                          className="text-foreground font-mori text-lg hover:text-accent transition-colors inline-block"
                        >
                          {item}
                        </Link>
                      </Magnetic>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-mori text-xs uppercase tracking-widest text-foreground/40 mb-8">
                Support
              </h4>
              <ul className="space-y-4">
                {["FAQs", "Warranty", "Shipping", "Privacy Policy"].map(
                  (item) => (
                    <li key={item}>
                      <Magnetic>
                        <Link
                          href="#"
                          className="text-foreground font-mori text-lg hover:text-accent transition-colors inline-block"
                        >
                          {item}
                        </Link>
                      </Magnetic>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-mori text-xs uppercase tracking-widest text-foreground/40 mb-8">
                Socials
              </h4>
              <div className="flex gap-4">
                {[
                  PiFacebookLogo,
                  PiInstagramLogo,
                  PiTwitterLogo,
                  PiLinkedinLogo,
                ].map((Icon, i) => (
                  <Magnetic key={i}>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-black/5">
          <p className="text-foreground/40 text-sm font-mori uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Hearing Aid Nepal.
          </p>
          <p className="text-[10vw] leading-[0.8] font-editorial italic text-black/5 select-none pointer-events-none">
            Listen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
