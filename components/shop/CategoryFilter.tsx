"use client";
import React from 'react';

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: {
  categories: string[];
  value: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
      {categories.map((c) => (
        <button
          key={c}
          role="tab"
          aria-selected={value === c}
          onClick={() => onChange(c)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            value === c
              ? 'bg-gradient-to-r from-pink-500 to-green-400 text-white'
              : 'bg-white/6 text-white/80 hover:bg-white/10'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
