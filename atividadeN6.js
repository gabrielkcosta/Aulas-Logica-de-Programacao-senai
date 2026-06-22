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

// ==========================================
// 1. BANCO DE DADOS E ESTRUTURA DA CONTA
// ==========================================
let contas = []; 

function criarModeloConta() {
    return {
        // Info Pessoal e Segurança
        nomeCompleto: null,
        senha: null,
        cpf: null,
        tipo: "Conta Corrente (C.C)",
        logado: false,
        
        // Saldos e Limites
        saldo: 0,
        limite: 500.00, // Limite de cheque especial padrão
        bonusCashback: 0,
        
        // Listas e Históricos
        historico: [], // Extrato
        notificacoes: [],
        investimentos: [],
        caixinhas: [],
        emprestimos: []
    };
}

// ==========================================
// 2. UTILITÁRIOS E SEGURANÇA
// ==========================================

// Gera a data no formato exato: Ano/Mês/Dia Hora:Minuto:Segundo
function obterDataFormatada() {
    const data = new Date();
    return `${data.getFullYear()}/${String(data.getMonth() + 1).padStart(2, '0')}/${String(data.getDate()).padStart(2, '0')} ` +
           `${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}:${String(data.getSeconds()).padStart(2, '0')}`;
}

function adicionarNotificacao(usuario, mensagem) {
    usuario.notificacoes.push(`[${obterDataFormatada()}] ${mensagem}`);
}

function registrarExtrato(usuario, oQue, quanto) {
    usuario.historico.push({
        operacao: oQue,
        valor: quanto,
        data: obterDataFormatada()
    });
}

function sistemaAjuda() {
    console.log("\n--- SISTEMA DE AJUDA ---");
    console.log("Bem-vindo ao Banco Digital! Aqui estão algumas dicas:");
    console.log("- Saques podem cobrar taxas dependendo do seu tipo de conta.");
    console.log("- Recargas de celular geram 2% de Cashback no seu saldo bônus.");
    console.log("- Pix é isento de taxas, mas TED e DOC podem ter cobranças.");
    console.log("- Para segurança, sua senha fica oculta ao digitar.");
    Keyboard.question("\nPressione Enter para voltar...");
}

// ==========================================
// 3. AUTENTICAÇÃO E GERENCIAMENTO DE CONTA
// ==========================================

function menuInicial() {
    console.log("\n===================================");
    console.log("       BEM-VINDO AO BANCO DIGITAL  ");
    console.log("===================================");
    console.log("1. Fazer Login");
    console.log("2. Abrir Nova Conta");
    console.log("3. Ajuda");
    console.log("0. Fechar Aplicativo");
    console.log("===================================");

    let opcao = Keyboard.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1": login(); break;
        case "2": criarConta(); break;
        case "3": sistemaAjuda(); menuInicial(); break;
        case "0": console.log("Encerrando sistema..."); process.exit(); break;
        default: console.log("\n[ERRO] Opção inválida!"); menuInicial();
    }
}

function criarConta() {
    console.log("\n--- ABERTURA DE CONTA ---");
    const novoUsuario = criarModeloConta();
    
    novoUsuario.nomeCompleto = Keyboard.question("Digite seu nome completo: ");
    novoUsuario.cpf = Keyboard.question("Digite seu CPF: ");
    
    // Validação básica de CPF duplicado
    let cpfExiste = contas.find(c => c.cpf === novoUsuario.cpf);
    if (cpfExiste) {
        console.log("\n[ERRO] CPF já cadastrado no sistema!");
        return menuInicial();
    }

    // Segurança: Máscara de senha
    novoUsuario.senha = Keyboard.question("Crie uma senha de acesso: ", { hideEchoBack: true, mask: '*' });
    
    adicionarNotificacao(novoUsuario, "Bem-vindo ao seu novo Banco Digital!");
    contas.push(novoUsuario);
    
    console.log("\nConta criada com sucesso!");
    menuInicial();
}

