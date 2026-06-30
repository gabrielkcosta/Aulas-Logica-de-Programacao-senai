
const keyboard = require("readline-sync");
const listaDeNotas = [];

////////////////////////////////////////////////////////////////////////////////////
/*                        FUNÇÃO PARA CRIAR A LISTA/CARD                         */
///////////////////////////////////////////////////////////////////////////////////

function criarCardInterativo() {
    console.log(`\n╔═════════════════════════════════════╗`);
    console.log(`║           BLOCO DE NOTAS            ║`);
    console.log(`╚═════════════════════════════════════╝`);

    const tituloDigitado = keyboard.question("Digite o titulo da nota: ");
    const descricaoDigitada = keyboard.question("Digite a descricao da nota: ");
    const conteudoDigitado = keyboard.question("O que voce quer escrever no card?: ");

    const card = {
        titulo: tituloDigitado,
        descricao: descricaoDigitada,
        conteudo: conteudoDigitado
    };

    listaDeNotas.push(card);

    console.log(`\n───────────────────────────────────────`);
    console.log(` Nota adicionada com sucesso!`);
    console.log(`───────────────────────────────────────`);
}

////////////////////////////////////////////////////////////////////////////////////
/*                       FUNÇÃO DE VIZUALIZAR LISTA                              */
///////////////////////////////////////////////////////////////////////////////////

function visualizarLista() {
    console.log(`\n=================================`);
    console.log(`      LISTA DE NOTAS             `);
    console.log(`=================================`);
    
    if (listaDeNotas.length === 0) {
        console.log(` A lista esta vazia.`);
    } else {
        listaDeNotas.forEach(function (nota, index) {
            console.log(` ${index + 1} - ${nota.titulo}`);
        });
    }
    console.log(`=================================\n`);
}
////////////////////////////////////////////////////////////////////////////////////
/*                     FUNÇÃO PARA VISUALIZAR ITEM ESPECIFICO                    */
///////////////////////////////////////////////////////////////////////////////////

function visualizarItem() {
    if (listaDeNotas.length === 0) {
        console.log("\nLista vazia, nao ha itens para exibir.");
        return;
    }

    visualizarLista();
    
    const index = keyboard.questionInt("Digite o numero da nota que deseja exibir: ") - 1;

    if (index >= 0 && index < listaDeNotas.length) {
        const nota = listaDeNotas[index];
        console.log(`\n╔═════════════════════════════════════╗`);
        console.log(`║          DETALHES DA NOTA           ║`);
        console.log(`╚═════════════════════════════════════╝`);
        console.log(`Titulo    : ${nota.titulo}`);
        console.log(`Descricao : ${nota.descricao}`);
        console.log(`Conteudo  : ${nota.conteudo}`);
        console.log(`───────────────────────────────────────\n`);
    } else {
        console.log(`\nOpcao invalida! O numero nao existe na lista.`);
    }
}

////////////////////////////////////////////////////////////////////////////////////
/*                         FUNÇÃO PARA EDITAR ITEM                               */
///////////////////////////////////////////////////////////////////////////////////

function editarItem() {
    if (listaDeNotas.length === 0) {
        console.log("\nA lista esta vazia.");
        return;
    }
    visualizarLista();

    const index = keyboard.questionInt("Digite o numero da nota que deseja editar: ") - 1;

    if (index >= 0 && index < listaDeNotas.length) {
        console.log(`\n╔═════════════════════════════════════╗`);
        console.log(`║          O QUE DESEJA EDITAR?       ║`);
        console.log(`╚═════════════════════════════════════╝`);
        console.log(`1 - Titulo`);
        console.log(`2 - Descricao`);
        console.log(`3 - Conteudo`);
        console.log(`───────────────────────────────────────`);

        const opcao = keyboard.questionInt("Escolha uma opcao (1-3): ");

        switch (opcao) {
            case 1:
                listaDeNotas[index].titulo = keyboard.question("Digite o novo titulo: ");
                break;
            case 2:
                listaDeNotas[index].descricao = keyboard.question("Digite a nova descricao: ");
                break;
            case 3:
                listaDeNotas[index].conteudo = keyboard.question("Digite o novo conteudo: ");
                break;
            default:
                console.log("Opcao invalida!");
                return;
        }
        console.log(`\nNota editada com sucesso!`);
    } else {
        console.log(`\nOpcao invalida! O numero nao existe na lista.`);
    }
}

