JavaScript
// ============================================================
// DESAFIOS (para quem já terminou a atividade 14) – Funções Simples
// ============================================================
// Continue SEM usar parâmetros e SEM return.
// O foco é pensar em funções pequenas e bem nomeadas.
// ============================================================

let keyboard = require("readline-sync");

// ------------------------------------------------------------
// DESAFIO 1 – Relógio digital
// ------------------------------------------------------------
// a) Crie uma função 'mostrarHora' que:
//    - Pega a hora atual - busque por uma função pronta do Javascript para isso.
//    - Formata como "HH:MM:SS".
//    - Exibe: "Hora atual: <HH:MM:SS>"
// b) Crie uma função 'mostrarData' que exibe:
//    "Data atual: <DD/MM/AAAA>"
// c) Crie uma função 'agora' que chama mostrarData() e mostrarHora() em sequência.
// d) Chame agora() três vezes (com um intervalo de 5 segundos entre as chamadas).

// → Seu código aqui:

function mostrarHora() {
    let dataAtual = new Date();
    console.log("Hora atual: " + dataAtual.toLocaleTimeString());
}

function mostrarData() {
    let dataAtual = new Date();
    console.log("Data atual: " + dataAtual.toLocaleDateString());
}

function agora() {
    mostrarData();
    mostrarHora();
    console.log("---");
}

function esperarCincoSegundos() {
    let inicio = Date.now();
    // Loop de bloqueio (busy-wait) para travar o console por 5 segundos
    // mantendo a execução síncrona para não sobrepor o próximo desafio
    while (Date.now() - inicio < 5000) { }
}

console.log("Exibindo relógio (aguarde 5 segundos entre as chamadas)...");
agora();
esperarCincoSegundos();
agora();
esperarCincoSegundos();
agora();


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Gerador de cartões
// ------------------------------------------------------------
// Vamos imprimir vários "cartões" estilizados no console.
//
// a) Utilizando os arrays:
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
const cargos = ["Dev Junior", "Dev Pleno", "Tech Lead", "QA", "Designer"];
//
// b) Crie a função 'imprimirCartao' que:
//    - Sorteia um índice para cada array.
//    - Exibe um "cartão" com os valores sorteados, no formato:
//      ═══════════════════════════════
//      |   <NOME>                     
//      |   <cargo>                    
//      ═══════════════════════════════
//      (não precisa alinhar caracteres com perfeição — apenas estilo)
// c) Chame imprimirCartao() 5 vezes.

// → Seu código aqui:

function imprimirCartao() {
    let indNome = Math.floor(Math.random() * nomes.length);
    let indCargo = Math.floor(Math.random() * cargos.length);

    console.log("═══════════════════════════════");
    console.log("|   " + nomes[indNome]);
    console.log("|   " + cargos[indCargo]);
    console.log("═══════════════════════════════\n");
}

for (let i = 0; i < 5; i++) {
    imprimirCartao();
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Sistema de notícias
// ------------------------------------------------------------
// a) Utilizando o array:
const noticias = [
    { titulo: "Tecnologia X é lançada", texto: "Empresa Y revoluciona o mercado..." },
    { titulo: "Economia em alta", texto: "Bolsa fecha o dia em alta de 2%..." },
    { titulo: "Esporte: time campeão", texto: "O time A conquistou o título..." },
    { titulo: "Cultura: novo filme", texto: "Estreia no cinema o longa Z..." },
];
// b) Crie 1 função 'manchete', que exibe:
//        |── MANCHETE ─────────────────
//        | <título>
//        |----------------------------
//        | <texto>
// c) Crie a função 'exibirJornal' que chama todas as manchetes em sequência,
//    com uma linha em branco entre cada uma.
// d) Chame exibirJornal().
// Observação: A função 'exibirJornal' deve sempre exibir todas as manchetes,
//    mesmo que mais manchetes forem adicionadas posteriormente

// → Seu código aqui:

// Variável global para controlar a notícia atual na função sem parâmetros
let indiceNoticiaAtual = 0;

function manchete() {
    let noticia = noticias[indiceNoticiaAtual];
    console.log("|── MANCHETE ─────────────────");
    console.log("| " + noticia.titulo);
    console.log("|----------------------------");
    console.log("| " + noticia.texto);
}

function exibirJornal() {
    for (indiceNoticiaAtual = 0; indiceNoticiaAtual < noticias.length; indiceNoticiaAtual++) {
        manchete();
        console.log(); // Linha em branco
    }
}

exibirJornal();

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Mini caixa eletrônico
// ------------------------------------------------------------
// Crie um caixa eletrônico
// O saldo deve ficar em uma variável global.
//
// a) Declare saldo = 1000;
// b) Crie as funções:
//    - 'verSaldo'     → exibe o saldo atual formatado como "R$ x,xx".
//    - 'depositar'    → pergunta o valor e SOMA ao saldo.
//                        Exibe o novo saldo.
//    - 'sacar'        → pergunta o valor; se houver saldo, SUBTRAI;
//                        senão, exibe "Saldo insuficiente!".
//    - 'extrato'      → exibe um cabeçalho estilizado com a data atual e chama verSaldo().
//    - 'exibirMenu'   → exibe as opções:
//                        1 – Ver saldo
//                        2 – Depositar
//                        3 – Sacar
//                        4 – Extrato
//                        0 – Sair
// c) Usando do...while e switch/case, ligue cada opção à sua função.
// d) Encerre quando o usuário escolher 0.
// e) Ao sair, exiba "Finalizando e Saindo... Obrigado por acessar!".

// → Seu código aqui:

let saldo = 1000;

function verSaldo() {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
}

function depositar() {
    let valor = keyboard.questionFloat("Informe o valor para deposito: R$ ");
    if (valor > 0) {
        saldo += valor;
        console.log("Depósito realizado com sucesso!");
        verSaldo();
    } else {
        console.log("Valor inválido para depósito.");
    }
}

function sacar() {
    let valor = keyboard.questionFloat("Informe o valor para saque: R$ ");
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        console.log("Saque realizado com sucesso!");
        verSaldo();
    } else if (valor > saldo) {
        console.log("Saldo insuficiente!");
    } else {
        console.log("Valor inválido para saque.");
    }
}

function extrato() {
    let dataAtual = new Date();
    console.log(`\n=== EXTRATO - ${dataAtual.toLocaleDateString()} ===`);
    verSaldo();
    console.log("============================");
}

function exibirMenu() {
    console.log("\n====== CAIXA ELETRÔNICO ======");
    console.log("1 – Ver saldo");
    console.log("2 – Depositar");
    console.log("3 – Sacar");
    console.log("4 – Extrato");
    console.log("0 – Sair");
}

let opcaoCaixa = -1;

do {
    exibirMenu();
    opcaoCaixa = keyboard.questionInt("Escolha uma opcao: ");

    switch (opcaoCaixa) {
        case 1:
            verSaldo();
            break;
        case 2:
            depositar();
            break;
        case 3:
            sacar();
            break;
        case 4:
            extrato();
            break;
        case 0:
            console.log("Finalizando e Saindo... Obrigado por acessar!");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }
} while (opcaoCaixa !== 0);

console.log("_______________________________");