function login() {
    console.log("\n--- LOGIN SEGURANÇA ---");
    const cpfLogin = Keyboard.question("Digite seu CPF: ");
    const senhaLogin = Keyboard.question("Digite sua senha: ", { hideEchoBack: true, mask: '*' });

    let usuarioLogado = contas.find(c => c.cpf === cpfLogin && c.senha === senhaLogin);

    if (usuarioLogado) {
        usuarioLogado.logado = true;
        console.log(`\nLogin realizado com sucesso! Olá, ${usuarioLogado.nomeCompleto}.`);
        menuPrincipal(usuarioLogado);
    } else {
        console.log("\n[ERRO] CPF ou senha incorretos!");
        menuInicial();
    }
}

function excluirCadastro(usuario) {
    const confirmacao = Keyboard.keyInYNStrict("\n[ATENÇÃO] Tem certeza que deseja EXCLUIR sua conta permanentemente? ");
    if (confirmacao) {
        const senhaConfirma = Keyboard.question("Digite sua senha para confirmar: ", { hideEchoBack: true, mask: '*' });
        if (senhaConfirma === usuario.senha) {
            // Remove o usuário do array
            contas = contas.filter(c => c.cpf !== usuario.cpf);
            console.log("\nConta excluída com sucesso. Lamentamos ver você partir!");
            menuInicial();
        } else {
            console.log("\n[ERRO] Senha incorreta. Exclusão cancelada.");
        }
    }
}

// ==========================================
// 4. MOVIMENTAÇÕES BANCÁRIAS
// ==========================================

function depositar(usuario) {
    let valor = Keyboard.questionFloat("\nValor do deposito: R$ ");
    if (valor > 0) {
        usuario.saldo += valor;
        registrarExtrato(usuario, "Depósito Recebido", valor);
        adicionarNotificacao(usuario, `Depósito de R$ ${valor.toFixed(2)} aprovado.`);
        console.log(`\n[SUCESSO] R$ ${valor.toFixed(2)} depositados.`);
    } else {
        console.log("\n[ERRO] Valor inválido.");
    }
}

function sacar(usuario) {
    let valor = Keyboard.questionFloat("\nValor do saque: R$ ");
    let taxa = 2.50; // Taxa de saque
    let valorTotal = valor + taxa;

    if (valor > 0 && valorTotal <= (usuario.saldo + usuario.limite)) {
        usuario.saldo -= valorTotal;
        registrarExtrato(usuario, "Saque em Caixa Eletrônico (com taxa)", -valorTotal);
        adicionarNotificacao(usuario, `Saque de R$ ${valor.toFixed(2)} realizado (Taxa: R$ 2.50).`);
        console.log(`\n[SUCESSO] Saque liberado! Taxa de R$ 2.50 aplicada.`);
    } else {
        console.log("\n[ERRO] Saldo + Limite insuficientes para o saque e taxa.");
    }
}

function transferir(usuario) {
    console.log("\n--- TRANSFERÊNCIA ---");
    let tipos = ["Pix", "TED", "DOC"];
    let escolha = Keyboard.keyInSelect(tipos, "Escolha o tipo de transferencia:");
    
    if (escolha === -1) return;

    let chave = Keyboard.question("Digite a chave/conta do destino: ");
    let valor = Keyboard.questionFloat("Valor a transferir: R$ ");
    let taxa = escolha === 0 ? 0 : 10.00; // Pix é grátis, TED/DOC custa 10

    let valorTotal = valor + taxa;

    if (valor > 0 && valorTotal <= (usuario.saldo + usuario.limite)) {
        usuario.saldo -= valorTotal;
        registrarExtrato(usuario, `Transferência ${tipos[escolha]} para ${chave}`, -valorTotal);
        adicionarNotificacao(usuario, `${tipos[escolha]} de R$ ${valor.toFixed(2)} enviado.`);
        console.log(`\n[SUCESSO] Transferência enviada!`);
        if (taxa > 0) console.log(`Taxa de R$ ${taxa.toFixed(2)} cobrada.`);
    } else {
        console.log("\n[ERRO] Saldo insuficiente.");
    }
}

