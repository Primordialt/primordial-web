import { NextResponse } from "next/server";

import {
  hasErrors,
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-validation";

export const runtime = "edge";
export const preferredRegion = "global";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const errors = validateContactForm(body);

    if (hasErrors(errors)) {
      return NextResponse.json(
        { message: "Validation failed.", errors },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store",
          },
        },
      );
    }

    // Ready for email/CRM integration — log in development only
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] New submission:", {
        name: body.fullName,
        email: body.email,
        service: body.service,
      });
    }

    return NextResponse.json(
      { message: "Your message has been received. We will be in touch shortly." },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request. Please try again." },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
