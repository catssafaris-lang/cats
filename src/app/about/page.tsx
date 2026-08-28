import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About C.A.T.S Safaris",
  description:
    "Meet Collective African Tours & Safaris, a trusted East African travel network with 15 years of experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
