"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#071129] to-[#051022]">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        {/* subtle animated tech background - simple animated SVG or gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-pink-700/10 to-green-500/8 blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold">
          Technology Store
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Purchase our technology solutions securely with instant checkout.
        </motion.p>
      </div>
    </section>
  );
}
