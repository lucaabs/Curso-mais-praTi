const prompt = require('prompt-sync')()
console.log('Insira 5 números inteiros para obter as suas tabuadas até os seus quadrados (N×N): ')

let j=1

while(j<=5){
    
   let N = parseInt(prompt(j+'º Número: '))
console.log('A tabuada do número',N,'até',N+'×'+N,'é: ')

for(let i=1;i<=N;i++) {
    console.log(N,'×',i,'=',N*i)
}
j=j+1
}
