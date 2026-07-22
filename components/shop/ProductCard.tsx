"use client";
import { Product } from '@/lib/products';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }: { product: Product }) {
  const handleBuy = () => {
    if (typeof window !== 'undefined') window.location.href = product.paymentUrl;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 p-5 shadow-md hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-pink-500/10 via-green-400/8 to-pink-500/4 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200/10 to-green-200/6 flex items-center justify-center">
          {product.image ? (
            <Image src={product.image} alt={product.title} width={80} height={80} className="w-full h-full object-cover" />
          ) : (
            <div className="text-sm text-white/60">Image</div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/6 text-white/90">{product.category}</span>
            <div className="text-right">
              <div className="text-sm text-white/80">{product.currency} {product.price}</div>
            </div>
          </div>

          <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
          <p className="mt-2 text-sm text-white/70">{product.description}</p>

          <div className="mt-4">
            <Button
              type="button"
              onClick={handleBuy}
              variant="secondary"
              className="inline-flex items-center gap-2"
              aria-label={`Buy ${product.title}`}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
