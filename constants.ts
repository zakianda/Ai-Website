
import { AITool, Category } from './types';

export const CATEGORIES: Category[] = ['الكل', 'محادثة', 'صور', 'فيديو', 'صوت', 'برمجة', 'كتابة', 'أعمال'];

export const AI_TOOLS: AITool[] = [
  // محادثة
  { id: '1', name: 'ChatGPT', description: 'النموذج الأشهر من OpenAI للمحادثة وتوليد النصوص والبرمجة.', url: 'https://chatgpt.com', category: 'محادثة', tags: ['OpenAI', 'GPT-4o'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '2', name: 'Claude', description: 'مساعد ذكي يتميز بقدرة تحليلية عالية وأسلوب كتابة بشري راقٍ.', url: 'https://claude.ai', category: 'محادثة', tags: ['Anthropic', 'تحليل'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '3', name: 'Perplexity AI', description: 'محرك بحث ذكي يقدم إجابات مباشرة مع ذكر المصادر بدقة.', url: 'https://perplexity.ai', category: 'محادثة', tags: ['بحث', 'مصادر'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '4', name: 'DeepSeek', description: 'نموذج صيني قوي جداً في البرمجة والرياضيات وبسرعة استجابة مذهلة.', url: 'https://deepseek.com', category: 'محادثة', tags: ['برمجة', 'سرعة'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '5', name: 'Gemini', description: 'مساعد جوجل الذكي المتكامل مع خدمات جوجل السحابية والمكتبية.', url: 'https://gemini.google.com', category: 'محادثة', tags: ['Google', 'Multimodal'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '6', name: 'Character.ai', description: 'تحدث مع شخصيات افتراضية أو تاريخية مصممة بالذكاء الاصطناعي.', url: 'https://character.ai', category: 'محادثة', tags: ['ترفيه', 'شخصيات'], imageUrl: '', isFree: true, rating: 4.5 },
  { id: '7', name: 'Mistral AI', description: 'نماذج لغوية مفتوحة المصدر وعالية الكفاءة من فرنسا.', url: 'https://mistral.ai', category: 'محادثة', tags: ['OpenSource', 'Efficient'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '8', name: 'Pi AI', description: 'مساعد شخصي عاطفي مصمم ليكون مستمعاً وصديقاً جيداً.', url: 'https://pi.ai', category: 'محادثة', tags: ['Emotional', 'Chat'], imageUrl: '', isFree: true, rating: 4.4 },
  
  // صور
  { id: '9', name: 'Midjourney', description: 'الأداة الرائدة عالمياً في توليد الصور الفنية والواقعية المذهلة.', url: 'https://midjourney.com', category: 'صور', tags: ['فن', 'احترافي'], imageUrl: '', isFree: false, rating: 4.9 },
  { id: '10', name: 'Flux.1', description: 'نموذج توليد صور ثوري يتفوق في التفاصيل والنصوص داخل الصور.', url: 'https://blackforestlabs.ai', category: 'صور', tags: ['Flux', 'BFL'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '11', name: 'DALL-E 3', description: 'نموذج OpenAI المدمج في ChatGPT لتوليد الصور بسهولة.', url: 'https://openai.com/dall-e-3', category: 'صور', tags: ['OpenAI', 'Easy'], imageUrl: '', isFree: false, rating: 4.7 },
  { id: '12', name: 'Leonardo.ai', description: 'منصة متكاملة لتوليد الصور مع أدوات تحرير متقدمة.', url: 'https://leonardo.ai', category: 'صور', tags: ['تصميم', 'أدوات'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '13', name: 'Ideogram', description: 'متخصص في دمج النصوص داخل الصور بدقة واحترافية عالية.', url: 'https://ideogram.ai', category: 'صور', tags: ['نصوص', 'Typography'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '14', name: 'Adobe Firefly', description: 'أدوات الذكاء الاصطناعي من أدوبي المدمجة في فوتوشوب.', url: 'https://firefly.adobe.com', category: 'صور', tags: ['Adobe', 'Design'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '15', name: 'Krea AI', description: 'توليد صور فوري وتحسين الجودة (Upscale) بتقنيات متقدمة.', url: 'https://krea.ai', category: 'صور', tags: ['Realtime', 'Upscale'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '16', name: 'Magnific AI', description: 'أفضل أداة في العالم لتحسين دقة الصور وإضافة تفاصيل مذهلة.', url: 'https://magnific.ai', category: 'صور', tags: ['4K', 'Detail'], imageUrl: '', isFree: false, rating: 4.9 },
  { id: '17', name: 'Playground AI', description: 'محرر صور سهل الاستخدام يجمع بين التوليد والتحرير.', url: 'https://playgroundai.com', category: 'صور', tags: ['Editing', 'Free'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '18', name: 'Recraft', description: 'توليد رسومات فنية وناقلة (Vector) مصممة خصيصاً للمصممين.', url: 'https://recraft.ai', category: 'صور', tags: ['Vector', 'Design'], imageUrl: '', isFree: true, rating: 4.7 },

  // فيديو
  { id: '19', name: 'Runway Gen-3', description: 'جيل جديد من توليد الفيديو السينمائي من النصوص والصور.', url: 'https://runwayml.com', category: 'فيديو', tags: ['Cinema', 'Professional'], imageUrl: '', isFree: false, rating: 4.9 },
  { id: '20', name: 'Luma Dream Machine', description: 'توليد فيديوهات واقعية جداً وبحركات طبيعية وسلسة.', url: 'https://lumalabs.ai', category: 'فيديو', tags: ['Realistic', 'Video'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '21', name: 'Kling AI', description: 'منصة صينية رائدة لتوليد فيديوهات تصل مدتها لـ 10 ثوانٍ بجودة عالية.', url: 'https://klingai.com', category: 'فيديو', tags: ['LongVideo', 'HighQuality'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '22', name: 'HeyGen', description: 'إنشاء فيديوهات لشخصيات تتحدث (Avatar) مع مزامنة شفاه مثالية.', url: 'https://heygen.com', category: 'فيديو', tags: ['Avatar', 'Marketing'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '23', name: 'Synthesia', description: 'منصة احترافية لتحويل النصوص إلى فيديوهات تعليمية باستخدام مقدمين.', url: 'https://synthesia.io', category: 'فيديو', tags: ['Training', 'Avatar'], imageUrl: '', isFree: false, rating: 4.7 },
  { id: '24', name: 'Pika Art', description: 'أداة إبداعية لتحريك الصور وتوليد الفيديوهات بأساليب فنية.', url: 'https://pika.art', category: 'فيديو', tags: ['Animation', 'Art'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '25', name: 'Kaiber', description: 'توليد فيديوهات موسيقية وفنية تعتمد على التحول البصري.', url: 'https://kaiber.ai', category: 'فيديو', tags: ['MusicVideo', 'AI-Art'], imageUrl: '', isFree: true, rating: 4.5 },
  { id: '26', name: 'Sora (Waitlist)', description: 'نموذج OpenAI المستقبلي الذي سيغير مفهوم صناعة الفيديو.', url: 'https://openai.com/sora', category: 'فيديو', tags: ['OpenAI', 'NextGen'], imageUrl: '', isFree: false, rating: 5.0 },

  // صوت
  // Fixed typo: changed 'صنت' to 'صوت'
  { id: '27', name: 'ElevenLabs', description: 'أفضل منصة لتحويل النص إلى كلام واستنساخ الأصوات بدقة مذهلة.', url: 'https://elevenlabs.io', category: 'صوت', tags: ['TTS', 'Cloning'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '28', name: 'Suno AI', description: 'توليد أغانٍ كاملة مع الألحان والكلمات في ثوانٍ.', url: 'https://suno.com', category: 'صوت', tags: ['Music', 'Song'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '29', name: 'Udio', description: 'أداة ثورية لتوليد موسيقى بجودة استوديو واحترافية عالية.', url: 'https://udio.com', category: 'صوت', tags: ['Music', 'HighFidelity'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '30', name: 'Murf.ai', description: 'تحويل النصوص إلى تعليق صوتي احترافي للعروض والفيديوهات.', url: 'https://murf.ai', category: 'صوت', tags: ['Voiceover', 'Business'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '31', name: 'Speechify', description: 'تحويل أي نص أو كتاب إلى مسموع بأصوات طبيعية ومشهورة.', url: 'https://speechify.com', category: 'صوت', tags: ['Reading', 'Audiobook'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '32', name: 'Riffusion', description: 'توليد موسيقى فريدة عبر التلاعب بالترددات الصوتية بصرياً.', url: 'https://riffusion.com', category: 'صوت', tags: ['Experimental', 'Music'], imageUrl: '', isFree: true, rating: 4.3 },

  // برمجة
  { id: '33', name: 'Cursor', description: 'أفضل محرر أكواد (IDE) مدمج بالذكاء الاصطناعي حالياً.', url: 'https://cursor.sh', category: 'برمجة', tags: ['IDE', 'Coding'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '34', name: 'Bolt.new', description: 'بناء تطبيقات ويب كاملة ونشرها بمجرد وصفها بالكلمات.', url: 'https://bolt.new', category: 'برمجة', tags: ['Fullstack', 'Web'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '35', name: 'v0.dev', description: 'توليد واجهات مستخدم (UI) احترافية باستخدام React وTailwind.', url: 'https://v0.dev', category: 'برمجة', tags: ['Frontend', 'Vercel'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '36', name: 'GitHub Copilot', description: 'مساعد البرمجة الأشهر الذي يتوقع الكود الذي ستكتبه.', url: 'https://github.com/features/copilot', category: 'برمجة', tags: ['GitHub', 'Autocomplete'], imageUrl: '', isFree: false, rating: 4.8 },
  { id: '37', name: 'Replit Agent', description: 'عميل ذكي يقوم ببناء تطبيقاتك من الصفر داخل Replit.', url: 'https://replit.com', category: 'برمجة', tags: ['Deployment', 'Agent'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '38', name: 'Phind', description: 'محرك بحث مخصص للمبرمجين يقدم حلولاً برمجية مباشرة.', url: 'https://phind.com', category: 'برمجة', tags: ['Search', 'Solution'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '39', name: 'Codeium', description: 'بديل مجاني قوي لـ GitHub Copilot يدعم العديد من المحررات.', url: 'https://codeium.com', category: 'برمجة', tags: ['Free', 'Plugin'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '40', name: 'Tabnine', description: 'مساعد برمجى يركز على الخصوصية وأمن البيانات للشركات.', url: 'https://tabnine.com', category: 'برمجة', tags: ['Privacy', 'Enterprise'], imageUrl: '', isFree: true, rating: 4.5 },

  // كتابة
  { id: '41', name: 'Grammarly', description: 'مساعد كتابة وتدقيق لغوي ذكي للغة الإنجليزية.', url: 'https://grammarly.com', category: 'كتابة', tags: ['Grammar', 'Writing'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '42', name: 'Jasper', description: 'منصة كتابة محتوى تسويقي ومقالات متكاملة للشركات.', url: 'https://jasper.ai', category: 'كتابة', tags: ['Marketing', 'Content'], imageUrl: '', isFree: false, rating: 4.7 },
  { id: '43', name: 'Copy.ai', description: 'توليد نصوص تسويقية وإعلانات بضغطة زر واحدة.', url: 'https://copy.ai', category: 'كتابة', tags: ['Copywriting', 'Ads'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '44', name: 'WriteSonic', description: 'أداة شاملة لكتابة المقالات والتدوينات وتحسين SEO.', url: 'https://writesonic.com', category: 'كتابة', tags: ['SEO', 'Articles'], imageUrl: '', isFree: true, rating: 4.6 },
  { id: '45', name: 'Quillbot', description: 'أفضل أداة لإعادة صياغة الجمل والفقرات بأساليب مختلفة.', url: 'https://quillbot.com', category: 'كتابة', tags: ['Paraphrasing', 'Tools'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '46', name: 'NotebookLM', description: 'مفكرة ذكية من جوجل لتحليل مستنداتك وتلخيصها.', url: 'https://notebooklm.google', category: 'كتابة', tags: ['Google', 'Analysis'], imageUrl: '', isFree: true, rating: 4.8 },

  // أعمال
  { id: '47', name: 'Gamma', description: 'إنشاء عروض تقديمية ومواقع وصفحات بضغطة زر واحدة.', url: 'https://gamma.app', category: 'أعمال', tags: ['Presentation', 'Web'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '48', name: 'Framer AI', description: 'حوّل فكرتك إلى موقع إلكتروني احترافي في ثوانٍ.', url: 'https://framer.com', category: 'أعمال', tags: ['NoCode', 'Web'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '49', name: 'Notion AI', description: 'ذكاء اصطناعي مدمج في نوتشن لتنظيم المهام والكتابة.', url: 'https://notion.so', category: 'أعمال', tags: ['Productivity', 'Notes'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '50', name: 'Otter.ai', description: 'تسجيل الاجتماعات وتحويلها إلى نصوص وتلخيصها تلقائياً.', url: 'https://otter.ai', category: 'أعمال', tags: ['Meetings', 'Notes'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '51', name: 'Descript', description: 'تحرير الفيديو والصوت عبر تعديل النص المكتوب.', url: 'https://descript.com', category: 'أعمال', tags: ['Editing', 'Podcast'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '52', name: 'Beautiful.ai', description: 'تصميم عروض تقديمية ذكية تضبط نفسها تلقائياً.', url: 'https://beautiful.ai', category: 'أعمال', tags: ['Slides', 'Design'], imageUrl: '', isFree: false, rating: 4.6 },
  { id: '53', name: 'Tome', description: 'بناء قصص وعروض تقديمية تفاعلية باستخدام الذكاء الاصطناعي.', url: 'https://tome.app', category: 'أعمال', tags: ['Storytelling', 'AI'], imageUrl: '', isFree: true, rating: 4.5 },
  { id: '54', name: 'Decktopus', description: 'مولد عروض تقديمية يركز على السرعة والبساطة.', url: 'https://decktopus.com', category: 'أعمال', tags: ['Presentation', 'Fast'], imageUrl: '', isFree: true, rating: 4.4 },
  
  // إضافات منوعة
  { id: '55', name: 'Canva Magic Studio', description: 'مجموعة أدوات ذكاء اصطناعي مدمجة في كانفا الشهير.', url: 'https://canva.com', category: 'أعمال', tags: ['Design', 'All-in-one'], imageUrl: '', isFree: true, rating: 4.8 },
  { id: '56', name: 'ChatHub', description: 'استخدام عدة نماذج (ChatGPT, Claude, Gemini) في شاشة واحدة.', url: 'https://chathub.gg', category: 'محادثة', tags: ['Multi-model', 'Tool'], imageUrl: '', isFree: true, rating: 4.7 },
  { id: '57', name: 'Groq', description: 'أسرع محرك استدلال للنماذج اللغوية في العالم حالياً.', url: 'https://groq.com', category: 'برمجة', tags: ['LPU', 'Speed'], imageUrl: '', isFree: true, rating: 4.9 },
  { id: '58', name: 'Sora Web', description: 'استعراض إمكانيات نموذج سورا وتطوراته المستمرة.', url: 'https://sora.com', category: 'فيديو', tags: ['Future', 'Video'], imageUrl: '', isFree: false, rating: 4.9 },
  { id: '59', name: 'Humane', description: 'استكشاف الجيل الجديد من الأجهزة القابلة للارتداء بالذكاء الاصطناعي.', url: 'https://humane.com', category: 'أعمال', tags: ['Hardware', 'AI'], imageUrl: '', isFree: false, rating: 4.2 },
  { id: '60', name: 'Consensus', description: 'محرك بحث علمي يجيب على أسئلتك بناءً على الدراسات المحكمة.', url: 'https://consensus.app', category: 'كتابة', tags: ['Science', 'Search'], imageUrl: '', isFree: true, rating: 4.8 }
];
