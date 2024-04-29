const prompt = require('prompt-sync')()

console.log('Calculadora de Média um conjunto de números diferentes de zero')
console.log('Ao inserir "0" finaliza-se a coleta de dados e a média é calculada')
let j = 1
let N = parseFloat(prompt('Insira o '+j+'º Número: '))
let soma = 0

while(N !== 0){
soma = soma + N
j = j+1
N = parseFloat(prompt('Insira o '+j+'º Número: '))
}

media=soma/(j-1)

console.log('A média do conjunto de',j-1,'valores é:',media)