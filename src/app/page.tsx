"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Arsenal } from "@/components/Arsenal";
import { RecentBuilds } from "@/components/RecentBuilds";
import { FieldReports } from "@/components/FieldReports";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-jetbrains selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen cursor-crosshair">
      <Navbar />
      <Hero />
      <Experience />
      <Arsenal />
      <RecentBuilds />
      <FieldReports />
      <Contact />
      <Footer />
    </div>
  );
}
