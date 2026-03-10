// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let keyboard = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
// console.log('iniciandoo programa...')
// console.info('atividade imput e output')
// console.warn('inicie o programa com node e o nome do arquivo')
// console.error('erro van 208')


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

// const nomeUsuario = keyboard.question('Digite seu nome');
// const idadeDeUsuario = keyboard.questionInt('digite sua idade');
// const cidade = keyboard.question('cidade onde voce mora')
// console.log(`olá, ${nomeUsuario}! Você tem ${idadeDeUsuario} anos.`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// const nomeUsuario = keyboard.question('Digite seu nome');
// const idadeDeUsuario = keyboard.questionInt('digite sua idade');
// const cidadeDeUsuario = keyboard.question('cidade onde voce mora')

// const ficha = {nome: nomeUsuario, idade: idadeDeUsuario, cidade: cidadeDeUsuario}

// console.table([ficha])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

// const JogarBrawl = keyboard.keyInYN('Vamo jogar brawl?')
// console.log(`${JogarBrawl ? 'entao bora' : 'nao seu bobao'}. `)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
// let comida1 = keyboard.question('comida favorita 1?  :');
// let comida2 = keyboard.question('comida favorita 2?  :');
// let comida3 = keyboard.question('comida favorita 3?  :');

// comidasFavoritas = [comida1, comida2, comida3];
// const comidinhas = {Comida1:comida1, Comida2:comida2, Comida3:comida3}
// console.table([comidinhas])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
// let nome = keyboard.question('me fale seu nome?  :');
// let profissao = keyboard.question('qual sua profissao?  :');
// let cidade = keyboard.question('qual a sua cidade?  :');

// const cadastroPessoal = {
//     nome,
//     profissao,
//     cidade,
// }

// console.log(`Me chamo ${nome}. Profissao ${profissao} e moro na cidade de: ${cidade}.`)
// console.table(cadastroPessoal)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let usuario1 = {
//     nome: "pintovaldo",
//     idade: 54,
//     endereco: { 
//         cidade: "republica tcheca",
//         pais: "nova zelandia",
//         rua: "nova york",
//         ip: 091623,
//     }
// };

// let usuario2 = {
//     nome: "geraldo",
//     idade: 13,
//     endereco: { 
//         cidade: "peru",
//         pais: "Brasil",
//         rua: "portugol",
//         ip: 098363,
//     }
// };

// let usuario3 = {
//      nome: "valdecir",
//      idade: 88,
//      endereco: {
//         cidade: "tabui",
//         pais: "pernanbuco",
//         rua: "portugol",
//         ip: 098363,
//     }
// };

// const listaDeUsuarios = [usuario1, usuario2, usuario3];

// console.table(listaDeUsuarios);

// console.log(`nome: ${listaDeUsuarios[1].nome}, idade ${listaDeUsuarios[1].idade}`);
// console.log("endereço do 3 usuario", listaDeUsuarios[2].endereco);
// console.log(`nome: ${listaDeUsuarios[0].nome}, Rua: ${listaDeUsuarios[0].endereco.rua}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
// const aluno1 = {
//     nome: keyboard.question('Digite o nome do aluno1: '),
//     notas: [
//       keyboard.questionInt('Digite a nota 1: '),
//       keyboard.questionInt('Digite a nota 2: '),
//       keyboard.questionInt('Digite a nota 3: ')
//     ]
//   };

//   const aluno2 = {
//     nome: keyboard.question('Digite o nome do aluno2: '),
//     notas: [
//       keyboard.questionInt('Digite a nota 1: '),
//       keyboard.questionInt('Digite a nota 2: '),
//       keyboard.questionInt('Digite a nota 3: ')
//     ]
//   };

//   const aluno3 = {
//     nome: keyboard.question('Digite o nome do aluno3: '),
//     notas: [
//       keyboard.questionInt('Digite a nota 1: '),
//       keyboard.questionInt('Digite a nota 2: '),
//       keyboard.questionInt('Digite a nota 3: ')
//     ]
//   };
// const turma =[aluno1, aluno2, aluno3]
// console.table(turma)
// console.log(`Aluno: ${turma[1].nome}, Nota: ${turma[1].notas[0]}`);
// console.log(`Aluno: ${turma[2].nome}, Nota: ${turma[2].notas[1]}`);
// console.log(`Aluno: ${turma[2].nome}, Nota: ${turma[2].notas[1]}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui
// const Produtos = {
//     nome: keyboard.question('digite o nome do produto:'),
//     categoria: keyboard.question('digite sua categoria:'),
//     preco: keyboard.questionInt('preco:'),
//     quantidade_em_estoque: keyboard.questionInt('quantidade estoque:'),
// }
// const venda = keyboard.keyInYN('esta disponivel para venda?:');

// const produto =  {
//     nome: Produtos.nome,
//     categoria: Produtos.categoria,
//     preco: Produtos.preco,
//     estoque: Produtos.quantidade_em_estoque,
//     Disponivel: venda
// }

// console.table([produto]);
// console.log(`produto: ${produto.nome} | categoria: ${produto.categoria} | estoque: ${produto.estoque} un.`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.
console.log("_______________________________");

// const user = {
//     nome: keyboard.question('digite o nome do medicamento:'),
//     preco: keyboard.questionInt('digite o preco do medicamento:'),
//     emEstoque: keyboard.keyInYN('esta disponivel para venda?:')
// }

// const user2 = {
//     nome: keyboard.question('digite o nome do 2 medicamento:'),
//     preco: keyboard.questionInt('digite o preco do 2 medicamento:'),
//     emEstoque: keyboard.keyInYN('esta disponivel para venda?:')
// }
// const estoqueFarmacia = [];
// estoqueFarmacia.push(user);
// estoqueFarmacia.push(user2);

// console.table(estoqueFarmacia)

// console.log(`medicamento 2: ${estoqueFarmacia[1].nome} | preco R$ ${estoqueFarmacia[1].preco}`);
// console.log(`medicamento 2: ${estoqueFarmacia[0].nome} | preco R$ ${estoqueFarmacia[0].emEstoque}`);