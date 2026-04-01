// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

// let keyboard = require('readline-sync')

// let jogador = {
//     nome: "",
//     pontos: 0
// };

// jogador.nome = keyboard.question("Digite o seu nome: ");

// console.log(`Olá, ${jogador.nome}! Seja bem-vindo ao Quiz de Games.`);
// console.log("Responda com o número da opção (1 a 4).");

// console.log(`1. Qual o nome do protagonista de The Legend of Zelda?
// 1) Zelda
// 2) Link
// 3) Ganon
// 4) Mario`)

// let respostaUm = keyboard.questionInt("Sua resposta: ");

// switch (respostaUm) {
//     case 2:
//         console.log("Correto!");
//         jogador.pontos = jogador.pontos + 1;
//         break;
//     case 1:
//     case 3:
//     case 4:
//         console.log(`Errado! A resposta certa era a opção 2, ${jogador.nome}.`);
//         break;
//     default:
//         console.log("Opção inválida, nenhum ponto atribuído.");
//         break;
// }

// console.log(`2. Em 'Minecraft', qual material é necessário para criar um portal para o Nether?
// 1) Diamante
// 2) Ouro
// 3) Obsidiana
// 4) Ferro`)

// let respostaDois = entradaDados.questionInt("Sua resposta: ");

// switch (respostaDois) {
//     case 3:
//         console.log("Correto!");
//         jogador.pontos = jogador.pontos + 1;
//         break;
//     case 1:
//     case 2:
//     case 4:
//         console.log(`Errado! A resposta certa era a opção 3, ${jogador.nome}.`);
//         break;
//     default:
//         console.log("Opção inválida, nenhum ponto atribuído.");
//         break;
// }

// console.log(`3. Qual é a cor do fantasma 'Blinky' no jogo Pac-Man?
// 1) Azul
// 2) Rosa
// 3) Laranja
// 4) Vermelho`)

// let respostaTres = entradaDados.questionInt("Sua resposta: ");

// switch (respostaTres) {
//     case 4:
//         console.log("Correto!");
//         jogador.pontos = jogador.pontos + 1;
//         break;
//     case 1:
//     case 2:
//     case 3:
//         console.log(`Errado! A resposta certa era a opção 4, ${jogador.nome}.`);
//         break;
//     default:
//         console.log("Opção inválida, nenhum ponto atribuído.");
//         break;
// }

// console.log(`4. Em qual jogo os jogadores caem em uma ilha e lutam para ser o último sobrevivente?
// 1) Fortnite
// 2) FIFA
// 3) Need for Speed
// 4) The Sims`)

// let respostaQuatro = entradaDados.questionInt("Sua resposta: ");

// switch (respostaQuatro) {
//     case 1:
//         console.log("Correto!");
//         jogador.pontos = jogador.pontos + 1;
//         break;
//     case 2:
//     case 3:
//     case 4:
//         console.log(`Errado! A resposta certa era a opção 1, ${jogador.nome}.`);
//         break;
//     default:
//         console.log("Opção inválida, nenhum ponto atribuído.");
//         break;
// }

// console.log(`5. Qual empresa criou o console 'PlayStation'?
// 1) Nintendo
// 2) Sega
// 3) Microsoft
// 4) Sony`)

// let respostaCinco = entradaDados.questionInt("Sua resposta: ");

// switch (respostaCinco) {
//     case 4:
//         console.log("Correto!");
//         jogador.pontos = jogador.pontos + 1;
//         break;
//     case 1:
//     case 2:
//     case 3:
//         console.log(`Errado! A resposta certa era a opção 4, ${jogador.nome}.`);
//         break;
//     default:
//         console.log("Opção inválida, nenhum ponto atribuído.");
//         break;
// }

// console.log(`========================================`);
// console.log(`Fim de jogo, ${jogador.nome}!`);
// console.log(`Você fez ${jogador.pontos} de 5 pontos.`);

// let mensagemFinal = "";

// switch (jogador.points) {
//     case 5:
//         mensagemFinal = "Perfeito! Você é um expert lendário!";
//         break;
//     case 4:
//         mensagemFinal = "Muito bem! Quase um Pro Player!";
//         break;
//     case 3:
//         mensagemFinal = "Bom trabalho, mas pode melhorar o seu XP.";
//         break;
//     case 1:
//     case 2:
//         mensagemFinal = "Nheee! Precisa de mais prática nesse jogo.";
//         break;
//     default:
//         mensagemFinal = "VIX, Game Over! Tente novamente!";
//         break;
// }

// console.log(mensagemFinal);
// console.log(`========================================\n`);

// const resultado = {
//     jogador: jogador.nome,
//     pontos: jogador.pontos,
//     total: 5,
//     aprovado: jogador.pontos >= 3
// };

// console.table(resultado)

// console.log("--- REVISÃO DAS RESPOSTAS ---");
// console.log(`Pergunta: Q1. | Sua: ${respostaUm} | Correta: 2`);
// console.log(`Pergunta: Q2. | Sua: ${respostaDois} | Correta: 3`);
// console.log(`Pergunta: Q3. | Sua: ${respostaTres} | Correta: 4`);
// console.log(`Pergunta: Q4. | Sua: ${respostaQuatro} | Correta: 1`);
// console.log(`Pergunta: Q5. | Sua: ${respostaCinco} | Correta: 4`);