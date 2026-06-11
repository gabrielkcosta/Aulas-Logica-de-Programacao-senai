//jogo da forca
//nome: Gabriel Costa
//Dia 10/06/26

let keyboard = require("readline-sync");
function log(mensagem) { console.log(mensagem); }
function vazio() { log("") }
function boasVindas() { log("---BEM-VINDO(a)-AO-JOGO-DA-FORCA---") }

boasVindas(); 

const palavrasForca = [
    // Animais
    "cachorro", "gato", "elefante", "girafa", "leão",
    "tigre", "macaco", "urso", "coelho", "pinguim",
    "jacare", "tartaruga", "borboleta", "cavalo", "ovelha",
    "camelo", "rinoceronte", "hipopotamo", "tubarão", "polvo",

    // Frutas
    "maca", "banana", "laranja", "uva", "morango",
    "abacaxi", "melancia", "mamão", "pera", "melão",
    "kiwi", "manga", "cereja", "goiaba", "amora",
    "framboesa", "maracuja", "pêssego", "ameixa", "figo",

    // Objetos
    "computador", "telefone", "caderno", "caneta", "cadeira",
    "mesa", "janela", "porta", "relogio", "espelho",
    "geladeira", "fogão", "televisao", "cama", "travesseiro",
    "mochila", "sapato", "óculos", "tesoura", "garrafa",

    // Profissões
    "medico", "professor", "engenheiro", "advogado", "enfermeiro",
    "bombeiro", "policial", "carteiro", "padeiro", "mecanico",
    "arquiteto", "dentista", "eletricista", "encanador", "jornalista",
    "pintor", "motorista", "cozinheiro", "fazendeiro", "piloto",

    // Países
    "brasil", "argentina", "canada", "japao", "austrália",
    "alemanha", "franca", "italia", "espanha", "mexico",
    "portugal", "inglaterra", "china", "India", "russia",
    "egito", "marrocos", "peru", "chile", "colombia"
];

let palavraRandom = Math.floor(Math.random() * palavrasForca.length);
let palavraSecreta = palavrasForca[palavraRandom]; 
let palavraEscondida = [];
let erros = 0;
let maxErro = 6;
let JogoAcabou = false;

for (let i = 0; i < palavraSecreta.length; i++){ 
    palavraEscondida.push("_");
}

while (JogoAcabou === false) {
    let status = "";
    for (let i = 0; i < palavraEscondida.length; i++){
        status = status + palavraEscondida[i] + " ";
    }

    log(`Palavra: ${status}`);
    log(`Erros: ${erros} de ${maxErro}`);
    vazio();
    let letra = keyboard.question(`Digite uma letra: `); 

    if (letra === null || letra === "") {
        log("Jogo cancelado pelo Jogador(a)");
        break;
    }

    let acertou = false;

    for (let i = 0; i < palavraSecreta.length; i++) { 
        if (palavraSecreta[i] === letra.toLowerCase()) { 
            palavraEscondida[i] = letra;
            acertou = true
        }
    }

    if (acertou === false) {
        erros = erros + 1;
        log(`Voce errou a letra: [${letra}]`);
    } else {
        log(`voce acertou a letra: [${letra}]`);
    }

    if (erros >= maxErro) {
        log(`voce perdeu, a PALAVRA ERA: [${palavraSecreta}]`);
        JogoAcabou = true; 
    }

    let ganhou = true;
    for (let i = 0; i < palavraEscondida.length; i++) {
        if (palavraEscondida[i] === "_") {
            ganhou = false;
        }
    }

    if (ganhou === true) {
        log(`PARABENS VOCE GANHOU, a palavra era: [${palavraSecreta}]`);
        JogoAcabou = true; 
    }
    vazio();
}