x = 0;
y = 0;

drawApple = "";

var screenWidth = 0;
var screenHeight = 0;

var apple = "";

var speakData = "";
var toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple.loadImage("apple.png")
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

    to_Number = Number(content);
    if(Number.IsInteger(to_number)){
      document.getElementById("status").innerHTML = "A maçã começou a ser desenhada"
      drawApple = "set"
    }
    else{
      document.getElementById("status").innerHTML = "O número nçao foi reconhecido"
    }

  }

function setup() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  createCanvas(screenWidth, screenHeight-150);
  canvas.position(75, 150);
}

function draw() {
  if(drawApple == "set")
  {
    
   
    for(var i = 1; i <= to_number; i++);
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      Image(apple, x, y, 50, 50);

    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
   
    speakData = to_number + " maçãs desenhadas";
    speak();
    drawApple = "";
    
      
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}




