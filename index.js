let mic = document.getElementById("mic");
let chatareamain=document.querySelector('.chatarea-main')
let chatareaouter=document.querySelector('.chatarea-outer')
let intro=["hello ,I am NaradBot","Hi ,I am a Robo", "Hello ,My name is NaradBot"];
let help=["How may i assist you?","How can I help you?","what can I do for you?"];
let places=["Taj Mahal in Agra,Qutub Minar in Delhi,Golden Temple in Amritsar"]
let thank=["Most Welcome","Not an issue","Its my pleasure","Mention Not"];
let closing=["Ok bye-bye","As you wish, bye take-care","bye-bye ,see you soon..."];
let tourist=["Make My Trip , trip Advisor, expedia.com,agoda.com" ]
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






