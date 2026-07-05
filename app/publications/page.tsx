"use client";

import { useEffect, useRef, useState } from "react";
import { Publication } from '@/types';
import publicationsDataRaw from '@/data/publications.json';

const publicationsData = publicationsDataRaw as Publication[];

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

export default function PublicationsPage() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="border-b border-slate-200/80 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Publications</h1>
              <div className="w-16 h-1.5 bg-[#bd1e24] shadow-sm mb-6"></div>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                A selection of our recent book chapters, journal articles, and scholarly contributions advancing the fields of biomanufacturing and biomaterials.
              </p>
            </div>
            {/* Optional Google Scholar link for the future */}
            {/* <p className="text-slate-600 text-sm md:text-base font-medium pb-1">
              For a complete list, visit{' '}
              <a href="#" className="text-[#009966] font-bold hover:underline transition-colors">
                Google Scholar
              </a>
            </p> */}
          </div>
        </FadeIn>

        {/* --- PUBLICATIONS LIST --- */}
        <div className="space-y-10">
          {publicationsData.map((pub, index) => (
            <FadeIn key={pub.id} direction="up" delay={(index % 5) * 100}>
              <div className="border-b border-slate-200/60 pb-10 last:border-0 group">
                
                {/* The Left-Border Highlight Design */}
                <div className="border-l-[3px] border-slate-200 hover:border-[#009966] transition-colors duration-300 pl-5 md:pl-6 bg-white/40 hover:bg-white/80 p-4 rounded-r-lg">
                  
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#009966] transition-colors leading-snug">
                    {pub.title}
                  </h2>
                  
                  <p className="text-slate-700 font-medium mb-3">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="italic font-medium">{pub.journal}</span>
                    {pub.year && <span className="font-bold">• {pub.year}</span>}
                    {pub.doi && (
                      <>
                        <span className="mx-1">•</span>
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-[#009966] hover:underline font-semibold">
                          DOI: {pub.doi}
                        </a>
                      </>
                    )}
                  </div>

                  {/* Tags (Book Chapter / Journal Article) */}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {pub.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm border border-slate-200 group-hover:bg-[#009966]/10 group-hover:text-[#009966] group-hover:border-[#009966]/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}