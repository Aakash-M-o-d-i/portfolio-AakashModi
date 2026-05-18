"use client";

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    // Keys are securely loaded from .env.local
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    console.log("EmailJS Environment Payload:", { 
      service: serviceId || "MISSING", 
      template: templateId || "MISSING", 
      key: publicKey || "MISSING" 
    });

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
  };

  return (
    <section id="connect" className="py-section-gap px-margin-page">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-col-gap">
        <div>
          <h2 className="text-headline-lg mb-8 uppercase">ESTABLISH_CONTACT</h2>
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label className="text-label-caps block mb-2 text-on-surface-variant">IDENTITY_LABEL</label>
              <input name="user_name" required className="w-full bg-surface-container border border-outline-variant focus:border-primary-fixed focus:ring-0 text-code-sm text-on-surface p-4 outline-none" placeholder="NAME / ALIAS" type="text" />
            </div>
            <div>
              <label className="text-label-caps block mb-2 text-on-surface-variant">SECURE_CHANNEL</label>
              <input name="user_email" required className="w-full bg-surface-container border border-outline-variant focus:border-primary-fixed focus:ring-0 text-code-sm text-on-surface p-4 outline-none" placeholder="EMAIL@DOMAIN.TLD" type="email" />
            </div>
            <div>
              <label className="text-label-caps block mb-2 text-on-surface-variant">DATA_PACKET</label>
              <textarea name="message" required className="w-full bg-surface-container border border-outline-variant focus:border-primary-fixed focus:ring-0 text-code-sm text-on-surface p-4 outline-none min-h-[150px]" placeholder="ENTER MESSAGE..." rows={4}></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 text-label-caps uppercase transition-colors ${status === "success" ? "bg-secondary-container text-on-secondary-container" : status === "error" ? "bg-error text-on-error" : "bg-primary-fixed text-on-primary-fixed hover:bg-white"}`}
            >
              {status === "idle" && "INITIATE TRANSMISSION"}
              {status === "sending" && "TRANSMITTING..."}
              {status === "success" && "PACKET DELIVERED"}
              {status === "error" && "TRANSMISSION FAILED"}
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center border-l border-outline-variant md:pl-12 mt-12 md:mt-0">
          <div className="space-y-8">
            {[
              { label: "$ open github.com/Aakash-M-o-d-i", title: "GITHUB_PROTOCOL", url: "https://github.com/Aakash-M-o-d-i/" },
              { label: "$ open linkedin.com/in/aakashmodi-softwaredev", title: "LINKEDIN_SYNC", url: "https://www.linkedin.com/in/aakashmodi-softwaredev" },
              { label: "$ cat contact_info.json", title: "ESTABLISH_LINK", url: "https://aakash-m-o-d-i.github.io" }
            ].map((link) => (
              <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer no-underline">
                <p className="text-code-sm text-on-surface-variant mb-1">{link.label}</p>
                <p className="text-headline-sm group-hover:text-primary-fixed transition-colors uppercase">{link.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {status === "success" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-surface-container border-l-4 border-primary-fixed shadow-2xl shadow-primary-fixed/20 p-8 w-full max-w-md flex flex-col items-center text-center font-jetbrains relative animate-in zoom-in-95 duration-300">
            <span className="material-symbols-outlined text-primary-fixed text-display-lg mb-4">task_alt</span>
            <h3 className="text-headline-sm text-primary-fixed uppercase tracking-wider mb-2">Transmission Successful</h3>
            <p className="text-body-md text-on-surface-variant mb-8">
              Thank you for reaching out! Your data packet has been securely encrypted and delivered. I will get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="bg-primary-fixed text-on-primary-fixed px-8 py-3 text-label-caps hover:bg-white transition-colors w-full uppercase cursor-pointer"
            >
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
