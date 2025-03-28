// Função para simular o efeito de máquina de escrever

let audio = document.querySelector('#audio');
        audio.volume = 0.7; // Ajuste o volume (0 a 1)

        // Função que toca o áudio no toque
        function tocarAudio() {
            audio.play().catch(function(error) {
                console.log('Erro ao tentar reproduzir o áudio: ', error);
            });
        }

        // Adiciona o evento de toque (touchstart) para dispositivos móveis e clique (click) para desktop
        document.body.addEventListener('click', tocarAudio);  // Para desktop
        document.body.addEventListener('touchstart', tocarAudio);  // Para 


function typingEffect(element, text, speed, callback) {
    
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Chama a função de callback (se fornecida)
        }
    }
    type();
}

// Função para exibir o restante da página após 5 segundos da escrita do <h2>
function showRestOfPage() {
    // Após 5 segundos, exibe o resto da página
    setTimeout(function() {
        document.querySelector('.carrossel').style.display = 'block'; // Exibe o carrossel
        document.querySelector('#mensagem').style.display = 'block'; // Exibe a mensagem
        document.querySelector('#botao-estilizado').style.display = 'block';
    }, 5000);
}

// Função para atualizar o contador de tempo (data inicial)
function atualizarContagem() {
    let dataInicial = new Date("2024-01-03T19:30:30"); // Defina sua data inicial aqui
    let agora = new Date();

    let diferenca = agora - dataInicial;

    let segundos = Math.floor(diferenca / 1000) % 60;
    let minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    let horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `Agora fazem ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos...`;
}

// Mostrar o contador logo que a página for carregada
document.querySelector('#contador').innerText = atualizarContagem();

// Exibir o <h2> com efeito de máquina de escrever após 7 segundos
setTimeout(function() {
    const textoH2 = "que eu namoro a pessoa mais maravilhosa do universo e que eu amo demaaais! ❤️";
    document.querySelector('#inicio h2').style.display = 'block'; // Exibe o <h2> (inicialmente oculto)
    typingEffect(document.querySelector('#inicio h2'), textoH2, 100);
    
}, 7000);

// Exibir o restante da página após 5 segundos do <h2> aparecer
setTimeout(function() {
    showRestOfPage();
}, 12000);

// Ajustar o volume do áudio
 // Volume de 0 (silêncio) a 1 (volume máximo)

// Atualizar o contador a cada segundo
setInterval(function() {
    const textoContadorAtualizado = atualizarContagem();
    document.querySelector('#contador').innerHTML = textoContadorAtualizado; // Atualiza o contador
}, 1000);

// Controle de slides (carrossel)
document.addEventListener("DOMContentLoaded", function () {
    let indice = 0;
    const imagens = document.querySelector('.imagens');
    const imagensArray = document.querySelectorAll('.imagens img');
    const totalImagens = imagensArray.length;

    function mudarSlide(direcao) {
        indice += direcao;

        // Se o índice for menor que 0 (antes da primeira imagem), vai para a última imagem
        if (indice < 0) {
            indice = totalImagens - 1;
        } 
        // Se o índice for igual ou maior que o total de imagens, vai para a primeira imagem
        else if (indice >= totalImagens) {
            indice = 0;
        }

        // Aplica o efeito de transição suave
        imagens.style.transition = 'transform 0.5s ease'; // Transição suave
        imagens.style.transform = `translateX(${-indice * 300}px)`; // Move a imagem de acordo com o índice

        // Após a transição, removemos a transição para que o próximo slide não tenha a animação suave
        setTimeout(function() {
            imagens.style.transition = ''; // Remove a transição após o movimento
        }, 500); // Tempo que deve coincidir com a duração da transição
    }

    // Troca automática a cada 3 segundos
    setInterval(() => mudarSlide(1), 3000);
});


function jogo () {
    alert('Preparada nem?!');
    window.location.href = 'jogo.html';
}