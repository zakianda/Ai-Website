
import React from 'react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-300">
          اكتشف مستقبل الإبداع مع <br /> أدوات الذكاء الاصطناعي
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          مرجعك الأول والشامل للبحث عن أفضل مواقع ومنصات الذكاء الاصطناعي العالمية والمحلية في مكان واحد.
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="ابحث عن أداة (مثلاً: توليد صور، كتابة مقالات...)"
            className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-5 px-14 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg shadow-2xl"
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            أكثر من 500 أداة
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            تحديث يومي
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            توصيات ذكية
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
