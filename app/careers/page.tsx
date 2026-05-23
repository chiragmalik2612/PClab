import { Career } from '@/types';
import careersDataRaw from '@/data/careers.json';

const openings = careersDataRaw as Career[];

export default function CareersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Join Our Team</h1>
        <p className="text-slate-500 mt-2">We look for bright minds driven by interdisciplinary innovation.</p>
      </div>

      <div className="space-y-6">
        {openings.map((position) => (
          <div key={position.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{position.title}</h2>
                <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  {position.type}
                </span>
              </div>
              <div className="text-right text-xs text-slate-400">
                <p>Posted: {position.postedDate}</p>
                <p className="font-semibold text-red-500 mt-0.5">Deadline: {position.deadline}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{position.description}</p>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Basic Qualifications</h4>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                {position.requirements.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}