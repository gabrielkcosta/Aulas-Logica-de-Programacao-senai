/*
//ATIVIDADE AVALIATIVA
// SOBRE CALCULADORA 

//NOME : GABRIEL

let keyboard = require("readline-sync")

// let n1 = keyboard.questionFloat('Digite o primeiro numero: ');
// let n2 = keyboard.questionFloat('Digite o segundo numero: ');

// console.log("1 – Soma | 2 – Subtracao | 3 – Multiplicacao | 4 – Divisao");
// let escolha = keyboard.questionInt('Escolha a operacao: ');

// let calculo = {
//     numeroA: n1,
//     numeroB: n2,
//     operacao: escolha,
//     simbolo: "" 
// };

// let resultado;

// if (calculo.operacao === 1) {
//     calculo.simbolo = "+";
//     resultado = calculo.numeroA + calculo.numeroB;
// } else if (calculo.operacao === 2) {
//     calculo.simbolo = "-";
//     resultado = calculo.numeroA - calculo.numeroB;
// } else if (calculo.operacao === 3) {
//     calculo.simbolo = "*";
//     resultado = calculo.numeroA * calculo.numeroB;
// } else if (calculo.operacao === 4) {
//     calculo.simbolo = "/";

//     if (calculo.numeroB === 0) {
//         resultado = "Erro: Divisao por zero";
//     } else {
//         resultado = calculo.numeroA / calculo.numeroB;
//     }
// } else {
//     resultado = "Operacao Invalida";
// }

// console.log(`${calculo.numeroA} ${calculo.simbolo} ${calculo.numeroB} = ${resultado}`);

console.log("-----------------------------------------")

//VERSAO DOIS

console.log("=============================================");
console.log("       CALCULADORA DE CALCULOS DÚVIDOSOS     ");
console.log("=============================================");
let continuar = keyboard.questionInt(' DESEJA INICIAR? (1-SIM | 0-NAO): ');


while (continuar == 1) {
    console.log("\n---------------------------")
    let n1 = keyboard.questionFloat("DIGITE O PRIMEIRO NUMERO: ");
    let n2 = keyboard.questionFloat('DIGITE O SEGUNDO NUMERO: ');

    console.log("|------------------------------------------|");
    console.log("|  1: + SOMA          |  2: - SUBTRACAO    |");
    console.log("|  3: * MULTIPLICACAO |  4: / DIVISAO      |");
    console.log("|__________________________________________|");
    let escolha = keyboard.questionInt('ESCOLHA A OPERAÇAO: ');


    let calculo = {
        numeroA: n1,
        numeroB: n2,
        operacao: escolha,
        simbolo: ""
    };

    if (calculo.operacao === 1) {
        calculo.simbolo = "+";
        resultado = calculo.numeroA + calculo.numeroB;
    } else if (calculo.operacao === 2) {
        calculo.simbolo = "-";
        resultado = calculo.numeroA - calculo.numeroB;
    } else if (calculo.operacao === 3) {
        calculo.simbolo = "*";
        resultado = calculo.numeroA * calculo.numeroB;
    } else if (calculo.operacao === 4) {
        calculo.simbolo = "/";

        if (calculo.numeroB === 0) {
            resultado = "ERRO: DIVISAO POR ZERO";
        } else {
            resultado = calculo.numeroA / calculo.numeroB;
        }
    } else {
        resultado = "OPERAÇAO INVALIDA";
    }

    console.log("\n  _______________________________________ ");
    console.log(" /                                        |");
    console.log(` |   CONTA: ${calculo.numeroA} ${calculo.simbolo} ${calculo.numeroB}`);
    console.log(" |                                        |");
    console.log(` |   RESULTADO: ${resultado}              |`);
    console.log(" |                                        |");
    console.log(" |    ISSO ERA FACIL DAVA                 |");
    console.log(" |        PRA FAZER NA                    |");
    console.log(" |          CABEÇA                        |");
    console.log(" |_______________________________________/");

    console.log("1 - SIM | 0 - NAO");
    continuar = keyboard.questionInt("DESEJA FAZER OUTRO CALCULO? :")
}

console.log("   PROGRAMA ENCERRADO");
/*/
console.log("-----------------------------------------")