import { Person } from '@/types';
import peopleDataRaw from '@/data/people.json';

const peopleData = peopleDataRaw as Person[];

export default function PeoplePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Lab Members</h1>
        <p className="text-slate-500 mt-2">The multidisciplinary team pushing boundaries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {peopleData.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                  {member.role}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
                <p className="text-sm text-slate-400">{member.email}</p>
              </div>
              <p className="text-slate-600 text-sm line-clamp-3">{member.bio}</p>
              
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Education</h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {member.education.map((edu, i) => <li key={i}>{edu}</li>)}
                </ul>
              </div>
            </div>

            <div className="flex space-x-4 pt-4 mt-4 border-t border-slate-100 text-sm">
              {member.googleScholar && <a href={member.googleScholar} className="text-blue-600 hover:underline">Scholar</a>}
              {member.linkedin && <a href={member.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}