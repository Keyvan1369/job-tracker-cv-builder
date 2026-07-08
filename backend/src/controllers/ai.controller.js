import { askAI } from "../services/ai/provider.js";
import { resumeScorePrompt } from "../prompts/resumeScore.prompt.js";

export const aiEngine = async (req, res) => {
  try {
    const { action, data } = req.body;

    let systemPrompt;
    let userPrompt;

    switch (action) {
      case "resume-score":
        systemPrompt = resumeScorePrompt;
        userPrompt = JSON.stringify(data, null, 2);
        break;

      default:
        return res.status(400).json({
          message: "Unknown AI action",
        });
    }

    const response = await askAI(
      systemPrompt,
      userPrompt
    );

    res.json(JSON.parse(response));

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};