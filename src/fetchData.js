import axios from "axios";

const text = "Genereeri eestikeelne E-etteütluse teksti, 5 paragraphiline, teemal: "
const API_KEY = "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";

const model = ["text-davinci-002","gpt-3.5-turbo"]
const FetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `"${text}" "${input}"`,
        model: model[0],
        max_tokens: 50,
        n: 1,
        stop: "/t",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log(response)
    return response.data.choices[0].text;
  };
  
  export default FetchData