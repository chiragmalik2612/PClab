"use client";

import { useEffect, useRef, useState } from "react";

// --- Minimal Scroll Animation Wrapper ---
const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode, delay?: number, direction?: "up" | "left" | "right" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClasses = {
    up: "translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${translateClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function AboutPage() {
  const researchAreas = [
    {
      title: "1. Algal Bioproducts Engineering",
      desc: "Harnessing microalgae as sustainable biofactories for the production of value-added biomolecules, biochemicals, and bio-based products.",
      focus: [
        "Upstream and downstream processing of microalgal biomass",
        "Algal biorefinery development",
        "Recovery and purification of bioactive compounds",
        "Process optimization for sustainable biomass production",
        "Industrial applications of algal bioproducts"
      ],
      img: "https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "2. Regenerative Biomaterials and Protein Hydrogels",
      desc: "Designing next-generation biomaterials for tissue engineering, wound healing, and regenerative medicine applications : bio valorisation",
      focus: [
        "Protein-based biomaterials and hydrogels",
        "Biomaterial design for tissue regeneration",
        "Injectable and biofabrication-compatible hydrogel systems",
        "Structure–function relationships in biomaterials",
        "Translational approaches for regenerative healthcare"
      ],
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "3. Carbon Capture and Biomass Conversion",
      desc: "Developing sustainable biological and thermochemical strategies for carbon sequestration, biomass valorization, and renewable product generation.",
      focus: [
        "Biological carbon capture using algal systems",
        "Carbon utilization and circular carbon pathways",
        "Hydrothermal liquefaction of wet biomass",
        "Bio-crude and value-added product generation",
        "Carbon-negative and climate-resilient bioprocesses"
      ],
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "4. Phycoremediation and Resource Recovery",
      desc: "Utilizing microalgae for environmental remediation while enabling nutrient recovery and resource circularity.",
      focus: [
        "Wastewater treatment using algal systems",
        "Nutrient and pollutant removal",
        "Integrated biomass generation and remediation",
        "Resource recovery from waste streams",
        "Sustainable environmental biotechnology"
      ],
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER & INTRO --- */}
        <FadeIn direction="up">
          <div className="pb-10 mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              About Us
            </h1>
            
            {/* Centered red accent line */}
            <div className="w-24 h-1.5 bg-[#bd1e24] mb-10 mx-auto"></div>

            {/* Seamless, borderless text sitting directly on the gradient */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg md:text-xl font-medium">
              <p>
                Our laboratory is dedicated to developing sustainable biotechnological solutions at the intersection of bioresource engineering, regenerative biomaterials, and environmental sustainability.
              </p>
              <p>
                Through an interdisciplinary approach, we integrate biological systems, materials science, and process engineering to address challenges in healthcare, carbon management, renewable resource utilization, and environmental remediation.
              </p>
              <p>
                The research activities of the laboratory focus on transforming biological resources into high-value products and technologies that contribute to a circular bioeconomy. By combining fundamental science with translational research, we aim to develop scalable solutions for regenerative medicine, carbon-neutral bioprocesses, and sustainable resource recovery.
              </p>
            </div>

          </div>
        </FadeIn>

        {/* --- ALTERNATING RESEARCH AREAS SECTION --- */}
        <div className="space-y-24 md:space-y-32 mt-10">
          {researchAreas.map((area, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 lg:gap-16 items-center group`}
              >
                
                {/* IMAGE HALF */}
                <div className="w-full md:w-1/2">
                  <FadeIn direction={isEven ? "right" : "left"} delay={100}>
                    <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500">
                      <img 
                        src={area.img} 
                        alt={area.title} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* CONTENT HALF */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <FadeIn direction="up" delay={200}>
                    {/* Removed bg-white/40, backdrop-blur, p-6/p-10, and shadow entirely. Now it sits on the page directly. */}
                    <div className="md:px-4 lg:px-8">
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                        {area.title}
                      </h2>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                        {area.desc}
                      </p>
                      
                      <div>
                        <h4 className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-4">
                          Key Focus Areas
                        </h4>
                        <ul className="space-y-3">
                          {area.focus.map((point, i) => (
                            <li key={i} className="flex items-start text-slate-700 text-sm md:text-base">
                              <span className="w-2 h-2 bg-[#bd1e24] shrink-0 mt-2 mr-4"></span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}