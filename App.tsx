
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import AIChatAssistant from './components/AIChatAssistant';
import { AI_TOOLS, CATEGORIES } from './constants';
import { Category } from './types';

const ITEMS_PER_PAGE = 8;

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>
      <div className="relative glass border border-white/10 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 shadow-2xl">
        <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md z-10">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(() => {
    try {
      const saved = localStorage.getItem('selected_ai_categories');
      return saved ? JSON.parse(saved) : ['الكل'];
    } catch (e) {
      return ['الكل'];
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('selected_ai_categories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategories]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => {
      if (cat === 'الكل') return ['الكل'];
      let next = prev.filter(c => c !== 'الكل');
      if (next.includes(cat)) {
        next = next.filter(c => c !== cat);
      } else {
        next = [...next, cat];
      }
      return next.length === 0 ? ['الكل'] : next;
    });
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = toolsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(tool => {
      const query = searchQuery.toLowerCase();
      const matchesSearch = tool.name.toLowerCase().includes(query) || 
                          tool.description.toLowerCase().includes(query) ||
                          tool.tags.some(t => t.toLowerCase().includes(query));
      const isAllSelected = selectedCategories.includes('الكل');
      const matchesCategory = isAllSelected || selectedCategories.includes(tool.category);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories]);

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);
  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTools.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTools, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTools();
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header onSearch={setSearchQuery} />
      
      <main className="flex-grow pt-20">
        <Hero onSearch={setSearchQuery} />

        <section id="tools" className="max-w-7xl mx-auto px-4 py-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-right">
              <h2 className="text-2xl font-bold border-r-4 border-indigo-600 pr-4">استكشف التصنيفات</h2>
              <p className="text-xs text-slate-500 mr-4">يمكنك اختيار أكثر من تصنيف في وقت واحد</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-950' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                    {isActive && cat !== 'الكل' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {paginatedTools.length > 0 ? (
              paginatedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="text-slate-500 mb-4">
                  <svg className="mx-auto w-16 h-16 opacity-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-slate-300">لم نجد أي أدوات تطابق بحثك</h3>
                <p className="text-slate-500 mt-2">جرب البحث بكلمات مفتاحية أخرى أو تغيير التصنيفات المحددة.</p>
                <button onClick={() => {setSelectedCategories(['الكل']); setSearchQuery('');}} className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm font-semibold underline underline-offset-4">إعادة ضبط جميع الفلاتر</button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 py-8">
              <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="p-2 rounded-lg bg-slate-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === page ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{page}</button>
                ))}
              </div>
              <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="p-2 rounded-lg bg-slate-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            </div>
          )}
        </section>

        <section id="ai-chat" className="bg-slate-900/50 py-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
            <p className="text-slate-400">تحدث مع مساعدنا الذكي للعثور على الأداة المناسبة لاحتياجاتك بدقة.</p>
          </div>
          <AIChatAssistant />
        </section>
      </main>

      {showScrollTop && (
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="fixed bottom-8 right-8 z-50 p-4 bg-indigo-600/80 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-indigo-400/30 hover:bg-indigo-500 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4" aria-label="العودة للأعلى">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
      )}

      <footer id="footer" className="border-t border-slate-800 py-16 px-4 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-2xl font-bold text-white">دليل الذكاء</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              المنصة العربية الأولى المتخصصة في أرشفة وتقييم أدوات الذكاء الاصطناعي. نهدف لتبسيط الوصول للتقنيات الحديثة لكل مبدع عربي.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Mockup */}
               <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer border border-white/5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer border border-white/5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="text-white font-bold text-lg">روابط سريعة</span>
            <div className="flex flex-col gap-4">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-right text-slate-400 hover:text-indigo-400 transition-colors text-sm">الرئيسية</button>
              <button onClick={() => scrollToSection('tools')} className="text-right text-slate-400 hover:text-indigo-400 transition-colors text-sm">استكشاف الأدوات</button>
              <button onClick={() => scrollToSection('ai-chat')} className="text-right text-slate-400 hover:text-indigo-400 transition-colors text-sm">المساعد الذكي</button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-white font-bold text-lg">القانونية</span>
            <div className="flex flex-col gap-4">
              <button onClick={() => setIsTermsOpen(true)} className="text-right text-slate-400 hover:text-indigo-400 transition-colors text-sm">الشروط والأحكام</button>
              <button onClick={() => setIsPrivacyOpen(true)} className="text-right text-slate-400 hover:text-indigo-400 transition-colors text-sm">سياسة الخصوصية</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لدليل الذكاء الاصطناعي الشامل</p>
          <div className="flex gap-4">
            <span>صنع بكل حب للمبدعين العرب</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="الشروط والأحكام">
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">1. مقدمة</h4>
            <p>باستخدامكم لموقع "دليل الذكاء"، أنتم توافقون على الالتزام بهذه الشروط. الموقع هو مرجع مجاني يهدف لتعميم الفائدة.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">2. دقة المعلومات</h4>
            <p>نسعى جاهدين لتوفير أدق المعلومات، ولكن نظراً للتطور السريع في مجال الذكاء الاصطناعي، قد تتغير الأسعار أو الميزات دون إشعار مسبق من المصدر الأصلي.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">3. إخلاء مسؤولية</h4>
            <p>الموقع ليس مسؤولاً عن أي نتائج قد تنتج عن استخدام الأدوات المدرجة. نحن مجرد وسيط إرشادي يربط المستخدم بمواقع الأدوات.</p>
          </section>
          <section className="pt-4 border-t border-white/5">
            <p className="text-slate-500 text-xs italic">تاريخ التحديث: فبراير 2025</p>
          </section>
        </div>
      </Modal>

      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="سياسة الخصوصية">
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">1. جمع البيانات</h4>
            <p>نحن لا نجمع أي بيانات شخصية منك عند التصفح. يتم استخدام التخزين المحلي فقط لتفضيلات تجربة المستخدم.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">2. ملفات الارتباط</h4>
            <p>نستخدم ملفات الارتباط (Cookies) المحلية فقط لتخزين تفضيلات التصنيف لضمان تجربة مستخدم سلسة في الزيارات القادمة.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 text-lg">3. الروابط الخارجية</h4>
            <p>الموقع يحتوي على روابط لمواقع خارجية. لسنا مسؤولين عن ممارسات الخصوصية لتلك المواقع.</p>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default App;
