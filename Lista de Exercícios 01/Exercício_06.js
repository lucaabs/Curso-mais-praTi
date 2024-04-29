const prompt = require('prompt-sync')()
console.log('Ferramenta para construir e classificar um triângulo')

console.log('Insira três lados para um triângulo')

let lA = parseFloat(prompt('Lado A: '))
let lB = parseFloat(prompt('Lado B: '))
let lC = parseFloat(prompt('Lado C: '))

if((lA<lB+lC)&(lB<lA+lC)&(lC<lA+lB)){
    if(lA==lB & lB==lC){
        console.log('Esse é um triângulo eqüilátero')
    }
    else{
        if(lA==lB | lB==lC | lC==lA){   
            console.log('Esse é um triângulo isósceles')
    }
    else{
        console.log('Esse é um triângulo escaleno')
    }
    }
}
else{
    console.log('Esses lados não podem formar um triângulo')
}
