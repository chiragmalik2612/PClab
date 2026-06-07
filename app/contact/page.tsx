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
        <p className="text-slate-500 text-lg">
          We welcome inquiries regarding research collaborations, post-doctoral positions, and graduate studies.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Centered Info Card */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm rounded-sm text-center group hover:border-[#009966]/40 transition-colors">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{contact.labName}</h2>
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

            {/* Mailing Info (Spans both columns) */}
            <div className="md:col-span-2 flex flex-col items-center text-center pt-10 mt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#009966] mb-3">Mailing Address</h3>
              <p className="text-slate-700 font-medium max-w-md leading-relaxed">
                {contact.address}
              </p>
            </div>

          </div>
        </div>

        {/* Embedded Google Map (IIT BHU Varanasi) */}
        <div className="w-full h-[400px] border border-slate-200 rounded-sm overflow-hidden shadow-sm bg-slate-100 p-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.326266472251!2d82.98638137599026!3d25.260533629166162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33f3801f4c75%3A0xe5f86b4e7233857d!2sIndian%20Institute%20of%20Technology%20(BHU)%20Varanasi!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '2px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="IIT (BHU) Varanasi Campus Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
}