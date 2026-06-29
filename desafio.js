// ============================================================
//   DESAFIOS – Matriz
// ============================================================

let keyboard = require("readline-sync")

// ------------------------------------------------------------
// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:

let tabuleiroVelha = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
];
console.table(tabuleiroVelha);

let jogadorAtual = "X";

for (let i = 0; i < 5; i++) {
  let jogadaValida = false;

  while (!jogadaValida) {
    console.log(`\nJogada ${i + 1} de 5 | É a vez do jogador: ${jogadorAtual}`);
    let linha = keyboard.questionInt("Digite a linha (0 a 2): ");
    let coluna = keyboard.questionInt("Digite a coluna (0 a 2): ");

    if (linha >= 0 && linha <= 2 && coluna >= 0 && coluna <= 2) {
      if (tabuleiroVelha[linha][coluna] === "-") {
        tabuleiroVelha[linha][coluna] = jogadorAtual;
        jogadaValida = true;
      } else {
        console.log("Aviso: Essa posição já está ocupada! Tente novamente.");
      }
    } else {
      console.log("Aviso: Coordenadas inválidas. Use valores entre 0 e 2.");
    }
  }

  console.table(tabuleiroVelha);
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Batalha naval simplificada
// ------------------------------------------------------------
// a) Crie um tabuleiro 5x5 (matriz de objetos):
//    cada célula = { temNavio: false, atingida: false }
// b) Posicione 5 navios em coordenadas aleatórias utilizando Math.random()
//    Garanta que não haja repetição de posição.
// c) Usando while, peça ao usuário tiros (linha e coluna).
//    - Se acertar:  exiba "Acertou!" (e marque atingida = true).
//    - Se errar:    exiba "Água..."
//    - Não permita atirar 2x na mesma posição.
// d) Após cada tiro, mostre o "mapa":
//    "~" = água, "O" = navio não atingido, "X" = navio atingido.
// e) Pare quando todos os 5 navios forem atingidos.
// f) Exiba o número total de tiros usados.

// → Seu código aqui:

let tabuleiroNaval = [];
for (let i = 0; i < 5; i++) {
  let linha = [];
  for (let j = 0; j < 5; j++) {
    linha.push({ temNavio: false, atingida: false });
  }
  tabuleiroNaval.push(linha);
}

let naviosPosicionados = 0;
while (naviosPosicionados < 5) {
  let rLinha = Math.floor(Math.random() * 5);
  let rColuna = Math.floor(Math.random() * 5);

  if (!tabuleiroNaval[rLinha][rColuna].temNavio) {
    tabuleiroNaval[rLinha][rColuna].temNavio = true;
    naviosPosicionados++;
  }
}

let naviosAtingidos = 0;
let tiros = 0;

while (naviosAtingidos < 5) {
  let linha = keyboard.questionInt("\nTiro - Informe a linha (0 a 4): ");
  let coluna = keyboard.questionInt("Tiro - Informe a coluna (0 a 4): ");

  if (linha >= 0 && linha <= 4 && coluna >= 0 && coluna <= 4) {
    let celula = tabuleiroNaval[linha][coluna];

    if (celula.atingida) {
      console.log("Você já atirou nesta posição! Escolha outra.");
    } else {
      celula.atingida = true;
      tiros++;

      if (celula.temNavio) {
        console.log("Acertou!");
        naviosAtingidos++;
      } else {
        console.log("Água...");
      }
    }
  } else {
    console.log("Coordenadas inválidas.");
  }

  let mapaVisual = [];
  for (let i = 0; i < 5; i++) {
    let linhaVisual = [];
    for (let j = 0; j < 5; j++) {
      let c = tabuleiroNaval[i][j];
      if (c.temNavio && c.atingida) {
        linhaVisual.push("X");
      } else if (c.temNavio && !c.atingida) {
        linhaVisual.push("O");
      } else {
        linhaVisual.push("~");
      }
    }
    mapaVisual.push(linhaVisual.join(" "));
  }
  console.log("\nMapa:");
  console.log(mapaVisual.join("\n"));
}

console.log(`\nFim de jogo! Você afundou todos os navios em ${tiros} tiros.`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar com console.table
// ------------------------------------------------------------
// a) Utilizando:
const turma = [
  { nome: "Ana", notas: [8.0, 7.5, 9.0, 6.5] },
  { nome: "Bruno", notas: [4.0, 5.5, 6.0, 5.0] },
  { nome: "Carla", notas: [9.5, 9.0, 9.5, 10] },
  { nome: "Diego", notas: [7.0, 6.5, 7.0, 8.5] },
  { nome: "Eva", notas: [3.5, 4.0, 5.0, 4.5] },
];
// b) Construa um vetor 'boletim' onde cada item seja:
//    { nome, b1, b2, b3, b4, media, situacao }
//    - situacao: "Aprovado" (>=7), "Recuperação" (>=5 e <7), "Reprovado" (<5)
// c) Exiba o boletim com console.table().
// d) Exiba também:
//    - Aluno(a) com a maior média.
//    - Aluno(a) com a menor média.
//    - Média geral da turma.
//    - Quantidade de aprovados, recuperação e reprovados.

// → Seu código aqui:

let maiorMedia = -Infinity;
let menorMedia = Infinity;
let alunoMaiorMedia = "";
let alunoMenorMedia = "";
let somaGeral = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

let boletim = turma.map(aluno => {
  let somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  let media = somaNotas / aluno.notas.length;

  let situacao = "";
  if (media >= 7) {
    situacao = "Aprovado";
    aprovados++;
  } else if (media >= 5) {
    situacao = "Recuperação";
    recuperacao++;
  } else {
    situacao = "Reprovado";
    reprovados++;
  }

  if (media > maiorMedia) {
    maiorMedia = media;
    alunoMaiorMedia = aluno.nome;
  }
  if (media < menorMedia) {
    menorMedia = media;
    alunoMenorMedia = aluno.nome;
  }

  somaGeral += media;

  return {
    nome: aluno.nome,
    b1: aluno.notas[0],
    b2: aluno.notas[1],
    b3: aluno.notas[2],
    b4: aluno.notas[3],
    media: parseFloat(media.toFixed(2)),
    situacao: situacao
  };
});

console.table(boletim);

let mediaGeral = (somaGeral / turma.length).toFixed(2);

console.log(`Aluno(a) com maior média: ${alunoMaiorMedia} (${maiorMedia.toFixed(2)})`);
console.log(`Aluno(a) com menor média: ${alunoMenorMedia} (${menorMedia.toFixed(2)})`);
console.log(`Média geral da turma: ${mediaGeral}`);
console.log(`Quantidade: ${aprovados} Aprovado(s), ${recuperacao} em Recuperação, ${reprovados} Reprovado(s).`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Cinema com sessões
// ------------------------------------------------------------
// Sistema simplificado de reserva para 3 SESSÕES diferentes,
// cada uma com sua matriz própria de poltronas (4 fileiras x 6 poltronas).
//
// a) Crie uma estrutura:
//    sessoes = [
//      { filme: "Ação X",   sala: matriz4x6 com "L" },
//      { filme: "Drama Y",  sala: matriz4x6 com "L" },
//      { filme: "Comédia Z", sala: matriz4x6 com "L" },
//    ]
// b) Usando do...while, exiba o menu:
//    1 – Listar sessões e ocupação (% ocupada de cada uma)
//    2 – Mostrar mapa de uma sessão (peça o índice 0..2)
//    3 – Reservar poltrona (peça sessão, fileira e poltrona)
//    4 – Cancelar reserva  (peça sessão, fileira e poltrona)
//    0 – Sair
// c) Valide TODOS os inputs e nunca quebre o programa.

// → Seu código aqui:

function criarMatrizPoltronas() {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz.push(["L", "L", "L", "L", "L", "L"]);
  }
  return matriz;
}

let sessoes = [
  { filme: "Ação X", sala: criarMatrizPoltronas() },
  { filme: "Drama Y", sala: criarMatrizPoltronas() },
  { filme: "Comédia Z", sala: criarMatrizPoltronas() }
];

let opcao;

do {
  console.log("\n--- MENU CINEMA ---");
  console.log("1 – Listar sessões e ocupação");
  console.log("2 – Mostrar mapa de uma sessão");
  console.log("3 – Reservar poltrona");
  console.log("4 – Cancelar reserva");
  console.log("0 – Sair");

  opcao = keyboard.questionInt("Escolha uma opcao: ");

  if (opcao === 1) {
    sessoes.forEach((sessao, index) => {
      let ocupados = 0;
      let total = 4 * 6;

      sessao.sala.forEach(fileira => {
        fileira.forEach(poltrona => {
          if (poltrona === "R") ocupados++;
        });
      });

      let porcentagem = ((ocupados / total) * 100).toFixed(1);
      console.log(`Sessão ${index} - ${sessao.filme}: ${porcentagem}% ocupada`);
    });

  } else if (opcao === 2) {
    let indSessao = keyboard.questionInt("Informe a sessão (0 a 2): ");
    if (indSessao >= 0 && indSessao <= 2) {
      console.log(`Mapa da sessão ${indSessao} (${sessoes[indSessao].filme}):`);
      console.table(sessoes[indSessao].sala);
    } else {
      console.log("Sessão inválida!");
    }

  } else if (opcao === 3 || opcao === 4) {
    let s = keyboard.questionInt("Informe a sessão (0 a 2): ");
    let f = keyboard.questionInt("Informe a fileira (0 a 3): ");
    let p = keyboard.questionInt("Informe a poltrona (0 a 5): ");

    if (s >= 0 && s <= 2 && f >= 0 && f <= 3 && p >= 0 && p <= 5) {
      let statusAtual = sessoes[s].sala[f][p];

      if (opcao === 3) {
        if (statusAtual === "L") {
          sessoes[s].sala[f][p] = "R";
          console.log("Reserva realizada com sucesso!");
        } else {
          console.log("A poltrona já está reservada.");
        }
      } else {
        if (statusAtual === "R") {
          sessoes[s].sala[f][p] = "L";
          console.log("Reserva cancelada com sucesso!");
        } else {
          console.log("A poltrona já estava livre.");
        }
      }
    } else {
      console.log("Dados de sessão ou poltrona inválidos!");
    }
  } else if (opcao !== 0) {
    console.log("Opção inválida, tente novamente.");
  }
} while (opcao !== 0);

console.log("_______________________________");