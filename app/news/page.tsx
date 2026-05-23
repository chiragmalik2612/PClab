import { NewsItem } from '@/types';
import newsDataRaw from '@/data/news.json';

const newsItems = newsDataRaw as NewsItem[];

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Lab News & Events</h1>
        <p className="text-slate-500 mt-2">Latest updates, milestones, and announcements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-400">{item.date}</span>
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                {item.category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}