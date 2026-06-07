import { Publication } from '@/types';
import publicationsDataRaw from '@/data/publications.json';

const publicationsData = publicationsDataRaw as Publication[];

export default function PublicationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
      
      {/* Page Header with Google Scholar Link */}
      <div className="border-b border-slate-200 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Publications</h1>
          <div className="w-16 h-1.5 bg-[#009966] shadow-sm"></div>
        </div>
        {/* <p className="text-slate-600 text-sm md:text-base font-medium pb-1">
          For a complete list of publications, please visit{' '}
          <a href="#" className="text-[#009966] font-bold hover:underline transition-colors">
            Google Scholar
          </a>
        </p> */}
      </div>

      {/* Publications List */}
      <div className="space-y-10">
        {publicationsData.map((pub) => (
          <div key={pub.id} className="border-b border-slate-200 pb-10 last:border-0 group">
            
            {/* The Left-Border Highlight Design */}
            <div className="border-l-[3px] border-[#009966] pl-5 md:pl-6">
              
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#009966] transition-colors leading-snug">
                {pub.title}
              </h2>
              
              <p className="text-slate-700 font-medium mb-2">
                {pub.authors.join(', ')}
              </p>
              
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span className="italic">{pub.journal}</span>
                {pub.year && <span>• {pub.year}</span>}
                {pub.doi && (
                  <>
                    <span className="mx-1">•</span>
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-[#009966] hover:underline">
                      DOI: {pub.doi}
                    </a>
                  </>
                )}
              </div>

              {/* Tags (Styled to remain subtle and clean) */}
              {pub.tags && pub.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-500 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}