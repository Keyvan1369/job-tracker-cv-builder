import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const askAI = async (
  action,
  data,
  token
) => {

  const response = await axios.post(

    `${API}/api/ai`,

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