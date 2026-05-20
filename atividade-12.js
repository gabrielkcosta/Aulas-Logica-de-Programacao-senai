// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:

// let vetor = ["jaragua","joinvile","porto alegre","salvador","habibi"]

// console.log("lista de cidades:");
// for (let i = 0; i < vetor.length; i++) {
//   console.log(`Índice ${i}: ${vetor[i]}`);
// }

// console.log("------------------------");

// console.log(`Primeira cidade: ${vetor[0]}`);
// console.log(`Última cidade: ${vetor[vetor.length - 1]}`);

// console.log("------------------------");

// console.log(`Total de cidades no vetor: ${vetor.length}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:

// let soma = 0

// for (const numeroAtual of numeros) {
//     soma += numeroAtual;
//   }
//   console.log(`Soma de todos os numeros no vetor ${soma}`);

//   let media = soma / numeros.length;
//   console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:

// console.log(`Maior temperatura: ${Math.max(...temperaturas)}`);
// console.log(`menor temperatura: ${Math.min(...temperaturas)}`);

// console.log(`maior temperatura ${Math.max(...temperaturas)} | Menor temperatura ${Math.min(...temperaturas)}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:

// let paresVetor = [];
// let imparesVetor = [];

// for(let i = 0; i < listaNumeros.length; i++) {
//     if(listaNumeros[i] % 2 === 0) {
//         paresVetor.push(listaNumeros[i])
//     } else {
//         imparesVetor.push(listaNumeros[i])
//     }
// }

// console.log(`Pares (${paresVetor.length}): ${paresVetor}`);
// console.log(`Ímpares (${imparesVetor.length}): ${imparesVetor}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:


// let vetorInvertido = [];

// for (let i = vetorOriginal.length - 1; i >= 0; i--) {
//     vetorInvertido.push(vetorOriginal[i]);
// }

// console.log(`Original:  ${vetorOriginal}`);
// console.log(`Invertido: ${vetorInvertido}`);

// const vetorInvertido2 = [...vetorOriginal].reverse();
// console.log(`Invertido 2: ${vetorInvertido2}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:

let keyboard = require("readline-sync");

// let produtos = [];

// let quantidadeCadastrar = keyboard.questionInt("Quantos produtos deseja cadastrar? ");

// for (let i = 0; i < quantidadeCadastrar; i++) {
//     let nome = keyboard.question("Digite o nome do produto: ");
//     produtos.push(nome); 
// }
// console.log("--- Lista de Produtos ---");
// for (let i = 0; i < produtos.length; i++) {
//     console.log(produtos[i]);
// }

// console.log(`${produtos.length} produtos cadastrados.`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const alunosReprovados = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:

// console.log(`alunos :  Ana | Bruno | Carla | Diego | Eva | Jorgin | Pedro | Gabriel | etc..`);

// const procurado = keyboard.question("qual aluno voce esta procurando: ")
// let achouNoIndice = -1;

// for (let i = 0; i < alunosReprovados.length; i++) {
//     if (alunosReprovados[i] === procurado) {
//       achouNoIndice = i;
//       break;
//     }
//   }
  
//   if (achouNoIndice === -1) {
//     console.log(`"${procurado}" não está na lista de Reprovados.`);
//   } else {
//     console.log(`"${procurado}" está no índice ${achouNoIndice}.`);
//   }
  

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const livros = [
        { titulo: "Dom Casmurro",       paginas: 256 },
        { titulo: "O Cortiço",          paginas: 304 },
        { titulo: "Memórias Póstumas",  paginas: 208 },
        { titulo: "Capitães da Areia",  paginas: 280 },
      ];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:

let totalPaginas = 0;
let livroMaisPaginas = livros[0];

for(let i = 0; i < livros.length; i++){
      totalPaginas += livros[i].paginas
    }

let mediaPaginas = totalPaginas / livros.length;

console.log("Total de páginas:", totalPaginas);
console.log("Média de páginas:", mediaPaginas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:

const menores = [];
const adultos = [];

for (let i = 0; i < idades.length; i++) {
  if (idades[i] < 18) {
    menores.push(idades[i]);
  } else {
    adultos.push(idades[i]);
  }
}

console.log(`Menores (${menores.length}): ${menores}`);
console.log(`Adultos (${adultos.length}): ${adultos}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:

let notas = [];
let opcao;

do {
  console.log(`\n--- MENU ---`);
  console.log(`1 - Adicionar nota`);
  console.log(`2 - Listar notas`);
  console.log(`3 - Estatísticas`);
  console.log(`4 - Remover última`);
  console.log(`5 - Limpar todas`);
  console.log(`0 - Sair`);
  
  opcao = keyboard.questionInt(`Escolha uma opcao: `);

  switch (opcao) {
    case 1:
      let novaNota = keyboard.questionFloat(`Digite a nota: `);
      notas.push(novaNota);
      console.log(`Nota ${novaNota} adicionada com sucesso!`);
      break;

    case 2:
      if (notas.length === 0) {
        console.log(`Nenhuma nota registrada.`);
      } else {
        console.log(`Notas: ${notas.join(", ")}`);
      }
      break;

    case 3:
      if (notas.length === 0) {
        console.log(`Nenhuma nota registrada para calcular estatisticas.`);
      } else {
        let soma = 0;
        let maior = notas[0];
        let menor = notas[0];

        for (let i = 0; i < notas.length; i++) {
          soma += notas[i];
          if (notas[i] > maior) {
            maior = notas[i];
          }
          if (notas[i] < menor) {
            menor = notas[i];
          }
        }

        let media = soma / notas.length;
        console.log(`Média: ${media} | Maior: ${maior} | Menor: ${menor}`);
      }
      break;

    case 4:
      if (notas.length > 0) {
        notas.pop();
        console.log(`Última nota removida.`);
      } else {
        console.log(`Não há notas para remover.`);
      }
      break;

    case 5:
      notas = [];
      console.log(`Todas as notas foram apagadas.`);
      break;

    case 0:
      console.log(`Saindo...`);
      break;
  }

} while (opcao !== 0); 

console.log(`Encerrando. Total de notas registradas: ${notas.length}`);

console.log(`
        __
    ___( o)>
    \\ <_. )
     \`---'
`);
console.log("_______________________________");