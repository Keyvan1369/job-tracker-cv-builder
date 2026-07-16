import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const askAI = async (
  action,
  data,
  token
) => {

  const response = await axios.post(

    `${API}/ai`,

    {
      action,
      data,
    },

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

  );

  return response.data;

};


export const improveSection = (
  section,
  text,
  token
) => {

  return askAI(

    "improve-section",

    {
      section,
      text,
    },

    token

  );

};
export const checkATS = async (

    resume,

    jobDescription,

    token

) => {

    return askAI(

        "ats-checker",

        {

            resume,

            jobDescription

        },

        token

    );

};