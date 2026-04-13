// ============================================================
//   ATIVIDADE AVALIATIVA N5
//   Módulos: Operadores e Estruturas Condicionais (if/else, switch/case)
// ============================================================
//
//  Instruções Gerais:
//  • Resolva o exercício no espaço indicado.
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while).
//  • Utilize readline-sync para entrada de dados.
//  • Para executar: node atividade-avaliativa-n5.js.
//  • Antes da entrega, deixe as respostas descomentadas.
//  • A atividade pode ser desenvolvida individualmente ou em equipe.
//    Se for resolvida em equipe, somente um deve fazer a entrega
//    Se houverem 2 códigos iguais, ambos serão considerados plágio (nota 0).
//
//  • Nome do(s) aluno(s):Kevin e gabriel
//
// ============================================================

// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Formulário Condicionado: Agência de Viagens
// ------------------------------------------------------------
//
// Você vai criar o sistema de recomendação de destinos de uma agência de viagens.
// O formulário faz perguntas ao usuário e, dependendo de cada resposta,
// o caminho seguido é diferente — até chegar a um dos destinos finais (A a I).
//
// REGRAS:
//   • Use if/else e/ou switch/case para toda a lógica de ramificação.
//   • Mostre as opções de cada pergunta com console.log() antes de coletar a resposta.
//   • Use questionInt() para perguntas de múltipla escolha numerada.
//   • Use question() para entradas de texto.
//   • Sempre que uma opção inválida for escolhida, exiba: "Opção inválida. Encerrando o formulário."
//     e não continue com as próximas perguntas.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Dados iniciais
// ─────────────────────────────────────────────────────────────
//
// Colete:
//   • "nomeViajante" → nome do viajante
//   • "idadeViajante" → idade
//   • "orcamento - 1) Econômico 2) Moderado 3) Luxo" → orçamento
//
// Exiba: "Olá, <nomeViajante>! Vamos encontrar o destino perfeito para você."
//
// ─────────────────────────────────────────────────────────────
// PASSO B – Pergunta 1
// ─────────────────────────────────────────────────────────────
//
// Exiba as opções e colete em "resp1":
//
//   Qual tipo de clima você prefere?
//   1) Tropical / Quente
//   2) Frio / Neve
//   3) Temperado / Ameno
//
// ─────────────────────────────────────────────────────────────
// PASSO C – Pergunta 2 (depende da Pergunta 1)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for Tropical → exiba e colete em "resp2":
//     Você prefere:
//     1) Praia e mar
//     2) Floresta e ecoturismo
//
//   se resp1 for Frio → exiba e colete em "resp2":
//     Você quer:
//     1) Neve de verdade
//     2) Frio sem neve
//
//   se resp1 for Temperado → exiba e colete em "resp2":
//     Você prefere explorar:
//     1) Cultura, museus e arquitetura histórica
//     2) Natureza, trilhas e parques nacionais
//
// ─────────────────────────────────────────────────────────────
// PASSO D – Pergunta 3 (depende das Perguntas 1 e 2)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for 1 e resp2 for 1 (Tropical + Praia) → exiba e colete em "resp3":
//     Como você prefere sua viagem?
//     1) Animada — praias badaladas e muito agito
//     2) Tranquila — sossego e natureza preservada
//
//   se resp1 for 1 e resp2 for 2 (Tropical + Floresta):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 2 e resp2 for 1 (Frio + Neve) → exiba e colete em "resp3":
//     Qual é o seu objetivo?
//     1) Praticar esportes de inverno (esqui, snowboard)
//     2) Contemplar a paisagem nevada e relaxar
//
//   se resp1 for 2 e resp2 for 2 (Frio + Sem neve):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 3 e resp2 for 1 (Temperado + Cultura) → exiba e colete em "resp3":
//     Qual região você prefere?
//     1) Europa
//     2) América do Sul
//
//   se resp1 for 3 e resp2 for 2 (Temperado + Natureza):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
// ─────────────────────────────────────────────────────────────
// PASSO E – Destino final
// ─────────────────────────────────────────────────────────────
//
// Com base nas respostas, defina a variável "destino" conforme a tabela:
//
//   Caminho                                   | Destino
//   ──────────────────────────────────────────┼──────────────────────────────────────────────
//   Tropical → Praia → Animada       (1→1→1)  | A) "Cancún (México) ou Fortaleza (Brasil)"
//   Tropical → Praia → Tranquila     (1→1→2)  | B) "Maldivas ou Fernando de Noronha (Brasil)"
//   Tropical → Floresta              (1→2)    | C) "Amazônia (Brasil) ou Costa Rica"
//   Frio → Neve → Esportes           (2→1→1)  | D) "Aspen (EUA) ou Bariloche (Argentina)"
//   Frio → Neve → Contemplação       (2→1→2)  | E) "Ushuaia (Argentina) ou Lapônia (Finlândia)"
//   Frio → Sem neve                  (2→2)    | F) "Serra Gaúcha (Brasil) ou Patagônia Chilena"
//   Temperado → Cultura → Europa     (3→1→1)  | G) "Lisboa, Barcelona ou Roma"
//   Temperado → Cultura → Américas   (3→1→2)  | H) "Buenos Aires, Cusco ou Cartagena"
//   Temperado → Natureza             (3→2)    | I) "Chapada dos Veadeiros ou Torres del Paine"
//
// Exiba o resultado com console.log() e template literal no formato:
//
//   ===============================================
//   |   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
//   ===============================================
//   |   Viajante : <nomeViajante>                 |
//   |   Idade    : <idadeViajante> anos           |
//   |   Orçamento: <Econômico / Moderado / Luxo>  |
//   |   Destino  : <destino>                      |
//   ===============================================
//   Boa viagem, <nomeViajante>! O <destino> espera por você.
//
// Dica: converta "orcamento" para texto legível antes de exibir.
//   "1" → "Econômico"   "2" → "Moderado"   "3" → "Luxo"
//
// ─────────────────────────────────────────────────────────────
// PASSO F – Dica de orçamento (Bônus)
// ─────────────────────────────────────────────────────────────
//
// Após o resultado, exiba uma dica com base em "orcamento" (usando switch/case):
//   Econômico → "Dica: procure voos com antecedência e use hostels ou Airbnb!"
//   Moderado → "Dica: hotéis 3 estrelas e pacotes combinados são ótimas opções!"
//   Luxo → "Dica: resorts all-inclusive e voos executivos são a sua praia!"

