
export type Category = 'الكل' | 'محادثة' | 'صور' | 'فيديو' | 'صوت' | 'برمجة' | 'كتابة' | 'أعمال';

export interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  tags: string[];
  imageUrl: string;
  isFree: boolean;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
