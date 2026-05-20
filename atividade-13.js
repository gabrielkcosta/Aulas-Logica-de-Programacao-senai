// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

const nsei = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
]

console.log("Percorrendo as colunas");
  for (let i = 0; i < nsei.length; i++) {
    for (let j = 0; j < nsei[i].length; j++) {
      console.log(`coluna[${i}][${j}] = ${nsei[i][j]}`);
    }
  }

console.log(`elemento central ${nsei[1][1]}`);
console.log(`ultimo elemento ${nsei[nsei.length - 1][nsei[2].length - 1]}`);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:

const nsei2 = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
]

console.log("Percorrendo o tabuleiro:");
  for (let i = 0; i < nsei2.length; i++) {
    for (let j = 0; j < nsei2[i].length; j++) {
      console.table(`matriz[${i}][${j}] = ${nsei2[i][j]}`);
    }
  }
  
let soma = 0;
  for (let i = 0; i < nsei2.length; i++) {
    for (let j = 0; j < nsei2[i].length; j++) {
      soma += nsei2[i][j];
    }
  }
  console.log(`Soma de todos os elementos: ${soma}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
   const m = [
     [12,  7, 25],
     [ 3, 18,  9],
     [31, 14, 22],
   ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

let linMaior = 0, colMaior = 0
let linMenor = 0, colMenor = 0

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){ 

        if(m[i][j] > m[linMaior][colMaior]){
            linMaior = i
            colMaior = j
        }

        if(m[i][j] < m[linMenor][colMenor]){
            linMenor = i
            colMenor = j
        }
    }
}

console.log(`Maior ${m[linMaior][colMaior]} na posição [${linMaior}][${colMaior}]`);
console.log(`Menor ${m[linMenor][colMenor]} na posição [${linMenor}][${colMenor}]`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:

console.log("Soma por LINHA:");
  for (let i = 0; i < m.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < m[i].length; j++) {
      somaLinha += m[i][j];
    }
    console.log(`Linha ${i}: ${somaLinha}`);
  }

  console.log("Soma por COLUNA:");
  for (let j = 0; j < m[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < m.length; i++) {
      somaColuna += m[i][j];
    }
    console.log(`Coluna ${j}: ${somaColuna}`);
  }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:

let keyboard = require("readline-sync")

const qtdLinhas = keyboard.questionInt("quantas linhas voce quer te tenha sua matriz: ");
  const qtdColunas = keyboard.questionInt("quantas colunas voce quer te tenha sua matriz: ");
  const matriz3 = [];
  
  for (let i = 0; i < qtdLinhas; i++) {
    const linha = [];               
    for (let j = 0; j < qtdColunas; j++) {               
    linha.push(0);            
  }
  matriz3.push(linha)
}
  console.table(matriz3);



console.log(`
        __
    ___( o)>
    \\ <_. )
     \`---'
`);

console.log("_______________________________");