////////////////////////////////////////////////////////////////////////////////////
/*                         FUNÇÃO PARA EXCLUIR ITEM                              */
///////////////////////////////////////////////////////////////////////////////////

function removerItem() {
    if (listaDeNotas.length === 0) {
        console.log("\nA lista esta vazia.");
        return;
    }
    visualizarLista();

    const index = keyboard.questionInt("Digite o numero da nota que deseja excluir: ") - 1;

    if (index >= 0 && index < listaDeNotas.length) {
        listaDeNotas.splice(index, 1);
        console.log(`\nNota removida com sucesso!`);
    } else {
        console.log(`\nOpcao invalida! O numero nao existe na lista.`);
    }
}

////////////////////////////////////////////////////////////////////////////////////
/*                         FUNÇÃO PARA FILTRAR ITENS                             */
///////////////////////////////////////////////////////////////////////////////////

function filtrarItem() {
    console.log("\nDEBUG: Entrou na função filtrarItem"); 
    if (listaDeNotas.length === 0) {
        console.log("\nLista vazia, nao ha itens para filtrar.");
        return;
    }

    const termo = keyboard.question("\nDigite o termo para buscar no titulo: ").toLowerCase();
    console.log(`DEBUG: Buscando por "${termo}" em ${listaDeNotas.length} notas.`);

    const resultados = listaDeNotas.filter(function(nota) {
        return nota.titulo.toLowerCase().includes(termo);
    });

    if (resultados.length > 0) {
        console.log(`\n=================================`);
        console.log(`   RESULTADOS DA BUSCA: "${termo}"`);
        console.log(`=================================`);
        resultados.forEach(function(nota) {
            console.log(` - ${nota.titulo}`);
        });
        console.log(`=================================\n`);
    } else {
        console.log(`\nNenhum resultado encontrado para "${termo}".`);
    }
}

////////////////////////////////////////////////////////////////////////////////////
/*                       FUNÇÃO DO MENU PRINCIPAL (LOOP)                         */
///////////////////////////////////////////////////////////////////////////////////

function exibirMenu() {
    let executando = true;

    while (executando) {
        console.log(`\n╔═════════════════════════════════════╗`);
        console.log(`║           BLOCO DE NOTAS            ║`);
        console.log(`╠═════════════════════════════════════╣`);
        console.log(`║ 1 - Adicionar nova nota             ║`);
        console.log(`║ 2 - Visualizar lista de titulos     ║`);
        console.log(`║ 3 - Visualizar item completo        ║`);
        console.log(`║ 4 - Editar nota                     ║`);
        console.log(`║ 5 - Excluir nota                    ║`);
        console.log(`║ 6 - Filtrar notas                   ║`);
        console.log(`║ 7 - Encerrar                        ║`);
        console.log(`╚═════════════════════════════════════╝`);

        const opcao = keyboard.questionInt("Escolha uma opcao: ");

        switch (opcao) {
            case 1: criarCardInterativo(); break;
            case 2: visualizarLista(); break;
            case 3: visualizarItem(); break;
            case 4: editarItem(); break;
            case 5: removerItem(); break;
            case 6: filtrarItem(); break;
            case 7: 
                console.log("\nEncerrando sistema...");
                executando = false; 
                break;
            default: console.log("\nOpcao invalida, tente novamente.");
        }

        if (opcao !== 7) {
            keyboard.keyIn("\nPressione qualquer tecla para continuar...");
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

exibirMenu();