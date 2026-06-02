// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================

let keyboard = require("readline-sync")

function log(mensagem) {
    console.log(mensagem);
}

log()

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:

function saudacao() {
    console.log("Olá!");
    console.log("Bem-vindo(a) ao curso de JavaScript.");
    console.log("Bons estudos!!");
}

saudacao();
saudacao();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:

function linha() {console.log( "--------------------------------------------------");}
function titulo() {console.log("              RELATORIO MENSAL");}

function cabecalho() {
    linha();
    titulo();
    linha();
}

cabecalho();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:

let nsei = [];


function meusDados() {
       let nsei2 = 
            {
                nome: keyboard.question("nome: "),
                idade: keyboard.questionInt("idade: "),
                cidade: keyboard.question("cidade: ")
            }
        linha()
        nsei.push(nsei2)
    }

function exibirDados() {
    for(let i = 0; i < nsei.length;i++){
       log("---------------------------------")
       log("            BEM VINDO(a)          ")
       log(`Nome ${nsei[i].nome}`)
       log(`Idade  ${nsei[i].idade}`)
       log(`Cidade ${nsei[i].cidade}`)
       log("----------------------------------")
    }
}

for(let i = 0; i < 2; i++) {
    meusDados();
}

exibirDados();


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

function sortear() {
    let n = Math.floor(Math.random() * 100) + 1
    console.log(`numero sorteado ${n}`);
}

function exibirNumero() {
    for(let i = 0; i < 5; i++) {
        sortear();
        linha();
    }
}

exibirNumero();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:

function tabuadaDoCinco() {


console.log(`--- Tabuada do ${5} ---`);

for (let i = 1; i <= 10; i++) {
    let resultado = 5 * i;
    console.log(`${5} x ${i} = ${resultado}`);
    }   
}


function tabuadaDoSete() {

console.log(`--- Tabuada do ${7} ---`);

for (let i = 1; i <= 10; i++) {
    let resultado = 7 * i;
    console.log(`${7} x ${i} = ${resultado}`);
    }   
}

tabuadaDoCinco()
linha()
tabuadaDoSete()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:

function converterTemperatura() {
    let pergunta = keyboard.question("digite uma temperatura em celsius: ")
    let Fahrenheit = pergunta * 1.8 + 32
    
    log(`${pergunta}°C equivalem a ${Fahrenheit.toFixed(2)}°F`)
}

converterTemperatura()
linha()
converterTemperatura()
linha()
converterTemperatura()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:

function listarFilmes() {
    for (let i = 0; i < filmes.length; i++) {
     log(`Índice ${i+1} = ${filmes[i]}`);
   }
}

listarFilmes()
linha()
listarFilmes()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:

function limparTela() {
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
    log("")
}

function exibirBanner() {
    log("---------------------------------");
    log("           BOAS VINDAS           ");
    log("---------------------------------");
}

let Nome = keyboard.question("digite seu nome: ")

function pedirNome() {
    let nome = Nome

    log(`          Olá! ${nome}`)
}

function rodape() {log(`\n           desenvolvido por "Gabriel Costa"`)}

function FuncaoPrincipal() {
    limparTela()
    exibirBanner()
    pedirNome()
    rodape()
    linha()
}

FuncaoPrincipal()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:

function somar() {
    let num1 = keyboard.questionFloat("primeiro numero: ")
    let num2 = keyboard.questionFloat("segundo numero: ")

    resultado = num1 + num2
    log(`[${num1}] + [${num2}] = ${resultado.toFixed(2)} `)
}

function subtração() {
    let num1 = keyboard.questionFloat("primeiro numero: ")
    let num2 = keyboard.questionFloat("segundo numero: ")

    resultado = num1 - num2
    log(`[${num1}] - [${num2}] = ${resultado.toFixed(2)} `)
}

function multiplicação() {
    let num1 = keyboard.questionFloat("primeiro numero: ")
    let num2 = keyboard.questionFloat("segundo numero: ")

    resultado = num1 * num2
    log(`[${num1}] X [${num2}] = ${resultado.toFixed(2)} `)
}

function Dividir() {
    let num1 = keyboard.questionFloat("Primeiro numero: ")
    let num2 = keyboard.questionFloat("Segundo numero: ")

    if (num2 === 0) {
        log("Erro: Não é possível dividir por zero!")
    } else {
        let resultado = num1 / num2
        log(`[${num1}] % [${num2}] = ${resultado.toFixed(2)}`)
    }
}

function exibirMenu() {
    log("\n----------- MENU CALCULADORA -----------")
    log("1. Somar")
    log("2. Subtrair")
    log("3. Multiplicar")
    log("4. Dividir")
    log("0. Sair")
    log("----------------------------------------")
}

do {
    exibirMenu()
    opcao = keyboard.questionInt("Escolha uma opcao: ")

    switch (opcao) {
        case 1:
            somar()
            break
        case 2:
            subtração()
            break
        case 3:
            multiplicação()
            break
        case 4:
            Dividir()
            break
        case 0:
            log("Saindo do sistema...")
            break
        default:
            log("Opcao invalida! Tente novamente.")
    }

} while (opcao !== 0)


console.log("_______________________________");