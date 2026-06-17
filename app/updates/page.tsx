"use client";

import { useEffect, useRef, useState } from "react";
import { NewsItem } from '@/types';
import newsDataRaw from '@/data/news.json';

const newsData = newsDataRaw as NewsItem[];

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

export default function NewsPage() {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="pb-6 mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">News & Updates</h1>
            <div className="w-16 h-1.5 bg-[#bd1e24] shadow-sm mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Latest announcements, events, and research milestones from the lab.
            </p>
          </div>
        </FadeIn>

        {/* --- NEWS CARDS --- */}
        <div className="space-y-10">
          {newsData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={(index % 4) * 100}>
              
              {/* 
                ADDED FIXED HEIGHT: md:h-80 lg:h-[22rem]
                This forces every single card to be the exact same size on desktop. 
              */}
              <div className="bg-white/60 backdrop-blur-sm flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group md:h-80 lg:h-[22rem]">
                
                {/* Left Side: Image Container */}
                {/* Added md:h-full so the image perfectly fills the fixed-height card */}
                <div className="w-full h-64 md:h-full md:w-2/5 lg:w-1/3 shrink-0 overflow-hidden bg-slate-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                  />
                </div>

                {/* Right Side: Text Content */}
                {/* ADDED overflow-y-auto: If you add an essay of text later, it will neatly scroll inside the card without breaking the uniform box sizes */}
                <div className="p-6 md:p-10 flex flex-col flex-1 justify-center overflow-y-auto">
                  
                  <div className="mb-5 flex flex-wrap items-center gap-4 shrink-0">
                    <span className="text-[#009966] font-bold tracking-widest uppercase text-[10px] bg-[#009966]/10 px-3 py-1">
                      {item.category}
                    </span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#009966] transition-colors leading-snug tracking-tight shrink-0">
                    {item.title}
                  </h2>
                  
                  {/* Kept text fully visible (no line-clamp) */}
                  <p className="text-slate-700 text-base leading-relaxed">
                    {item.content}
                  </p>
                  
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}