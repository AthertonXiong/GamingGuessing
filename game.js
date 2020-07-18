const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();
function getRandomNumber(){
    return Math.floor(Math.random()* 100) + 1;
}
console.log('Number: ' , randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecongnition;

//initalize a new instance of the the window.Speech Recognition Object
let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    const msg = e. results[0] [0].transcript;
    console.log(msg);
    // writeMessage(msg)
    // checkNumber(msg)
}

function writeMessage(msg){
    msgEl.innerHTML =`
        <div> You Said: </div>
        <span class="box"> ${msg} </span>
    `;
}

function checkNumber(msg){
    const num = +msg;
    if(Number.isNaN(num)){
        msgEl.innerHTML += '<div> That is not valid number </div>';
        return;
    }
}

if (num === randomNum){
    document.body.innerHTML = `
    <h2>Congrats! Your guessed the number <br><br>
    It was ${num} </h2>
    <button class="play-again" id="play-again"> Play again </button>
    `;
} else if (num > randomNum){
    msgEl.innerHTML += '<div> Go Lower </div>';
} else {
    msgEl.innerHTML += '<div> Go Higher </div>';
}

recognition.addEventListener('end', ()=> recognition.start());

document.body.addEventListener('click', e=>{
    if(e.target.id == 'play-again'){
        window.location.reload
    }
})
