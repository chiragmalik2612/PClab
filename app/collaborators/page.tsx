export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "Development of Type I Collagen Scaffolds for Soft Tissue Repair", agency: "Department of Biotechnology (DBT)", duration: "2024 - 2027", status: "Ongoing" },
    { id: 2, title: "Continuous Bioprocessing of Microalgae for Carbon Sequestration", agency: "Department of Science & Technology (DST)", duration: "2025 - 2028", status: "Ongoing" },
    { id: 3, title: "AI-driven Optimization of Bioreactor Parameters", agency: "Biocon Biologics (Industry Sponsored)", duration: "2024 - 2025", status: "Ongoing" },
    { id: 4, title: "Electrospun Nanofibers for Wound Healing Applications", agency: "Indian Council of Medical Research (ICMR)", duration: "2021 - 2024", status: "Completed" },
    { id: 5, title: "Phycoremediation of Industrial Effluents using Consortium", agency: "Ministry of Environment, Forest and Climate Change", duration: "2020 - 2023", status: "Completed" }
  ];

  const collaborators = [
    { id: 1, name: "DBT India", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Department_of_Biotechnology_India_logo.svg/200px-Department_of_Biotechnology_India_logo.svg.png" },
    { id: 2, name: "DST", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Department_of_Science_and_Technology_%28India%29_logo.svg/200px-Department_of_Science_and_Technology_%28India%29_logo.svg.png" },
    { id: 3, name: "ICMR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Indian_Council_of_Medical_Research_Logo.svg/200px-Indian_Council_of_Medical_Research_Logo.svg.png" },
    { id: 4, name: "Industry Partner", logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { id: 5, name: "Global Health", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { id: 6, name: "Tech Collab", logo: "https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
      
      <div className="border-b border-slate-200 pb-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Research Projects</h1>
        <div className="w-16 h-1.5 bg-[#009966] shadow-sm"></div>
        <p className="text-slate-500 mt-4 text-lg">Ongoing and completed grants, fellowships, and industrial collaborations.</p>
      </div>

      {/* --- 1. PROJECTS TABLE SECTION --- */}
      <section className="mb-20">
        <div className="bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate-50/80 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest w-2/5">Project Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest w-1/4">Funding Agency</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest w-1/6">Duration</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest w-1/6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold tracking-tight text-slate-900 leading-snug group-hover:text-[#009966] transition-colors">
                        {project.title}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-600 font-medium">{project.agency}</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-500 font-medium">{project.duration}</p>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                        project.status === 'Ongoing' 
                          ? 'bg-[#009966]/10 text-[#009966] border border-[#009966]/20' 
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 2. COLLABORATORS & AGENCIES SECTION --- */}
      <section className="mt-10">
        <h2 className="text-[#009966] font-bold tracking-widest uppercase text-sm md:text-base mb-8 text-center w-full">
          Collaborators
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {collaborators.map((collab) => (
            <div 
              key={collab.id} 
              className="aspect-square bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-slate-200 hover:border-[#009966]/30"
            >
              <img 
                src={collab.logo} 
                alt={collab.name} 
                className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}