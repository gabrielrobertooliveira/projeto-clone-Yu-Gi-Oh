const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0

function esconderCartaoSelecionado() {
    const cartaSelecioando = document.querySelector(".selecionado");
    cartaSelecioando.classList.remove("selecionado");
}

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function(){
    if(cartaoAtual===cartoes.length-1){return};
    esconderCartaoSelecionado();
    cartaoAtual ++;
    mostrarCartao();    
});

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual===0){return};
    esconderCartaoSelecionado();
    cartaoAtual --;
    mostrarCartao();
});


cartoes.forEach(cartao => {
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada");

        //virar o cartão
        cartao.classList.toggle("virar");
        // mostrar carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder")
    });
});