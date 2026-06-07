import { NewsItem } from '@/types';
import newsDataRaw from '@/data/news.json';

const newsData = newsDataRaw as NewsItem[];

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">News & Updates</h1>
        <div className="w-16 h-1.5 bg-[#009966] shadow-sm"></div>
        <p className="text-slate-500 mt-4 text-lg">Latest announcements, events, and research milestones from the lab.</p>
      </div>

      {/* Horizontal News Cards */}
      <div className="space-y-8">
        {newsData.map((item) => (
          <div 
            key={item.id} 
            // ADDED: md:h-72 lg:h-80 to force every card to be the exact same height on desktop
            className="bg-white border border-slate-400 flex flex-col md:flex-row rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#009966]/30 transition-all duration-300 overflow-hidden group md:h-72 lg:h-80"
          >
            
            {/* Left Side: Image Container */}
            {/* ADDED: h-56 for mobile, md:h-full for desktop */}
            <div className="w-full h-56 md:h-full md:w-2/5 lg:w-1/3 shrink-0 overflow-hidden bg-slate-100">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                // object-cover ensures the image fills the box perfectly without distortion
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              
              <div className="mb-4 flex flex-wrap items-center gap-4 shrink-0">
                <span className="text-[#009966] font-bold tracking-widest uppercase text-[10px] bg-[#009966]/10 px-2.5 py-1 rounded-sm">
                  {item.category}
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#009966] transition-colors leading-snug line-clamp-2 shrink-0">
                {item.title}
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                {item.content}
              </p>
              
              {/* mt-auto pushes the link to the absolute bottom, ensuring all links align perfectly */}
              <div className="mt-auto pt-2 shrink-0">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-[#009966] transition-colors group/link"
                >
                  Read Full Story
                  <svg className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}