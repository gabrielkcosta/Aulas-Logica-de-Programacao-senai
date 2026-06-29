/*s
// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================

function log(mensagem) { console.log(mensagem) };
let keyboard = require("readline-sync")
function linha() {
    log("-----------------------------")
}

// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:

function quadrado(n) { return n ** 2 }

log(quadrado(3))
log(quadrado(7))
log(quadrado(10))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:

function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "Erro: divisão por zero";
    return a / b;
}

log(somar(10, 5));
log(subtrair(10, 5));
log(multiplicar(10, 5));
log(dividir(10, 5));
log(dividir(10, 0));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:

function ehPar(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

function ehMaiorDeIdade(m) {
    if (m >= 18) {
        return true;
    }
    return false;
}

function vogal(a) {
    if (a = ["a", "e", "i", "o", "u" && "A", "E", "I", "O", "U",]) {
        return true
    }
    return false
}

log(ehPar(2));
log(ehPar(3));
linha()
log(ehMaiorDeIdade(18));
log(ehMaiorDeIdade(17));
linha()
log(vogal("A"))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:

function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc > 50) return "morreu ja ta só a banha";

    return "Obesidade";
}

const altura = keyboard.questionFloat("Sua altura (ex: 1.75): ");
const peso = keyboard.questionFloat("Seu peso (ex: 70): ");

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function exibirResultado() {
    const valorImc = calcularImc(peso, altura);

    const classificacao = classificarImc(valorImc);

    log(`Seu peso é [${peso}], Sua altura é [${altura}], Seu Imc é [${valorImc.toFixed(2)}] - Classificação: ${classificacao}`);
}

exibirResultado();


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:

function precoComDesconto(valor, desconto = 10) {
    const valorDoDesconto = (valor * desconto) / 100;
    return valor - valorDoDesconto;
}


log(`Teste 1: R$ ${precoComDesconto(100).toFixed(2)}`);

log(`Teste 2: R$ ${precoComDesconto(100, 25).toFixed(2)}`);

log(`Teste 3: R$ ${precoComDesconto(250, 5).toFixed(2)}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:

function somarVetor(vet) {
    let soma = 0;
    for (let numero of vet) {
        soma += numero;
    }
    return soma;
}

function mediaVetor(vet) {
    return somarVetor(vet) / vet.length;
}

function maiorDoVetor(vet) {
    let maior = vet[0];

    for (let numero of vet) {
        if (numero > maior) {
            maior = numero;
        }
        return maior;
    }
}

function menorDoVetor(vet) {
    let menor = vet[0];

    for (let numero of vet) {
        if (numero < menor) {
            menor = numero;
        }
        return menor;
    }
}

log(`Vetor analisado: [${numeros}]`);
log(`Soma dos valores: ${somarVetor(numeros)}`);
log(`Média dos valores: ${mediaVetor(numeros).toFixed(2)}`);
log(`Maior valor: ${maiorDoVetor(numeros)}`);
log(`Menor valor: ${menorDoVetor(numeros)}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:

function verificarSituacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

}

function criarAluno(nome, idade, nota) {
    return {
        nome: nome,
        idade: idade,
        nota: nota,
        situacao: verificarSituacao(nota)
    }
}

const a1 = criarAluno("Lucas", 16, 8.5);
const a2 = criarAluno("Mariana", 17, 5.0);
const a3 = criarAluno("Rafael", 15, 7.0);

console.table([a1, a2, a3]);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:

function gerarPares(inicio, fim) {
    const vetorPares = [];

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            vetorPares.push(i);
        }
    }

    return vetorPares;
}

const paresAte20 = gerarPares(1, 20);
console.log("Pares de 1 a 20:", paresAte20);

function filtrarMaioresQue(vet, limite) {
    const vetorFiltrado = [];

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > limite) {
            vetorFiltrado.push(vet[i]);
        }
    }

    return vetorFiltrado;
}

const paresAte50 = gerarPares(1, 50);
const maioresQue30 = filtrarMaioresQue(paresAte50, 30);
console.log("Pares de 1 a 50 (maiores que 30):", maioresQue30);
/*/
console.log("_______________________________");