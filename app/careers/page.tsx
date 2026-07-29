"use client";

import { Career } from '@/types';
import careersDataRaw from '@/data/careers.json';

const careersData = careersDataRaw as Career[];

export default function CareersPage() {
  const contactEmail = "poonamchoudhary@bt.iitr.ac.in";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full min-h-[60vh]">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Join the Team
        </h1>
        <div className="w-16 h-1.5 bg-[#009966]"></div>
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed max-w-4xl">
          The Biomanufacturing Process Laboratory, IIT Roorkee welcomes motivated students and researchers interested in pursuing research in our areas of expertise. Opportunities may include Ph.D. positions, M.Tech./M.Sc. thesis projects, B.Tech. projects, research internships, and project staff positions, subject to availability.
        </p>
      </div>

      {/* Main Content Grid: Job Listings / Openings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          Current Opportunities
        </h2>

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
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#009966] transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  
                  {/* Apply Button */}
                  <a 
                    href={`mailto:${contactEmail}?subject=Application:%20${encodeURIComponent(job.title)}`}
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
                  <h4 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">
                    Requirements
                  </h4>
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
          /* Empty State UI */
          <div className="bg-slate-50 border border-slate-200/60 border-dashed rounded-sm py-12 px-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 text-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
              No Open Positions
            </h3>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              <strong className="text-slate-700">Note:</strong> We do not have any open positions at present. Please check this page periodically for future opportunities.
            </p>
          </div>
        )}
      </div>

      {/* Collaborate With Us Section */}
      <div className="bg-slate-900 text-white rounded-sm p-8 md:p-10 border-l-4 border-[#009966]">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Collaborate With Us
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            We welcome collaborations with academic institutions, industries, start-ups, and research organizations for joint R&amp;D, sponsored research, consultancy, technology development and validation, process scale-up, technology transfer, and joint research proposals.
          </p>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
            We encourage partnerships that combine complementary expertise and translate research into scalable and impactful technologies. If your work or ideas align with our research interests, write to us with a brief introduction of your affiliation/organization and the proposed area of collaboration.
          </p>
          
          <a
            href={`mailto:${contactEmail}?subject=Collaboration%20Proposal`}
            className="inline-flex items-center gap-2 bg-[#009966] hover:bg-[#008055] text-white px-6 py-3 rounded-sm font-bold text-sm tracking-wide transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Proposal ({contactEmail})
          </a>
        </div>
      </div>

    </div>
  );
}