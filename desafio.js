// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================
let keyboard = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
// const nome = keyboard.question('digite seu nome :');
// const idade = keyboard.question('digite sua idade :');
// const profissao = keyboard.question('fale sua profissao :');
// const cidade = keyboard.question('qual cidade voce mora :');
// const JavaScript = keyboard.keyInYN('voce gosta de javascript :');
// const listaComida = keyboard.question('comidas que mais gosta :');
// const listaPessoa = keyboard.question('pessoas que moram com vc :');

// const cadastro = {
//     nome: nome,
//     idade: idade,
//     profissao: profissao,
//     cidade: cidade,
//     JavaScript: JavaScript,
//     listaComida: listaComida,
//     listaPessoa: listaPessoa
// }
// console.table(cadastro)
// console.log(`nome: ${nome}. idade: ${idade} anos. profissao: ${profissao} na cidade ${cidade}. gosta de js ${JavaScript}.`)
// console.log(cadastro)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e enderecoCompleto de cada uma).
//    enderecoCompleto deve ser um objeto contendo rua, cidade e estado
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
const pessoa1 = {
    nome: keyboard.question('seu nome :'),
    idade: keyboard.question('sua idade :'),
    endereco: {
        rua: keyboard.question('sua rua :'),
        cidade: keyboard.question('sua cidade :'),
        estado: keyboard.question('seu estado :'),
    },
}

const pessoa2 = {
    nome: keyboard.question('seu nome :'),
    idade: keyboard.question('sua idade :'),
    endereco: {
        rua: keyboard.question('sua rua :'),
        cidade: keyboard.question('sua cidade :'),
        estado: keyboard.question('seu estado :'),
    },
}

const amigos = [pessoa1,pessoa2];
console.table(amigos);
console.log(amigos[1].idade);
console.log(amigos[1].endereco);
console.log(amigos[0].endereco.rua);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:



console.log("_______________________________");
