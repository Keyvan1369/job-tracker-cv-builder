import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export const askGroq = async (
    systemPrompt,
    userPrompt
) => {

    const chatCompletion =
        await groq.chat.completions.create({

            messages: [

                {
                    role: "system",
                    content: systemPrompt,
                },

                {
                    role: "user",
                    content: userPrompt,
                },

            ],

            model: "llama-3.3-70b-versatile",

            temperature: 0.3,

        });

    return chatCompletion
        .choices[0]
        .message
        .content;

};