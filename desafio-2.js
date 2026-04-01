// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let keyboard = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// let cardapioPratos = [
//     { nome: "Frango Grelhado", preco: 32.00 },
//     { nome: "Filé ao Molho",   preco: 45.00 },
//     { nome: "Massa Italiana",  preco: 28.00 },
//     { nome: "Salada Caesar",   preco: 22.00 },
//     { nome: "Sopa do Dia",     preco: 18.00 }
// ];

// let cardapioBebidas = [
//     { nome: "Suco Natural", preco: 9.00 },
//     { nome: "Refrigerante", preco: 7.00 },
//     { nome: "Água",         preco: 4.00 },
//     { nome: "Sem bebida",   preco: 0.00 }
// ];

// let nomePessoal = keyboard.question("Digite seu nome: ");

// console.log("--- OPÇÕES DE PRATOS ---");
// console.log("1 – Frango Grelhado  R$ 32,00\n2 – Filé ao Molho  R$ 45,00\n3 – Massa Italiana R$ 28,00\n4 – Salada Caesar R$ 22,00\n5 – Sopa do Dia  R$ 18,00");
// let numPrato = keyboard.questionInt("Escolha o numero do prato: ");

// console.log("--- OPÇÕES DE BEBIDAS ---");
// console.log("1 – Suco Natural  R$ 9,00\n2 – Refrigerante R$ 7,00\n3 – agua R$ 4,00\n4 – Sem bebida R$ 0,00");
// let numBebida = keyboard.questionInt("Escolha o numero da bebida: ");

// let nomePrato, precoPrato

// switch (numPrato) {
//     case 1:
//         nomePrato = cardapioPratos[0].nome; precoPrato = cardapioPratos[0].preco
//         break;
//     case 2: 
//         nomePrato = cardapioPratos[1].nome; precoPrato = cardapioPratos[1].preco
//         break;
//     case 3: 
//         nomePrato = cardapioPratos[2].nome; precoPrato = cardapioPratos[2].preco
//         break;
//     case 4: 
//         nomePrato = cardapioPratos[3].nome; precoPrato = cardapioPratos[3].preco
//         break;
//     case 5: 
//         nomePrato = cardapioPratos[4].nome; precoPrato = cardapioPratos[4].preco
//         break;
//     default:
//         console.log("Item inválido (Prato).");
//         nomePrato = "Inválido";
// }

// let nomeBebida, precoBebida;

// switch (numBebida) {
//     case 1: 
//         nomeBebida = cardapioBebidas[0].nome; precoBebida = cardapioBebidas[0].preco
//         break;
//     case 2: 
//         nomeBebida = cardapioBebidas[1].nome; precoBebida = cardapioBebidas[1].preco
//         break;
//     case 3: 
//         nomeBebida = cardapioBebidas[2].nome; precoBebida = cardapioBebidas[2].preco
//         break;
//     case 4: 
//         nomeBebida = cardapioBebidas[3].nome; precoBebida = cardapioBebidas[3].preco 
//         break;
//     default:
//         console.log("Item inválido (Bebida).");
//         nomeBebida = "Inválido";
// }

// let pedido = {
//     nomeCliente: nomePessoal,
//     nomePrato: nomePrato,
//     precoPrato: precoPrato,
//     nomeBebida: nomeBebida,
//     precoBebida: precoBebida,
//     total: precoPrato + precoBebida
// }

// let pagarNoPix = keyboard.keyInYN("Deseja pagar com PIX (10% de desconto)? ");
// if (pagarNoPix) {
//     pedido.total = pedido.total * 0.9; 
// }

// console.log("--- DADOS DO PEDIDO ---");
// console.table(pedido);

// console.log(`
// ---------------------------------------
//             RECIBO DE PEDIDO           
// ---------------------------------------
// Cliente: ${pedido.nomeCliente}
// Pedido: ${pedido.nomePrato} e ${pedido.nomeBebida}
// Valor : R$ ${pedido.precoPrato.toFixed(2)} + R$ ${pedido.precoBebida.toFixed(2)}
// ---------------------------------------
// TOTAL FINAL: R$ ${pedido.total.toFixed(2)}
// ---------------------------------------
// `)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:


// let valorAConverter = keyboard.questionFloat("Digite o valor que deseja converter: ");

// console.log(`
// --- TIPOS DE CONVERSÃO ---
// 1 – Km para Milhas
// 2 – Milhas para Km
// 3 – Celsius para Fahrenheit
// 4 – Fahrenheit para Celsius
// 5 – Kg para Libras
// 6 – Libras para Kg
// `)

// let tipoConversao = keyboard.questionInt("Escolha o numero da conversao (1-6): ")

// let conversao = {
//     valorOriginal: valorAConverter
// };

// switch (tipoConversao) {
//     case 1:
//         conversao.tipo = "Km para Milhas"
//         conversao.unidadeOriginal = "Km"
//         conversao.unidadeResultado = "Mi"
//         conversao.resultado = (valorAConverter * 0.621371).toFixed(2)
//         break;
//     case 2:
//         conversao.tipo = "Milhas para Km"
//         conversao.unidadeOriginal = "Mi"
//         conversao.unidadeResultado = "Km"
//         conversao.resultado = (valorAConverter * 1.60934).toFixed(2)
//         break;
//     case 3:
//         conversao.tipo = "Celsius para Fahrenheit"
//         conversao.unidadeOriginal = "°C"
//         conversao.unidadeResultado = "°F"
//         conversao.resultado = ((valorAConverter * 9/5) + 32).toFixed(2)
//         break;
//     case 4:
//         conversao.tipo = "Fahrenheit para Celsius"
//         conversao.unidadeOriginal = "°F"
//         conversao.unidadeResultado = "°C"
//         conversao.resultado = ((valorAConverter - 32) * 5/9).toFixed(2)
//         break;
//     case 5:
//         conversao.tipo = "Kg para Libras"
//         conversao.unidadeOriginal = "Kg"
//         conversao.unidadeResultado = "Lb"
//         conversao.resultado = (valorAConverter * 2.20462).toFixed(2)
//         break;
//     case 6:
//         conversao.tipo = "Libras para Kg"
//         conversao.unidadeOriginal = "Lb"
//         conversao.unidadeResultado = "Kg"
//         conversao.resultado = (valorAConverter / 2.20462).toFixed(2)
//         break;
//     default:
//         console.log("Tipo de conversão inválido.")
//         conversao.tipo = "Inválido"
// }

// console.log("--- DETALHES DA CONVERSÃO ---")
// console.table(conversao);

// console.log(`${conversao.valorOriginal} ${conversao.unidadeOriginal} = ${conversao.resultado} ${conversao.unidadeResultado}`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:


console.log("_______________________________");