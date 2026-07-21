"use client";
import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#071129] to-[#04101a] py-16 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Need a Custom Technology Solution?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Looking for enterprise solutions or large-scale deployments? Speak with our experts and we'll tailor a solution for your business.</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-green-400 text-white font-medium">Contact Sales</a>
          <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white/6 text-white/90">Talk to an Expert</a>
        </div>
      </div>
    </section>
  );
}
