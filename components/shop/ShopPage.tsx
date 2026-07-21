"use client";

import React, { useMemo, useState } from 'react';
import { products as allProducts, Product, categories } from '@/lib/products';
import ShopHero from './ShopHero';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import CTASection from './CTASection';
import { AnimatePresence, motion } from 'framer-motion';

export default function ShopPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  return (
    <main className="min-h-screen">
      <ShopHero />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter
            categories={categories}
            value={category}
            onChange={(c) => setCategory(c)}
          />
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <motion.div key={p.id} layout>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTASection />
    </main>
  );
}
