import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function fetchGroqResponse(userQuery, history = []) {
  try {
    const formattedHistory = history
      .filter((msg) => msg.content && msg.content.trim() !== "")
      .map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      }));

    const messages = [
      ...formattedHistory,
      { role: "user", content: userQuery.trim() },
    ];

    //

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error(
      "Lumi AI API Error Details:",
      error.response?.data || error.message,
    );
    throw error;
  }
}
