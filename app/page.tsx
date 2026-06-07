import Link from 'next/link';
import { Person } from '@/types';
import peopleDataRaw from '@/data/people.json';

const peopleData = peopleDataRaw as Person[];
const piData = peopleData.find(person => person.role === 'PI');

export default function HomePage() {
  return (
    <div className="w-full bg-slate-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          <div className="lg:col-span-8 flex flex-col justify-center pr-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-8">
              Research Science Exploration Of Biomaterials & Cognitive Systems
            </h1>
            <div className="w-16 h-1.5 bg-[#009966] mb-8 shadow-sm"></div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
              Our lab focuses on the translation of tissue-engineered scaffolds, medical-grade extracellular matrices, and modern hardware-software interfaces to capture, quantify, and simulate biological intelligence.
            </p>
            {/* <div>
              <Link href="/publications" className="inline-flex items-center text-slate-900 font-bold hover:text-[#009966] transition-colors group">
                Explore our latest publications
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div> */}
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:-mt-12">
            {/* ADDED: shadow-md and hover:shadow-xl to the image grid */}
            <div className="bg-white overflow-hidden aspect-square rounded-md shadow-md hover:shadow-xl transition-shadow duration-500 group border border-slate-100">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Research Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="bg-white overflow-hidden aspect-square rounded-md shadow-md hover:shadow-xl transition-shadow duration-500 group border border-slate-100">
              <img src="https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Biomaterials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="bg-white overflow-hidden aspect-square rounded-md shadow-md hover:shadow-xl transition-shadow duration-500 group border border-slate-100">
              <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cognitive Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="bg-white overflow-hidden aspect-square rounded-md shadow-md hover:shadow-xl transition-shadow duration-500 group border border-slate-100">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Data Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
          </div>
        </div>

        {/* --- 2. LAB TOPICS SECTION --- */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-3 block">Areas of Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Research Topics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ADDED: shadow-md hover:shadow-xl hover:-translate-y-1 to Topic Cards */}
            <div className="bg-white border border-slate-100 p-8 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#009966]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 shadow-sm flex items-center justify-center rounded-md mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medical-Grade Collagen</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Downstream processing of Type I collagen biomaterials for structural tissue replacement and soft robotics scaffolding.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#009966]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 shadow-sm flex items-center justify-center rounded-md mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">EEG Signal Processing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">High-density EEG deployments for real-time cognitive load quantification and hardware-software interface optimization.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#009966]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 shadow-sm flex items-center justify-center rounded-md mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Affective Computing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Simulating and responding to biological intelligence by logging activities and interventions based on emotional states.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#009966]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 shadow-sm flex items-center justify-center rounded-md mb-6 text-[#009966] group-hover:bg-[#009966] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Computational Biophysics</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Applying molecular docking and molecular dynamics (MD) simulations to analyze and predict biomaterial interactions.</p>
            </div>
          </div>
        </div>

        {/* --- 3. ABOUT PI SECTION --- */}
        {piData && (
          <div className="pt-16 md:pt-20 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[#009966] font-bold tracking-widest uppercase text-xs mb-3 block">Lab Leadership</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Principal Investigator</h2>
              </div>
              <Link href="/people" className="group flex items-center text-sm font-bold text-slate-600 hover:text-[#009966] transition-colors">
                Meet the Full Team
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* ADDED: shadow-lg rounded-md to the PI Card */}
            <div className="bg-white border border-slate-100 flex flex-col md:flex-row group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full md:w-64 lg:w-72 aspect-square shrink-0 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                <img src={piData.image} alt={piData.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{piData.name}</h3>
                  <p className="text-[#009966] text-sm font-medium">{piData.email}</p>
                </div>
                <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">{piData.bio}</p>
                <div className="mt-auto pt-5 border-t border-slate-100 flex flex-wrap gap-4 items-center">
                  <Link href="/people" className="bg-slate-900 text-white px-5 py-2 text-sm font-bold tracking-wide rounded-md hover:bg-[#009966] transition-colors shadow-md hover:shadow-lg">Read Full Profile</Link>
                  {piData.googleScholar && (
                    <a href={piData.googleScholar} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#009966] transition-colors ml-2">Google Scholar</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}