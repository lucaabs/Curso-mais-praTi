const prompt = require('prompt-sync')()

let num = parseInt(prompt('Escreva um número inteiro para imprimí-lo 10 vezes: '))
cont = 1


do{
    console.log(num)
    cont = cont +1
}  while (cont<=10)