function recargaCelular(usuario) {
    let numero = Keyboard.question("\nDigite o numero com DDD: ");
    let valor = Keyboard.questionFloat("Valor da recarga: R$ ");

    if (valor > 0 && valor <= usuario.saldo) {
        usuario.saldo -= valor;
        let cashback = valor * 0.02; // 2% de cashback
        usuario.bonusCashback += cashback;

        registrarExtrato(usuario, `Recarga de Celular (${numero})`, -valor);
        adicionarNotificacao(usuario, `Recarga de R$ ${valor.toFixed(2)} aprovada.`);
        adicionarNotificacao(usuario, `Você ganhou R$ ${cashback.toFixed(2)} de Cashback!`);
        
        console.log(`\n[SUCESSO] Recarga realizada. Você ganhou R$ ${cashback.toFixed(2)} de Cashback!`);
    } else {
        console.log("\n[ERRO] Saldo insuficiente.");
    }
}

// ==========================================
// 5. PRODUTOS FINANCEIROS
// ==========================================

function abrirCaixinha(usuario) {
    let nome = Keyboard.question("\nDe um nome para sua Caixinha (ex: Viagem, Carro): ");
    let valorInicial = Keyboard.questionFloat("Valor inicial para guardar: R$ ");

    if (valorInicial > 0 && valorInicial <= usuario.saldo) {
        usuario.saldo -= valorInicial;
        usuario.caixinhas.push({ objetivo: nome, saldo: valorInicial });
        registrarExtrato(usuario, `Depósito Caixinha (${nome})`, -valorInicial);
        console.log(`\n[SUCESSO] Caixinha '${nome}' criada com R$ ${valorInicial.toFixed(2)}!`);
    } else {
        console.log("\n[ERRO] Saldo insuficiente.");
    }
}

function painelInvestimentos(usuario) {
    console.log("\n--- ÁREA DE INVESTIMENTOS ---");
    let tipos = ["Renda Fixa (CDB)", "Renda Variável (Ações)", "LCP (Letra de Câmbio)"];
    let escolha = Keyboard.keyInSelect(tipos, "Escolha o tipo de investimento:");
    
    if (escolha === -1) return;

    let valor = Keyboard.questionFloat("Quanto deseja investir? R$ ");

    if (valor > 0 && valor <= usuario.saldo) {
        usuario.saldo -= valor;
        usuario.investimentos.push({ tipo: tipos[escolha], valorAplicado: valor });
        registrarExtrato(usuario, `Investimento: ${tipos[escolha]}`, -valor);
        adicionarNotificacao(usuario, `Novo investimento em ${tipos[escolha]} de R$ ${valor.toFixed(2)}.`);
        console.log(`\n[SUCESSO] Investimento realizado!`);
    } else {
        console.log("\n[ERRO] Saldo insuficiente.");
    }
}

function solicitarEmprestimo(usuario) {
    console.log(`\n--- EMPRÉSTIMO ---`);
    console.log(`Limite pré-aprovado disponível: R$ ${(usuario.limite * 3).toFixed(2)}`);
    
    let valor = Keyboard.questionFloat("Valor desejado: R$ ");
    
    if (valor > 0 && valor <= (usuario.limite * 3)) {
        usuario.saldo += valor;
        usuario.emprestimos.push({ valorDevido: valor * 1.2 }); // Empréstimo com 20% de juros no total
        registrarExtrato(usuario, "Empréstimo Aprovado", valor);
        adicionarNotificacao(usuario, `Empréstimo de R$ ${valor.toFixed(2)} liberado em conta.`);
        console.log(`\n[SUCESSO] O valor foi adicionado ao seu saldo!`);
    } else {
        console.log("\n[ERRO] Valor excede o limite pré-aprovado ou é inválido.");
    }
}

