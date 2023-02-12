const heading = document.querySelector(".h1");
const tellerTwo = document.querySelector(".h2");

const heading3 = document.querySelector(".h3");
const input = document.getElementById("trigger");

const input3 = document.getElementById("trigger3");
const head = document.getElementById("tell");

const tell2head = document.getElementById("tell2");
const inputKey = document.getElementById("trigger2");
const pN = document.querySelector(".priorityNum");

let Value = 0;
let num = 0;
input.addEventListener("keydown", (e) => {
  if (e.keyCode === 97 || e.keyCode === 98) {
    input.classList.add("hide");
    head.classList.add("wobble");
    const headAnumation = () => {
      head.classList.remove("wobble");
    };
    setTimeout(headAnumation, 1500);
    heading.innerText = 1 + num++;

    //let tellerKey = e.keyCode === 97 || e.keyCode === 98;
    input.value = "";
    console.clear();

    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);

    function getVoices() {
      let voices = speechSynthesis.getVoices();
      if (!voices.length) {
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);

        voices = speechSynthesis.getVoices();
        //head.classList.add("bounce");
      }
      return voices;
    }

    //let textToSpeak = "number" + num + "on teller one";
    if (e.keyCode === 97) {
      head.innerText = `TELLER 2`;
      let textToSpeak = "number" + num + "to payment two";
      let speakData = new SpeechSynthesisUtterance();
      speakData.volume = 1; // From 0 to 1
      speakData.rate = 1; // From 0.1 to 10
      speakData.pitch = 3; // From 0 to 2
      speakData.text = textToSpeak;
      speakData.lang = "en";
      speakData.voice = getVoices()[0];

      speechSynthesis.speak(speakData);
    } else if (e.keyCode === 98) {
      head.innerText = `TELLER 3`;
      let textToSpeak = "number" + num + "to payment three";
      let speakData = new SpeechSynthesisUtterance();
      speakData.volume = 1; // From 0 to 1
      speakData.rate = 1; // From 0.1 to 10
      speakData.pitch = 3; // From 0 to 2
      speakData.text = textToSpeak;
      speakData.lang = "en";
      speakData.voice = getVoices()[0];

      speechSynthesis.speak(speakData);
    }
  } else if (e.keyCode === 105) {
    tell2head.classList.add("swing");
    const headAnimation = () => {
      tell2head.classList.remove("swing");
    };
    setTimeout(headAnimation, 1500);
    pN.innerText = 1 + Value++;
    //inputKey.value = "";
    console.clear();

    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);

    function getVoices() {
      let voices = speechSynthesis.getVoices();
      if (!voices.length) {
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);

        voices = speechSynthesis.getVoices();
        //head.classList.add("bounce");
      }
      return voices;
    }

    //let textToSpeak = "number" + num + "on teller one";
    let textToSpeak = "number" + Value + "to priority lane";
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 3; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = "en";
    speakData.voice = getVoices()[0];

    speechSynthesis.speak(speakData);
  } else {
    console.error;
  }

  e.preventDefault();
});

///
/* let utterance = new SpeechSynthesisUtterance("number" + num);
speechSynthesis.speak(utterance);

function getVoices() {
  let voices = speechSynthesis.getVoices();
  if (!voices.length) {
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  return voices;
}

let textToSpeak = "number" + num;

let speakData = new SpeechSynthesisUtterance();
speakData.volume = 1; // From 0 to 1
speakData.rate = 1; // From 0.1 to 10
speakData.pitch = 2; // From 0 to 2
speakData.text = textToSpeak;
speakData.lang = "en";
speakData.voice = getVoices()[0];

speechSynthesis.speak(speakData); */
