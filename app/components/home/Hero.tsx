"use client";

import { PawPrint, MoveDown, HandHeart, BadgeCheck, Heart } from "lucide-react";
import Image from "next/image";
import PawSteps from "./PawSteps";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 p-8 lg:grid-cols-[3fr_1fr_2.5fr] lg:gap-6 lg:p-20">
      {/* LHS Section */}
      <section className="flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-tertiary px-5 py-2 text-xs font-bold tracking-wide text-neutral shadow-sm sm:text-sm">
          <PawPrint className="h-4 w-4" />
          <span>SAFE SANCTUARY • NO-KILL COMPASSION</span>
        </div>

        {/* Headlines */}
        <div className="my-6 max-w-xl">
          <h1 className="mb-5 font-headline text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-6xl">
            Your New Best <br />
            <span className="relative inline-block text-neutral">
              Friend Is Waiting.
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -bottom-3 left-0 w-full overflow-visible"
                viewBox="0 0 400 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M 3 8 Q 200 -1 397 8"
                  stroke="#F4A261"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.5,
                    ease: "easeOut",
                  }}
                />
              </motion.svg>
            </span>
          </h1>
          <p className="text-lg text-black/60 sm:text-xl lg:text-2xl">
            Meet adorable pets looking for a loving home. Your next great
            adventure starts with a little paw print and a heart wide open.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto font-medium">
          <button className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-8 py-3.5 bg-primary text-neutral hover:opacity-90 transition">
            Meet the Pets
            <MoveDown className="h-5 w-5" />
          </button>
          <button className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-8 py-3.5 bg-tertiary hover:opacity-90 transition">
            <HandHeart className="h-5 w-5 text-neutral" />
            How Adoption Works
          </button>
        </div>
      </section>

      {/* Middle Column: Animated Paw Steps */}
      <section className="flex justify-center items-center py-4 lg:py-0">
        <PawSteps />
      </section>

      {/* RHS Section */}
      <section className="flex justify-center lg:justify-end items-center">
        {/* Image card wrapper */}
        <div className="relative bg-white h-120 sm:h-137.5 w-full max-w-md rounded-4xl p-3 shadow-md">
          {/* Health badge */}
          <span className="absolute top-6 right-2 sm:-right-4 z-10 flex items-center gap-1.5 bg-tertiary rounded-full text-xs sm:text-sm font-bold px-4 py-1.5 shadow-md font-body tracking-wide">
            <BadgeCheck className="text-green-600 h-5 w-5" />
            100% Health Checked
          </span>

          {/* Image with fill container */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              className="object-cover"
              src="/images.jpg"
              alt="Dog and Cat"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Love badge */}
          <span className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center px-4 py-2 gap-2 font-bold text-xs sm:text-sm">
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            Love at first sight!
          </span>
        </div>
      </section>
    </div>
  );
}
