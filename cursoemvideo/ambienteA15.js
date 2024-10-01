let num = [5, 8, 2, 9, 3]
/*num.push(1) // Adiciona o valor 1 no final do array
num.sort() //Coloca o vetor em ordem cescente 
console.log(num)
console.log(`O vetoe tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`O valor do elemento na posição ${pos} é ${num[pos]}`)
}*/
for(let pos in num){
    console.log(`O valor do elemento na posição ${pos} é ${num[pos]}`)
}