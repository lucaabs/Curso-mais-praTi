console.log('Abaixo temos os 50 primeiros números primos maiores que 100')

let num = 100
let x = 1
let contA = 0
let contB = 0

//primos só tem dois divisores inteiros 1 e ele mesmo. Com o contA eu conto quantos divisores haverão para cada número, caso o
//resultado seja exatamente 2, o número é primo, caso contrário não é primo

while(contB < 50){
while(x<=num) {
    let resto = (num % x)
    if(resto == 0){
        contA = contA +1
    }
    x=x+1
}
if (contA == 2){
    console.log(num)
    contB = contB + 1
}
num = num+1
x = 1
contA = 0
}