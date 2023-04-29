let button = document.querySelector("button");
let textArea = document.querySelector("textArea");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let speak = new SpeechSynthesisUtterance(textArea.value);
  speechSynthesis.speak(speak);
});
