import { ContactInfo } from '@/types';
import contactDataRaw from '@/data/contact.json';

const contact = contactDataRaw as ContactInfo;

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Contact Us</h1>
        <p className="text-slate-500 mt-2">Get in touch for research collaborations or application inquiries.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-2xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{contact.labName}</h2>
          <p className="text-slate-500 text-sm mt-0.5">{contact.institution}</p>
        </div>
        
        <div className="space-y-3 text-sm text-slate-600 border-t pt-4">
          <p><strong className="text-slate-900">Principal Investigator:</strong> {contact.piName}</p>
          <p><strong className="text-slate-900">Office Location:</strong> {contact.officeLocation}</p>
          <p><strong className="text-slate-900">Mailing Address:</strong> {contact.address}</p>
          <p><strong className="text-slate-900">Email Address:</strong> <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:underline">{contact.email}</a></p>
          <p><strong className="text-slate-900">Phone Directory:</strong> {contact.phone}</p>
        </div>
      </div>
    </div>
  );
}