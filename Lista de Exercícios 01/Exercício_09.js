const prompt = require('prompt-sync')()

n1 = parseInt(prompt('Escreva o código de origem do produto para saber a região: '))
let regiao = 'out'

if(n1==1) {regiao = 'Sul'}
if(n1==2) {regiao = 'Norte'}
if(n1==3) {regiao = 'Leste'}
if(n1==4) {regiao = 'Oeste'}
if(n1>=5 && n1<=6) {regiao = 'Nordeste'}
if(n1>=10 && n1<=20) {regiao = 'Centro-Oeste'}
if(n1>=25 && n1<=50) {regiao = 'Nordeste'}


if (regiao == 'out'){
    console.log('O produto é Importado')
}
else{
    console.log('O produto é da região',regiao)
}
