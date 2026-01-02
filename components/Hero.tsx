"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GeometricAnimation from "./GeometricAnimation";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ["Full-Stack Developer", "Creator", "Programmer", "Professional"];
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    if (!isDeleting && displayedText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, pauseAfterDelete);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left md:w-1/2"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Hi, I'm
            <br />
            Akshay Guleria
          </motion.h1>
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-10 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="mb-4 flex flex-wrap items-start gap-2">
              <span className="whitespace-nowrap">I'm a</span>
              <span className="text-cyan-400 font-semibold inline-block min-w-[200px] sm:min-w-[280px]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Passionate about building scalable, data-driven, and automated
              solutions.
              <br className="hidden sm:block" />
              <span className="sm:inline block mt-1 sm:mt-0">
                Expertise in MERN, Python, SQL, Problem-Solving, RESTful APIs, and Enthusiastic in AI/ML
                integration.
              </span>
              <br className="hidden sm:block" />
              <span className="sm:inline block mt-1 sm:mt-0">
                Let's create something that actually matters.
              </span>
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <MagneticButton
              href="#experience"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Contact Me
            </MagneticButton>
            <MagneticButton
              href="https://drive.google.com/file/d/1tvHdUckFowDTM-q3O22dqfpbHlUUXln0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Check Resume
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Geometric Animation */}
      <GeometricAnimation />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-950/20 -z-10" />
    </section>
  );
}
