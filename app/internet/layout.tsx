import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Internet Services",
    template: "%s | Primordial Internet",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function InternetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}
