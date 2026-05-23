import { Publication } from '@/types';
import publicationsDataRaw from '@/data/publications.json';

const publications = publicationsDataRaw as Publication[];

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Publications</h1>
        <p className="text-slate-500 mt-2">Peer-reviewed research and system architecture reports.</p>
      </div>

      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-slate-900">{pub.title}</h2>
            <p className="text-sm text-slate-600 font-medium">
              {pub.authors.join(', ')}
            </p>
            <p className="text-xs text-slate-400 italic">
              {pub.journal} — {pub.year}
            </p>
            <div className="pt-2 flex space-x-4 text-xs font-medium">
              {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" className="text-indigo-600 hover:text-indigo-800">DOI Link</a>}
              {pub.pdfUrl && <a href={pub.pdfUrl} className="text-indigo-600 hover:text-indigo-800">Download PDF</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}