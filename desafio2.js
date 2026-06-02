// ============================================================
// DESAFIOS (para quem já terminou a atividade 14) – Funções Simples
// ============================================================
// Continue SEM usar parâmetros e SEM return.
// O foco é pensar em funções pequenas e bem nomeadas.
// ============================================================

function log(mensagem) {
    console.log(mensagem);
}

log()


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
    const hoje = new Date()
    
    let horas = hoje.getHours()
    let minutos = hoje.getMinutes()
    let segundos = hoje.getSeconds()
    
    log(`Hora atual: <${horas}:${minutos}:${segundos}>`)
}


function mostrarData() {
    const hoje = new Date();

let dia = hoje.getDate();           
let mes = hoje.getMonth() + 1;      
let ano = hoje.getFullYear();  

log(`${dia}/${mes}/${ano}`);

}

function agora() {
    mostrarData()
    mostrarHora()
    log("-------------------------")
}

agora()
setTimeout(agora, 5000)
setTimeout(agora, 10000)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Gerador de cartões
// ------------------------------------------------------------
// Vamos imprimir vários "cartões" estilizados no console.
//
// a) Utilizando os arrays:
const nomes  = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
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
    let indiceNome = Math.floor(Math.random() * nomes.length)
    let indiceCargo = Math.floor(Math.random() * cargos.length)

    let nomeSorteado = nomes[indiceNome]
    let cargoSorteado = cargos[indiceCargo]

    log("═══════════════════════════════")
    log(`|   ${nomeSorteado}`)
    log(`|   ${cargoSorteado}`)
    log("═══════════════════════════════\n") 
}

imprimirCartao()
imprimirCartao()
imprimirCartao()
imprimirCartao()
imprimirCartao()


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Sistema de notícias
// ------------------------------------------------------------
// a) Utilizando o array:
const noticias = [
  { titulo: "Tecnologia X é lançada",  texto: "Empresa Y revoluciona o mercado..." },
  { titulo: "Economia em alta",        texto: "Bolsa fecha o dia em alta de 2%..." },
  { titulo: "Esporte: time campeão",   texto: "O time A conquistou o título..." },
  { titulo: "Cultura: novo filme",     texto: "Estreia no cinema o longa Z..." },
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

function manchete(noticia) {
    log("|── MANCHETE ─────────────────")
    log(`| ${noticia.titulo}`)
    log("|----------------------------")
    log(`| ${noticia.texto}`)
}

function exibirJornal() {
    for (let noticia of noticias) { 
        manchete(noticia)
        log("") 
    }
}

exibirJornal()




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

const log = console.log 
let saldo = 1000;

function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`
}

function verSaldo() {
    log(`Saldo atual: ${formatarMoeda(saldo)}`)
}

function depositar() {
    let valorDeposito = keyboard.questionInt("Digite o valor do deposito: ")
    
    if (valorDeposito > 0) {
        saldo += valorDeposito
        log(`Deposito de ${formatarMoeda(valorDeposito)} realizado!`)
        verSaldo()
    } else {
        log("Valor invalido!")
    }
}

function sacar() {
    let valorSaque = keyboard.questionInt("Digite o valor do saque: ")
    
    if (valorSaque <= 0) {
        log("Valor invalido!")
    } else if (valorSaque <= saldo) {
        saldo -= valorSaque
        log(`Saque de ${formatarMoeda(valorSaque)} realizado!`)
        verSaldo()
    } else {
        log("Saldo insuficiente!")
    }
}

function extrato() {
    const hoje = new Date()
    let dia = hoje.getDate()
    let mes = hoje.getMonth() + 1 
    let ano = hoje.getFullYear()
    
    if (dia < 10) {
        dia = "0" + dia
    }
    if (mes < 10) {
        mes = "0" + mes
    }
    
    log(`\n══════ EXTRATO (${dia}/${mes}/${ano}) ══════`)
    verSaldo()
    log("═══════════════════════════════")
}

function exibirMenu() {
    log("\n======= CAIXA ELETRONICO =======")
    log("1 – Ver saldo\n2 – Depositar\n3 – Sacar\n4 – Extrato\n0 – Sair")
    log("================================")
}

let opcao;
do {
    exibirMenu()
    opcao = keyboard.questionInt("Escolha uma opcao: ")

    switch (opcao) {
        case 1: verSaldo(); break
        case 2: depositar(); break
        case 3: sacar(); break
        case 4: extrato(); break
        case 0: log("Finalizando e Saindo... Obrigado por acessar!"); break
        default: log("Opcao invalida!")
    }
} while (opcao !== 0)
console.log("_______________________________");