"use client";

import { AnimatePresence } from "framer-motion";
import { m } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/homepage-content";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/design-system/motion";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const panelId = useId();

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
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion, isPaused]);

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
          {!prefersReducedMotion ? (
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? "Resume testimonial rotation" : "Pause testimonial rotation"}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </Button>
          ) : null}
        </div>
        <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, i) => {
            const tabId = `${panelId}-tab-${i}`;

            return (
              <button
                key={tabId}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`${panelId}-panel`}
                onClick={() => goTo(i)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    next();
                  } else if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    prev();
                  }
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-8 bg-brand-pink"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
              >
                <span className="sr-only">Testimonial {i + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${panelId}-panel`}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${index}`}
        aria-live="polite"
        className="relative min-h-[280px] overflow-hidden sm:min-h-[240px]"
      >
        {prefersReducedMotion ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
}
