"use client";

import { useEffect, useRef, useState } from "react";
import peopleDataRaw from "@/data/people.json";

// Updated interface with ALL new PI fields
interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string | null;
  fullBio?: string[]; 
  image: string;
  linkedin: string | null;
  googleScholar?: string | null;
  alumniRole?: string | null;
  alumniCollege?: string | null;
  college?: string | null;
  labRole?: string | null;
  title?: string;
  department?: string;
  institution?: string;
  phone?: string;
  office?: string;
  education?: string[];
  experience?: string[];
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

export default function PeoplePage() {
  const peopleData = peopleDataRaw as Person[];
  
  // Extract PI
  const piData = peopleData.find((person) => person.role === "PI");

  const roleCategories = [
    { title: 'PhD Candidates', key: 'PhD' },
    { title: 'Project Staff', key: 'Project Staff' },
    { title: 'M.Tech Students', key: 'MTech' },
    { title: 'B.Tech Students', key: 'BTech' },
    { title: 'Interns', key: 'Intern' },
    { title: 'Alumni', key: 'Alumni' },
  ];

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#009966]/10 via-white/50 to-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* --- PAGE HEADER --- */}
        <FadeIn direction="up">
          <div className="pb-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Our Team</h1>
            <div className="w-16 h-1.5 bg-[#bd1e24] shadow-sm"></div>
          </div>
        </FadeIn>

        {/* --- 1. PRINCIPAL INVESTIGATOR SECTION (DETAILED VIEW) --- */}
        {piData && (
          <FadeIn direction="up" delay={100}>
            <div className="mb-24">
              <h2 className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-5">
                Principal Investigator
              </h2>
              
              <div className="bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.10)] transition-shadow duration-500 overflow-hidden flex flex-col lg:flex-row group">
                
                {/* Left Sidebar: Image & Contact */}
                <div className="w-full lg:w-[320px] bg-slate-50/50 flex flex-col shrink-0 border-r border-slate-200/50">
                  <div className="aspect-[3/4] w-full relative overflow-hidden bg-slate-200">
                    <img 
                      src={piData.image} 
                      alt={piData.name} 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                    />
                  </div>
                  
                  {/* Contact Block */}
                  <div className="p-8 space-y-5">
                    {piData.email && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                        <a href={`mailto:${piData.email}`} className="text-[#009966] text-sm font-semibold hover:underline block break-all">
                          {piData.email}
                        </a>
                      </div>
                    )}
                    {piData.phone && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                        <div className="text-slate-700 text-sm font-medium">{piData.phone}</div>
                      </div>
                    )}
                    {piData.office && (
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Office</div>
                        <div className="text-slate-700 text-sm font-medium leading-snug">{piData.office}</div>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-slate-200 flex gap-4">
                      {piData.googleScholar && (
                        <a href={piData.googleScholar} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#bd1e24] text-[11px] font-bold uppercase tracking-widest transition-colors">Scholar</a>
                      )}
                      {piData.linkedin && (
                        <a href={piData.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#bd1e24] text-[11px] font-bold uppercase tracking-widest transition-colors">LinkedIn</a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Content: Header, Edu/Exp, Bio */}
                <div className="p-8 md:p-12 lg:p-14 flex-1 flex flex-col">
                  
                  {/* 1. Header (Name, Title, Dept) */}
                  <div className="mb-10">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3">
                      {piData.name}
                    </h3>
                    <div className="text-[#009966] font-bold uppercase tracking-widest text-sm mb-1">
                      {piData.title}
                    </div>
                    <div className="text-slate-500 text-sm font-medium">
                      {piData.department}, {piData.institution}
                    </div>
                  </div>
                  
                  {/* 2. Education & Experience Grid (MOVED UP) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-slate-200/80">
                    
                    {/* Education */}
                    {piData.education && (
                      <div>
                        <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs flex items-center">
                          <span className="w-2 h-2 bg-[#bd1e24] mr-3"></span> Education
                        </h4>
                        <ul className="space-y-4">
                          {piData.education.map((edu, idx) => (
                            <li key={idx} className="text-sm text-slate-600 leading-relaxed font-medium">
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Experience */}
                    {piData.experience && (
                      <div>
                        <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs flex items-center">
                          <span className="w-2 h-2 bg-[#bd1e24] mr-3"></span> Professional Experience
                        </h4>
                        <ul className="space-y-4">
                          {piData.experience.map((exp, idx) => (
                            <li key={idx} className="text-sm text-slate-600 leading-relaxed font-medium">
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                  </div>

                  {/* 3. Full Detailed Bio (MOVED DOWN) */}
                  <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
                    {piData.fullBio ? (
                      piData.fullBio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{piData.bio}</p> // Fallback just in case
                    )}
                  </div>

                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* --- 2. LAB MEMBERS (STRICTLY 4 PER ROW) --- */}
        <div className="space-y-24">
          {roleCategories.map((category) => {
            const membersInRole = peopleData.filter(person => person.role === category.key);
            
            if (membersInRole.length === 0) return null;

            return (
              <section key={category.key}>
                <FadeIn direction="up">
                  <h2 className="text-[#009966] font-bold tracking-widest uppercase text-xl mb-6">
                    {category.title}
                  </h2>
                </FadeIn>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8">
                  {membersInRole.map((member, memIndex) => (
                    <FadeIn key={member.id} direction="up" delay={(memIndex % 4) * 100}>
                      <div className="bg-white/60 backdrop-blur-sm flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,153,102,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                        
                        <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                          />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <div className="mb-4">
                            
                            <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#009966] transition-colors leading-tight line-clamp-2">
                              {member.name}
                              {member.role === "Alumni" && member.alumniRole && (
                                <span className="text-[12px] font-semibold text-slate-500 ml-1.5 inline-block align-middle">
                                  ({member.alumniRole})
                                </span>
                              )}
                            </h3>
                            
                            <a href={`mailto:${member.email}`} className="text-[#009966] text-[13px] font-bold hover:underline block mt-1 truncate">
                              {member.email}
                            </a>

                            {((member.role === "Intern" && member.college) || (member.role === "Alumni" && member.alumniCollege)) && (
                              <div className="mt-2.5 flex items-start text-slate-500">
                                <svg className="w-3.5 h-3.5 mr-1.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide leading-snug line-clamp-2">
                                  {member.role === "Intern" ? member.college : member.alumniCollege}
                                </span>
                              </div>
                            )}

                          </div>
                          
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-5 mb-6 flex-1">
                            {member.bio}
                          </p>
                          
                          <div className="flex space-x-4 pt-4 border-t border-slate-200/60 text-[11px] font-bold uppercase tracking-widest mt-auto">
                            {member.linkedin && (
                              <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#bd1e24] transition-colors">LinkedIn</a>
                            )}
                          </div>
                        </div>

                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}