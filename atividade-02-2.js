// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const aluno = {

    nome: "Gabriel",
    idade: 16,
    curso: "cybersecurity"

  }
  
  console.log(aluno);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereco = {
    cidade: "jaragua",
    rua: "ilha da figueira "
  };
  console.log(aluno.endereco.cidade);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["programar","fazer comida","jogar"]
console.log(aluno.habilidades[0])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [6, 7, 8, 9, 10]
console.log(aluno)
console.log(`Nome da pessoa: ${aluno.nome}, notas:${aluno.notas}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.resposaveis = {
    mae: "rosa",
    pai: "jorjin",
    irmao: "jorjin jr"
}
console.log(aluno.resposaveis)
aluno.resposaveis.mae = "talita"
console.log(aluno.resposaveis)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
const listaDeAlunos = [aluno];


const aluno1 = {
    nome: "cleitin",
    idade: 17,
    notas: [5,6,7,8,9,10]
}

const aluno2 = {
    nome: "fulano",
    idade: 16,
    notas: [5,6,7,8,9,10]
}
 
listaDeAlunos.push(aluno1, aluno2)
console.log(listaDeAlunos)
console.log(listaDeAlunos[2].nome)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
const listadeAlunos = [
    {
        nome: "gabriel",
        idade: 16,
        Notas: [5,6,7,8,9,10]
    },
    {
        nome: "pablo",
        idade: 17,
        Notas: [5,6,7,8,9,10]
    },
    {
        nome:"flavia",
        idade: 15,
        Notas: [5,6,7,8,9,10]
    }
]
console.log(listaDeAlunos[0].nome, listaDeAlunos[0].notas)
console.log(listaDeAlunos[1].nome, listaDeAlunos[1].notas)
console.log(listaDeAlunos[2].nome, listaDeAlunos[2].notas)

console.log("_______________________________");