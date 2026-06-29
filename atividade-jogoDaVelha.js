//Jogo da Velha
// Nome : Gabriel costa
let keyboard = require("readline-sync")

//Versão 1
// const tabuleiro = 
//   [
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//   ]
//   console.table(tabuleiro);

//   let jogadas = 0

//   while(jogadas < 5 ){
//       let jogadorAtual = ""
//       if( jogadas % 2 === 0) {
//           jogadorAtual = "X"
//       } else {
//           jogadorAtual = "O"
//       }
  
// console.log(`vez do joagador [${jogadorAtual}]`);

// let linha = keyboard.questionInt("escolha a linha (0,1,2): ")
// let coluna = keyboard.questionInt("escolha a coluna (0,1,2): ")

// if(tabuleiro[linha][coluna] != "-"){
//     console.log("posiçao ja ocupada! tente novanmente");
// }else {
//     tabuleiro[linha][coluna] = jogadorAtual
//     jogadas++

//     console.table(tabuleiro);
    
//     }
// }

// console.log("fim das 5 jogadas");

console.log("_________________________________");

//Versão 2

const JogoDaVelha = 
  [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]
  console.log("    ---JOGO-DA-VELHA---");
  console.table(JogoDaVelha);

let jogadas = 0
let Vencedor = ""


  while(jogadas < 9 && Vencedor === "" ){
      let jogadorAtual = ""
      if( jogadas % 2 === 0) {
          jogadorAtual = "X"
      } else {
          jogadorAtual = "O"
      }
  
console.log(`vez do joagador [${jogadorAtual}]`);

let linha = keyboard.questionInt("escolha a linha (0,1,2): ")
let coluna = keyboard.questionInt("escolha a coluna (0,1,2): ")

if(linha >= 0 && linha <= 2 && coluna >= 0 && coluna <= 2) {

if(JogoDaVelha[linha][coluna] != "-"){
    console.log("posiçao ja ocupada! tente novanmente");
}else {
    JogoDaVelha[linha][coluna] = jogadorAtual
    jogadas++

    console.table(JogoDaVelha);
    
    for(let i = 0; i < 3; i++){
        if(JogoDaVelha[i][0] === jogadorAtual && JogoDaVelha[i][1] === jogadorAtual && JogoDaVelha[i][2] === jogadorAtual) {Vencedor = jogadorAtual}
        if(JogoDaVelha[0][i] === jogadorAtual && JogoDaVelha[1][i] === jogadorAtual && JogoDaVelha[2][i] === jogadorAtual) {Vencedor = jogadorAtual}
        }

    if(JogoDaVelha[0][0] === jogadorAtual && JogoDaVelha[1][1] === jogadorAtual && JogoDaVelha[2][2] === jogadorAtual) {Vencedor = jogadorAtual}
    if(JogoDaVelha[0][2] === jogadorAtual && JogoDaVelha[1][1] === jogadorAtual && JogoDaVelha[2][0] === jogadorAtual) {Vencedor = jogadorAtual}
   }
}else {
    console.log("linha ou coluna invalida! digite apenas 0, 1 ou 2");
    }
   
}

if(Vencedor !== "") {
    console.log(`\n fim de jogo! o jogador [${Vencedor}] venceu`);
}else{
    console.log("fim de jogo deu empate DEU VELHA");
    }


console.log(`
        __
    ___( o)>
    \\ <_. )
     \`---'
`);