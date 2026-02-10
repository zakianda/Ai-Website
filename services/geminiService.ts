
import { GoogleGenAI } from "@google/genai";

export const getGeminiRecommendation = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    أنت خبير في أدوات الذكاء الاصطناعي. مهمتك هي مساعدة المستخدم في العثور على أفضل أداة لمهمته.
    تحدث باللغة العربية بأسلوب ودود.
    اقترح أدوات بناءً على طلب المستخدم.
    إذا طلب المستخدم أداة للصور، اقترح Midjourney أو DALL-E.
    إذا طلب للمحادثة، اقترح ChatGPT أو Claude.
    اجعل إجابتك مختصرة ومفيدة.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، واجهت مشكلة في الاتصال بالذكاء الاصطناعي. حاول مرة أخرى لاحقاً.";
  }
};
