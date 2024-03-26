let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(doc, texto){
    let campo = document.querySelector(doc);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de  1 a 10:');

function verificarChute(){
 let chute = document.querySelector( "input" ).value;
 console.log(numeroSecreto == chute);
};

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 +1);
}