const perguntas = [
    {
      texto: "Bom... Falando do nosso início, a primeira pergunta é: Local onde tivemos o nosso primeiro beijo?😘",
      audio: "a3.mp3",
      respostas: [
        "a) No mato? 🌾🤣",
        "b) No IFPI? 🏢",
        "c) No quarto teu? 🛌👀",
        "d) Em Recife? 🏖️☀️"
      ],
      correta: 2
    },
    {
      texto: "Sou alto, de metal, cinza, possuo o nome de uma instituição, e fico na beira de uma pista. Quem eu sou? 🤔",
      audio: "a4.mp3",
      respostas: [
        "a) Loja 🏬",
        "b) Quadro de pintar 🖼️",
        "c) Outdoor 📟",
        "d) Placa do Ifpi"
      ],
      correta: 3
    },
    {
      texto: "Sou um lugar que por vezes fui a garagem de uma moto que passava a madrugada fora... 🏍️",
      audio: "a5.mp3",
      respostas: [
        "a) Ponte 🌉",
        "b) Oficina 🧰",
        "c) Mercado do cruzeiro 🏟️",
        "d) Rio Parnaíba 🚤"
      ],
      correta: 2
    },
    {
      texto: "Lugar que pode acontecer (ou não) uma surpresa... ps: tenho comida 🤣",
      audio: "a6.mp3",
      respostas: [
        "a) Oriental Sushi ⛩️",
        "b) Mr Sports ⚽🏈",
        "c) Conviver 🏘️",
        "d) Igreja ⛪"
      ],
      correta: 0
    }
  ];
  
  let indiceAtual = 0;
  const musicaFundo = document.getElementById("musicaFundo");
  const audioPergunta = document.getElementById("audioPergunta");
  const perguntaEl = document.getElementById("pergunta");
  const respostasEl = document.getElementById("respostas");
  
  musicaFundo.volume = 0.4;
  musicaFundo.play();
  
  function mostrarPergunta(index) {
    perguntaEl.innerHTML = "";
    respostasEl.innerHTML = "";
  
    const pergunta = perguntas[index];
    audioPergunta.src = pergunta.audio;
    audioPergunta.play();
  
    digitarTexto(pergunta.texto, perguntaEl, 40).then(() => {
      pergunta.respostas.forEach((resposta, i) => {
        const div = document.createElement("div");
        div.textContent = resposta;
        setTimeout(() => {
          div.classList.add("mostrar");
        }, i * 300);
  
        div.addEventListener("click", () => {
          if (i === pergunta.correta) {
            indiceAtual++;
            if (indiceAtual < perguntas.length) {
              mostrarPergunta(indiceAtual);
            } else {
              perguntaEl.textContent = "FIM 😍";
              respostasEl.innerHTML = "";
            }
          } else {
            div.classList.add("errada");
          }
        });
  
        respostasEl.appendChild(div);
      });
    });
  }
  
  function digitarTexto(texto, elemento, velocidade = 50) {
    return new Promise(resolve => {
      let i = 0;
      const intervalo = setInterval(() => {
        elemento.innerHTML += texto.charAt(i);
        i++;
        if (i === texto.length) {
          clearInterval(intervalo);
          resolve();
        }
      }, velocidade);
    });
  }
  
  // Iniciar a primeira pergunta
  mostrarPergunta(indiceAtual);
  