const { response } = require('express');
const express = require('express')
const port = 3000
const app = express()
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

// template engine
app.set('view engine', 'ejs')

// openAI integration function
let openAI = (prompt)=>{
    let response = ''
    async function runCompletion () {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
        });
        response = (completion.data.choices[0].text);
    }
        
    runCompletion();
    return response
}

app.get('/', openAI, (req, res)=>{     
    res.render('home')
})

app.get('/chatbot', (req, res)=>{
    res.render('chatbot')
})

app.listen(port, ()=>{
    console.log(`Chatbot running at http://127.0.0.1:${port}`)
})