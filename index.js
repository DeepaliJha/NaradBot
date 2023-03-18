let mic = document.getElementById("mic");
let chatareamain=document.querySelector('.chatarea-main')
let chatareaouter=document.querySelector('.chatarea-outer')
let intro=["hello ,I am NaradBot","Hi ,I am a Robo", "Hello ,My name is NaradBot"];
let help=["How may i assist you?","How can I help you?","what can I do for you?"];
let places=["Taj Mahal in Agra,Qutub Minar in Delhi,Golden Temple in Amritsar"]
let thank=["Most Welcome","Not an issue","Its my pleasure","Mention Not"];
let closing=["Ok bye-bye","As you wish, bye take-care","bye-bye ,see you soon..."];
let tourist=["Make My Trip , trip Advisor, expedia.com,agoda.com"]
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
function showusermsg(usermsg){
    let output='';
    output+=`<div class="chatarea-inner user">${usermsg}</div>`
    chatareaouter.innerHTML+=output;
    return chatareaouter;
}
function showchatbotmsg(chatbotmsg){
    let output='';
    output+=`<div class="chatarea-inner chatbot">${chatbotmsg}</div>`
    chatareaouter.innerHTML+=output;
    return chatareaouter;
}
function chatbotvoice(message){ 
  const speech = new SpeechSynthesisUtterance();
  speech.text="Sorry ,I can't help";
  if (message.includes('who are you')){
    let finalresult=intro[Math.floor(Math.random()* intro.length)]
    speech.text=finalresult
  }
  if (message.includes('help') || message.includes('hi') || message.includes('hello')){
    let finalresult=help[Math.floor(Math.random()* intro.length)]
    speech.text=finalresult
  }
  if (message.includes('places')){
    let finalresult=places[Math.floor(Math.random()*places.length)]
    speech.text=finalresult
  }
  if (message.includes('Website')){
    let finalresult=tourist[Math.floor(Math.random()*places.length)]
    speech.text=finalresult
  }
  if (message.includes('capital')){
    let finalresult="The capital of India is New Delhi";
    speech.text=finalresult
  }
  if (message.includes('capital')){
    let finalresult="The capital of India is Delhi";
    speech.text=finalresult
  }
  if (message.includes('explore') || message.includes('exploring')){
    let finalresult="Let,s explore India,India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.";
    speech.text=finalresult
  }
  
  window.speechSynthesis.speak(speech)
  chatareamain.appendChild(showchatbotmsg(speech.text))
}

recognition.onresult=function(e)
{
    let resultIndex=e.resultIndex;
    let transcript=e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript))
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click",function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})






