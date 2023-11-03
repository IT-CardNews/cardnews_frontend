import OpenAI from "openai";
import imgCreate from "./createImg";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

export default async function summarizeText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. createa a news title that's short, powerful and key ",
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.7,
      max_tokens: 150, // Adjust as needed
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const aiResponse = response.choices[0].message.content;

    const newsResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Summarize this news in five sentences. ",
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.7,
      max_tokens: 150, // Adjust as needed
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const aiNews = newsResponse.choices[0].message.content;
    const news = imgCreate(aiResponse, aiNews);
    return news;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error; // It's often better to throw the error so the calling function knows something went wrong
  }
}
