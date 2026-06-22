const Keyboard = require("readline-sync");

let contas = [];

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
        enderecoCompleto: {
            cep: null,
            estado: null,
            cidade: null,
            bairro: null,
            numero: null
        }
    };
}

function registrarTransacao(usuario, tipo, valor, detalhes = "") {
    usuario.extrato.push({
        tipo: tipo,
        valor: valor,
        detalhes: detalhes,
        data: new Date().toLocaleString("pt-BR")
    });
}

function lerValor(mensagem) {
    let valor;

    do {
        valor = Number(Keyboard.question(mensagem).replace(",", "."));

        if (valor <= 0) {
            console.log("[ERRO] Digite um valor válido maior que zero.");
        }
    } while (valor <= 0);

    return valor;
}

function buscarContaPorCPF(cpf) {
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].cpf === cpf) {
            return contas[i];
        }
    }
    return null;
}

function conta() {
    if (contas.length === 0) {
        console.log("Nenhuma conta cadastrada ainda.");
        console.log("Vamos criar sua primeira conta.\n");
        criarConta();
        return;
    }

    const pergunta = Keyboard.keyInYN(
        "Deseja criar uma conta? (Pressione N se ja tiver login): "
    );

    if (pergunta) {
        criarConta();
    } else {
        console.log("Encaminhando para a tela de login...");
        login();
    }
}

function criarConta() {
    const novoUsuario = criarCadastroBase();
    const nomeDigitado = Keyboard.question("Digite seu nome completo: ");
    const cpfDigitado = Keyboard.question("Digite seu CPF: ");

    let nomeJaExiste = false;
    let cpfJaExiste = false;

    for (let i = 0; i < contas.length; i++) {
        if (contas[i].nomeCompleto.toLowerCase() === nomeDigitado.toLowerCase()) {
            nomeJaExiste = true;
        }

        if (contas[i].cpf === cpfDigitado) {
            cpfJaExiste = true;
        }
    }

    if (nomeJaExiste) {
        console.log("\n[ERRO] Esse nome já está cadastrado!");
        return;
    }

    if (cpfJaExiste) {
        console.log("\n[ERRO] Esse CPF já está cadastrado!");
        return;
    }

    novoUsuario.nomeCompleto = nomeDigitado;
    novoUsuario.cpf = cpfDigitado;
    novoUsuario.senha = Keyboard.question("Crie uma senha: ", {
        hideEchoBack: true,
        mask: "*"
    });
    novoUsuario.telefone = Keyboard.question("Digite seu telefone: ");

    console.log("\n--- Agora vamos preencher o endereco ---");
    novoUsuario.enderecoCompleto.cep = Keyboard.question("Digite o CEP: ");
    novoUsuario.enderecoCompleto.estado = Keyboard.question("Digite o estado: ");
    novoUsuario.enderecoCompleto.cidade = Keyboard.question("Digite a cidade: ");
    novoUsuario.enderecoCompleto.bairro = Keyboard.question("Digite o bairro: ");
    novoUsuario.enderecoCompleto.numero = Keyboard.question("Digite o numero da casa: ");

    contas.push(novoUsuario);

    console.log("\n[SUCESSO] Conta criada com sucesso!\n");

    const entrarAgora = Keyboard.keyInYN("Deseja fazer login agora? ");
    if (entrarAgora) {
        login();
    }
}

function login() {
    if (contas.length === 0) {
        console.log("\n[ERRO] Não existe nenhuma conta cadastrada ainda.");
        criarConta();
        return;
    }

    console.log("\n--- TELA DE LOGIN ---");
    const nomeLogin = Keyboard.question("Digite seu nome de usuario: ");
    const senhaLogin = Keyboard.question("Digite sua senha: ", {
        hideEchoBack: true,
        mask: "*"
    });

    let usuarioLogado = null;

    for (let i = 0; i < contas.length; i++) {
        if (
            contas[i].nomeCompleto.toLowerCase() === nomeLogin.toLowerCase() &&
            contas[i].senha === senhaLogin
        ) {
            usuarioLogado = contas[i];
            break;
        }
    }

    if (usuarioLogado !== null) {
        console.log(`\nLogin realizado com sucesso! Bem-vindo, ${usuarioLogado.nomeCompleto}.`);
        menuPrincipal(usuarioLogado);
        return;
    }

    console.log("\n[ERRO] Nome de usuario ou senha incorretos!");
    const tentarNovamente = Keyboard.keyInYN("Deseja tentar logar novamente? ");

    if (tentarNovamente) {
        login();
    } else {
        console.log("Programa encerrado.");
    }
}

function depositar(usuario) {
    console.log("\n--- ÁREA DE DEPÓSITO ---");
    const valor = lerValor("Digite o valor que deseja depositar: R$ ");

    usuario.saldo += valor;
    registrarTransacao(usuario, "Depósito", valor);

    console.log(`\n[SUCESSO] Depósito de R$ ${valor.toFixed(2)} realizado!`);
}

