"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX, HiOutlineShoppingCart } from "react-icons/hi";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Accessories", href: "/accessories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-white/80 backdrop-blur-md border-b border-black/5"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <span className="font-mori text-2xl font-bold tracking-tighter text-black">
              HEARING
              <span className="font-editorial font-normal italic ml-1 text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                Aid
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link
                  href={link.href}
                  className="font-mori text-xs uppercase tracking-[0.2em] text-black/80 hover:text-blue-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Magnetic>
              <button className="font-mori text-xs uppercase tracking-[0.2em] text-black/80 hover:text-blue-600 transition-colors">
                Log in
              </button>
            </Magnetic>
            <Magnetic>
              <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                <HiOutlineShoppingCart size={18} />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-black"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-editorial italic text-5xl text-black hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
