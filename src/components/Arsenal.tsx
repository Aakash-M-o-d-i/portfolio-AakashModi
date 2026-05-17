"use client";

export const Arsenal = () => {
  return (
    <section className="border-y border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
        {/* Development */}
        <div className="p-margin-page relative">
          <div className="absolute top-8 right-8 opacity-[0.04] text-display-lg text-on-surface select-none">02</div>
          <h2 className="text-headline-lg mb-12">DEVELOPMENT <span className="text-primary-fixed">_STACK</span></h2>
          <div className="space-y-8">
            {[
              { label: "FRONTEND (REACT/TAILWIND)", val: "95%" },
              { label: "BACKEND (FLASK/JAVA)", val: "88%" }
            ].map((skill) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex justify-between text-label-caps">
                  <span>{skill.label}</span>
                  <span>{skill.val}</span>
                </div>
                <div className="h-4 bg-surface-container-high w-full">
                  <div className="h-full bg-primary-fixed" style={{ width: skill.val }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {["Java", "Python", "JavaScript", "React.js", "Flask", "MySQL", "Git"].map((tech) => (
              <span key={tech} className="border border-outline-variant px-2 py-1 text-code-sm text-on-surface-variant">{tech}</span>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="p-margin-page relative">
          <div className="absolute top-8 right-8 opacity-[0.04] text-display-lg text-on-surface select-none">03</div>
          <h2 className="text-headline-lg mb-12">SECURITY <span className="text-secondary-container">_AUDIT</span></h2>
          <div className="space-y-8">
            {[
              { label: "PENETRATION TESTING", val: "90%" },
              { label: "WEB SECURITY", val: "85%" }
            ].map((skill) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex justify-between text-label-caps">
                  <span>{skill.label}</span>
                  <span>{skill.val}</span>
                </div>
                <div className="h-4 bg-surface-container-high w-full">
                  <div className="h-full bg-secondary-container" style={{ width: skill.val }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {["Nmap", "Wireshark", "Metasploit", "Burp Suite", "Gobuster", "ZAP", "Ethical Hacking"].map((tech) => (
              <span key={tech} className="border border-outline-variant px-2 py-1 text-code-sm text-on-surface-variant">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
