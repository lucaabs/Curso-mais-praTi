const prompt = require('prompt-sync')()

console.log('Insira 4 números inteiros')

let n1 = parseInt(prompt('Primeiro número: '))
let n2 = parseInt(prompt('Segundo número: '))
let n3 = parseInt(prompt('Terceiro número: '))
let n4 = parseInt(prompt('Quarto número: '))

n4 += n1+n2+n3

console.log('Somando 25 ao primeiro número obtém-se:',n1+25)
console.log('O triplo do segundo número é:',n2*3)
console.log('12% do terceiro número é:',n3*(12/100))
console.log('O quarto inteiro torna-se a soma dos três primeiros números:',n4)