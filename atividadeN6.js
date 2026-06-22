//Criar Banco;
//Segurança do Banco;
//menu inicial 
//Taxa:
//Saque:
//Investimento:
//C.C:
//Tranferencia: Pix, Ted, Doc;
//LCP.:
//Emprestimo: add Historico, Atualiza Conta no caso o valor;
//Renda fixa, Renda variavel;
//extrato: o que, quanto, ano/mes/dia/hora/minuto/segundo
//sistema de ajuda;
//cashback;
//Recarga de Celular;
//Seguraça de validação;

//Ter Notificação;
//Abrir Caixinha;
//Notificação: Ex: Cartao Vencido, Valor en Extrato, Novo Limite, Deposito, Saque;

//Cadastro: Com Senha;
//historico
//limite
//tipo
//investimento
//info pessoal
//saldo
//bonus
//logado = boolean
//Excluir Cadastro;

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
        enderecoCompleto: { 
            cep: null,
            estado: null,
            cidade: null,
            bairro: null,
            rua: null,
            numero: null
        }
    };
}

// Controla o fluxo de cadastro de novos clientes
function conta() {
    const pergunta = Keyboard.keyInYN('Deseja criar uma conta? (Pressione N se ja tiver login): ');

    if (pergunta === true) {
        const novoUsuario = criarCadastroBase();
        const nomeDigitado = Keyboard.question("Digite seu nome completo: ");
        let nomeJaExiste = false; 

        // Validação: impede o cadastro de nomes duplicados (ignorando maiúsculas/minúsculas)
        for (let usuario of contas) {
            if (usuario.nomeCompleto.toLowerCase() === nomeDigitado.toLowerCase()) {
                nomeJaExiste = true; 
                break; 
            }
        }

        if (nomeJaExiste) {
            console.log("\n[ERRO] Esse nome ja esta cadastrado! Encaminhando para o login...");
            login(); 
            return;  
        }

        // Preenchimento dos dados do novo usuário
        novoUsuario.nomeCompleto = nomeDigitado;
        
        // MÁSCARA ADICIONADA AQUI: esconde a senha ao digitar
        novoUsuario.senha = Keyboard.question("Crie uma senha: ", { hideEchoBack: true, mask: '*' }); 
        
        novoUsuario.telefone = Keyboard.question("Digite seu telefone: ");
        novoUsuario.cpf = Keyboard.question("Digite seu CPF: "); 
        
        console.log("\n--- Agora vamos preencher o endereco ---");
        novoUsuario.enderecoCompleto.cep = Keyboard.question("Digite o CEP: ");
        novoUsuario.enderecoCompleto.cidade = Keyboard.question("Digite a cidade: ");
        novoUsuario.enderecoCompleto.numero = Keyboard.question("Digite o numero da casa: ");

        // Salva o novo usuário no array global de contas
        contas.push(novoUsuario);
        
        console.log("\nConta criada com sucesso!\n");
        login();
    } else {
        console.log("Encaminhando para a tela de login...");
        login();
    }
}

// Realiza a autenticação do usuário
function login() {
    console.log("\n--- TELA DE LOGIN ---");
    const nomeLogin = Keyboard.question("Digite seu nome de usuario: ");
    
    // MÁSCARA ADICIONADA AQUI TAMBÉM: para o login seguro
    const senhaLogin = Keyboard.question("Digite sua senha: ", { hideEchoBack: true, mask: '*' }); 
    
    let usuarioLogado = null; 

    // Busca no sistema uma conta que coincida com o nome e a senha digitados
    for (let usuario of contas) {
        if (usuario.nomeCompleto.toLowerCase() === nomeLogin.toLowerCase() && usuario.senha === senhaLogin) {
            usuarioLogado = usuario; 
            break; 
        }
    }

    if (usuarioLogado !== null) {
        console.log(`\nLogin realizado com sucesso! Bem-vindo, ${usuarioLogado.nomeCompleto}.`);
        menuPrincipal(usuarioLogado); // Direciona para o menu do banco passando o usuário logado
    } else {
        console.log("\n[ERRO] Nome de usuario ou senha incorretos!");
        const tentarNovamente = Keyboard.keyInYN('Deseja tentar logar novamente? ');
        if (tentarNovamente) {
            login();
        } else {
            console.log("Programa encerrado.");
        }
    }
}

// Adiciona saldo ao usuário logado e registra o evento no extrato
function depositar(usuario) {
    console.log("\n--- ÁREA DE DEPÓSITO ---");
    let valor = Keyboard.questionFloat("Digite o valor que deseja depositar: R$ ");

    if (valor <= 0) {
        console.log("\n[ERRO] Valor de depósito inválido!");
        return;
    }

    usuario.saldo += valor;

    // Registra a transação com data e hora local
    let dataAtual = new Date().toLocaleString("pt-BR"); 
    usuario.extrato.push({
        tipo: "Depósito",
        valor: valor,
        data: dataAtual
    });

    console.log(`\n[SUCESSO] Depósito de R$ ${valor.toFixed(2)} realizado!`);
}

// Deduz saldo do usuário logado, após validar se há fundos suficientes
function sacar(usuario) {
    console.log("\n--- ÁREA DE SAQUE ---");
    let valor = Keyboard.questionFloat("Digite o valor que deseja sacar: R$ ");

    if (valor <= 0) {
        console.log("\n[ERRO] Valor de saque inválido!");
        return;
    }

    if (valor > usuario.saldo) {
        console.log("\n[ERRO] Saldo insuficiente para essa operação!");
        return;
    }

    usuario.saldo -= valor;

    let dataAtual = new Date().toLocaleString("pt-BR");
    usuario.extrato.push({
        tipo: "Saque",
        valor: valor,
        data: dataAtual
    });

    console.log(`\n[SUCESSO] Saque de R$ ${valor.toFixed(2)} realizado!`);
}

// Lista todo o histórico de depósitos e saques armazenados no array do usuário
function exibirExtrato(usuario) {
    console.log("\n===================================");
    console.log(`         EXTRATO BANCÁRIO          `);
    console.log("===================================");

    if (usuario.extrato.length === 0) {
        console.log("Nenhuma movimentação realizada até o momento.");
    } else {
        for (let transacao of usuario.extrato) {
            console.log(`[${transacao.data}] ${transacao.tipo}: R$ ${transacao.valor.toFixed(2)}`);
        }
    }
    console.log("===================================");
    Keyboard.question("\nPressione Enter para voltar ao menu...");
}

// Mantém o usuário em um loop de opções até que ele decida sair (opção 0)
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
        console.log("5. Área de Investimentos");
        console.log("6. Extrato Completo");
        console.log("7. Recarga de Celular");
        console.log("0. Sair / Fazer Logout");
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
                console.log("\n[Funcionalidade em construção]: Pix/TED/DOC...");
                break;
            case "4":
                console.log("\n[Funcionalidade em construção]: Empréstimo...");
                break;
            case "5":
                console.log("\n[Funcionalidade em construção]: Investimentos...");
                break;
            case "6":
                exibirExtrato(usuario);
                break;
            case "7":
                console.log("\n[Funcionalidade em construção]: Recarga...");
                break;
            case "0":
                console.log(`\nAté logo, ${usuario.nomeCompleto}!`);
                logado = false; // Quebra o loop 'while' e encerra o menu
                break;
            default:
                console.log("\n[ERRO] Opção inválida!");
        }
    }
}

// Inicialização: inicia a primeira chamada do sistema ao executar o arquivo
conta();