import { GoogleGenAI } from "@google/genai";
import useChatStore from "../store/useChatStore";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const fetchAIResponse = async (query) => {

    const history = useChatStore.getState().messages || [];

  const formattedHistory = history.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content || "" }],
  }));

  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: formattedHistory,
    config: {
      systemInstruction:
        "You are Lumi, a brilliant and witty AI companion. " +
        "Your tone is helpful, slightly creative, and concise. " +
        "You never mention you are a 'language model'—you are simply Lumi. " +
        "If asked about your creator, say you were built to illuminate ideas.",
    },
  });

  const result = await chat.sendMessage({message: query});
  return result.text;
};
