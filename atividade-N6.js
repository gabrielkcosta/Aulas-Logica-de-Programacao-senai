//ALUNO: GABRIEL COSTA, KEVIN VINICIUS
//TURMA DESENVOLVIMENTO DE SISTEMA

const Keyboard = require("readline-sync");

let contas = [];

// Cria e retorna a estrutura de objeto padrão para novos clientes.
// Útil para garantir que toda conta comece com as mesmas propriedades básicas.
function criarCadastroBase() {
    return {
        nomeCompleto: null,
        senha: null,
        telefone: null,
        cpf: null,
        cnpj: null,
        saldo: 0,
        extrato: [],
        emprestimos: [],
        enderecoCompleto: { cep: null, estado: null, city: null, bairro: null, numero: null }
    };
}

// Insere um novo objeto de movimentação dentro do array 'extrato' do usuário.
// Captura automaticamente a data e hora locais do momento da transação.
function registrarTransacao(usuario, tipo, valor, detalhes = "") {
    usuario.extrato.push({
        tipo,
        valor,
        detalhes,
        data: new Date().toLocaleString("pt-BR")
    });
}

// Lê a entrada do usuário, converte vírgula em ponto para aceitar decimais
// e força um loop 'while' até que o valor digitado seja estritamente maior que zero.
function lerValor(mensagem) {
    let valor;
    while ((valor = Number(Keyboard.question(mensagem).replace(",", "."))) <= 0) {
        console.log("[ERRO] Digite um valor válido maior que zero.");
    }
    return valor;
}

// Controla o ponto de partida do sistema.
// Se o sistema estiver vazio, obriga o cadastro. Caso contrário, pergunta o que fazer.
function conta() {
    if (contas.length === 0) {
        console.log("Nenhuma conta cadastrada ainda.\nVamos criar sua primeira conta.\n");
        return criarConta();
    }
    if (Keyboard.keyInYN("Deseja criar uma conta? (Pressione N se ja tiver login): ")) {
        criarConta();
    } else {
        console.log("Encaminhando para a tela de login...");
        login();
    }
}

// Fluxo de criação de conta com validação de duplicidade por Nome e CPF.
function criarConta() {
    const novoUsuario = criarCadastroBase();
    const nomeDigitado = Keyboard.question("Digite seu nome completo: ");
    const cpfDigitado = Keyboard.question("Digite seu CPF: ");

    let nomeJaExiste = false, cpfJaExiste = false;

    // Loop clássico para verificar se as credenciais já existem no "banco de dados"
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].nomeCompleto.toLowerCase() === nomeDigitado.toLowerCase()) nomeJaExiste = true;
        if (contas[i].cpf === cpfDigitado) cpfJaExiste = true;
    }

    // Se houver duplicado, cancela a operação imediatamente (early return)
    if (nomeJaExiste) return console.log("\n[ERRO] Esse nome já está cadastrado!");
    if (cpfJaExiste) return console.log("\n[ERRO] Esse CPF já está cadastrado!");

    // Atribuição dos dados principais
    novoUsuario.nomeCompleto = nomeDigitado;
    novoUsuario.cpf = cpfDigitado;
    // hideEchoBack esconde o que é digitado e o mask coloca asteriscos na senha
    novoUsuario.senha = Keyboard.question("Crie uma senha: ", { hideEchoBack: true, mask: "*" });
    novoUsuario.telefone = Keyboard.question("Digite seu telefone: ");

    console.log("\n--- Agora vamos preencher o endereco ---");
    const end = novoUsuario.enderecoCompleto;
    end.cep = Keyboard.question("Digite o CEP: ");
    end.estado = Keyboard.question("Digite o estado: ");
    end.cidade = Keyboard.question("Digite a cidade: ");
    end.bairro = Keyboard.question("Digite o bairro: ");
    end.numero = Keyboard.question("Digite o numero da casa: ");

    // Adiciona o novo cliente ao array geral do sistema
    contas.push(novoUsuario);
    console.log("\n[SUCESSO] Conta criada com sucesso!\n");

    if (Keyboard.keyInYN("Deseja fazer login agora? ")) login();
}

