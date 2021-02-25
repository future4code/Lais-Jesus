// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// O código usa as condicionais if/else para testar se um número é par ou ímpar, se for par ele imprime
// "Passou no teste". Se for ímpar ele imprime "Não passou no teste"

// EXERCÍCIO 2

// a. Serve para indicar o preço da fruta que o usuário quer saber
// b. O preço da fruta Maçã é R$ 2.25
// c.  O preço da fruta é R$5

// EXERCÍCIO 3

// a. Declarando a variável numero e atribuindo a ela o tipo numero porque a pergunta será respondida como string
// b. numero = 10 Esse número passou no teste, numero =-10 Não vai acontecer nada
// c. Sim. Porque a variável mensagem só está definida no escopo do bloco.
// Então ela só existe lá

// **Exercícios de escrita de código**

// EXERCÍCIO 4

const idade = Number(prompt("Qual a sua idade?"))

if ( idade >=18 ) {
    console.log ("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
}

// EXERCÍCIO 5

const turno = prompt("Qual turno do dia você estuda? Escreva M para matutino, V para vespertino e N para noturno")

if  (turno === 'M') {
    console.log("Bom dia!")
} else if (turno === 'V'){
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}
    
// EXERCÍCIO 6

let turno = prompt("Qual turno do dia você estuda? Escreva M para matutino, V para vespertino e N para noturno")
let saudacao

switch (turno) {
    case 'M':
        saudacao = "Bom dia!"
        break;
    case "V" :
        saudacao = "Boa tarde!"
        break;
    case "N" :
        saudacao = "Boa noite!"
        break;
    default:
        saudacao = "Bom dia Brasil, boa tarde Itália"
        break;
}

console.log(saudacao)

// EXERCÍCIO 7

const genero = prompt("Qual gênero vamos assistir?")
const valorIngresso = prompt("Qual o preço do ingresso (R$)?")

if (genero === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}









