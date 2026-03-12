// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================
let keyboard = require('readline-sync')

// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | const nome = keyboard.question('digite seu nome') : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:

// const nome = keyboard.question('digite seu nome :')
// const profissao = keyboard.question('digite sua profissao :')
// const cidade = keyboard.question('digite sua cidade :')
// const Email = keyboard.question('digite seu email :')
// const telefone = keyboard.question('digite seu telefone :')
// const Experiencia = keyboard.questionInt('quantos anos de experiencia? :')
// const disponivelParaFreelance = keyboard.keyInYN('está disponivel para freelance :')
// console.log(`
// ============================================
//            | CARTÃO DE VISITAS |
// ============================================
// | Nome        : ${nome}        |
// | Profissão   : ${profissao}   |
// | Cidade      : ${cidade}      |
// | E-mail      : ${Email}       |
// | Telefone    : ${telefone}    |
// | Experiência : ${Experiencia} |
// | Freelance   : ${disponivelParaFreelance} |
// ============================================
// `);




console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

// const materias = ["portugues","matematica","historia","fisica","filosofia"]
// console.log("primeira materia", materias[0])
// console.log("ultima materia", materias[materias.length - 1])
// console.log("quantidade total", materias.length)
// console.log(`a 3 materia da lista é ${materias[2]} e a lista tem ${materias.length} meterias total`)



console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

//→ Seu código aqui:

// notas[2] = 6.0
// notas[3] = 8.5
// console.log(notas)


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

// materias.push("Educaçao Fisica");
// console.log(materias);

// materias.pop();
// console.log(materias);

// materias.unshift("Filosofia");
// console.log(materias);

// materias.shift();
// console.log(materias);

// console.log(`A lista final possui ${materias.length} itens`);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

// console.log(cidadesBrasil[2]);
// console.log(cidadesBrasil.includes("Recife"));
// // Explicação: O retorno false significa que o elemento não foi encontrado no array.

// console.log(cidadesBrasil.includes("Salvador"));
// console.log(cidadesBrasil.includes("Belém"));

// const todasAsCidades = cidadesBrasil.concat(cidadesPortugal);
// console.log(todasAsCidades);

// const cidadesDoMeio = todasAsCidades.slice(3, 8); 
// console.log(cidadesDoMeio);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

// const grupos = [
//     ["Ana", "Bruno", "Carlos"],
//     ["Diana", "Eduardo"],
//     ["Fernanda", "Gabriel", "Helena", "Igor"]
//     ]
//     console.log(grupos);
//     console.log("2 aluno do 3 grupo:", grupos[2][1]);
    
//     const todosOsAlunos = grupos.flat();
//     console.log("todos os alunos:", todosOsAlunos);
//     // depois do flat(), juntamos pacotes e espalhamos os 9 alunos individualmente na mesa


