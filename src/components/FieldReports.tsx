"use client";

import { useState } from "react";

export const FieldReports = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const reports = [
    { 
      date: "05.05.26", 
      title: "Team - LFI to SSH Key Leak & Crontab Privilege Escalation", 
      url: "https://aakash-m-o-d-i.github.io/posts/Team/",
      tags: [
        { label: "TRYHACKME", class: "bg-primary-fixed text-on-primary-fixed" }, 
        { label: "WALKTHROUGH", class: "border border-outline-variant text-on-surface-variant" }
      ] 
    },
    { 
      date: "05.03.26", 
      title: "Tomghost - Apache Ghostcat (CVE-2020-1938) Exploitation", 
      url: "https://aakash-m-o-d-i.github.io/posts/tomghost/",
      tags: [
        { label: "EXPLOIT", class: "bg-error text-on-error" }, 
        { label: "WALKTHROUGH", class: "border border-outline-variant text-on-surface-variant" }
      ] 
    },
    { 
      date: "03.30.26", 
      title: "Tech_Supp0rt: 1 - SMB Enumeration and CMS Exploitation", 
      url: "https://aakash-m-o-d-i.github.io/posts/Tech_Supp0rt-1/",
      tags: [
        { label: "ENUMERATION", class: "bg-secondary-container text-on-secondary-fixed" }, 
        { label: "CMS", class: "border border-outline-variant text-on-surface-variant" }
      ] 
    },
    { 
      date: "03.29.26", 
      title: "Biblioteca - SQL Injection and Python Library Hijacking", 
      url: "https://aakash-m-o-d-i.github.io/posts/Biblioteca/",
      tags: [
        { label: "SQLi", class: "bg-primary-fixed text-on-primary-fixed" }, 
        { label: "WALKTHROUGH", class: "border border-outline-variant text-on-surface-variant" }
      ] 
    },
    { 
      date: "03.23.26", 
      title: "Farewell - Bypassing WAFs and Snatching Cookies", 
      url: "https://aakash-m-o-d-i.github.io/posts/Farewall/",
      tags: [
        { label: "WEB", class: "bg-secondary-container text-on-secondary-fixed" }, 
        { label: "WAF_BYPASS", class: "bg-error text-on-error" }
      ] 
    }
  ];

  return (
    <section id="reports" className="bg-surface-container-lowest py-section-gap border-y border-outline-variant">
      <div className="px-margin-page">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-headline-lg uppercase">FIELD_REPORTS</h2>
            <p className="text-code-sm text-on-surface-variant">LOG_ID: 2026_INDEX_VOL_01</p>
          </div>
          <div className="flex gap-4 border border-outline-variant p-2 no-scrollbar overflow-x-auto w-full md:w-auto">
            {["ALL", "TRYHACKME", "EXPLOIT", "WEB", "SQLi"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1 text-label-caps transition-colors cursor-pointer ${activeFilter === cat ? "bg-primary-fixed text-on-primary-fixed" : "hover:bg-surface-container-high"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-outline-variant mb-12">
          {reports.filter(report => activeFilter === "ALL" || report.tags.some(t => t.label === activeFilter)).map((report, i) => (
            <a key={i} href={report.url} target="_blank" rel="noopener noreferrer" className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-outline-variant group hover:bg-surface-container-low hover:border-l-4 hover:border-l-primary-fixed px-4 transition-all cursor-crosshair decoration-none block">
              <div className="md:col-span-1 text-code-sm text-on-surface-variant">{report.date}</div>
              <div className="md:col-span-6 text-body-md font-bold uppercase tracking-wider group-hover:text-primary-fixed">{report.title}</div>
              <div className="md:col-span-2 flex gap-2">
                {report.tags.map((tag, j) => (
                  <span key={j} className={`${tag.class} px-2 text-[10px] flex items-center uppercase font-bold tracking-widest`}>{tag.label}</span>
                ))}
              </div>
              <div className="md:col-span-3 text-right">
                <span className="material-symbols-outlined text-primary-fixed transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://aakash-m-o-d-i.github.io" target="_blank" rel="noopener noreferrer" className="border border-primary-fixed text-primary-fixed px-12 py-4 text-label-caps hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors flex items-center gap-3">
            VIEW ALL_WRITEUPS
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  );
};
