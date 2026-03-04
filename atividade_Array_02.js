// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let Cores = ["azul","preto","vermelho","verde"];
console.log(Cores [0]) //azul
console.log(Cores [3]) //verde
console.log(Cores)
console.log(Cores.length);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:
Cores.push("marrom");
console.log(Cores)
Cores.shift()
console.log(Cores)
console.log(Cores.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let number = [1,2,3,4,5,6,7,8];
console.log(`${number}, quantidade de itens armazenados ${number.length}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:
let Verdade = true
let Nada = null
let Fantasma
let Palavra = "texto"
const Numero = 42
let Variavel =[Verdade, Nada, Fantasma, Palavra, Numero]
console.log(Variavel, "Quantidade de elementos" , Variavel.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let Tipos = ["batata","computador",43,"bolinha de golfe","six seven",]
console.log(Tipos)
Tipos.shift()
Tipos.pop()
console.log(Tipos)
Tipos.push("xicara")
console.log(Tipos)


console.log("_______________________________");