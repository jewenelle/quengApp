//second teller
const inputKey = document.getElementById("trigger2");
const pN = document.querySelector(".priorityNum");

let Value = 0;
inputKey.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 105) {
    pN.innerText = 1 + Value++;
    inputKey.value = "";
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
    let textToSpeak = "number" + Value + "please give to daisy sagario";
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
