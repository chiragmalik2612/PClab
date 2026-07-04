import Link from 'next/link';
import { ContactInfo } from '@/types';
import contactDataRaw from '@/data/contact.json';

const contact = contactDataRaw as ContactInfo;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Footer Content: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Lab Branding & Bio */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                BioPro Lab
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-400 md:pr-10">
              {contact.labName}.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons can go here if needed in the future */}
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Explore</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">People & Leadership</Link></li>
              <li><Link href="/publications" className="hover:text-white transition-colors">Publications & Journals</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Announcements</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Open Positions</Link></li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              
              {/* Email */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#009966] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              
              {/* Location */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#009966] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  {contact.institution}<br/>
                  {contact.address}
                </span>
              </li>
              
              {/* Link */}
              <li className="mt-6 pt-2">
                <Link href="/contact" className="text-[#009966] font-bold hover:text-[#007a52] transition-colors flex items-center">
                  View Contact Info
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} {contact.labName}. All rights reserved.</p>
          
          {/* Developer Credit */}
          <div className="flex items-center gap-1.5">
            <span>Designed & Built by</span>
            <a 
              href="https://www.linkedin.com/in/chirag-malik-63ba44282/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Research Intern (May-Jul 2026), IIT BHU Varanasi"
              className="text-slate-400 hover:text-[#009966] transition-colors font-bold flex items-center gap-1 group"
            >
              Chirag Malik (Lab Intern: May26 - Jul26)
              <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}