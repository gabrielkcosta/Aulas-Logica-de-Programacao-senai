/*
// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================

const readline = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:

function temTamanhoMinimo(senha, min) {
    return senha.length >= min;
}

function temNumero(senha) {
    return /\d/.test(senha);
}

function temMaiuscula(senha) {
    return /[A-Z]/.test(senha);
}

function temEspecial(senha) {
    return /[!@#$%&*?]/.test(senha);
}

function validarSenha(senha) {
    let motivos = [];

    if (!temTamanhoMinimo(senha, 8)) {
        motivos.push("Mínimo de 8 caracteres");
    }
    if (!temNumero(senha)) {
        motivos.push("Deve conter número");
    }
    if (!temMaiuscula(senha)) {
        motivos.push("Deve conter letra maiúscula");
    }
    if (!temEspecial(senha)) {
        motivos.push("Deve conter caractere especial (!@#$%&*?)");
    }

    return {
        valida: motivos.length === 0,
        motivos: motivos
    };
}


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:

function celsiusParaFahrenheit(c) { return c * 1.8 + 32; }
function fahrenheitParaCelsius(f) { return (f - 32) / 1.8; }
function kmParaMilhas(km) { return km * 0.621371; }
function milhasParaKm(mi) { return mi / 0.621371; }
function kgParaLibras(kg) { return kg * 2.20462; }
function librasParaKg(lb) { return lb / 2.20462; }

function converter(valor, dePara) {
    switch (dePara) {
        case 1: return celsiusParaFahrenheit(valor);
        case 2: return fahrenheitParaCelsius(valor);
        case 3: return kmParaMilhas(valor);
        case 4: return milhasParaKm(valor);
        case 5: return kgParaLibras(valor);
        case 6: return librasParaKg(valor);
        default: return null;
    }
}

let opcao2;
do {
    console.log("\n--- CONVERSOR DE UNIDADES ---");
    console.log("1. Celsius para Fahrenheit");
    console.log("2. Fahrenheit para Celsius");
    console.log("3. Km para Milhas");
    console.log("4. Milhas para Km");
    console.log("5. Kg para Libras");
    console.log("6. Libras para Kg");
    console.log("0. Sair do Menu de Conversão");
    opcao2 = readline.questionInt("Escolha uma opcao: ");

    if (opcao2 >= 1 && opcao2 <= 6) {
        let valor = readline.questionFloat("Digite o valor para conversao: ");
        let resultado = converter(valor, opcao2);
        console.log(`\n>> Resultado Formatado: ${resultado.toFixed(2)}`);
    } else if (opcao2 !== 0) {
        console.log("Opção inválida!");
    }

} while (opcao2 !== 0);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:

let listaPerguntas = [
    { pergunta: "Qual a palavra-chave usada para declarar uma variavel constante em JS?", resposta: "const", jaRespondida: false, acertou: false },
    { pergunta: "Qual estrutura repete o bloco ANTES de testar a condicao (executa pelo menos uma vez)?", resposta: "do while", jaRespondida: false, acertou: false },
    { pergunta: "Qual metodo adiciona um elemento no FIM de um vetor?", resposta: "push", jaRespondida: false, acertou: false },
    { pergunta: "Qual o tipo de dado de uma variavel que guarda true ou false?", resposta: "boolean", jaRespondida: false, acertou: false },
    { pergunta: "Qual o operador de igualdade estrita (compara valor e tipo)?", resposta: "===", jaRespondida: false, acertou: false }
];

function exibirPergunta(obj, num) {
    console.log(`\n========================================`);
    console.log(` PERGUNTA Nº ${num} `);
    console.log(` -> ${obj.pergunta}`);
    console.log(`========================================`);
}

function verificarResposta(obj, respostaUsuario) {
    obj.jaRespondida = true;
    if (respostaUsuario.trim().toLowerCase() === obj.resposta.toLowerCase()) {
        obj.acertou = true;
        return true;
    }
    obj.acertou = false;
    return false;
}

function mostrarResultado(lista) {
    let acertos = 0;
    for (let item of lista) {
        if (item.acertou) acertos++;
    }
    console.log(`\n--- PLACAR PARCIAL: Você acertou ${acertos} de ${lista.length} ---`);
}

function iniciarQuiz(lista) {
    console.log("\n*** INICIANDO O QUIZZ DE JAVASCRIPT ***");
    for (let i = 0; i < lista.length; i++) {
        exibirPergunta(lista[i], i + 1);
        let resp = readline.question("Sua resposta: ");

        if (verificarResposta(lista[i], resp)) {
            console.log("Resposta Correta! Muito bem.");
        } else {
            console.log(`Resposta incorreta! A resposta ideal era: "${lista[i].resposta}"`);
        }
        mostrarResultado(lista);
    }
}

iniciarQuiz(listaPerguntas);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:

let bancoFuncionarios = [];
let idGerador = 1;

function criarFuncionario(lista, nome, cargo, salario) {
    let novoFuncionario = {
        id: idGerador++,
        nome: nome,
        cargo: cargo,
        salario: salario,
        ativo: true
    };
    lista.push(novoFuncionario);
}

function buscarPorId(lista, id) {
    for (let func of lista) {
        if (func.id === id) return func;
    }
    return null;
}

function atualizarSalario(lista, id, novoSalario) {
    let func = buscarPorId(lista, id);
    if (func) {
        func.salario = novoSalario;
        return true;
    }
    return false;
}

function desligar(lista, id) {
    let func = buscarPorId(lista, id);
    if (func) {
        func.ativo = false;
        return true;
    }
    return false;
}

function reintegrar(lista, id) {
    let func = buscarPorId(lista, id);
    if (func) {
        func.ativo = true;
        return true;
    }
    return false;
}

function totalFolha(lista) {
    let total = 0;
    for (let func of lista) {
        if (func.ativo) total += func.salario;
    }
    return total;
}

function mediaSalarial(lista) {
    let total = 0;
    let contadorAtivos = 0;
    for (let func of lista) {
        if (func.ativo) {
            total += func.salario;
            contadorAtivos++;
        }
    }
    return contadorAtivos === 0 ? 0 : total / contadorAtivos;
}

function maiorSalario(lista) {
    let maior = null;
    for (let func of lista) {
        if (func.ativo) {
            if (maior === null || func.salario > maior.salario) {
                maior = func;
            }
        }
    }
    return maior;
}

let opcao4;
do {
    console.log("\n--- SISTEMA DE GESTÃO DE FUNCIONÁRIOS ---");
    console.log("1. Cadastrar Funcionário");
    console.log("2. Buscar por ID");
    console.log("3. Atualizar Salário");
    console.log("4. Desligar (Inativar)");
    console.log("5. Reintegrar (Ativar)");
    console.log("6. Ver Total da Folha de Pagamento");
    console.log("7. Ver Média Salarial dos Ativos");
    console.log("8. Ver Funcionário com Maior Salário");
    console.log("0. Sair do Painel Corporativo");
    opcao4 = readline.questionInt("Selecione uma opcao: ");

    switch (opcao4) {
        case 1:
            let nomeF = readline.question("Nome do funcionario: ");
            let cargoF = readline.question("Cargo: ");
            let salarioF = readline.questionFloat("Salario inicial: ");
            criarFuncionario(bancoFuncionarios, nomeF, cargoF, salarioF);
            break;
        case 2:
            let idB = readline.questionInt("Digite o ID para busca: ");
            let achado = buscarPorId(bancoFuncionarios, idB);
            console.log("Resultado da Busca:", achado);
            break;
        case 3:
            let idA = readline.questionInt("ID do funcionario: ");
            let nSal = readline.questionFloat("Novo Salario: ");
            let att = atualizarSalario(bancoFuncionarios, idA, nSal);
            console.log(att ? "Salário atualizado!" : "Funcionário não encontrado.");
            break;
        case 4:
            let idD = readline.questionInt("ID para desligamento: ");
            console.log(desligar(bancoFuncionarios, idD) ? "Funcionário desligado." : "ID inválido.");
            break;
        case 5:
            let idR = readline.questionInt("ID para reintegração: ");
            console.log(reintegrar(bancoFuncionarios, idR) ? "Funcionário reintegrado com sucesso." : "ID inválido.");
            break;
        case 6:
            console.log(`\nTotal da folha atual (Ativos): R$ ${totalFolha(bancoFuncionarios).toFixed(2)}`);
            break;
        case 7:
            console.log(`\nMédia salarial atual (Ativos): R$ ${mediaSalarial(bancoFuncionarios).toFixed(2)}`);
            break;
        case 8:
            console.log("\nFuncionário ativo com maior salário:", maiorSalario(bancoFuncionarios));
            break;
    }

    if (opcao4 !== 0) {
        console.log("\n--- ESTADO ATUAL DA LISTA DE FUNCIONÁRIOS ---");
        console.table(bancoFuncionarios);
    }

} while (opcao4 !== 0);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pedirPalpite(min, max) {
    let palpite;
    do {
        palpite = readline.questionInt(`Insira o seu palpite (${min} a ${max}): `);
        if (palpite < min || palpite > max) {
            console.log("Aviso: Palpite fora do intervalo estipulado! Tente novamente.");
        }
    } while (palpite < min || palpite > max);
    return palpite;
}

function compararPalpite(palpite, alvo) {
    if (palpite > alvo) return "maior";
    if (palpite < alvo) return "menor";
    return "acertou";
}

function classificarTentativas(qtd) {
    if (qtd === 1) return "Sorte de principiante!";
    if (qtd >= 2 && qtd <= 3) return "Excelente!";
    if (qtd >= 4 && qtd <= 6) return "Bom!";
    if (qtd >= 7 && qtd <= 10) return "Regular.";
    return "Continue tentando!";
}

function jogar(min, max) {
    let alvo = sortearNumero(min, max);
    let tentativas = 0;
    let flagAcertou = false;

    console.log(`\n[!] Novo Jogo! O sistema sorteou um número de ${min} a ${max}. Tente adivinhar!`);

    while (!flagAcertou) {
        let palpiteAtual = pedirPalpite(min, max);
        tentativas++;

        let feedback = compararPalpite(palpiteAtual, alvo);

        if (feedback === "acertou") {
            console.log(`\nParabéns! Você descobriu o número secreto em ${tentativas} tentativas.`);
            flagAcertou = true;
        } else if (feedback === "maior") {
            console.log("Dica: O número secreto é MENOR do que seu palpite.");
        } else {
            console.log("Dica: O número secreto é MAIOR do que seu palpite.");
        }
    }
    return tentativas;
}

let historicoPartidas = [];
let contadorPartidas = 1;

do {
    let totalTentativas = jogar(1, 100);
    let rank = classificarTentativas(totalTentativas);

    historicoPartidas.push({
        partida: contadorPartidas++,
        tentativas: totalTentativas,
        classificacao: rank
    });

} while (readline.keyInYN('\nQuer tentar mais uma vez? '));

console.log("\n--- HISTÓRICO DE PERFORMANCE FINAL ---");
console.table(historicoPartidas);
/*/
console.log("_______________________________");