let num1 = 0
let num2 = 0
let i = 0
let contador = 0

while(i < 10){
    console.log("***********************************")
    num1 = parseInt(Math.random() * (6) + 1)
            console.log("Dado 1: " + num1)
    num2 = parseInt(Math.random() * (6) + 1)
            console.log("Dado 2: " + num2)
    let total = num1 + num2
    
    console.log("***********************************")
    if((num1 + num2)%2==0){
        console.log("Total da soma: " + total + " Número Par")
        i++
    }else{
        console.log("Total da soma: " + total + " Número Impar")
    }
    contador++
}
console.log("***********************************")
console.log("Foram necessárias " + contador + " Iterações para chegar ao fim do programa")