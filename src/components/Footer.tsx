"use client";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant py-8 px-margin-page flex flex-col md:flex-row justify-between items-center gap-col-gap">
      <div className="text-code-sm uppercase text-on-surface-variant font-medium tracking-wider">© 2025 AAKASH MODI. ALL RIGHTS RESERVED. [CLASSIFIED]</div>
      <div className="flex gap-8">
        <a className="text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed transition-none font-medium" href="https://github.com/Aakash-M-o-d-i/" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a className="text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed transition-none font-medium" href="https://www.linkedin.com/in/aakashmodi-softwaredev" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a className="text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed transition-none font-medium" href="https://x.com/AakashModi1750_" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </footer>
  );
};
