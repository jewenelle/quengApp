//second teller
input2.addEventListener("keydown", (e) => {
  input2.classList.add("hide");
  head2.classList.add("wobble");
  const headAnumation = () => {
    head2.classList.remove("wobble");
  };
  setTimeout(headAnumation, 1500);

  console.log(e);
  if (e.keyCode === 97) {
    heading2.innerText = 1 + tell2num++;

    input2.value = "";
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

    let textToSpeak = "number" + tell2num + "on teller one";

    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 1; // From 0.1 to 10
    speakData.pitch = 3; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = "en";
    speakData.voice = getVoices()[0];

    speechSynthesis.speak(speakData);
  }
  e.preventDefault();
});
