"use client";

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShopHero from '@/components/shop/ShopHero';
import ProductCard from '@/components/shop/ProductCard';
import SearchBar from '@/components/shop/SearchBar';
import CategoryFilter from '@/components/shop/CategoryFilter';
import CTASection from '@/components/shop/CTASection';
import { categories, products } from '@/lib/products';

export default function ShopPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter((product) => {
      if (category !== 'All' && product.category !== category) {
        return false;
      }
      if (!search) return true;
      return (
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });
  }, [category, query]);

  return (
    <main className="min-h-screen">
      <ShopHero />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter categories={categories} value={category} onChange={setCategory} />
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTASection />
    </main>
  );
}
