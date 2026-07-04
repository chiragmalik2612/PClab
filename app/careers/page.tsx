"use client";

import { Career } from '@/types';
import careersDataRaw from '@/data/careers.json';

const careersData = careersDataRaw as Career[];

export default function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full min-h-[60vh]">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Join the Lab</h1>
        <div className="w-16 h-1.5 bg-[#009966]"></div>
        <p className="text-slate-500 mt-4 text-lg">Open positions for researchers, students, and postdocs.</p>
      </div>

      {/* Conditional Rendering: Show jobs if they exist, otherwise show Empty State */}
      {careersData.length > 0 ? (
        <div className="space-y-6">
          {careersData.map((job) => (
            <div 
              key={job.id} 
              className="border border-slate-800 p-6 bg-white rounded-sm hover:border-[#009966]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              
              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#009966]/10 text-[#009966] px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
                      {job.type}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#009966] transition-colors">
                    {job.title}
                  </h2>
                </div>
                
                {/* Apply Button (Mailto Link with dynamic subject) */}
                <a 
                  href={`mailto:your-lab-email@university.edu?subject=Application:%20${encodeURIComponent(job.title)}`}
                  className="shrink-0 bg-slate-900 hover:bg-[#009966] text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide transition-colors text-center shadow-sm"
                >
                  Apply Now
                </a>
              </div>

              {/* Job Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-4xl">
                {job.description}
              </p>

              {/* Requirements Grid */}
              <div className="bg-slate-100 border border-slate-100 p-4 md:p-5 rounded-sm mb-5">
                <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Requirements</h3>
                <ul className="space-y-1.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm font-medium">
                      <svg className="w-4 h-4 text-[#009966] mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Dates */}
              <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-4 mt-auto">
                <p>Posted: <span className="text-slate-600">{job.postedDate}</span></p>
                <p>Deadline: <span className="text-[#009966]">{job.deadline}</span></p>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        /* --- EMPTY STATE UI --- */
        <div className="bg-slate-50 border border-slate-200/60 border-dashed rounded-sm py-20 px-6 flex flex-col items-center justify-center text-center mt-10">
          <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center mb-6 text-slate-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">No Open Positions</h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            We are not actively recruiting for any specific roles at the moment. However, we are always eager to connect with talented individuals. Please check back later.
          </p>
        </div>
      )}

    </div>
  );
}



//DEMO position data
// {
//     "id": "car-1",
//     "title": "Postdoctoral Researcher in Neurotechnologies & EEG Analytics",
//     "type": "Postdoc",
//     "description": "Seeking a dedicated researcher to lead our hardware-software deployment pipeline for real-time artifact filtering and classification during active cognitive trials.",
//     "requirements": [
//       "Ph.D. in Biomedical Engineering, Neuro-engineering, or Computer Science",
//       "Proven experience with Python/MNE or C++ signal processing libraries",
//       "Familiarity with reactive web development frameworks is a major plus"
//     ],
//     "postedDate": "2026-05-01",
//     "deadline": "2026-07-15"
//   },
//   {
//     "id": "car-2",
//     "title": "Summer Research Intern — Biomaterial Isolation",
//     "type": "Internship",
//     "description": "Looking for enthusiastic undergraduate or integrated dual-degree students to assist with physical characterization, freeze-drying routines, and crosslinking assays.",
//     "requirements": [
//       "Enrolled in Biomedical Engineering, Biotechnology, or Chemical Engineering",
//       "Basic understanding of laboratory safety protocols and chemistry pipetting"
//     ],
//     "postedDate": "2026-04-20",
//     "deadline": "2026-06-01"
//   }