const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(e) {
  voices = e.target.getVoices();
  const voiceOptions = voices
    .map((voice) => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice(e) {
  msg.voice = voices.find((voice) => voice.name === e.target.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption(e) {
  console.log(e.target.name, e.target.value);
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
// Day23 13:13