function sacar(usuario) {
    console.log("\n--- ÁREA DE SAQUE ---");
    const valor = lerValor("Digite o valor que deseja sacar: R$ ");

    if (valor > usuario.saldo) {
        const falta = valor - usuario.saldo;
        console.log("\n[ERRO] Saldo insuficiente para essa operação!");
        console.log(`Seu saldo atual é de R$ ${usuario.saldo.toFixed(2)}.`);
        console.log(`Faltam R$ ${falta.toFixed(2)} para sacar esse valor.`);
        return;
    }

    usuario.saldo -= valor;
    registrarTransacao(usuario, "Saque", valor);

    console.log(`\n[SUCESSO] Saque de R$ ${valor.toFixed(2)} realizado!`);
}

function transferir(usuario) {
    console.log("\n--- TRANSFERÊNCIA ---");
    console.log("1. Pix");
    console.log("2. TED");
    console.log("3. DOC");

    const opcao = Keyboard.question("Escolha o tipo de transferencia: ");
    let tipoTransferencia = "";

    switch (opcao) {
        case "1":
            tipoTransferencia = "Pix";
            break;
        case "2":
            tipoTransferencia = "TED";
            break;
        case "3":
            tipoTransferencia = "DOC";
            break;
        default:
            console.log("[ERRO] Opção inválida!");
            return;
    }

    const valor = lerValor(`Digite o valor da transferencia via ${tipoTransferencia}: R$ `);
    const cpfDestino = Keyboard.question("Digite o CPF do destinatario: ");

    if (!cpfDestino) {
        console.log("[ERRO] CPF inválido!");
        return;
    }

    if (valor > usuario.saldo) {
        console.log("[ERRO] Saldo insuficiente para realizar a transferência!");
        console.log(`Seu saldo atual é de R$ ${usuario.saldo.toFixed(2)}.`);
        return;
    }

    // Só desconta da conta do usuário logado
    usuario.saldo -= valor;

    registrarTransacao(
        usuario,
        `Transferência enviada (${tipoTransferencia})`,
        valor,
        `CPF informado: ${cpfDestino}`
    );

    console.log(`\n[SUCESSO] Transferência via ${tipoTransferencia} realizada com sucesso!`);
    console.log(`[INFO] Valor descontado da sua conta: R$ ${valor.toFixed(2)}`);
    console.log(`[INFO] CPF informado: ${cpfDestino}`);
}

