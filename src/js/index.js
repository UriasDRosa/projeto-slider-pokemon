const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarNovoCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    esconderCartaoSelecionado();
    cartaoAtual = 0;
    mostrarNovoCartao(cartaoAtual);
  } else {
    cartaoAtual++;
    mostrarNovoCartao(cartaoAtual);
    esconderCartaoSelecionado();
  }
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    esconderCartaoSelecionado();
    cartaoAtual = cartoes.length - 1;
    mostrarNovoCartao(cartaoAtual);
  } else {
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarNovoCartao(cartaoAtual);
  }
});
