"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/homepage-content";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/design-system/motion";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const next = useCallback(() => {
    goTo((index + 1) % testimonials.length);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + testimonials.length) % testimonials.length);
  }, [index, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
        <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-8 bg-brand-pink"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[240px]">
        <AnimatePresence mode="wait" custom={direction}>
          <m.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -48 : 48 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
          >
            <Card variant="glass" className="relative p-8 sm:p-10">
              <Quote
                className="absolute right-8 top-8 size-10 text-brand-pink/20"
                aria-hidden
              />
              <blockquote>
                <p className="text-lg leading-relaxed sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-border/60 pt-6">
                  <cite className="not-italic">
                    <p className="font-display font-semibold">{current.author}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {current.company} · {current.role}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </Card>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
