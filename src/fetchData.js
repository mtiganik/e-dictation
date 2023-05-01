import axios from "axios";

const text = "Genereeri eestikeelne E-etteütluse teksti, 5 paragraphiline, teemal: "

const model = ["text-davinci-002","gpt-3.5-turbo"]
const FetchData = async (input) => {

  const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `"${text}" "${input}"`,
        model: model[0],
        max_tokens: 500,
        n: 1 
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