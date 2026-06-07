import { Person } from '@/types';
import peopleDataRaw from '@/data/people.json';

const peopleData = peopleDataRaw as Person[];

const roleCategories = [
  { key: 'PhD', title: 'PhD Candidates' },
  { key: 'Project Staff', title: 'Project Staff' },
  { key: 'MTech', title: 'M.Tech Students' },
  { key: 'MSc', title: 'M.Sc Students' },
  { key: 'BTech', title: 'B.Tech Students' },
  { key: 'Intern', title: 'Research Interns' },
  { key: 'Alumni', title: 'Lab Alumni' }
];

export default function PeoplePage() {
  const principalInvestigators = peopleData.filter(person => person.role === 'PI');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
      
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Lab Members</h1>
        <div className="w-16 h-1.5 bg-[#009966] shadow-sm"></div>
      </div>

      <div className="space-y-10">
        
       {/* --- 1. PRINCIPAL INVESTIGATOR SECTION --- */}
{principalInvestigators.length > 0 && (
  <section className="mb-16">
    <h2 className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-8">
      Principal Investigator
    </h2>
    <div className="space-y-8">
      {principalInvestigators.map((pi) => (
        <div key={pi.id} className="flex flex-col md:flex-row group overflow-hidden">
          
          {/* Image Container */}
          <div className="w-full md:w-64 lg:w-72 aspect-square shrink-0 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-100">
            <img 
              src={pi.image} 
              alt={pi.name} 
              // REMOVED: grayscale and group-hover:grayscale-0 for constant color
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{pi.name}</h3>
              <a href={`mailto:${pi.email}`} className="text-[#009966] text-sm font-medium hover:underline">
                {pi.email}
              </a>
            </div>
            
            <p className="text-slate-600 text-base leading-relaxed mb-6 text-[15px]">
              {pi.bio}
            </p>

            <div className="flex space-x-6 pt-4 mt-auto text-xs font-bold uppercase tracking-widest">
              {pi.googleScholar && (
                <a href={pi.googleScholar} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#009966] transition-colors">Scholar</a>
              )}
              {pi.linkedin && (
                <a href={pi.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#009966] transition-colors">LinkedIn</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}

       {/* TEAM GRID */}
{roleCategories.map((category) => {
  const membersInRole = peopleData.filter(person => person.role === category.key);
  if (membersInRole.length === 0) return null;

  return (
    <section key={category.key} className="pt-8 border-t border-slate-200">
      <h2 className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-5">{category.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {membersInRole.map((member) => (
         <div key={member.id} className="bg-white border border-slate-100 flex flex-col group shadow-md hover:shadow-xl hover:-translate-y-1 rounded-md transition-all duration-300">
  
  {/* REMOVED: grayscale and group-hover:grayscale-0 */}
  <div className="aspect-square w-full border-b border-slate-100 overflow-hidden bg-slate-50 rounded-t-md">
    <img 
      src={member.image} 
      alt={member.name} 
      className="w-full h-full object-cover opacity-100 transition-opacity duration-700" 
    />
  </div>

  <div className="p-4 flex flex-col flex-1">
    <div className="mb-2">
      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009966] transition-colors leading-tight">
        {member.name}
      </h3>
      <a href={`mailto:${member.email}`} className="text-[#009966] text-[12px] font-bold hover:underline block mt-0.5">
        {member.email}
      </a>
    </div>
    
    <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3 mb-3">
      {member.bio}
    </p>
    
    <div className="flex space-x-3 pt-3 mt-auto border-t border-slate-50 text-[10px] font-bold uppercase tracking-widest">
      {member.linkedin && <a href={member.linkedin} className="text-[#009966] hover:text-slate-900 transition-colors">LinkedIn</a>}
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
})}

      </div>
    </div>
  );
}