function atualizarContagem() {
        
    let dataInicial = new Date("2024-01-03T00:00:00"); 
    let agora = new Date();

    let diferenca = agora - dataInicial;

    let segundos = Math.floor(diferenca / 1000) % 60;
    let minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    let horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerText =
        `Agora fazem ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem(); 

document.addEventListener("DOMContentLoaded", function () {
    let indice = 0;
    const imagens = document.querySelector('.imagens');
    const imagensArray = document.querySelectorAll('.imagens img');
    const totalImagens = imagensArray.length;

    function mudarSlide(direcao) {
        indice += direcao;

        if (indice < 0) {
            indice = totalImagens - 1;
        } else if (indice >= totalImagens) {
            indice = 0;
        }

        imagens.style.transform = `translateX(${-indice * 300}px)`;
    }

    // Troca automática a cada 3 segundos
    setInterval(() => mudarSlide(1), 3000);
});
