const prompt = require('prompt-sync')()

let n1 = parseFloat(prompt('Nota do aluno na 1ª avaliação: '))
let n2 = parseFloat(prompt('Nota do aluno na 2ª avaliação: '))

if((n1+n2)/2>=6) {
    console.log('Sua média foi: ',((n1+n2)/2).toFixed(2))
    console.log('PARABÉNS! Você foi aprovado!')
}
else {
    console.log('Sua média foi: ',((n1+n2)/2).toFixed(2))
    console.log('Você foi REPROVADO! Estude mais')
}
