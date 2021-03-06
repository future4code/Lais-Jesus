//Exercício 1

function inverteArray(array) {
   let arrayInvertido = []
  
   for (let i=1; i<=array.length; i++) {
     let n = array.length
     arrayInvertido.push(array[array.length - i])
     array.splice(n,1)
   }
   return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const arrayParesElevados2 = []
   let paresElevados 
   for(let i of array) {
      if(i % 2 == 0) {
        paresElevados = i*i
        arrayParesElevados2.push(paresElevados)
      }
   }
  return arrayParesElevados2
}

//Exercício 3

function retornaNumerosPares (array) {
   const arrayPares = []
   for(let i of array) {
      if(i % 2 == 0) {
        arrayPares.push(i)
      }
   }
  return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for (let i of array) {
     if (maiorNumero < i) {
         maiorNumero = i
     }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 
const booleano4 = !booleano3

function retornaExpressoesBooleanas() {
   const a = false
   const b = false
   const c = true
   const d = true
   const e = true
   const respostas =[a, b, c, d, e]
   
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   const array = []
   for(let i=0; i<n; i++) {
     
      array.push(i*2)
      
   }
   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let resultado = " "
   if ((a === b) && (b === c)) {
      resultado =  "Equilátero"
   } else if ((a === b) && (a !== c)|| (a === c) && (a !== b) || (b === c) && (a !== c)) {
      resultado = "Isósceles"
   } else if ((a !== b) && (b !== c)){
      resultado = "Escaleno"
   }
   return resultado
}
 

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let numMaior
   let divMenor
   let valorDiferenca
   
   if (num1 > num2 && (num1 % num2 === 0)) {
      numMaior = num1
      divMenor = true
      valorDiferenca = num1 - num2
      
   } else if (num1 > num2 && (num1 % num2 !== 0)) {
      numMaior = num1
      divMenor = false
      valorDiferenca = num1 - num2
      
   } else if (num1 < num2 && (num2 % num1 === 0)) {
      numMaior = num2
      divMenor = true
      valorDiferenca = num2 - num1
      
   } else if (num1 < num2 && (num2 % num1 !== 0)) {
      numMaior = num2
      divMenor = false
      valorDiferenca = num2 - num1
   }
   
   const objeto = {
      maiorNumero: numMaior,
      maiorDivisivelporMenor : divMenor ,
      diferenca: valorDiferenca,
   }
   
   return objeto

}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}