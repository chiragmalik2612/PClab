"use client";

import { useEffect, useRef, useState } from "react";

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
const facilities = [
  {
    id: "laminar",
    name: "Laminar Air Flow",
    image: "/instrum/laminar.jpg",
    description:
      "Provides a strictly controlled, sterile work environment essential for sensitive biological processes. It is utilized daily for cell culture maintenance, media preparation, and avoiding cross-contamination during biomaterial processing.",
  },
  {
    id: "sds",
    name: "SDS-PAGE Electrophoresis System",
    image: "/instrum/SDS.jpg",
    description:
      "The SDS-PAGE system is used for the separation and characterization of proteins based on their molecular weight. It supports the analysis of algal proteins, collagen extracts, and other biomolecules for assessing purity, molecular integrity, and downstream processing efficiency.",
  },
  {
    id: "genexy",
    name: "Algal Cultivation Facility",
    image: "/instrum/genexyIncub.jpg",
    description:
      "Our laboratory is equipped with controlled cultivation systems including growth chambers, shaker incubators, and laboratory-scale photobioreactors for the growth and maintenance of diverse microalgal strains.",
  },
  {
    id: "helix",
    name: "Collagen Extraction & Bioprocessing Facility",
    image: "/instrum/helixIncub.jpg",
    description:
      "The laboratory is equipped for the extraction, purification, and recovery of collagen from biological feedstocks using chemical, enzymatic, and process-based approaches.",
  },
  {
    id: "oven",
    name: "Hot Air Oven",
    image: "/instrum/hotairoven.jpg",
    description:
      "The hot air oven is used for controlled drying, sterilization, and thermal processing of laboratory materials and biological samples. It supports sample preparation, moisture analysis, and processing workflows associated with algal biomass, biomaterials, and bioproduct development.",
  },
  {
    id: "min80",
    name: "Cold Storage Facility (-80°C, -20°C and 4°C)",
    image: "/instrum/min80.jpg",
    description:
      "The cold storage facility ensures safe preservation of biological samples, cultures, reagents, proteins, and biomaterials under controlled temperature conditions. It supports long-term storage and maintenance of algal strains, collagen preparations, and research materials essential for experimental reproducibility.",
  },
  {
    id: "microscope",
    name: "Microscopy & Imaging Facility",
    image: "/instrum/Microscope.jpg",
    description:
      "Microscopy facilities support the observation and analysis of algal morphology, cellular structures, and biomaterial architectures.",
  },
  {
    id: "centrifuge",
    name: "Refrigerated Centrifuge",
    image: "/instrum/centrifuge.jpg",
    description:
      "The refrigerated centrifuge facilitates efficient separation and recovery of cells, proteins, and biomolecules under controlled temperature conditions. It is routinely employed in algal biomass harvesting, collagen purification, and downstream bioprocessing workflows.",
  },
  {
    id: "spectro",
    name: "UV–Visible Spectrophotometer",
    image: "/instrum/spectro.jpg",
    description:
      "The UV–Visible spectrophotometer enables rapid quantitative analysis of biological samples through absorbance-based measurements. It is routinely used for monitoring algal growth, estimating biomolecule concentrations, and characterizing proteins, pigments, and other bioactive compounds.",
  },
  {
    id: "photobioreactor",
    name: "Photobioreactor System",
    image: "/instrum/photobioreactor.jpg",
    description:
      "The photobioreactor facility provides controlled cultivation conditions for microalgae through regulation of light, temperature, aeration, and carbon dioxide supply. It supports research in algal biomanufacturing, biological carbon capture, phycoremediation, and sustainable bioproduct development.",
  },
  {
    id: "western",
    name: "Western Blot System",
    image: "/instrum/westernBlot.jpg",
    description:
      "The Western blot facility enables the detection and characterization of specific proteins within complex biological samples. It supports protein expression analysis, collagen characterization, biomarker identification, and validation of biomolecules derived from biomaterial research.",
  },
  {
    id: "chromatography",
    name: "Ion Exchange Chromatography (Gravity Column Setup)",
    image: "/instrum/chromatography.jpg",
    description:
      "The ion exchange chromatography facility is used for the purification and fractionation of proteins, peptides, and other charged biomolecules. It supports downstream processing workflows for algal bioproducts, collagen purification, and biomaterial development.",
  },
  // {
  //   id: "extraction",
  //   name: "Chemical Extraction Bench",
  //   image: "/instrum/extraction.jpg",
  //   description: "A dedicated workspace equipped for complex chemical and biological extractions. It facilitates the safe handling of reagents and solvents required during advanced protein isolation and bioproduct recovery protocols."
  // },
  // {
  //   id: "phmeter",
  //   name: "Digital pH Meter",
  //   image: "/instrum/phmeter.jpg",
  //   description: "Provides highly accurate measurements of solution acidity and alkalinity. It is routinely used to prepare precision buffers, optimize culture media, and ensure strictly controlled physiological conditions for biomaterial synthesis."
  // }
];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="pb-6 mb-16 max-w-3xl">
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
