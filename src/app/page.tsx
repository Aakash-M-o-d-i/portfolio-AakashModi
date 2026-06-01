"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Arsenal } from "@/components/Arsenal";
import { RecentBuilds } from "@/components/RecentBuilds";
import { FieldReports } from "@/components/FieldReports";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system changes if the user hasn't set a manual override
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <div className="bg-background text-on-background font-jetbrains selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen cursor-crosshair transition-colors duration-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
