import type { ServiceOption } from "@/lib/contact-content";
import { serviceOptions } from "@/lib/contact-content";

export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s()-]{10,20}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.company.trim()) {
    errors.company = "Company name is required.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  } else if (!serviceOptions.includes(data.service as ServiceOption)) {
    errors.service = "Please select a valid service.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  } else if (data.message.length > 2000) {
    errors.message = "Message must be under 2000 characters.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
