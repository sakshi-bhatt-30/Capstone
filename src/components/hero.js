
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero-section");
      const heroRect = heroElement.getBoundingClientRect();

      if (heroRect.bottom < 1) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="hero-section"
      className="min-h-fit flex flex-col items-start justify-start text-left py-40 px-5 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      exit={{ opacity: 0 }}
    >
      <div className="container px-20 py-10">
        <div className="py-4">
          <motion.h1 className="text-4xl md:text-7xl bg-gradient-to-r from-yellow-400 to-white inline-block text-transparent bg-clip-text mb-6" 
           variants={itemVariants}>
            Transform the Way <br /> You Collect Data
          </motion.h1>
        </div>
        <motion.p className="text-2xl text-gray-300 max-w-2xl" variants={itemVariants}>
          Say goodbye to rigid templates and hello to infinite possibilities.
          With our custom forms, you’re in control—design, optimize, and launch
          forms that truly reflect your needs.
          <br /> The simplicity of Google Forms meets the power of advanced
          analytics. Built for teams who need deeper insights.
        </motion.p>
      </div>
      <motion.div
        className=" container flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 px-20 py-6"
        variants={itemVariants}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-2 py-2 bg-gray-800 border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-400 text-black px-3 py-2 rounded-md hover:bg-white transition">
          Access To Workspace
        </button>
      </motion.div>
    </motion.section>
  );
}