// Autentica o usuário comparando Nome (desconsiderando maiúsculas/minúsculas) e Senha.
function login() {
    if (contas.length === 0) {
        console.log("\n[ERRO] Não existe nenhuma conta cadastrada ainda.");
        return criarConta();
    }

    console.log("\n--- TELA DE LOGIN ---");
    const nomeLogin = Keyboard.question("Digite seu nome de usuario: ");
    const senhaLogin = Keyboard.question("Digite sua senha: ", { hideEchoBack: true, mask: "*" });

    let usuarioLogado = null;
    // Loop em busca da combinação exata de nome e senha
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].nomeCompleto.toLowerCase() === nomeLogin.toLowerCase() && contas[i].senha === senhaLogin) {
            usuarioLogado = contas[i];
            break;
        }
    }

    // Se encontrou, redireciona para o painel principal, senão, oferece nova tentativa
    if (usuarioLogado) {
        console.log(`\nLogin realizado com sucesso! Bem-vindo, ${usuarioLogado.nomeCompleto}.`);
        return menuPrincipal(usuarioLogado);
    }

    console.log("\n[ERRO] Nome de usuario ou senha incorretos!");
    if (Keyboard.keyInYN("Deseja tentar logar novamente? ")) login();
    else console.log("Programa encerrado.");
}

// Adiciona fundos ao saldo da conta ativa e gera registro no extrato.
function depositar(usuario) {
    console.log("\n--- ÁREA DE DEPÓSITO ---");
    const valor = lerValor("Digite o valor que deseja depositar: R$ ");
    usuario.saldo += valor;
    registrarTransacao(usuario, "Depósito", valor);
    console.log(`\n[SUCESSO] Depósito de R$ ${valor.toFixed(2)} realizado!`);
}

// Retira fundos do saldo caso o usuário possua quantia suficiente.
function sacar(usuario) {
    console.log("\n--- ÁREA DE SAQUE ---");
    const valor = lerValor("Digite o valor que deseja sacar: R$ ");

    if (valor > usuario.saldo) {
        console.log(`\n[ERRO] Saldo insuficiente para essa operação!\nSeu saldo atual é de R$ ${usuario.saldo.toFixed(2)}.\nFaltam R$ ${(valor - usuario.saldo).toFixed(2)} para sacar esse valor.`);
        return;
    }

    usuario.saldo -= valor;
    registrarTransacao(usuario, "Saque", valor);
    console.log(`\n[SUCESSO] Saque de R$ ${valor.toFixed(2)} realizado!`);
}

function solicitarEmprestimo(usuario) {
    console.log("\n--- ÁREA DE EMPRÉSTIMO ---");
    const valor = lerValor("Digite o valor do emprestimo desejado: R$ ");

    const totalPagar = valor * 1.05; // 1.05 representa acréscimo direto de 5% de juros
    const parcelas = 10;
    const valorParcela = totalPagar / parcelas;

    usuario.saldo += valor; // O dinheiro do empréstimo cai na conta do cliente

    // Guarda os dados da dívida dentro da lista de empréstimos do cliente
    usuario.emprestimos.push({ valorSolicitado: valor, totalPagar, saldoDevedor: totalPagar, parcelasTotais: parcelas, parcelasRestantes: parcelas, valorParcela, quitado: false, data: new Date().toLocaleString("pt-BR") });

    registrarTransacao(usuario, "Empréstimo aprovado", valor, `Total a pagar: R$ ${totalPagar.toFixed(2)} em ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}`);
    console.log(`\n[SUCESSO] Empréstimo de R$ ${valor.toFixed(2)} aprovado!\nVocê recebeu R$ ${valor.toFixed(2)} na conta.\nTotal a pagar: R$ ${totalPagar.toFixed(2)}.\nParcelas: ${parcelas}x de R$ ${valorParcela.toFixed(2)}.`);
}

// Função automática chamada sempre que o usuário tenta visualizar o extrato.
// Localiza a PRIMEIRA dívida ativa e efetua a cobrança de uma única parcela se houver saldo.
function descontarParcelaEmprestimo(usuario) {
    let emprestimo = null;

    // Procura o primeiro empréstimo em aberto usando um loop clássico
    for (let i = 0; i < usuario.emprestimos.length; i++) {
        if (!usuario.emprestimos[i].quitado && usuario.emprestimos[i].parcelasRestantes > 0) {
            emprestimo = usuario.emprestimos[i];
            break;
        }
    }

    // Se não há empréstimos pendentes de pagamento, sai da função
    if (!emprestimo) return;

    // Se o cliente tem saldo para pagar a parcela corrente
    if (usuario.saldo >= emprestimo.valorParcela) {
        usuario.saldo -= emprestimo.valorParcela;
        emprestimo.saldoDevedor -= emprestimo.valorParcela;
        emprestimo.parcelasRestantes--;

        // Corrige discrepâncias de dízimas ou arredondamentos de ponto flutuante no Javascript
        if (emprestimo.saldoDevedor < 0.01) emprestimo.saldoDevedor = 0;

        // Verifica se a dívida foi totalmente liquidada nesta cobrança
        if (emprestimo.saldoDevedor === 0 || emprestimo.parcelasRestantes === 0) {
            emprestimo.saldoDevedor = 0; emprestimo.parcelasRestantes = 0; emprestimo.quitado = true;
            registrarTransacao(usuario, "Parcela do empréstimo", emprestimo.valorParcela, "Empréstimo quitado");
            console.log("\n[INFO] A última parcela do empréstimo foi descontada.\n[INFO] Seu empréstimo foi quitado com sucesso.");
        } else {
            registrarTransacao(usuario, "Parcela do empréstimo", emprestimo.valorParcela, `Parcelas restantes: ${emprestimo.parcelasRestantes}`);
            console.log(`\n[INFO] Uma parcela do empréstimo foi descontada automaticamente.\nValor da parcela: R$ ${emprestimo.valorParcela.toFixed(2)}`);
        }
    } else {
        console.log("\n[AVISO] Você tem empréstimo em aberto, mas não há saldo suficiente para descontar a parcela.");
    }
}

