let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarConsole(){
console.log("O console foi Clicado");
};

function alertarJs(){
alert("Eu amo Js")
};

function pedirCidade(){
let cidade = prompt("Digite o nome de uma cidade: ");
alert("Estive em " + cidade + " e lembrei de você!");
};

function fazerSoma(){
    let numero1 = prompt("Digite o primeiro número: ");
    let numero2 = prompt("Digite o segundo número: ");
    let soma = parseInt(numero1) + parseInt(numero2);
    alert("A soma de " + numero1 + " e " + numero2 + " é igual a: "+ soma);
}