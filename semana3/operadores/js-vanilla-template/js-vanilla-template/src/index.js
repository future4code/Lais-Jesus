//**Exercícios de interpretação de código**

//1)
//a. false b. false c. true e. boolean

//2)
//a. undefined b. null c. 11 d. 3 e. 4 f. 9

//**Exercícios de interpretação de código**

//1) 

let suaIdade = prompt("Qual a sua idade?")
let melhorAmigo = prompt("Qual a idade do seu melhor amigo?")
const maior = Number(suaIdade) > Number(melhorAmigo)
const diferenca = Number(suaIdade) - Number(melhorAmigo)

console.log ("Sua idade é maior do que a do seu melhor amigo? ", maior)
console.log(diferenca)


//2

const par = prompt("Escreva um numero par")
const nPar = Number(par)
console.log(nPar % 2)

// //c. O valor do resto é sempre igual a zero porque são numeros pares

// //d. O valor do resto é sempre igual a um porque são numeros ímpares

//3

const listaDeTarefas = []
const tarefa1 = prompt("Qual tarefa você precisa fazer hoje?")
listaDeTarefas.push (tarefa1)

const tarefa2 = prompt("Qual outra tarefa você precisa fazer hoje?")
listaDeTarefas.push (tarefa2)

const tarefa3 = prompt("Falta mais alguma tarefa que você precise fazer hoje?")
listaDeTarefas.push (tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = prompt("Qual indice da tarefa que você já realizou? 0, 1 ou 2?")
listaDeTarefas.splice (tarefaRealizada, 1)

console.log(listaDeTarefas)

//4

const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu e-mail?")

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome +"!")