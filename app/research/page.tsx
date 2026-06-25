"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutData from "@/data/about.json"; // <-- Import the new data

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

            {/* The Lab Intro directly from JSON */}
            <div className="text-slate-700 leading-relaxed text-lg md:text-xl font-medium">
              <p>{aboutData.missionStatement}</p>
            </div>
          </div>
        </FadeIn>

        {/* --- ALTERNATING RESEARCH AREAS SECTION --- */}
        <div className="space-y-24 md:space-y-32 mt-10">
          {aboutData.expertise.map((area, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 lg:gap-16 items-center group`}
              >
                {/* 2x2 IMAGE GRID HALF */}
                <div className="w-full md:w-1/2">
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

                {/* CONTENT HALF */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <FadeIn direction="up" delay={200}>
                    <div className="md:px-4 lg:px-8">
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-5">
                        {area.title}
                      </h2>
                      {/* <div className="flex flex-wrap gap-2 mb-6">
                        {area.keywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-[#009966] font-bold tracking-widest uppercase text-[10px] bg-[#009966]/10 px-2.5 py-1"
                          >
                            {kw}
                          </span>
                        ))}
                      </div> */}

                      <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        {area.description}
                      </p>
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
