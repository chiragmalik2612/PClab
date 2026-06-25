"use client";

import Link from "next/link";
import { NewsItem } from "@/types";
import peopleDataRaw from "@/data/people.json";
import newsDataRaw from "@/data/news.json";
import aboutData from "@/data/about.json"; 
import { useEffect, useRef, useState } from "react";

// Updated Interface to accept the new PI data fields
interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string | null;
  image: string;
  linkedin?: string | null;
  googleScholar?: string | null;
  title?: string;
}

const peopleData = peopleDataRaw as Person[];
const piData = peopleData.find((person) => person.role === "PI");
const latestNews = (newsDataRaw as NewsItem[]).slice(0, 6);

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
      { threshold: 0.1 }
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

export default function HomePage() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white to-white overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="up" delay={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                  {aboutData.tagline}
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={150}>
                <div className="w-16 h-1.5 bg-[#009966] mb-8 shadow-sm"></div>
              </FadeIn>
              <FadeIn direction="up" delay={300}>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 pr-0 lg:pr-8">
                  {aboutData.missionStatement}
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={450}>
                <div>
                  <Link 
                    href="/research" 
                    className="inline-flex items-center justify-center bg-[#bd1e24] hover:bg-[#9a181d] text-white px-8 py-4 text-base font-bold tracking-wide transition-all shadow-lg hover:shadow-xl"
                  >
                   Read More About Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <FadeIn direction="left" delay={200}>
                <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group">
                  <img src="/hero/hero1.jpg" alt="Lab Work" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={350}>
                <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group mt-0 lg:mt-8">
                  <img src="/hero/hero2.jpg" alt="Biomaterials" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={500}>
                <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group lg:-mt-8">
                  <img src="/hero/hero3.jpg" alt="Cognitive Tech" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={650}>
                <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group">
                  <img src="/hero/hero4.jpg" alt="Microscopy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

      {/* --- 2. LAB TOPICS & PI SECTION --- */}
      <div className="w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/0 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          
          <div className="mb-24">
            <FadeIn direction="up">
              <div className="mb-12 text-center md:text-left">
                <span className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-3 block">
                  Areas of Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Core Research Topics
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.expertise.map((topic, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 150}>
                  <div className="bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] hover:-translate-y-1 transition-all duration-500 group h-full flex flex-col">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={topic.svg} /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{topic.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {topic.keywords.map((keyword, kwIdx) => (
                        <span 
                          key={kwIdx} 
                          className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 transition-colors group-hover:bg-[#009966]/10 group-hover:text-[#009966]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* --- 3. ABOUT PI SECTION --- */}
          {piData && (
            <div className="pt-10">
              <FadeIn direction="up">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div className="text-center md:text-left w-full md:w-auto">
                    <span className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-3 block">
                      Lab Leadership
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                      Principal Investigator
                    </h2>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="bg-white/90 backdrop-blur-md flex flex-col md:flex-row group overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] transition-all duration-500">
                  <div className="w-full md:w-64 lg:w-72 aspect-square shrink-0 bg-slate-50 overflow-hidden">
                    <img src={piData.image} alt={piData.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="mb-4 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{piData.name}</h3>
                      {/* Added PI Title mapping here */}
                      <p className="text-[#009966] text-sm font-bold uppercase tracking-widest">{piData.title}</p>
                    </div>
                    {/* Short bio used here */}
                    <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3 md:line-clamp-4 text-center md:text-left">
                      {piData.bio}
                    </p>
                    <div className="mt-auto pt-5 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-center md:justify-start">
                      <Link href="/team" className="bg-slate-900 text-white px-5 py-2 text-sm font-bold tracking-wide hover:bg-[#009966] transition-colors shadow-md hover:shadow-lg">
                        Read Full Profile
                      </Link>
                      {piData.googleScholar && (
                        <a href={piData.googleScholar} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#009966] transition-colors md:ml-2">
                          Google Scholar
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="mt-12 flex justify-center w-full">
                  <Link href="/team" className="group flex items-center text-sm font-bold text-slate-600 hover:text-[#009966] transition-colors">
                    Meet the Full Team
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}