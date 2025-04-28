const imagem = document.getElementById('imagem-aparente');

// Caminhos das imagens
const imagem1 = "lampada-off.jpg";
const imagem2 = "lampada-on.jpg";

imagem.addEventListener('click', function() {
  if (imagem.src.includes(imagem1)) {
    imagem.src = imagem2;
  } else {
    imagem.src = imagem1;
  }
});