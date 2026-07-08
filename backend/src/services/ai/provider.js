import { askGroq } from "./groq.provider.js";
import { askOpenAI } from "./openai.provider.js";

const provider = process.env.AI_PROVIDER;

export const askAI = async (
    systemPrompt,
    userPrompt
) => {

    switch (provider) {

        case "groq":
            return askGroq(
                systemPrompt,
                userPrompt
            );

        case "openai":
            return askOpenAI(
                systemPrompt,
                userPrompt
            );

        default:
            throw new Error(
                "Unknown AI Provider"
            );

    }

};