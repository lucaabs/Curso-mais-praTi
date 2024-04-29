const prompt = require('prompt-sync')()

console.log('Insira dois números diferentes para ordená-los em ordem crescente')

n1 = parseInt(prompt('Insira o primeiro número: '))
n2 = parseInt(prompt('Insira o segundo número: '))

if(n1==n2){
    console.log('Números iguais não são válidos')
}
else{
    if (n1>n2)
    console.log('Os números em ordem crescente são:',n2,'-->',n1)
    else{
    console.log('Os números em ordem crescente são:',n1,'-->',n2)    
    }
}