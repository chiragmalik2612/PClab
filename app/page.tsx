"use client";

import Link from "next/link";
import { Person, NewsItem } from "@/types";
import peopleDataRaw from "@/data/people.json";
import newsDataRaw from "@/data/news.json";
import { useEffect, useRef, useState } from "react";

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
    // Replaced solid white with a continuous, seamless gradient background
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white to-white overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      {/* Removed border-b to blend the sections */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Call to Action */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn direction="up" delay={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                  Developing sustainable biotechnological solutions.
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={150}>
                <div className="w-16 h-1.5 bg-[#009966] mb-8 shadow-sm"></div>
              </FadeIn>
              <FadeIn direction="up" delay={300}>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 pr-0 lg:pr-8">
                  We integrate biological systems, materials science, and process engineering to develop scalable solutions for regenerative medicine, carbon management, and the circular bioeconomy.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={450}>
                <div>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center justify-center bg-[#bd1e24] hover:bg-[#9a181d] text-white px-8 py-4 text-base font-bold tracking-wide transition-all shadow-lg hover:shadow-xl"
                  >
                   Read More About Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: 2x2 Image Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
  <FadeIn direction="left" delay={200}>
    <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group">
      <img
        src="/hero/hero1.jpg" // Updated to local image
        alt="Lab Work"
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
    </div>
  </FadeIn>
  <FadeIn direction="left" delay={350}>
    <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group mt-0 lg:mt-8">
      <img
        src="/hero/hero2.jpg" // Updated to local image
        alt="Biomaterials"
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
    </div>
  </FadeIn>
  <FadeIn direction="left" delay={500}>
    <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group lg:-mt-8">
      <img
        src="/hero/hero3.jpg" // Updated to local image
        alt="Cognitive Tech"
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
    </div>
  </FadeIn>
  <FadeIn direction="left" delay={650}>
    <div className="bg-white overflow-hidden aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] transition-shadow duration-500 group">
      <img
        src="/hero/hero4.jpg" // Updated to local image
        alt="Microscopy"
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
    </div>
  </FadeIn>
</div>

          </div>
        </div>
      </div>


      {/* --- 3. LAB TOPICS & PI SECTION --- */}
      {/* Adding an inverse radial gradient coming from the bottom up to frame the page */}
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
              {[
                { title: "Algal Bioproducts", desc: "Harnessing microalgae as sustainable biofactories for the production of value-added biomolecules, biochemicals, and bio-based products.", svg: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                { title: "Regenerative Biomaterials", desc: "Designing next-generation biomaterials for tissue engineering, wound healing, and regenerative medicine applications : bio valorisation", svg: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
                { title: "Carbon Capture", desc: "Developing sustainable biological and thermochemical strategies for carbon sequestration, biomass valorization, and renewable product generation", svg: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "Phycoremediation", desc: "Utilizing microalgae for environmental remediation while enabling nutrient recovery and resource circularity.", svg: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }
              ].map((topic, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 150}>
                  {/* Removed borders, added seamless hover shadow */}
                  <div className="bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.15)] hover:-translate-y-1 transition-all duration-500 group h-full">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={topic.svg} /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{topic.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* --- 4. ABOUT PI SECTION --- */}
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
                {/* Removed borders, added seamless blended shadow */}
                <div className="bg-white/90 backdrop-blur-md flex flex-col md:flex-row group overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] transition-all duration-500">
                  <div className="w-full md:w-64 lg:w-72 aspect-square shrink-0 bg-slate-50 overflow-hidden">
                    <img src={piData.image} alt={piData.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="mb-4 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{piData.name}</h3>
                      <p className="text-[#009966] text-sm font-medium">{piData.email}</p>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3 md:line-clamp-4 text-center md:text-left">
                      {piData.bio}
                    </p>
                    <div className="mt-auto pt-5 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-center md:justify-start">
                      <Link href="/people" className="bg-slate-900 text-white px-5 py-2 text-sm font-bold tracking-wide hover:bg-[#009966] transition-colors shadow-md hover:shadow-lg">
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
                  <Link href="/people" className="group flex items-center text-sm font-bold text-slate-600 hover:text-[#009966] transition-colors">
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