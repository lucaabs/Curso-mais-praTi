const prompt = require('prompt-sync')()

let mac = parseInt(prompt('Quantidade de maçãs compradas: '))
let total

if (mac>=12){
    total = mac*0.25
}
else{
    total=mac*0.3
}

console.log('O total da compra foi',total+',00 R$')