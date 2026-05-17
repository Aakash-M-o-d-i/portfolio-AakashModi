"use client";

export const RecentBuilds = () => {
  return (
    <section id="projects" className="py-section-gap px-margin-page">
      <h2 className="text-headline-lg mb-16 text-center uppercase tracking-widest">RECENT_BUILDS</h2>
      <div className="space-y-12">
        {/* Project 01: PYQS_WEBSITE */}
        <div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col md:flex-row gap-8 group">
          <div className="w-full md:w-[40%] relative border border-outline-variant overflow-hidden bg-surface-container group">
            <div className="absolute top-4 left-4 z-10 bg-primary-fixed text-on-primary-fixed px-2 py-0.5 text-label-caps font-bold">OP_01</div>
            <div className="w-full h-[250px] overflow-hidden">
              <img 
                src="media__1778843815271.png" 
                alt="Knowledge Hub Screenshot" 
                className="w-full h-full object-cover cyber-image-effect transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] flex flex-col">
            <h3 className="text-headline-md mb-2 uppercase tracking-wider">KNOWLEDGE_HUB</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["REACT.JS", "PYTHON FLASK", "MYSQL", "DIGITALOCEAN"].map((tag) => (
                <span key={tag} className="border border-outline-variant px-2 py-1 text-[10px] font-bold text-on-surface-variant">{tag}</span>
              ))}
            </div>
            <p className="text-code-sm text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              A comprehensive educational platform for CTUAP students. Solves study material fragmentation by providing a centralized dashboard where users can manage, download, and view Previous Year Question papers and academic notes.
            </p>
            <div className="flex gap-4 mt-auto">
              <a className="text-label-caps text-primary-fixed hover:border-b hover:border-primary-fixed transition-all" href="https://knhub.app/" target="_blank" rel="noopener noreferrer">[LIVE_DEMO]</a>
            </div>
          </div>
        </div>

        {/* Project 02: INDUSTRIAL_ECOMMERCE */}
        <div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col md:flex-row-reverse gap-8 group">
          <div className="w-full md:w-[40%] relative border border-outline-variant overflow-hidden bg-surface-container">
            <div className="absolute top-4 right-4 z-10 bg-secondary-container text-on-secondary-container px-2 py-0.5 text-label-caps font-bold">OP_02</div>
            <div className="w-full h-[250px] overflow-hidden">
              <img 
                src="/tekin-screenshot.png" 
                alt="Industrial eCommerce Screenshot" 
                className="w-full h-full object-cover cyber-image-effect transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] flex flex-col items-start md:items-start text-left">
            <h3 className="text-headline-md mb-2 uppercase tracking-wider">INDUSTRIAL_ECOMMERCE</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["REACT.JS", "PYTHON FLASK", "MYSQL", "REST_API"].map((tag) => (
                <span key={tag} className="border border-outline-variant px-2 py-1 text-[10px] font-bold text-on-surface-variant">{tag}</span>
              ))}
            </div>
            <p className="text-code-sm text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              This storefront platform is made for people who sell equipment. It helps businesses buy things from each other easily. The platform has a system for finding products, a safe way to manage orders and a main control panel. This control panel lets you see all your orders and what you have in stock at the time. The industrial equipment sales platform is really helpful, for managing a lot of orders and keeping track of your industrial equipment inventory.
            </p>
            <div className="flex gap-4 mt-auto">
              <a className="text-label-caps text-on-surface-variant hover:text-primary-fixed hover:border-b hover:border-primary-fixed transition-all" href="https://github.com/Aakash-M-o-d-i/hardware_tools_ECommerce" target="_blank" rel="noopener noreferrer">[GITHUB_REPO]</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