// → Seu código aqui:
let keyboard = require('readline-sync')

let nomeViajante = keyboard.question("Digite o nome: ")

if (nomeViajante == "") {
  console.log("Você não digitou o nome! Tente de novo:")
  nomeViajante = keyboard.question("Digite o nome: ")
}

let idadeViajante = keyboard.questionInt("Digite a idade: ")

if (idadeViajante < 1 || idadeViajante > 100) {
  console.log("Idade invalida! Voce tem apenas mais uma tentativa.")
  idadeViajante = keyboard.questionInt("Digite a idade corretamente (1 a 100): ")
}

console.log(`Olá, ${nomeViajante}! Vamos encontrar o destino perfeito para você.`)

console.log(`
Escolha seu orcamento:
1 Economico 
2 Moderado  
3 Luxo`)

let orcamentoOpcao = keyboard.questionInt("Opcao: ")

let orcamentoTexto
switch (orcamentoOpcao) {
  case 1: 
    orcamentoTexto = "Economico"
    break
  case 2: 
    orcamentoTexto = "Moderado" 
    break
  case 3: 
    orcamentoTexto = "Luxo" 
    break
  default:
    console.log("Opção inválida.")
    return 
}

let destino = ""
let resp1, resp2, resp3

console.log(`
Qual tipo de clima voce prefere?
1 Tropical / Quente  
2 Frio / Neve  
3 Temperado / Ameno`)

resp1 = keyboard.questionInt("Resposta: ")

