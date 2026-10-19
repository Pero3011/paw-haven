"use client";

import { motion, Variants } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function PawSteps() {
  const paws = [
    { id: 1, rotate: -70, x: -20 },
    { id: 2, rotate: -20, x: 20 },
    { id: 3, rotate: -70, x: -20 },
    { id: 4, rotate: -20, x: 20 },
    { id: 5, rotate: -70, x: -20 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        staggerDirection: -1, // Animates children from bottom (last) to top (first)
        delayChildren: 0.3,
      },
    },
  };

  const pawVariants: Variants = {
    hidden: (custom: { yOffset: number; x: number; rotate: number }) => ({
      opacity: 0,
      scale: 0.3,
      y: custom.yOffset, // Positive y value starts below final position
      x: custom.x,
      rotate: custom.rotate,
    }),
    show: (custom: { yOffset: number; x: number; rotate: number }) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      x: custom.x,
      rotate: custom.rotate,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center gap-8"
    >
      {paws.map((paw) => {
        // Positive offset moves the starting point downward so it travels upward to 0
        const yOffset = paw.id % 2 === 0 ? 20 : 10;

        return (
          <motion.div
            key={paw.id}
            custom={{ yOffset, x: paw.x, rotate: paw.rotate }}
            variants={pawVariants}
          >
            <PawPrint size={40} className="fill-current" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
