import { Career } from '@/types';
import careersDataRaw from '@/data/careers.json';
import Link from 'next/link';

const careersData = careersDataRaw as Career[];

export default function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Join the Lab</h1>
        <div className="w-16 h-1.5 bg-[#009966]"></div>
        <p className="text-slate-500 mt-4 text-lg">Open positions for researchers, students, and postdocs.</p>
      </div>

      {/* Careers List */}
      <div className="space-y-6">
        {careersData.map((job) => (
          <div 
            key={job.id} 
            // ADDED PREMIUM EFFECTS: transition-all, hover:-translate-y-1, hover:shadow-md
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
              
              {/* Apply Button */}
              <Link 
                href="/contact" 
                className="shrink-0 bg-slate-900 hover:bg-[#009966] text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide transition-colors text-center shadow-sm"
              >
                Apply Now
              </Link>
            </div>

            {/* Job Description - Reduced margin */}
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-4xl">
              {job.description}
            </p>

            {/* Requirements Grid - Tighter padding */}
            <div className="bg-slate-100 border border-slate-100 p-4 md:p-5 rounded-sm mb-5">
              <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Requirements</h3>
              <ul className="space-y-1.5">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 text-sm font-medium">
                    <svg className="w-4 h-4 text-[#009966] mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Dates - Pulled up closer to the content */}
            <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-4 mt-auto">
              <p>Posted: <span className="text-slate-600">{job.postedDate}</span></p>
              <p>Deadline: <span className="text-[#009966]">{job.deadline}</span></p>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}