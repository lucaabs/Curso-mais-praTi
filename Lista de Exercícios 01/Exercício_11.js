const prompt = require('prompt-sync')()

let num = parseInt(prompt('Escreva um número inteiro para saber sua paridade: '))

while(num>0) {           //garante a repetição até aparecer um número 0 ou negativo
    if ((num % 2)==0){
        console.log('O número',num,'é par.')
    }
    else{console.log('O número',num,'é ímpar.')}

    num = parseInt(prompt('Escreva um número para saber sua paridade: '))
    
}

console.log('O número',num,'é inválido pois é igual a 0 ou é negativo.')