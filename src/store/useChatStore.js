import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [],
  isChatActive: false,
  selectedModel: "GPT-4o",

  toggleChat: () => set((state) => ({ isChatActive: !state.isChatActive })),
  setSelectedModel: (model) => set({ selectedModel: model }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}));

export default useChatStore;