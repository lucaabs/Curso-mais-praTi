const prompt = require('prompt-sync')()

console.log('Conversor de Temperatura em Celsius para Fahrenheit')

let tc = parseFloat(prompt('Insira a temperatura em graus Celsius (°C): '))

let tf = 1.8*tc + 32 //função matemática para essa conversão

console.log('A temperatura',tc,'°C', 'em Fahrenheit é',tf,'°F')