console.log("_______________________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

// const produto = {
//     nome:"hamburguer",
//     preco: 27,
//     disponivel: true,
//     categoria: "comida"
//     }
//     console.log("Nome:", produto.nome);
//     console.log("Preço:", produto.preco);
//     console.log("Disponível:", produto.disponivel);
//     console.log("Categoria:", produto.categoria);
    
//     console.log(`O produto '${produto.nome}' custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`);
//     console.table(produto);


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

// produto.preco = 30;
// produto.disponivel = false
// produto.estoque = 20;
// console.log(produto)


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

// const listaFuncionarios = [
//     { nome: "habibi", cargo: "Desenvolvedora", salario: 5000, ativo: true },
//     { nome: "jeferson", cargo: "Atendente", salario: 1500, ativo: true },
//     { nome: "jhoscreison", cargo: "Gerente", salario: 50000, ativo: true }
//     ];
//     console.log("Primeiro funcionario:", listaFuncionarios[0].nome);
//     console.log("Primeiro funcionario:", listaFuncionarios[2].cargo);
//     console.log("Salário do segundo:", listaFuncionarios[1].salario);
    
//     listaFuncionarios[0].cargo = "Segurança";
    
//     const novoFuncionario = {
//         nome: "chiquito jr",
//         cargo: "Analista",
//         salario: 3800,
//         ativo: true
//       };
//       listaFuncionarios.push(novoFuncionario);
//       console.table(listaFuncionarios);

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

// const loja = {
//     nomeLoja: "chiquito",
//     cnpj: "109.673.872.67",
//     endereco: {
//       rua: "ilha da figueira",
//       numero: 208,
//       cidade: "jaragua",
//       estado: "santa catarina"
//     },
//     CategoriasProdutos: ["chiquito premium", "chiquito salgado", "chiquito amargo"],
//     aberta: true
// };

// console.log(loja.nomeLoja);
// console.log(loja.endereco.cidade);
// console.log(loja.CategoriasProdutos[0]);
// console.log(`a loja '${loja.nomeLoja}' fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e esta aberta: ${loja.aberta}`);
// loja.CategoriasProdutos.push("chiquito premium plus");
// console.log(`algumas categorias da loja ${loja.nomeLoja} são: ${loja.CategoriasProdutos[0]} e ${loja.CategoriasProdutos[3]}`);
// console.log(loja);



console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

// const escola = {
//     nomeEscola: "senai",
//     cidade: "jaragua",
//     diretor: {
//         nome: "roberto", 
//         tempoDeServico: 15
//     },
//     turmas: [
//       {
//         periodo: "manha",
//         alunos: ["paulo", "jorgin", "beto"]
//       },
//       {
//         periodo: "tarde",
//         alunos: ["diego", "flavio", "fabio"]
//       }
//     ]
// };

// console.log("Escola:", escola.nomeEscola);
// console.log("Diretor:", escola.diretor.nome);
// console.log("Período da 2ª turma:", escola.turmas[1].periodo);
// console.log("3º aluno da 1ª turma:", escola.turmas[0].alunos[2]);
// escola.turmas[1].alunos.push("giovana");
// escola.turmas[0].periodo = "noite";
// console.log(escola);



console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:

// const nomeBiblioteca = keyboard.question("nome da biblioteca: ");
// const anoDeFundacao = keyboard.questionInt("Ano de fundacao: ");
// const capacidadeLivros = keyboard.questionInt("Capacidade maxima de livros: ");
// const bibliotecaAberta = keyboard.keyInYN("A biblioteca esta aberta?");

// console.log(`A biblioteca ${nomeBiblioteca}, fundada em ${anoDeFundacao}, suporta ate ${capacidadeLivros} livros e atualmente esta ${bibliotecaAberta ? "aberta" : "fechada"}.`);

// const acervo = [
//     { titulo: "67", autor: "joaquim peregrino", ano: 1899, paginas: 556, disponivel: true },
//     { titulo: "it a coisa", autor: "roberto carlos", ano: 1949, paginas: 328, disponivel: true },
//     { titulo: "o Hobbit", autor: "o hobbit", ano: 1937, paginas: 910, disponivel: true }
// ];
// console.log("titulo do 1 livro:", acervo[0].titulo);
// console.log("autor do 2 livro:", acervo[1].autor);
// console.log("paginas do 3 livro:", acervo[2].paginas);
// console.log("total de livros no acervo:", acervo.length);

// acervo[0].disponivel = false;
// acervo[2].titulo = "o Senhor dos Aneis";
// acervo.push({ titulo: "sexta feira 13", autor: "jason Voorhees", ano: 2011, paginas: 564, disponivel: true });

// let secoes = ["Ficção", "Ciências", "História", "Infantil"];
// console.log("primeira seção:", secoes[0]);
// console.log("ultima seção:", secoes[secoes.length - 1]);

// secoes.push("Tecnologia");
// secoes.shift();
// console.log("Seções atuais:", secoes);

// console.log(`
// --- RELATÓRIO FINAL ---
// Biblioteca: ${nomeBiblioteca} (Fundada em ${anoDeFundacao})
// Total de livros no acervo: ${acervo.length}
// Total de seções: ${secoes.length}

// Livros no Acervo:
// 1. ${acervo[0].titulo} - ${acervo[0].autor}
// 2. ${acervo[1].titulo} - ${acervo[1].autor}
// 3. ${acervo[2].titulo} - ${acervo[2].autor}
// 4. ${acervo[3].titulo} - ${acervo[3].autor}
// -----------------------
// `);




console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:


//NAO SEI






console.log("_______________________________");