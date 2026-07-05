"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutData from "@/data/about.json"; 

// --- TYPESCRIPT INTERFACES ---
interface FundedProject {
  title?: string;
  agency?: string;
  collaborator?: string;
}

interface ProjectsSection {
  funded?: FundedProject[];
  active?: string[];
}

interface ExpertiseArea {
  title: string;
  keywords: string[];
  description: string;
  svg: string;
  images: string[];
  projectsSection?: ProjectsSection;
}

// Cast the JSON data to our strict TypeScript interface
const expertiseList = aboutData.expertise as ExpertiseArea[];

// --- Minimal Scroll Animation Wrapper ---
const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) => {
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
      { threshold: 0.15 },
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
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${translateClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ResearchAreasPage() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER & INTRO --- */}
        <FadeIn direction="up">
          <div className="pb-10 mb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Research Areas
            </h1>
            <div className="w-24 h-1.5 bg-[#bd1e24] mb-10 mx-auto"></div>

            <div className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium">
              <p>{aboutData.missionStatement}</p>
            </div>
          </div>
        </FadeIn>

        {/* --- RESEARCH AREAS SECTION --- */}
        <div className="space-y-32 md:space-y-40 mt-10">
          {expertiseList.map((area, index) => {
            const isEven = index % 2 === 0;

            // Check if there are any projects to render for this area
            const hasFundedProjects = area.projectsSection?.funded && area.projectsSection.funded.length > 0;
            const hasActiveProjects = area.projectsSection?.active && area.projectsSection.active.length > 0;
            const hasAnyProjects = hasFundedProjects || hasActiveProjects;

            return (
              <div key={index} className="flex flex-col group">
                
                {/* --- TOP ROW: Split Images & Description --- */}
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 xl:gap-16 items-start mb-12`}>
                  
                  {/* 2x2 IMAGE GRID HALF */}
                  <div className="w-full lg:w-1/2 shrink-0">
                    <FadeIn direction={isEven ? "right" : "left"} delay={100}>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {area.images.map((imgSrc, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-full aspect-[4/3] relative bg-slate-100 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group/img"
                          >
                            <Image
                              src={imgSrc}
                              alt={`${area.title} Image ${imgIndex + 1}`}
                              fill
                              className="object-cover grayscale-[20%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ease-in-out"
                              sizes="(max-w-768px) 50vw, 25vw"
                            />
                          </div>
                        ))}
                      </div>
                    </FadeIn>
                  </div>

                  {/* TEXT CONTENT HALF */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-start pt-2">
                    <FadeIn direction="up" delay={200}>
                      <div className="md:px-4 lg:px-8">
                        
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-5">
                          {area.title}
                        </h2>
                        
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* --- BOTTOM ROW: FULL-WIDTH PROJECTS SECTION --- */}
                {hasAnyProjects && (
                  <FadeIn direction="up" delay={300}>
                    <div className="w-full border-t border-slate-200/80 pt-10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        
                        {/* Externally Funded Projects */}
                        {hasFundedProjects && (
                          <div className={hasActiveProjects ? "lg:col-span-7" : "lg:col-span-12"}>
                            <h4 className="text-[#009966] font-bold tracking-widest uppercase text-[12px] mb-6 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                              Collaborative / Funded Projects
                            </h4>
                            <div className={`grid grid-cols-1 ${!hasActiveProjects ? 'md:grid-cols-2' : ''} gap-4`}>
                              {area.projectsSection?.funded?.map((proj, pIdx) => (
                                <div key={pIdx} className="bg-slate-50/80 border border-slate-100 p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgb(0,153,102,0.08)] transition-all">
                                  <p className="text-slate-900 font-bold text-base mb-4 leading-snug">
                                    {proj.title || "Untitled Project"}
                                  </p>
                                  <div className="flex flex-col gap-2 text-[12px] text-slate-600">
                                    {proj.agency && (
                                      <span className="flex items-start">
                                        <span className="font-bold text-slate-400 uppercase tracking-widest w-20 shrink-0">Agency:</span> 
                                        <span className="font-medium">{proj.agency}</span>
                                      </span>
                                    )}
                                    {proj.collaborator && (
                                      <span className="flex items-start">
                                        <span className="font-bold text-slate-400 uppercase tracking-widest w-20 shrink-0">Collab:</span> 
                                        <span className="font-medium">{proj.collaborator}</span>
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Active Lab Projects */}
                        {hasActiveProjects && (
                          <div className={hasFundedProjects ? "lg:col-span-5" : "lg:col-span-12"}>
                            <h4 className="text-slate-900 font-bold tracking-widest uppercase text-[12px] mb-6 flex items-center">
                              <span className="w-2 h-2 bg-[#bd1e24] mr-3"></span> 
                              Lab Projects
                            </h4>
                            <ul className="space-y-4">
                              {area.projectsSection?.active?.map((proj, pIdx) => (
                                <li key={pIdx} className="flex items-start text-sm md:text-base text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-5 py-1 hover:border-[#009966] transition-colors">
                                  <span className="text-[#009966] font-bold mr-3 mt-0.5">{pIdx + 1}.</span>
                                  <span>{proj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    </div>
                  </FadeIn>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}