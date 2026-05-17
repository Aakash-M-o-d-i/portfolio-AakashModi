"use client";

import { useState } from "react";

export const Navbar = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant flex justify-between items-center px-margin-page py-4">
        <div className="text-headline-sm text-primary-fixed font-bold tracking-tighter cursor-crosshair active:invert">&gt; AAKASH_MODI_</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-body-md uppercase tracking-widest text-primary-fixed bg-on-primary-fixed-variant px-2 transition-colors duration-75 cursor-crosshair active:invert" href="#">INTEL</a>
          <a className="text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:bg-primary-container hover:text-on-primary-container transition-colors duration-75 cursor-crosshair active:invert" href="#">PROJECTS</a>
          <a className="text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:bg-primary-container hover:text-on-primary-container transition-colors duration-75 cursor-crosshair active:invert" href="#">ARCHIVE</a>
          <a className="text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:bg-primary-container hover:text-on-primary-container transition-colors duration-75 cursor-crosshair active:invert" href="#">CONNECT</a>
        </div>
        <button 
          onClick={() => setShowCV(true)}
          className="text-body-md uppercase tracking-widest text-primary-fixed border border-primary-fixed px-4 py-1 hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors duration-75 cursor-crosshair"
        >
          DECRYPT_CV
        </button>
      </nav>

      {/* CV Modal Popup */}
      {showCV && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="bg-surface-container border border-primary-fixed shadow-2xl shadow-primary-fixed/20 w-full max-w-5xl h-[90vh] flex flex-col font-jetbrains relative animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex flex-wrap justify-between items-center border-b border-outline-variant p-4 bg-surface-container-lowest gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed">lock_open</span>
                <span className="text-body-md text-primary-fixed font-bold tracking-widest uppercase">FILE_DECRYPTED :: CV.pdf</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="/Aakash_Modi_CV.pdf" 
                  download="Aakash_Modi_CV.pdf"
                  className="border border-secondary-container text-secondary-container hover:bg-secondary-container hover:text-on-secondary-container px-4 py-1.5 flex items-center gap-2 transition-colors cursor-pointer text-label-caps"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  DOWNLOAD
                </a>
                <button 
                  onClick={() => setShowCV(false)}
                  className="border border-error text-error hover:bg-error hover:text-on-error px-4 py-1.5 flex items-center gap-2 transition-colors cursor-pointer text-label-caps"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                  CLOSE
                </button>
              </div>
            </div>
            
            {/* Modal Body / Viewer */}
            <div className="flex-grow p-4 bg-[#111] overflow-y-auto relative border-t-4 border-primary-fixed flex justify-center custom-scrollbar">
              <img 
                src="/cv-pages/page-1.png" 
                alt="CV Viewer" 
                className="w-full max-w-4xl h-auto object-contain bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
