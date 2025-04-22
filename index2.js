const texto = "Bom meu amor, como estamos de saída, que tal fazermos uma brincadeirinha antes de irmos até o sushi? 🍣😁";
const texto2 = "A brincadeira será assim... Serão feitas a ti, 4 perguntas. Cada pergunta terá 4 alternativas, se escolher a alternativa correta, nos levará há um local em que terá um pedaço de um mapa do tesouro! Eai, preparada? 😎🤪";
const elemento = document.getElementById("frase");
const elemento2 = document.getElementById("frase2");
const tocarAudioBtn = document.getElementById("tocarAudio");
const brincarBtn = document.querySelector("button[onclick]");
const audio = document.getElementById("audio");
const audio2 = document.querySelectorAll("audio")[1];

// Função para digitar texto com efeito de máquina de escrever
async function digitarTexto(texto, elemento, velocidade = 50) {
  for (let i = 0; i < texto.length; i++) {
    elemento.innerHTML += texto.charAt(i);
    await new Promise(resolve => setTimeout(resolve, velocidade));
  }
}

// Ao clicar no botão de coração
tocarAudioBtn.addEventListener("click", async () => {
  audio.play();
  tocarAudioBtn.style.display = "none";
  await digitarTexto(texto, elemento);

  // Esconde a primeira frase
  await new Promise(resolve => setTimeout(resolve, 500)); // pequena pausa
  elemento.innerHTML = "";

  // Começa a digitar a segunda frase com som
  audio2.play();
  await digitarTexto(texto2, elemento2);

  // Exibe o botão brincar com animação
  brincarBtn.classList.add("show", "piscar");
});
