import { AboutData } from '@/types';
import aboutDataRaw from '@/data/about.json';

const aboutData = aboutDataRaw as AboutData;

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {aboutData.labName}
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 font-medium">
            {aboutData.tagline}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold border-b pb-2 border-slate-200">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {aboutData.missionStatement}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-4 text-indigo-950">Core Focus Areas</h3>
          <ul className="space-y-3">
            {aboutData.researchInterests.map((interest, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <span className="text-indigo-600 mr-2 font-bold">•</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}