// ==========================================
// 6. CONSULTAS
// ==========================================

function exibirExtrato(usuario) {
    console.log("\n==================================================");
    console.log(`        EXTRATO DETALHADO - ${usuario.tipo}       `);
    console.log(`        Titular: ${usuario.nomeCompleto}          `);
    console.log("==================================================");
    
    if (usuario.historico.length === 0) {
        console.log("Nenhuma movimentação registrada.");
    } else {
        for (let item of usuario.historico) {
            // Formato pedido: O que, Quanto, Ano/Mes/Dia/Hora/Minuto/Segundo
            console.log(`[${item.data}] ${item.operacao} | R$ ${item.valor.toFixed(2)}`);
        }
    }
    console.log("--------------------------------------------------");
    console.log(`SALDO ATUAL: R$ ${usuario.saldo.toFixed(2)}`);
    console.log(`LIMITE DISPONÍVEL: R$ ${usuario.limite.toFixed(2)}`);
    console.log(`CASHBACK ACUMULADO: R$ ${usuario.bonusCashback.toFixed(2)}`);
    console.log("==================================================");
    Keyboard.question("\nPressione Enter para voltar...");
}

function lerNotificacoes(usuario) {
    console.log("\n--- CENTRAL DE NOTIFICAÇÕES ---");
    if (usuario.notificacoes.length === 0) {
        console.log("Você não tem novas notificações.");
    } else {
        for (let notif of usuario.notificacoes) {
            console.log(notif);
        }
        usuario.notificacoes = []; // Limpa após ler
        console.log("\n*Todas as notificações foram marcadas como lidas.*");
    }
    Keyboard.question("\nPressione Enter para voltar...");
}

// ==========================================
// 7. MENU PRINCIPAL (PAINEL CENTRAL)
// ==========================================

function menuPrincipal(usuario) {
    while (usuario.logado) {
        let qtdeNotificacoes = usuario.notificacoes.length > 0 ? `(${usuario.notificacoes.length})` : "";
        
        console.log(`\n===================================`);
        console.log(`   BANCO DIGITAL - PAINEL CENTRAL`);
        console.log(`   Saldo: R$ ${usuario.saldo.toFixed(2)}`);
        console.log(`===================================`);
        console.log("1. Depositar");
        console.log("2. Sacar (Dinheiro)");
        console.log("3. Transferência (Pix, TED, DOC)");
        console.log("4. Extrato Completo");
        console.log("5. Recarga de Celular (Cashback)");
        console.log("6. Guardar na Caixinha");
        console.log("7. Investimentos (Fixa, Variável, LCP)");
        console.log("8. Solicitar Empréstimo");
        console.log(`9. Ver Notificações ${qtdeNotificacoes}`);
        console.log("10. Excluir minha conta");
        console.log("0. Sair / Fazer Logout");
        console.log(`===================================`);

        let opcao = Keyboard.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1": depositar(usuario); break;
            case "2": sacar(usuario); break;
            case "3": transferir(usuario); break;
            case "4": exibirExtrato(usuario); break;
            case "5": recargaCelular(usuario); break;
            case "6": abrirCaixinha(usuario); break;
            case "7": painelInvestimentos(usuario); break;
            case "8": solicitarEmprestimo(usuario); break;
            case "9": lerNotificacoes(usuario); break;
            case "10": excluirCadastro(usuario); if (!contas.includes(usuario)) { return; } break; // Se excluiu, quebra a função
            case "0": 
                console.log("\nSaindo da conta..."); 
                usuario.logado = false; 
                menuInicial(); 
                break;
            default: console.log("\n[ERRO] Opção inválida!");
        }
    }
}

// ==========================================
// 8. INICIALIZAÇÃO
// ==========================================
menuInicial();