switch (resp1) {
  case 1: 
    console.log(`
Voce prefere: 
1-Praia e mar 
2-Floresta e ecoturismo`)
    resp2 = keyboard.questionInt("Resposta: ")
    switch (resp2) {
      case 1: 
        console.log(`
Como prefere sua viagem? 
1 Animada
2 Tranquila`)
        resp3 = keyboard.questionInt("Resposta: ")
        switch (resp3) {
          case 1: 
            destino = "Cancún (México) ou Fortaleza (Brasil)" 
            break
          case 2: 
            destino = "Maldivas ou Fernando de Noronha (Brasil)" 
            break
          default: 
            console.log("Opção inválida.") 
            return
        }
        break
      case 2: 
        destino = "Amazônia (Brasil) ou Costa Rica" 
        break
      default: 
        console.log("Opção inválida.") 
        return
    }
    break

  case 2: 
    console.log(`
Voce quer:
1 Neve de verdade
2 Frio sem neve`)
    resp2 = keyboard.questionInt("Resposta: ")
    switch (resp2) {
      case 1:
        console.log(`
Qual o seu objetivo?
1 Esportes de inverno
2 Contemplar e relaxar`)
        resp3 = keyboard.questionInt("Resposta: ")
        switch (resp3) {
          case 1: 
            destino = "Aspen (EUA) ou Bariloche (Argentina)" 
            break
          case 2: 
            destino = "Ushuaia (Argentina) ou Lapônia (Finlândia)" 
            break
          default: 
            console.log("Opção inválida.") 
            return
        }
        break
      case 2: 
        destino = "Serra Gaúcha (Brasil) ou Patagônia Chilena" 
        break
      default: 
        console.log("Opção inválida.") 
        return
    }
    break

  case 3: 
    console.log(`
Voce prefere explorar:
1 Cultura e Historia
2 Natureza e Trilhas`)
    resp2 = keyboard.questionInt("Resposta: ")
    switch (resp2) {
      case 1:
        console.log(`
Qual regiao voce prefere?
1 Europa
2 America do Sul`)
        resp3 = keyboard.questionInt("Resposta: ")
        switch (resp3) {
          case 1: 
            destino = "Lisboa, Barcelona ou Roma" 
            break
          case 2: 
            destino = "Buenos Aires, Cusco ou Cartagena" 
            break
          default: 
            console.log("Opção inválida.") 
            return // DEVERIA SER BREAK. PORQUE RETURN SOMENTE NOS DEFAULTS?
        }
        break
      case 2: 
        destino = "Chapada dos Veadeiros ou Torres del Paine" 
        break
      default: 
        console.log("Opção inválida.") 
        return
    }
    break

  default:
    console.log("Opção inválida.")
    return
}

console.log(`
===============================================
|   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
===============================================
|   Viajante : ${nomeViajante}
|   Idade    : ${idadeViajante} anos
|   Orçamento: ${orcamentoTexto}
|   Destino  : ${destino}
===============================================
Boa viagem, ${nomeViajante}! O ${destino} espera por você.`)

switch (orcamentoOpcao) {
  case 1: 
    console.log("Dica: procure voos com antecedência e use hostels!") 
    break
  case 2: 
    console.log("Dica: hotéis 3 estrelas são ótimas opções!") 
    break
  case 3: 
    console.log("Dica: resorts all-inclusive são a sua praia!") 
    break
}

//REVIEW 
// NO INPUT DO NOME, SE O USUARIO NAO DIGITAR NADA, O CODIGO CONTINUA SENDO EXECUTADO E NAO APARECE NENHUM NOME
// NO INPUT DA IDADE, SE O USUARIO COLOCAR QUE POSSUI "999999" ANOS DE IDADE OU IDADE NEGATIVA, RECOMENDO DEIXAR UM AVISO DE IDADE INVALIDA
// QUANDO EXIBIDO A MSG DA LINHA 308 / O DESTINO FICA COM ERRO DE DIGITACAO. EX: (O LISBOA,BARCELONA OU ROMA ESPERA POR VOCÊ), PODERIA COLOCAR O "DESTINO" ,  DICORDAÇAO: NAO ENTENDI :/


//GOSTEI DA MANEIRA QUE FOI ESCRITO O CODIGO, BEM ORGANIZADO E FUNCIONAL!! PARABÉNS!!