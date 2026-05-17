"use client";

import { useState, useEffect } from "react";

export const TerminalOverlay = () => {
  const [displayedText, setDisplayedText] = useState("");

  const fullText = `$ whoami
aakash_modi
$ cat profile.txt | grep "status"
>> PURSUING_B.SC_AI
>> GENERATIVE_AI_INTERN
>> SECURITY_RESEARCHER
$ `;

  useEffect(() => {
    let i = 0;
    let isMounted = true;
    let timeout: NodeJS.Timeout;

    const typeChar = () => {
      if (!isMounted) return;
      
      setDisplayedText(fullText.substring(0, i));
      i++;
      
      if (i <= fullText.length) {
        timeout = setTimeout(typeChar, 40 + Math.random() * 60);
      } else {
        timeout = setTimeout(() => {
          i = 0;
          if (isMounted) {
            setDisplayedText("");
            typeChar();
          }
        }, 10000); // Loop after 10 seconds
      }
    };

    timeout = setTimeout(typeChar, 500); // Initial delay

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  const lines = displayedText.split("\n");

  return (
    <div className="w-full max-w-[450px] bg-[#0c0c0c]/90 backdrop-blur-md border border-outline-variant shadow-2xl z-20 font-jetbrains animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-outline-variant bg-[#1a1a1a]/80">
        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
        <div className="ml-2 text-[10px] text-on-surface-variant opacity-50 uppercase tracking-widest">terminal — session</div>
      </div>
      <div className="p-4 text-[11px] md:text-xs min-h-[160px] space-y-1.5 flex flex-col items-start">
        {lines.map((line, i) => {
          const isCommand = line.startsWith("$");
          const isOutput = line.startsWith(">>");
          return (
            <div key={i} className="flex gap-2 w-full">
              {isCommand && <span className="text-primary-fixed shrink-0">$</span>}
              {isOutput && <span className="text-secondary-container shrink-0">{"\u003e\u003e"}</span>}
              <span className={`
                ${isCommand || isOutput ? "text-white" : "text-on-surface-variant ml-4"}
                break-all whitespace-pre-wrap
              `}>
                {isCommand ? line.substring(1) : isOutput ? line.substring(2) : line}
              </span>
            </div>
          );
        })}
        <span className="inline-block w-2 h-4 bg-primary-fixed ml-1 animate-pulse align-middle mt-1"></span>
      </div>
    </div>
  );
};
