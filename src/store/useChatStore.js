import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [],
  isChatActive: false,
  selectedModel: "Gemini-3-Flash",
  isLoading: false,

  toggleChat: () => set((state) => ({ isChatActive: !state.isChatActive })),
  setSelectedModel: (model) => set({ selectedModel: model }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  setIsLoading: (val) => set({ isLoading: val }),
  setMessage: () => set({ messages: [] }),
}));

export default useChatStore;