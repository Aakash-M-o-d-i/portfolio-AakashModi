"use client";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
  logId: string;
  status: "COMPLETED" | "ACTIVE" | "ARCHIVED";
  certificateUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Generative AI Intern",
    company: "Techverse Innovations Pvt. Ltd.",
    duration: "July 2025 - Sept 2025",
    logId: "EXP_LOG_2025_01",
    status: "COMPLETED",
    certificateUrl: "https://drive.google.com/file/d/1RYCENFmPEV-37YP9mcvj5im0GaPpr1UU/view?usp=sharing",
    details: [
      "I learned how Generative AI works internally, including how modern models like Transformers and LLMs generate text, images, and ideas.",
      "I explored different generative systems such as ChatGPT, Grok, and V-series models to understand how they create new content from patterns.",
      "I gained clarity on diffusion models, GANs, and how prompt engineering shapes the output and creativity of these AI systems."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-section-gap px-margin-page bg-background border-b border-outline-variant relative">
      <div className="absolute top-10 right-10 opacity-[0.02] text-display-xl text-on-surface select-none pointer-events-none font-bebas">
        EXPERIENCE
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-col-gap">
        {/* Left column: Section Header & Stats Panel */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="sticky top-24 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 border border-primary-fixed/30 bg-primary-fixed/5 px-3 py-1 mb-4">
                <span className="w-2 h-2 bg-primary-fixed animate-pulse"></span>
                <span className="text-label-caps text-primary-fixed">CAREER_PATHWAY</span>
              </div>
              <h2 className="text-headline-lg uppercase tracking-wider">
                INTEL <span className="text-primary-fixed">_LOGS</span>
              </h2>
              <p className="text-code-sm text-on-surface-variant mt-2 max-w-sm">
                Archived records of system operations, engineering roles, and security/AI deployments.
              </p>
            </div>

            {/* Cybernetic Status Panel */}
            <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-4 font-jetbrains hidden lg:block">
              <div className="flex justify-between items-center text-xs border-b border-outline-variant/50 pb-2">
                <span className="text-on-surface-variant font-bold">SYSTEM_METRICS</span>
                <span className="text-secondary-container animate-pulse">[ONLINE]</span>
              </div>
              <div className="space-y-2 text-[11px] text-on-surface-variant">
                <div className="flex justify-between">
                  <span>ACTIVE_NODES:</span>
                  <span className="text-white font-bold">01_LOG</span>
                </div>
                <div className="flex justify-between">
                  <span>LAST_SYNC:</span>
                  <span className="text-white font-bold">2026-05-21T19:57</span>
                </div>
                <div className="flex justify-between">
                  <span>DECRYPT_LEVEL:</span>
                  <span className="text-primary-fixed font-bold">LVL_MAX</span>
                </div>
              </div>
              <div className="h-[2px] bg-outline-variant/30 w-full relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-primary-fixed w-2/3 animate-[pulse_2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Timeline and Cards */}
        <div className="lg:col-span-8 space-y-10 relative">
          {/* Vertical line indicator */}
          <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-outline-variant/40 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={exp.logId} className="relative md:pl-10 group">
              {/* Timeline Node Dot */}
              <div className="absolute left-2.5 top-6 w-3 h-3 -translate-x-1/2 border border-outline-variant bg-background rounded-full hidden md:flex items-center justify-center transition-all group-hover:border-primary-fixed group-hover:scale-125 z-10">
                <div className={`w-1 h-1 rounded-full ${exp.status === "ACTIVE" ? "bg-secondary-container animate-ping" : "bg-outline-variant group-hover:bg-primary-fixed"}`}></div>
              </div>

              {/* Experience Card */}
              <div className="border border-outline-variant bg-surface-container-lowest p-6 hover:bg-surface-container-low hover:border-primary-fixed transition-all duration-300 relative overflow-hidden">
                {/* Decorative scanning line effect on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-fixed/50 to-transparent translate-y-[-2px] group-hover:translate-y-[260px] transition-transform duration-[2.5s] ease-out pointer-events-none"></div>

                {/* Card Header Info */}
                <div className="flex flex-wrap justify-between items-center border-b border-outline-variant/40 pb-4 mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 border border-primary-fixed/20 tracking-wider">
                      {exp.logId}
                    </span>
                    <span className="text-label-caps text-on-surface-variant flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                      {exp.status}
                    </span>
                  </div>
                  <div className="text-code-sm text-on-surface-variant font-medium tracking-wide">
                    {exp.duration}
                  </div>
                </div>

                {/* Role and Company */}
                <div className="mb-6">
                  <h3 className="text-headline-sm text-white uppercase tracking-wider group-hover:text-primary-fixed transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-body-md text-on-surface-variant font-bold mt-1">
                    {exp.company}
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-code-sm text-on-surface-variant items-start">
                      <span className="text-primary-fixed font-bold shrink-0 mt-0.5">&gt;</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Certificate Link */}
                {exp.certificateUrl && (
                  <div className="mt-6 pt-4 border-t border-outline-variant/30 flex">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] text-primary-fixed hover:text-white transition-all cursor-crosshair border border-primary-fixed/20 bg-primary-fixed/5 px-4 py-2 hover:bg-primary-fixed/20 hover:border-primary-fixed font-jetbrains font-bold tracking-wider"
                    >
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      [VERIFY_CREDENTIAL]
                    </a>
                  </div>
                )}

                {/* Corner Decors */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-outline-variant group-hover:border-primary-fixed"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-outline-variant group-hover:border-primary-fixed"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
