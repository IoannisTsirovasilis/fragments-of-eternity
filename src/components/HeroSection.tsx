"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen p-6">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center">
          <motion.h1
            className="text-7xl text-primary-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Fragments of Eternity
          </motion.h1>

          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            A journey into the unknown, where fate weaves its own story...
          </motion.p>

          <motion.p
            className="mt-8 text-2xl text-primary-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            The adventure begins soon...
          </motion.p>

          <motion.p
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          >
            <Link
              href="#act-one"
              className="bg-primary-500 text-black font-bold hover:bg-primary-600 transition-color duration-300 ease-in-out border-0 rounded-xl p-4"
            >
              Act One: The Land of Marona
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
