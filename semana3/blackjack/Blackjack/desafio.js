

console.log ("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Vamos começar!")
} else {
   console.log("Ok, volte mais tarde")
}

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
const cartau1 = comprarCarta() // Primeira carta do usuário
const cartau2 = comprarCarta() // Segunda carta do usuário
const cartac1 = comprarCarta() // Primeira carta do computador
const cartac2 = comprarCarta() // Segunda carta do computador

// Exercicio 8
if (cartau1 === "A" && cartau2 === "A") {
   cartau1 = comprarCarta()
   cartau2 = comprarCarta()
   // console.log ("Deu ases, vamor sortear novamente!")
} else if (cartac1 === "A" && cartac2 === "A") {
   cartac1 = comprarCarta()
   cartac2 = comprarCarta()
   // console.log ("Deu ases, vamor sortear novamente!")
}
// Arrays para guardar as cartas
let cartaUsuario = [cartau1.texto, cartau2.texto]
let cartaUsuarioValor = [cartau1.valor, cartau2.valor]

let cartaComp =[cartac1.texto]
let cartaCompValor = [cartac1.valor]

let resultadoU = cartau1.valor + cartau2.valor
let resultadoC = 0

// Execício 9 e 10
while (confirm("Suas cartas são: " + cartaUsuario + ". A carta revelada do computador é:  " + cartac1.texto + "." +"\n"+  // \n faz pular a linha
"Deseja comprar mais uma carta?") == true ) {
   
   let novaCarta = comprarCarta()
   cartaUsuario.push(novaCarta.texto)
   cartaUsuarioValor.push(novaCarta.valor)
   resultadoU += novaCarta.valor
   console.log(resultadoU)
   if(resultadoU >= 21) {
      console.log("Sua pontuação é igual ou maior a 21 pontos, agora é a vez do computador. Aperte Cancelar")
   }
}
console.log(cartaUsuario.length)

// Exercico 11 Add as cartas do computador
for (let i=0; i< (cartaUsuario.length -1); i++) {
   let novaCartaC = comprarCarta()
   cartaComp.push(novaCartaC.texto)
   cartaCompValor.push(novaCartaC.valor)
}


// Calculo do resultado do computador
for (let i = 0; i < cartaUsuario.length; i++){
   resultadoC += cartaCompValor[i]
}

// Exercicio 12
console.log ("Suas cartas são: "+ cartaUsuario + ". Sua pontuação é: " + resultadoU)
console.log("As cartas do Computador são: " + cartaComp + ". A pontuação do computador é: " + resultadoC)

if (resultadoU > 21) {
   console.log ("Você perdeu o jogo!")
}else if (resultadoC == 21 && resultadoU < 21) {
   console.log ("Você perdeu o jogo!")
} else if (resultadoC > 21 && resultadoU <= 21) {
   console.log ("Você ganhou!")
} else if (resultadoU == resultadoC) {
   console.log ("Você empatou com o computador!")
}
