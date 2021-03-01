//Exercícios de interpretação de código
//EXERCÍCIO 1

// a) 10 e 50
// b) Ele chegaria aos dois resultados da letra A, mas não
//imprimiria no console.

//EXERCICIO 2

// a) Serão impressos os nomes Darvas e Caio
// b) Amanda e Caio

//EXERCÍCIO 3

// Ela pega valores pares de um array e adiciona no array final
// É uma função não nomeada, mas a variável associada poderia se chamar: novaArray

// Exercícios de escrita de código
//EXERCICIO 4

// a)

// function infosMinhas() {
//     const nome ="Laís"
//     const idade = 29
//     const cidade = "Recife"
//     const ocupacao = "Estudante"
//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + ocupacao)
// }

// infosMinhas()

// b)
// const nome = prompt("Qual o seu nome?")
// const idade = Number(prompt("Qual a sua idade"))
// const cidade = prompt("Onde você mora?")
// let ocupacao = Boolean(prompt("Você é estudante? Responda S para sim e N para não"))

// function infosUsuario() { 
    
//     if (ocupacao === true) {
//         ocupacao = " eu sou estudante"
//     } else {
//         ocupacao = " eu não sou estudante"
//     }
//     console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade  + ocupacao)
// }

// infosUsuario()

// EXERCICIO 5
// a)

// function somaDoisNumeros (num1, num2) {
//     const soma = num1 + num2
//     return soma
// }
// let resultado = somaDoisNumeros(5,3)
// console.log(resultado)

// b
// function qualMaior (num1, num2) {
//     if (num1 >= num2) {
//         return true
//     } else {
//         return false
//     }
// }

// let resultado = qualMaior(8,69)
// console.log(resultado)

// c 

let string = prompt("Escreva uma frase")

function fraseDezVezes (string) {
    let imprime10 = (string)*10
    return imprime10
}

let frase = fraseDezVezes()
console.log(frase)

