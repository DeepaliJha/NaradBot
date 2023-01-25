const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

// openAI integration function
let openAI = (prompt)=>{
    let response = ''
    async function runCompletion () {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt
        });
        response = (completion.data.choices[0].text);
    }
        
    runCompletion();
    return response
}

let ques = 'good places to visit in kurukshetra'
let res = openAI(ques)
console.log(res)