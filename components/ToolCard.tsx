
import React, { useState } from 'react';
import { AITool, Category } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    navigator.clipboard.writeText(tool.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // وظيفة للحصول على الأيقونة المناسبة بناءً على التصنيف
  const renderCategoryIcon = (category: Category) => {
    const iconProps = { className: "w-12 h-12 text-white/90", strokeWidth: 1.5 };
    
    switch (category) {
      case 'محادثة':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        );
      case 'صور':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        );
      case 'برمجة':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        );
      case 'فيديو':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-12-3h12m-12-3h12m-12-3h12m-12-3h12m-12-3h12M15 3.75a3 3 0 11-6 0 3 3 0 016 0zM12 21V3" />
          </svg>
        );
      case 'صوت':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        );
      case 'كتابة':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        );
      case 'أعمال':
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H5.625a2.25 2.25 0 00-2.25 2.25m16.5 0V9.45c0-.621-.504-1.125-1.125-1.125h-13.5c-.621 0-1.125.504-1.125 1.125v4.7m16.5 0h-16.5" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        );
    }
  };

  // تدرج لوني بناءً على التصنيف
  const getGradient = (category: Category) => {
    switch (category) {
      case 'محادثة': return 'from-indigo-600 to-blue-500';
      case 'صور': return 'from-purple-600 to-pink-500';
      case 'برمجة': return 'from-slate-700 to-slate-900';
      case 'فيديو': return 'from-red-600 to-orange-500';
      case 'صوت': return 'from-emerald-600 to-teal-500';
      case 'كتابة': return 'from-amber-500 to-orange-400';
      case 'أعمال': return 'from-cyan-600 to-blue-600';
      default: return 'from-indigo-600 to-purple-600';
    }
  };

  return (
    <div className="group glass rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-indigo-500/10">
      <div className={`relative aspect-video flex items-center justify-center bg-gradient-to-br ${getGradient(tool.category)}`}>
        <div className="transform transition-transform duration-500 group-hover:scale-125">
          {renderCategoryIcon(tool.category)}
        </div>
        
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur text-[10px] px-2 py-1 rounded-md border border-white/10 text-white">
          {tool.category}
        </div>
        
        {tool.isFree ? (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
            مجاني
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
            مدفوع
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
          <div className="flex items-center gap-1 text-amber-400 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>{tool.rating}</span>
          </div>
        </div>
        
        <p className="text-slate-400 text-xs mb-4 line-clamp-2 flex-grow leading-relaxed">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tool.tags.map((tag) => (
            <span key={tag} className="text-[9px] bg-white/5 text-slate-400 px-1.5 py-0.5 rounded border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-center text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
          >
            زيارة
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          
          <button 
            onClick={copyToClipboard}
            className={`w-10 h-9 flex items-center justify-center rounded-xl border border-white/10 transition-all ${copied ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' : 'bg-white/5 hover:bg-white/10 text-slate-400'}`}
            title="نسخ الرابط"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
