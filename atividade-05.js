// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

// let a = 10
// let a1 = 10
// console.log(`a == a1 -> ${a == a1}`)

// let b = 10
// let b1 = "10"
// console.log(`b == b1 -> ${b == b1}`)

// let c = 0
// let c1 = false
// console.log(`c == c1 -> ${c == c1}`)

// let d = null
// let d1 = undefined
// console.log(`d == d1 -> ${d == d1}`)

// let e = "JS"
// let e1 = "JS"
// console.log(`e == e1 -> ${e == e1}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

// let f = 5
// let f1 = 5
// console.log(`f != f1 -> ${f != f1}`)
// console.log(`f !== f1 -> ${f !== f1}`)

// let g = 5
// let g1 = "5"
// console.log(`g != g1 -> ${g != g1}`)
// console.log(`g !== g1 -> ${g !== g1}`)

// let h = 7
// let h1 = 3
// console.log(`h != h1 -> ${h != h1}`)
// console.log(`h !== h1 -> ${h !== h1}`)

// let i = true
// let i1 = 1
// console.log(`i != i1 -> ${i != i1}`)
// console.log(`i !== i1 -> ${i !== i1}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

// let salarioA = 3500
// let salarioB = 4200

// let MaiorSalario = salarioA > salarioB
// let MenorSalario = salarioA < salarioB

// let MaiorIgual = salarioA >= salarioB
// let MenorIgual = salarioA <= salarioB
// let SaoIguais = salarioA === salarioB

// console.log(`salario A : R$ ${salarioA} > salario b : R$ ${salarioB} | maior salario: ${MaiorSalario ? "sim" : "nao"} `)
// console.log(`salario A : R$ ${salarioA} < salario b : R$ ${salarioB} | menor salario: ${MenorSalario ? "sim" : "nao"} `)
// console.log(`salario A : R$ ${salarioA} >= salario b : R$ ${salarioB} | maior ou igual: ${MaiorIgual ? "sim" : "nao"} `)
// console.log(`salario A : R$ ${salarioA} <= salario b : R$ ${salarioB} | menor ou igual: ${MenorIgual ? "sim" : "nao"} `)
// console.log(`salario A : R$ ${salarioA} === salario b : R$ ${salarioB} | sao iguais: ${SaoIguais ? "sim" : "nao"} `)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

// let estoque = 0
// let temEstoque = estoque > 0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >= 37.6

// console.log(`estoque : ${estoque} | tem estoque : ${temEstoque} | estoque esta zerado? : ${estoqueZerado} | temperatura : ${temperatura} | ta com febre? : ${febre}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

let keyboard = require("readline-sync")

// let num1 = keyboard.questionInt("digite um numero :")
// let num2 = keyboard.questionInt("digite outro numero nao pode ser igual :")

// let Maior = num1 > num2
// let Menor = num1 < num2
// let saoIguais = num1 === num2
// let maiorOUigual = num1 >= num2

// console.log(`num1 maior? : ${Maior}`)
// console.log(`num1 menor? : ${Menor}`)
// console.log(`sao iguais? : ${saoIguais}`)
// console.log(`num1 maior ou igual? : ${maiorOUigual}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

// let preco = keyboard.questionFloat("digite o preco de um produto :")
// const precoMaximo = 100

// let estaDentroDoOrcamento = preco <= precoMaximo
// let esteItemEhCaro = preco > precoMaximo

// console.log(`preco informado R$ ${preco}`)
// console.log(`dentro do orcamento R$ ${precoMaximo}? | ${estaDentroDoOrcamento ? "sim" : "nao"} `)
// console.log(`item cara R$ ${precoMaximo}? | ${esteItemEhCaro ? "sim" : "nao"}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

// const cadastro = [
//     {
//         nome: keyboard.question('Nome da primeira pessoa: '),
//         idade: keyboard.questionInt('Idade da primeira pessoa: ')
//     },
//         {
//         nome: keyboard.question('Nome da segunda pessoa: '),
//         idade: keyboard.questionInt('Idade da segunda pessoa: ')
//         }
// ];

// const p1 = cadastro[0];
// const p2 = cadastro[1];

// const p1MaiorDeIdade = p1.idade >= 18;
// const p2MaiorDeIdade = p2.idade >= 18;

// console.log(`Idade de ${p1.nome} é ${p1.idade} e ele é ${p1MaiorDeIdade ? "maior de idade" : "menor de idade"}.`);
// console.log(`Idade de ${p2.nome} é ${p2.idade} e ele é ${p2MaiorDeIdade ? "maior de idade" : "menor de idade"}.`);

// const nomeMaisVelho = p1.idade > p2.idade ? p1.nome : p2.nome;
// console.log(`A pessoa mais velha é: ${nomeMaisVelho}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

// let alunos = [
//     {
//         nome: keyboard.question("nome do primeiro aluno :"),
//         notas1: keyboard.questionFloat("digite a primeira nota :"),
//         notas2: keyboard.questionFloat("digite a segunda nota :"),
//         notas3: keyboard.questionFloat("digite a terceira nota :"),
//     },
//         {
//             nome: keyboard.question("nome do segundo aluno :"),
//             notas1: keyboard.questionFloat("digite a primeira nota :"),
//             notas2: keyboard.questionFloat("digite a segunda nota :"),
//             notas3: keyboard.questionFloat("digite a terceira nota :"),
//         }
//     ]

// let mediaAluno1 = (alunos[0].notas1 + alunos[0].notas2 + alunos[0].notas3) / 3;
// let mediaAluno2 = (alunos[1].notas1 + alunos[1].notas2 + alunos[1].notas3) / 3;

// console.log(`aluno com maior media : ${mediaAluno1 > mediaAluno2 ? alunos[0].nome : alunos[1].nome}`);

// console.log(`aluno com a primeira maior nota: ${alunos[0].notas1 > alunos[1].notas1 ? alunos[0].nome : alunos[1].nome}`);
// console.log(`Aluno com a segunda maior nota: ${alunos[0].notas2 > alunos[1].notas2 ? alunos[0].nome : alunos[1].nome}`);
// console.log(`Aluno com a terceira maior nota: ${alunos[0].notas3 > alunos[1].notas3 ? alunos[0].nome : alunos[1].nome}`);

                


console.log("_______________________________");