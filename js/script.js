function olaMundo(){
    alert("Olá Mundo")
}

function mostraNome(){
    let nome = prompt("Por favor, digite seu nome:");
    console.log ("Seu nome é: " + nome);
}

function concatenaPalavras(){
    let n1 = prompt("Digite a primeira palavra:");
    let n2 = prompt("Digite a segunda palavra:");
    console.log (n1 + n2);
}

function somaNumeros(){
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let soma= n1 + n2;
    console.log (soma);
}

function subtraiNumeros(n1, n2) {
    return n1 - n2;
  }
  
function callsubtraiNumeros(){
    let n1 = 10;
    let n2 = 5;
  
    let resultado = subtraiNumeros(n1, n2);
    console.log("O resultado da subtração é: " + resultado);
}

function criaObjeto(){
    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
    let time = prompt("Digite seu time favorito:");
    let pessoa = {
        nome,
        idade,
        time
    };
    console.log (pessoa);
}

function calculadora(){
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let op = prompt("Qual operação você deseja realizar?");

    switch(op){
         case "soma":
            let soma= n1 + n2;
            console.log (soma);
        break;

        case "subtração":
            let sub= n1 - n2;
            console.log (sub);
        break;

        case "multiplicação":
            let mult= n1 * n2;
            console.log (mult);
        break;

        case "divisão":
            let div= n1 / n2;
            console.log (div);
        break;
    }
}
// NÃO FUNCIONOU
// function mudaConstante(){
//     const nome23 = prompt("Digite seu nome:");
//     console.log (nome23);
//     const nome23 = prompt("Digite seu nome novamente:");
//     console.log (nome23);
// }

function manipulaArrays() {
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];
    console.log (cores);

    cores.push("laranja");
    console.log (cores);

    cores.pop();
    console.log (cores);

    cores.sort();
    console.log (cores);

    cores.splice(1, 1);
    console.log (cores);

    console.log (cores.length);
    console.log(cores[0] + " e " + cores[10]);

    cores.push("fucsia");
    console.log (cores);

    cores.shift(2)
    console.log (cores);
}
  
 
  