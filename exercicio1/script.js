//Parte 1
let nome 
let idade 
console.log(typeof nome)
console.log(typeof idade)

//como eu não declarei nenhum valor para as minhas variáveis o resultado foi indefinido (undefined).

nome = prompt("Qual seu nome?")
idade = Number(prompt("Qual sua idade?"))
console.log(typeof nome)
console.log(typeof idade)
//o resultado foi como string pros dois, precisa converter a variavel idade para número.
console.log("Olá," , nome, "você tem", idade, "anos.")

//Parte 2
let temPet = prompt("Você tem pet?")
let temVideogames = prompt("Você tem videogame?")
let pao = prompt("Você gosta de pão?")

console.log(temPet)
console.log(temVideogames)
console.log(pao)

let respostaA = prompt(temPet)
let respostaB = prompt(temVideogames)
let respostaC = prompt(pao)

console.log(respostaA, respostaB, respostaC)
console.log(`
${temPet} - ${respostaA}
${temVideogames} - ${respostaB}
${pao} - ${respostaC}`
)

