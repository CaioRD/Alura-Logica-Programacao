//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
console.log("Olá, Mundo!");
};
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(){
    let nome = prompt( "Digite seu nome:");
    console.log( `Olá, ${nome}!`);
};
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function  dobrarNumero() {
    let num = parseInt (prompt ("Digite um número:"));
    return num * 2;
};
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumero(){
    let num1 = parseInt (prompt("Digite o primeiro valor:"));
    let num2 = parseInt (prompt("Digite o segundo valor:"));
    let num3 = parseInt (prompt("Digite o terceiro valor:"));
    let media = num1 + num2 + num3 / 3;
    return console.log(`A média é de ${media}`);
};
//riar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(){
    let n1=parseInt(prompt('Insira o Primeiro Valor'));
    let n2=parseInt(prompt('Insira o Segundo Valor'));
    
    if(n1>n2){
        return console.log (`${n1} é Maior`)
    }else{
        return console.log (`${n2} é Maior`)
    };
    
}
//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradoNumero(){
    let numero = parseInt(prompt( 'Digite um Numero' ) );
    let resultado = numero*numero;
    console.log(resultado)
}