function exibirTexto(doc, texto){
    let campo = document.querySelector(doc);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de  1 a 10:');

function verificarChute(){
console.log("O chute foi executado")
};