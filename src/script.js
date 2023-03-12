const recognition = new webkitSpeechRecognition();
const texto = document.getElementById("texto");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

recognition.continuous = true;
recognition.lang = "pt-BR";

startBtn.addEventListener("click", () => {
  texto.innerHTML = ""; // Limpa o conteúdo da div "texto"
  recognition.start();
});

stopBtn.addEventListener("click", () => {
  recognition.stop();
});

recognition.onresult = (event) => {
  const resultado = event.results[event.results.length - 1][0].transcript;
  texto.innerHTML += resultado;
};
