let rodadaAtual = 1;
const totalRodadas = 5;

const perguntas = [
    { pergunta: "Quem que ama dar dedo?🤣", correta: "imagem2", frase: "🤣🤣🤣 tu aaama dar o dedo pra eu momoh!❤️" },
    { pergunta: "Quem é o mais baitola?👀", correta: "imagem1", frase: "🤣🤣🤣 essa tava facil, seu baitolinha!" },
    { pergunta: "Quem é... o mais pessimista?🥴", correta: "imagem2", frase: "Meu neném, é um pessimiiismo todo ksksk" },
    { pergunta: "Quem é que ta doooido pra pedir alguem ali em casamento?? 👀❤️💍", correta: "imagem1", frase: "Eu naão vejo a horaaaaaaaaaaaaaaa😭😭😭😭😭😭😭😭😭😭😭" },
    { pergunta: "Quem é pessoa mais maravilhosa, linda, inteligente, gata, gostosa que existe e que tem o sorriso mais lindo?🤩💖", correta: "imagem2", frase: "Com certeza é você, meu amor!💖" }
];

const perguntaElemento = document.getElementById("pergunta");
const mensagemElemento = document.getElementById("mensagem");
const imagem1 = document.getElementById("imagem1");
const imagem2 = document.getElementById("imagem2");
const jogo = document.querySelector(".jogo");

function atualizarPergunta() {
    if (rodadaAtual > totalRodadas) {
        perguntaElemento.textContent = "Jogo finalizado! 🏆";
        mensagemElemento.textContent = "✅ Todas as rodadas concluídas!";

        // Redireciona para a página fim.html após 3 segundos
        setTimeout(() => {
            window.location.href = "fim.html"; // Substitua pelo link da sua página
        }, 3000);
        
        return;
    }

    perguntaElemento.textContent = perguntas[rodadaAtual - 1].pergunta;
    mensagemElemento.textContent = "";
}

atualizarPergunta();

function verificarResposta(event) {
    let imagemClicada = event.target.id;
    let perguntaAtual = perguntas[rodadaAtual - 1];

    if (imagemClicada === perguntaAtual.correta) {
        somAcerto.play();
        mensagemElemento.textContent = perguntaAtual.frase;
        rodadaAtual++;

        if (rodadaAtual <= totalRodadas) {
            setTimeout(atualizarPergunta, 3000); // Espera 3 segundos antes de atualizar para a próxima pergunta
        } else {
            // Se for a última rodada, redireciona imediatamente
            setTimeout(() => {
                window.location.href = "fim.html"; // Substitua pelo link da sua página
            }, 3000);
        }
    } else {
        afastarImagem(event.target);
    }
}

function afastarImagem(imagem) {
    const jogoWidth = jogo.clientWidth;
    const jogoHeight = jogo.clientHeight;
    const imgWidth = imagem.clientWidth;
    const imgHeight = imagem.clientHeight;

    let novaLeft, novaTop;

    do {
        novaLeft = Math.random() * (jogoWidth - imgWidth);
        novaTop = Math.random() * (jogoHeight - imgHeight);
    } while (Math.abs(novaLeft - parseInt(imagem.style.left || 0)) < 50 && 
             Math.abs(novaTop - parseInt(imagem.style.top || 0)) < 50);

    imagem.style.left = novaLeft + "px";
    imagem.style.top = novaTop + "px";
}

imagem1.addEventListener("click", verificarResposta);
imagem2.addEventListener("click", verificarResposta);
