console.log('Os números entre 1000 e 1999 que divididos por 11 dão resto igual a 5 são: ')

let num = 1000

while(num<2000) {
    if(num%11==5){
        console.log(num)
    }
    num=num+1
}