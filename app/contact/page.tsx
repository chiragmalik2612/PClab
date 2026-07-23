"use client";

import Image from 'next/image'; // Import Next.js Image component
import { ContactInfo } from '@/types';
import contactDataRaw from '@/data/contact.json';

const contact = contactDataRaw as ContactInfo;

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full flex flex-col items-center">
      
      {/* Centered Page Header */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Contact Us</h1>
        <div className="w-16 h-1.5 bg-[#009966] mx-auto mb-6"></div>
        <p className="text-slate-500 text-lg leading-relaxed">
          We welcome inquiries regarding research collaborations, post-doctoral positions, and graduate studies.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Centered Info Card */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm rounded-sm text-center group hover:border-[#009966]/40 transition-colors">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">{contact.labName}</h2>
          <p className="text-slate-500 text-lg mb-12">{contact.institution}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            
            {/* PI Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-2">Principal Investigator</h3>
              <p className="text-slate-900 font-bold text-lg">{contact.piName}</p>
            </div>
            
            {/* Email Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-2">Email Address</h3>
              <a href={`mailto:${contact.email}`} className="text-slate-900 font-bold text-lg hover:text-[#009966] transition-colors">
                {contact.email}
              </a>
            </div>

            {/* Phone Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-2">Phone Directory</h3>
              <p className="text-slate-700 font-medium">{contact.phone}</p>
            </div>

            {/* Office Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-2">Office Location</h3>
              <p className="text-slate-700 font-medium">{contact.officeLocation}</p>
            </div>

            {/* Mailing Info (Restructured for Side-by-Side Placement) */}
            <div className="flex flex-col items-center text-center pt-10 mt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-3">Mailing Address</h3>
              <p className="text-slate-700 font-medium max-w-xs leading-relaxed">
                {contact.address}
              </p>
            </div>

            {/* NEW QR CODE BLOCK: Placed on the Right Side of the Grid Row */}
            <div className="flex flex-col items-center text-center pt-10 mt-2 md:mt-0 border-t md:border-t-0 border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-4">Website QR Code</h3>
              <div className="border border-slate-200 rounded-sm p-1.5 bg-white shadow-inner hover:scale-105 transition-transform">
                <Image
                  src="/QR.png"
                  alt="Scan this QR code to visit our website"
                  width={112} // reasonably sized QR code
                  height={112}
                  className="object-contain"
                />
              </div>
              <p className="text-slate-500 text-sm mt-3">Scan to visit our full website: <span className="font-semibold text-slate-700">bioprolab.org</span></p>
            </div>

          </div>
        </div>

        {/* Embedded Google Map (IIT Roorkee) */}
        <div className="w-full h-[400px] border border-slate-200 rounded-sm overflow-hidden shadow-sm bg-slate-100 p-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13840.281472749339!2d77.87251778715817!3d29.86224440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3708add70cd%3A0x2962c1ad99625236!2sDepartment%20of%20Biosciences%20and%20Bioengineering%2C%20IIT%20Roorkee!5e0!3m2!1sen!2sin!4v1783161014124!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '2px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="IIT Roorkee Campus Map" // Updated Map Title
          ></iframe>
        </div>

      </div>
    </div>
  );
}