"use client";

import { useEffect, useRef, useState } from "react";
import collabData from "@/data/collab.json"; // <-- Importing the new JSON file

// Define the TypeScript interface for our data
interface Collaborator {
  id: number | string;
  name: string;
  logo: string;
  url: string;
}

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

export default function CollaboratorsPage() {
  // Load the data from the imported JSON
  const collaborators = collabData as Collaborator[];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="border-b border-slate-200/80 pb-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Collaborators & Partners
            </h1>
            <div className="w-16 h-1.5 bg-[#bd1e24] shadow-sm mb-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              Our research is driven by strong partnerships. We actively collaborate with academic institutions, industrial leaders, and funding agencies to accelerate technology development and product realization.
            </p>
          </div>
        </FadeIn>

        {/* --- COLLABORATORS GRID SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {collaborators.map((collab, index) => (
            <FadeIn key={collab.id} direction="up" delay={(index % 4) * 100}>
              <a 
                href={collab.url} 
                target={collab.url === "#" ? "_self" : "_blank"} 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between p-8 bg-white/60 backdrop-blur-sm border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] hover:-translate-y-1 transition-all duration-300 group h-full cursor-pointer text-center"
              >
                
                {/* Logo Container */}
                <div className="h-28 w-full flex items-center justify-center mb-6 bg-white/50 rounded p-2">
                  <img 
                    src={collab.logo} 
                    alt={`${collab.name} Logo`} 
                    className="max-h-full max-w-[90%] object-contain transition-all duration-500 group-hover:scale-105 mix-blend-multiply" 
                  />
                </div>

                {/* Organization Name */}
                <div className="w-full border-t border-slate-100 pt-4 mt-auto">
                  <h3 className="font-bold text-slate-700 text-sm group-hover:text-[#009966] transition-colors leading-snug">
                    {collab.name}
                  </h3>
                </div>

              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}