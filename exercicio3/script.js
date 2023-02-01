//1.
// a) Nome completo
let nomeCompleto = prompt("Qual o seu nome completo?")
// b) Data de nascimento (utilize as / )
let dataDeNascimento = Number(prompt("Qual sua data de nascimento?"))
// c) Endereço
let endereco = prompt("Qual seu endereço?")
// d) CPF
let documento = confirm("Você possui cpf?")
// e) Escolaridade
let escolaridade = prompt("Qual sua escolaridade?")
// f) Possui CHN?
let carteiraDeMotorista = prompt("Você tem carteira de motorista?")
// g) Quantos filhes possui?
let temFilhos = prompt("Você tem filhos?")
// h) Cargo atual
let cargoAtual = prompt("Qual seu cargo atual?")
// i) Salário
let salario = Number(prompt("Qual o seu salário?"))
// j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero
let comissao = prompt("Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
// k) Informe o ano de admissão
let admissao = Number(prompt("Informe o ano de admissão"))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco, typeof documento, typeof escolaridade, typeof carteiraDeMotorista,
typeof temFilhos, typeof cargoAtual, typeof salario, typeof comissao, typeof admissao)

console.log(nomeCompleto, dataDeNascimento, endereco, documento, escolaridade, carteiraDeMotorista, temFilhos, cargoAtual, salario, comissao, admissao)
