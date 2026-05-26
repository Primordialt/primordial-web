"use client";

import { m, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

import { FloatingField, FloatingInput, FloatingSelect, FloatingTextarea } from "@/components/ui/floating-field";
import { Button } from "@/components/ui/button";
import { serviceOptions } from "@/lib/contact-content";
import {
  hasErrors,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact-validation";
import { cn } from "@/lib/utils";

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateContactForm(form);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof Error ? err.message : "Unable to send your message. Please try again.",
      );
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <m.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col items-center rounded-2xl border border-brand-green/30 bg-brand-green/5 px-6 py-12 text-center"
            role="status"
          >
            <CheckCircle2 className="size-12 text-brand-green" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold">Message sent successfully</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thank you for reaching out. Our team will review your inquiry and respond within one
              business day.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </m.div>
        ) : (
          <m.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {submitError && status === "error" ? (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />
                <p>{submitError}</p>
              </m.div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingField
                id="fullName"
                label="Full Name"
                required
                error={errors.fullName}
              >
                <FloatingInput
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  error={!!errors.fullName}
                  autoComplete="name"
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
              </FloatingField>

              <FloatingField
                id="email"
                label="Email Address"
                required
                error={errors.email}
              >
                <FloatingInput
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  error={!!errors.email}
                  autoComplete="email"
                />
              </FloatingField>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingField
                id="phone"
                label="Phone Number"
                required
                error={errors.phone}
              >
                <FloatingInput
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  error={!!errors.phone}
                  autoComplete="tel"
                />
              </FloatingField>

              <FloatingField
                id="company"
                label="Company Name"
                required
                error={errors.company}
              >
                <FloatingInput
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  error={!!errors.company}
                  autoComplete="organization"
                />
              </FloatingField>
            </div>

            <FloatingField
              id="service"
              label="Service Needed"
              required
              error={errors.service}
            >
              <FloatingSelect
                id="service"
                name="service"
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                error={!!errors.service}
                className={cn(
                  !form.service && "text-transparent",
                  form.service && "is-filled text-foreground",
                )}
              >
                <option value="" disabled hidden>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="text-foreground">
                    {option}
                  </option>
                ))}
              </FloatingSelect>
            </FloatingField>

            <FloatingField
              id="message"
              label="Message"
              required
              error={errors.message}
              hint={`${form.message.length}/2000 characters`}
            >
              <FloatingTextarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                error={!!errors.message}
                maxLength={2000}
              />
            </FloatingField>

            <Button
              type="submit"
              variant="brand"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="size-4" aria-hidden />
                </>
              )}
            </Button>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