// Lista todos os empréstimos atrelados à conta, detalhando valores e status de quitação.
function exibirEmprestimos(usuario) {
    if (usuario.emprestimos.length === 0) return console.log("Nenhum empréstimo registrado.");
    let existeEmprestimoAberto = false;

    // Percorre todos os empréstimos históricos do cliente para impressão em tela
    for (let i = 0; i < usuario.emprestimos.length; i++) {
        let emp = usuario.emprestimos[i];
        console.log(`-----------------------------------\nEmpréstimo ${i + 1}\nValor solicitado: R$ ${emp.valorSolicitado.toFixed(2)}\nTotal a pagar: R$ ${emp.totalPagar.toFixed(2)}`);

        if (emp.quitado) {
            console.log("Status: QUITADO\nSaldo devedor: R$ 0.00\nParcelas restantes: 0");
        } else {
            existeEmprestimoAberto = true; 
            console.log(`Status: EM ABERTO\nSaldo devedor: R$ ${emp.saldoDevedor.toFixed(2)}\nParcelas restantes: ${emp.parcelasRestantes}\nValor da parcela: R$ ${emp.valorParcela.toFixed(2)}`);
        }
    }

    if (!existeEmprestimoAberto) console.log("-----------------------------------\nTodos os empréstimos já foram quitados.");
}

// Dispara a cobrança da parcela automática, imprime o histórico listagem de empréstimos.
function exibirExtrato(usuario) {
    descontarParcelaEmprestimo(usuario); 

    console.log("\n===================================\n         EXTRATO BANCÁRIO          \n===================================");
    if (usuario.extrato.length === 0) {
        console.log("Nenhuma movimentação realizada até o momento.");
    } else {
        // Varre e imprime cada movimentação salva no extrato
        for (let i = 0; i < usuario.extrato.length; i++) {
            let t = usuario.extrato[i];
            console.log(`[${t.data}] ${t.tipo}: R$ ${t.valor.toFixed(2)}${t.detalhes ? ` | ${t.detalhes}` : ""}`);
        }
    }
    console.log(`===================================\nSaldo atual: R$ ${usuario.saldo.toFixed(2)}\n===================================\n       EMPRÉSTIMOS REGISTRADOS     \n===================================`);
    exibirEmprestimos(usuario);
    Keyboard.question("\nPressione Enter para voltar ao menu...");
}

// Loop que exibe as opções do painel bancário enquanto a flag 'logado' for verdadeira.
function menuPrincipal(usuario) {
    let logado = true;
    while (logado) {
        console.log(`\n===================================\n   BANCO DIGITAL - MENU PRINCIPAL\n   Cliente: ${usuario.nomeCompleto}\n   Saldo Atual: R$ ${usuario.saldo.toFixed(2)}\n===================================\n1. Depositar\n2. Sacar\n3. Empréstimo\n4. Extrato Completo\n5. Trocar de conta\n6. Criar nova conta\n0. Sair / Encerrar\n===================================`);

        switch (Keyboard.question("Escolha uma opcao: ")) {
            case "1": depositar(usuario); 
                break;
            case "2": sacar(usuario); 
                break;
            case "3": solicitarEmprestimo(usuario); 
                break;
            case "4": exibirExtrato(usuario); 
                break;
            case "5": console.log("\nTrocando de conta..."); login(); 
                return;
            case "6": console.log("\n--- CRIAR NOVA CONTA ---"); criarConta(); 
                break;
            case "0": console.log(`\nAté logo, ${usuario.nomeCompleto}!`); logado = false; 
                break; 
            default: console.log("\n[ERRO] Opção inválida!");
        }
    }
}

conta();