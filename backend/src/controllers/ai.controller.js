import { askAI } from "../services/ai/provider.js";

import { resumeAnalysisPrompt } from "../prompts/resumeAnalysis.prompt.js";

import { improveSectionPrompt } from "../prompts/improveSection.prompt.js"

export const aiEngine = async (req, res) => {

    try {

        const { action, data } = req.body;

        let systemPrompt = "";
        let userPrompt = "";

        switch (action) {

            case "resume-score":

                systemPrompt = resumeAnalysisPrompt;

                userPrompt = JSON.stringify(data, null, 2);

                break;

            case "improve-section":

                systemPrompt = improveSectionPrompt;

                userPrompt = `
                Section:
                ${data.section}

                Current text:
                ${data.text}
                `;

                break;





            default:

                return res.status(400).json({

                    message: "Unknown AI action"

                });

        }

       const response = await askAI(

    systemPrompt,

    userPrompt

);


// برای بازنویسی متن
if (action === "improve-section") {

    return res.json({

        text: response

    });

}


// برای تحلیل رزومه
return res.json(

    JSON.parse(response)

);


        res.json(

            JSON.parse(response)

        );

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: error.message

        });

    }

};