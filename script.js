const frase = "Olá meu amor!❤️ Preparada novamente? kskskskskks Aproxima o rosto para confirmar que você é a muié mais LINDA do mundo! 😁😌😍";
const fraseEl = document.getElementById("frase");
const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");

async function digitarTexto(texto, elemento, velocidade = 60) {
  for (let i = 0; i < texto.length; i++) {
    elemento.innerHTML += texto.charAt(i);
    await new Promise(resolve => setTimeout(resolve, velocidade));
  }
}

async function iniciar() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    console.log("Câmera iniciada.");
  } catch (e) {
    console.error("Erro ao acessar câmera:", e);
    alert("Erro: " + e.message);
  }
}

iniciar();

async function carregarModelos() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('models/tiny_face_detector');
  await faceapi.nets.faceLandmark68Net.loadFromUri('models/face_landmark_68');
  await faceapi.nets.faceRecognitionNet.loadFromUri('models/face_recognition');
}

async function carregarReferencia() {
  const img = await faceapi.fetchImage('referencia.png');
  const deteccao = await faceapi
    .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!deteccao) {
    console.error("❌ Nenhum rosto detectado na imagem de referência.");
    return null;
  }

  console.log("✅ Rosto da referência detectado:", deteccao);
  return new faceapi.LabeledFaceDescriptors('Pessoa', [deteccao.descriptor]);
}

async function reconhecerRosto(referencia) {
  if (!referencia) {
    console.error("Sem referência de rosto para comparar.");
    return;
  }

  const faceMatcher = new faceapi.FaceMatcher(referencia, 0.7); // ou até 0.75

  video.addEventListener('play', () => {
    const intervalo = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resultados = detections.map(d =>
        faceMatcher.findBestMatch(d.descriptor)
      );

      console.log(resultados); // 👈 Veja aqui o que está sendo detectado

      if (resultados.some(res => res.label === 'Pessoa')) {
        clearInterval(intervalo);
        audio.play();
        playBtn.style.display = "inline-block";
      }
    }, 1000);
  });
}

// Aguarda 2 segundos após o carregamento da página antes de iniciar a animação do texto
(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Pausa de 2 segundos
  await digitarTexto(frase, fraseEl);
  await carregarModelos();
  const referencia = await carregarReferencia();
  await iniciar();
  await reconhecerRosto(referencia);
})();