function solicitarEmprestimo(usuario) {
    console.log("\n--- ÁREA DE EMPRÉSTIMO ---");
    const valor = lerValor("Digite o valor do empréstimo desejado: R$ ");

    const juros = 0.05;
    const totalPagar = valor * (1 + juros);
    const parcelas = 10;
    const valorParcela = totalPagar / parcelas;

    usuario.saldo += valor;

    usuario.emprestimos.push({
        valorSolicitado: valor,
        totalPagar: totalPagar,
        saldoDevedor: totalPagar,
        parcelasTotais: parcelas,
        parcelasRestantes: parcelas,
        valorParcela: valorParcela,
        quitado: false,
        data: new Date().toLocaleString("pt-BR")
    });

    registrarTransacao(
        usuario,
        "Empréstimo aprovado",
        valor,
        `Total a pagar: R$ ${totalPagar.toFixed(2)} em ${parcelas} parcelas de R$ ${valorParcela.toFixed(2)}`
    );

    console.log(`\n[SUCESSO] Empréstimo de R$ ${valor.toFixed(2)} aprovado!`);
    console.log(`Você recebeu R$ ${valor.toFixed(2)} na conta.`);
    console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}.`);
    console.log(`Parcelas: ${parcelas}x de R$ ${valorParcela.toFixed(2)}.`);
}

function descontarParcelaEmprestimo(usuario) {
    for (let i = 0; i < usuario.emprestimos.length; i++) {
        let emprestimo = usuario.emprestimos[i];

        if (emprestimo.quitado === false && emprestimo.parcelasRestantes > 0) {
            if (usuario.saldo >= emprestimo.valorParcela) {
                usuario.saldo -= emprestimo.valorParcela;
                emprestimo.saldoDevedor -= emprestimo.valorParcela;
                emprestimo.parcelasRestantes--;

                if (emprestimo.saldoDevedor < 0.01) {
                    emprestimo.saldoDevedor = 0;
                }

                if (emprestimo.saldoDevedor === 0 || emprestimo.parcelasRestantes === 0) {
                    emprestimo.saldoDevedor = 0;
                    emprestimo.parcelasRestantes = 0;
                    emprestimo.quitado = true;

                    registrarTransacao(
                        usuario,
                        "Parcela do empréstimo",
                        emprestimo.valorParcela,
                        "Empréstimo quitado"
                    );

                    console.log("\n[INFO] A última parcela do empréstimo foi descontada.");
                    console.log("[INFO] Seu empréstimo foi quitado com sucesso.");
                } else {
                    registrarTransacao(
                        usuario,
                        "Parcela do empréstimo",
                        emprestimo.valorParcela,
                        `Parcelas restantes: ${emprestimo.parcelasRestantes}`
                    );

                    console.log("\n[INFO] Uma parcela do empréstimo foi descontada automaticamente.");
                    console.log(`Valor da parcela: R$ ${emprestimo.valorParcela.toFixed(2)}`);
                }
            } else {
                console.log("\n[AVISO] Você tem empréstimo em aberto, mas não há saldo suficiente para descontar a parcela.");
            }

            return;
        }
    }
}

function exibirEmprestimos(usuario) {
    if (usuario.emprestimos.length === 0) {
        console.log("Nenhum empréstimo registrado.");
        return;
    }

    let existeEmprestimoAberto = false;

    for (let i = 0; i < usuario.emprestimos.length; i++) {
        let emprestimo = usuario.emprestimos[i];

        console.log("-----------------------------------");
        console.log(`Empréstimo ${i + 1}`);
        console.log(`Valor solicitado: R$ ${emprestimo.valorSolicitado.toFixed(2)}`);
        console.log(`Total a pagar: R$ ${emprestimo.totalPagar.toFixed(2)}`);

        if (emprestimo.quitado) {
            console.log("Status: QUITADO");
            console.log("Saldo devedor: R$ 0.00");
            console.log("Parcelas restantes: 0");
        } else {
            existeEmprestimoAberto = true;
            console.log("Status: EM ABERTO");
            console.log(`Saldo devedor: R$ ${emprestimo.saldoDevedor.toFixed(2)}`);
            console.log(`Parcelas restantes: ${emprestimo.parcelasRestantes}`);
            console.log(`Valor da parcela: R$ ${emprestimo.valorParcela.toFixed(2)}`);
        }
    }

    if (!existeEmprestimoAberto) {
        console.log("-----------------------------------");
        console.log("Todos os empréstimos já foram quitados.");
    }
}

function exibirExtrato(usuario) {
    descontarParcelaEmprestimo(usuario);

    console.log("\n===================================");
    console.log("         EXTRATO BANCÁRIO          ");
    console.log("===================================");

    if (usuario.extrato.length === 0) {
        console.log("Nenhuma movimentação realizada até o momento.");
    } else {
        for (let i = 0; i < usuario.extrato.length; i++) {
            let transacao = usuario.extrato[i];
            let linha = `[${transacao.data}] ${transacao.tipo}: R$ ${transacao.valor.toFixed(2)}`;

            if (transacao.detalhes) {
                linha += ` | ${transacao.detalhes}`;
            }

            console.log(linha);
        }
    }

    console.log("===================================");
    console.log(`Saldo atual: R$ ${usuario.saldo.toFixed(2)}`);
    console.log("===================================");
    console.log("       EMPRÉSTIMOS REGISTRADOS     ");
    console.log("===================================");
    exibirEmprestimos(usuario);

    Keyboard.question("\nPressione Enter para voltar ao menu...");
}

function menuPrincipal(usuario) {
    let logado = true;

    while (logado) {
        console.log(`\n===================================`);
        console.log(`   BANCO DIGITAL - MENU PRINCIPAL`);
        console.log(`   Cliente: ${usuario.nomeCompleto}`);
        console.log(`   Saldo Atual: R$ ${usuario.saldo.toFixed(2)}`);
        console.log(`===================================`);
        console.log("1. Depositar");
        console.log("2. Sacar");
        console.log("3. Transferência (Pix, TED, DOC)");
        console.log("4. Empréstimo");
        console.log("5. Extrato Completo");
        console.log("6. Trocar de conta");
        console.log("7. Criar nova conta");
        console.log("0. Sair / Encerrar");
        console.log(`===================================`);

        let opcao = Keyboard.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":
                depositar(usuario);
                break;
            case "2":
                sacar(usuario);
                break;
            case "3":
                transferir(usuario);
                break;
            case "4":
                solicitarEmprestimo(usuario);
                break;
            case "5":
                exibirExtrato(usuario);
                break;
            case "6":
                console.log("\nTrocando de conta...");
                login();
                return;
            case "7":
                console.log("\n--- CRIAR NOVA CONTA ---");
                criarConta();
                break;
            case "0":
                console.log(`\nAté logo, ${usuario.nomeCompleto}!`);
                logado = false;
                break;
            default:
                console.log("\n[ERRO] Opção inválida!");
        }
    }
}

conta();