"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <CampaignIntroductionSection />
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>
          Centuries Echoing Legends Eventually Shape The Ancient Ruins Around.
        </p>
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: "url(/images/fragments-bg.jpg)" }}
    >
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
              className="bg-yellow-500 text-white hover:bg-yellow-600 transition-color duration-300 ease-in-out border-0 rounded-xl p-4"
            >
              Act One: The Land of Marona
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function CampaignIntroductionSection() {
  return (
    <section className="py-16 px-6 bg-gray-800 text-white" id="act-one">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medieval text-yellow-500 text-center mb-8">
          The Land of Marona
        </h2>
        <p className="leading-8 text-lg text-gray-300">
          In the land of Marona, a subcontinent rich with life and bounty, the
          people have long lived in harmony with the earth. Rolling plains
          stretch as far as the eye can see, dotted with fertile farmlands and
          ancient forests. Majestic mountains watch over the land, their peaks
          hiding untold treasures deep within their roots. Rivers cut through
          the landscape, nourishing all life and binding the people together in
          prosperity.
        </p>
        <p className="mt-4 leading-8 text-lg text-gray-300">
          Marona is known as a land where all races, cultures, and peoples
          coexist peacefully. There is no place for the prejudice or wars that
          have troubled other lands. In Marona, the only measure of a person is
          their character, not their heritage. The town of Briarhill, where you
          and your companions have spent your lives, stands at the heart of this
          fertile land—a bustling farming community where every harvest is a
          celebration, and every year is filled with hope for the future.
        </p>
        <p className="mt-4 leading-8 text-lg text-gray-300">
          You and your companions have known each other for as long as you can
          remember. Whether you toiled in the fields, explored the nearby
          forests, or trained under one of Briarhill’s many skilled artisans,
          you’ve always shared a bond forged by the land you call home.
          Together, you’ve faced the trials of growing up in this peaceful
          corner of the world, and now, as adults, you’ve begun to forge your
          own paths. Though your lives have been simple, whispers of strange
          occurrences have begun to spread—rumors of a creeping sickness that
          has started to affect the once-thriving fields, and strange creatures
          spotted in the hills near Granite Hold.
        </p>
        <p className="mt-4 leading-8 text-lg text-gray-300">
          Life in Marona has always been predictable, safe, and abundant, but
          change is in the air. Something is stirring beneath the surface of the
          land. The elders say the crops have never failed, and the creatures
          that have begun to emerge from the depths have not been seen for
          generations. The people of Briarhill are worried, but for now, they
          trust in the wisdom of Elder Liora and the strength of the community.
        </p>
        <p className="mt-4 leading-8 text-lg text-gray-300">
          As you gather in the familiar town square of Briarhill, the bells
          ring, signaling a meeting called by Elder Liora. You and your
          companions stand shoulder to shoulder with the townsfolk, all of you
          wondering what could cause such urgency. The crisp morning air carries
          with it the scent of fresh earth and the distant songs of birds. But
          as the crowd falls silent, a new tension settles over the town, like
          the stillness before a storm.
        </p>
        <p className="mt-4 leading-8 text-lg text-gray-300">
          Though you’ve grown up together in this peaceful land, you sense that
          things are about to change. This is where your story begins—a story of
          ancient mysteries, untold dangers, and a journey that will take you
          far from the safety of your home. What lies ahead is unknown, but you
          will face it together, as you always have.
        </p>
        <p className="mt-8 leading-8 text-lg text-yellow-500 font-bold text-center">
          The fate of Marona—and perhaps more—may rest in your hands.
        </p>
      </div>
    </section>
  );
}
