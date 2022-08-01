/*

OBJETIVO 1 - Quando clicarmos a seta de avançar devemos mostrar o próximo cartão da lista.
    Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar.
    Passo 2 - Dar um jeito de identificar o clicar na seta avançar.
    Passo 3 - Fazer aparecer o próximo cartão da lista.
    Passo 4 - Buscar o cartão que está selecionado e esconder.

OBJETIVO 2 - Quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista.
    Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar.
    Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar.
    Passo 3 - Fazer aparecer o cartão anterior da lista.
    Passo 4 - Buscar o cartão que está selecionado e esconde-lo.

*/

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
