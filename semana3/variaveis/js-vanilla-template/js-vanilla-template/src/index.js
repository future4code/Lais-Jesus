// Exercício de interpretação de código

// 1. a = 10 b = 20
// 2. a = 20 b = 10 c = 10

// Exercício de escrita de código
// Exercício 1
let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

//d) Foi impresso undefined porque eu não atribui nenhum valor as variáveis
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual a sua idade?")

console.log (typeof nome)
console.log (typeof idade)
// e) Ele disse que o tipo das duas variáveis são strings, mesmo eu colocando numero na idade

console.log ("Olá ", nome, ", você tem ", idade, " anos")


//Exercício 2
const endereco = prompt ("1.Qual o seu endereço?")
const cor = prompt ("2.Qual a sua cor favorita?")
const cidade = prompt ("3.Em que cidade você mora?")
const mes = prompt ("4. Qual o mês do seu aniveersário?")
const dia = prompt ("5.Qual o seu dia favorito da semana?")

console.log("1.Qual o seu endereço? Resposta: ", endereco)
console.log("2.Qual a sua cor favorita? Resposta: ", cor)
console.log("3.Em que cidade você mora? Resposta: ", cidade)
console.log("4. Qual o mês do seu aniveersário? Resposta: ", mes)
console.log("5.Qual o seu dia favorito da semana? Resposta: ", dia)

//Exercício 3

const comidasFavoritas = ["Cuscuz", "Pizza", "Batata Frita", "Caldinho de Camarão", "Tapioca"]

console.log ("comidas", comidasFavoritas)
console.log ("Essas são as minhas comidas favoritas:")
console.log (comidasFavoritas[0])
console.log (comidasFavoritas[1])
console.log (comidasFavoritas[2])
console.log (comidasFavoritas[3])
console.log (comidasFavoritas[4])

const comidaPreferida = prompt("Qual sua comida preferida?")
comidasFavoritas[1] = comidaPreferida
console.log("novascomidas", comidasFavoritas)


//Exercício 4

const perguntas = ["Você é brasileira(o)?", "Você come muito?", "Você gosta de Cuscuz?"]

const respostas = [true, false, true]
console.log(perguntas[0], ": ", respostas[0])
console.log(perguntas[1], ": ", respostas[1])
console.log(perguntas[2], ": ", respostas[2])