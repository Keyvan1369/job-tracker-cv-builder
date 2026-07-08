import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askAI = async (systemPrompt, userPrompt) => {
  const response = await client.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  return response.output_text;
};