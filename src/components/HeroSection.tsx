"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center py-16 px-6">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center">
          {/* Fragments of Eternity title with animation */}
          <motion.h1
            className="text-7xl font-medieval text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Fragments of Eternity
          </motion.h1>

          {/* Subtitle with animation */}
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            A journey into the unknown, where fate weaves its own story...
          </motion.p>

          {/* The adventure begins soon text */}
          <motion.p
            className="mt-8 text-2xl text-yellow-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            The adventure begins soon...
          </motion.p>

          {/* Link with animation */}
          <motion.p
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          >
            <Link
              href="#act-one"
              className="bg-yellow-500 text-black  font-bold hover:bg-yellow-600 transition-color duration-300 ease-in-out border-0 rounded-xl p-4"
            >
              Act One: The Land of Marona
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
