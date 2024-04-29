const prompt = require('prompt-sync')()

console.log('Cálculo de Percentuais Eleitorais')

let nT = parseInt(prompt('Insira número total de eleitores no município: '))
let nB = parseInt(prompt('Número de votos brancos: '))
let nN = parseInt(prompt('Número de votos nulos: '))
let nV = parseInt(prompt('Número de votos válidos: '))

console.log('O percentual de votos brancos foi de', nB/nT * 100,'%')
console.log('O percentual de votos nulos foi de', nN/nT * 100,'%')
console.log('O percentual de votos válidos foi de', nV/nT * 100,'%')
