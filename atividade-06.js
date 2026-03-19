// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

// let a = true
// let a1 = true
// console.log("true && true → <resultado>", a && a1)

// let b = true
// let b1 = false
// console.log("true && false → <resultado>", b && b1)

// let c = false
// let c1 = true
// console.log("false && true → <resultado>", c && c1)

// let d = false
// let d1 = false
// console.log("false && false → <resultado>", d && d1)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

// let a = true
// let a1 = true
// console.log("true || true → <resultado>", a || a1)

// let b = true
// let b1 = false
// console.log("true || false → <resultado>", b || b1)

// let c = false
// let c1 = true
// console.log("false || true → <resultado>", c || c1)

// let d = false
// let d1 = false
// console.log("false || false → <resultado>", d || d1)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

// let sistemaAtivo = true
// let modoManutencao = !sistemaAtivo
// let lugarVago = false
// let lugarOcupado = !lugarVago
// console.log(`sistemaAtivo : ${sistemaAtivo} | modoManutencao : ${modoManutencao} | lugarVago : ${lugarVago} | lugarOcupado : ${lugarOcupado}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

let keyboard = require("readline-sync")

// let usuario = {
//     altura: keyboard.questionFloat("me fale sua altura :"),
//     peso: keyboard.questionFloat("me fale seu peso :"),
// }

// usuario.imc = usuario.peso / (usuario.altura ** 2);

// let imcAbaixoDoPeso = usuario.imc < 18.5;
// let imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9;
// let imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9;

// console.log(`Seu imc é: ${usuario.imc.toFixed(2)}`);
// console.log(`Esta abaixo do peso? ${imcAbaixoDoPeso}`);
// console.log(`Esta com peso normal? ${imcNormal}`);
// console.log(`Esta acima do peso? ${imcAcimaDoPeso}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

// let notaFinal = 4.8
// let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6
// let reprovado = notaFinal < 4
// let precisaDeAjuda = precisaRecuperacao || reprovado
// console.log(`nota final : ${notaFinal} | precisa de recuperacao : ${precisaRecuperacao} | reprovado : ${reprovado} | precisa de ajuda : ${precisaDeAjuda}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

// let temperatura = 38.2
// let diagnostico = temperatura >= 37.6 ? "Febre detectada" : "Temperatura normal"; //operador ternario
// console.log(`A temperatura registrada é ${temperatura} | Resultado: ${diagnostico}.`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:

// let velocidade = 110
// let limiteVelocidade = 100
// let statusMulta =  velocidade > limiteVelocidade ? "multa aplicada" : "velocidade regular"
// console.log(`valocidade : ${velocidade} | limite de velocidade : ${limiteVelocidade} | status dad multa : ${statusMulta}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

// let ehEstudante = keyboard.keyInYN("voce é bolista :")
// let curso = keyboard.keyInYN("voce paga mais de R$ 1000,00, mensais pelo curso?")
// let mensagem = ehEstudante && curso ? "desconto aplicado" : "desconto nao aplicado"
// console.log(`voce e bolista : ${ehEstudante ? "sim" : "nao"} | paga mais que R$ 1000,00 mensais pelo curso : ${curso ? "sim" : "nao"} | ganha desconto? : ${mensagem}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:


// let usuario = {
//     idade: keyboard.questionInt("Digite sua idade: "),
//     ingresso: keyboard.keyInYN("Tem ingresso? "),
//     associado: keyboard.keyInYN("Associado ao clube? ")
// };

// let entrada = {
//     podeEntrarNormal: (usuario.idade >= 18 && usuario.ingresso) || usuario.associado,
//     podeEntrarSocio: usuario.ingresso && usuario.associado, precisaAcompanhante: usuario.idade < 18,
//     naoPodeEntrar: !usuario.ingresso && !usuario.associado
// };

// console.log(`Pode entrar normal: ${entrada.podeEntrarNormal}`);
// console.log(`Pode entrar como sócio: ${entrada.podeEntrarSocio}`);
// console.log(`Precisa de acompanhante? ${entrada.precisaAcompanhante}`);
// console.log(`Não pode entrar de jeito nenhum? ${entrada.naoPodeEntrar}`);

// let mensagemFinal = entrada.podeEntrarNormal || entrada.podeEntrarSocio ? "Entrada liberada!" : "Entrada negada.";

// console.log(mensagemFinal);


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

// const nome = keyboard.question("Digite o nome do produto: ");
// const quantidade = keyboard.questionInt("Digite a quantidade em estoque: ");
// const ativo = keyboard.keyInYN("O produto esta ativo no sistema? ");


// const produto = {
//     nome: nome,
//     estoque: quantidade,
//     statusAtivo: ativo
// };


// const temEstoque = produto.estoque > 0;
// const produtoDisponivel = temEstoque && produto.statusAtivo;
// const produtoIndisponivel = !temEstoque || !produto.statusAtivo;


// console.log(`Produto: ${produto.nome} | Quantidade: ${produto.estoque} | Esta ativo? ${produto.statusAtivo ? "Sim" : "Não"} | Tem estoque? ${temEstoque} | Produto disponível para venda? ${produtoDisponivel} | Produto indisponível? ${produtoIndisponivel}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

// let admin =  keyboard.keyInYN("Voce e administrador? ");
// let logado =  keyboard.keyInYN("Voce esta logado no sistema? ");
// let ativa =  keyboard.keyInYN("Sua conta esta ativa? ");

// let usuario = {
//     admin,
//     logado,
//     ativa
// }

// let acessoSistema = usuario.logado && usuario.ativa;
// let acessoAdmin = acessoSistema && usuario.admin;
// let acessoNegado = !usuario.logado || !usuario.ativa;

// console.log(`Status Logado: ${usuario.logado ? "Sim" : "Não"} | Conta Ativa: ${usuario.ativa ? "Sim" : "Não"} | Administrador: ${usuario.admin ? "Sim" : "Não"} | Pode acessar o sistema? ${acessoSistema} | Tem privilégios de Admin? ${acessoAdmin} | Acesso foi negado? ${acessoNegado}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

// let credenciaisSistema = {
//     usuario: "admin",
//     senha: "1234"
// };

// let usuarioDigitado = keyboard.question("Usuario: ");
// let senhaDigitada = keyboard.question("Senha: ");

// let usuarioCorreto = usuarioDigitado === credenciaisSistema.usuario;
// let senhaCorreta = senhaDigitada === credenciaisSistema.senha;
// let loginValido = usuarioCorreto && senhaCorreta;

// console.log(loginValido ? "Login realizado com sucesso!" : "Usuario ou senha incorretos.");





console.log("_______________________________");