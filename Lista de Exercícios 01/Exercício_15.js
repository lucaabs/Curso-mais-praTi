const prompt = require('prompt-sync')()

console.log('Calculadora de Média Ponderada de um conjunto de números diferentes de zero')
console.log('Ao inserir "0" finaliza-se a coleta de dados e a média ponderada é calculada')
let j = 1
let N = parseFloat(prompt('Insira o '+j+'º Número: '))
let P = parseFloat(prompt('Qual é o peso? '))
let soma = 0
let somaP = 0

while(N !== 0){
soma = soma + N*P
somaP = somaP + P
j = j+1
N = parseFloat(prompt('Insira o '+j+'º Número: '))
if (N!=0){ //Eu sei que na instrução do exercício pede para apenas utilizarmos o while, mas nesse caso eu adicionei o if pois se o N for 0 o comando ja termina sem pedir o peso
    P = parseFloat(prompt('Qual é o peso? '))
}

}

mediaP=soma/somaP

console.log('A média ponderada do conjunto de',j-1,'valores é:',mediaP)




