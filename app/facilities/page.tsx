"use client";

import { useEffect, useRef, useState } from "react";
import facilitiesDataRaw from "@/data/facilities.json";

// Define the type for your facility items
interface Facility {
  id: string;
  name: string;
  image: string;
  description: string;
}

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

export default function FacilitiesPage() {
  // Load data from the JSON file
  const facilities = facilitiesDataRaw as Facility[];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="pb-6 mb-16 w-full">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Facilities & Equipment
            </h1>
            <div className="w-16 h-1.5 bg-[#bd1e24] shadow-sm mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our laboratory is equipped with state-of-the-art instrumentation
              to support cutting-edge research in biomanufacturing,
              biomaterials, and environmental biotechnology. These facilities
              enable our team to seamlessly transition from upstream cultivation
              to downstream bioprocessing and material characterization.
            </p>
          </div>
        </FadeIn>

        {/* --- INSTRUMENTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facilities.map((facility, index) => (
            <FadeIn key={facility.id} direction="up" delay={(index % 3) * 100}>
              <div className="bg-white/60 backdrop-blur-sm flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200/50">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#009966] transition-colors leading-tight mb-4">
                    {facility.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {facility.description}
                  </p>

                  {/* Decorative sharp accent matching the theme */}
                  <div className="w-8 h-0.5 bg-[#009966]/30 mt-6 group-hover:w-16 group-hover:bg-[#009966] transition-all duration-500"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}