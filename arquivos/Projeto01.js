let selection = "" 


while(i = selection, i!=6){
    selection = Number(prompt("Digite Um numero entre 1 (D20) e 6 (Sair): "))
    switch(selection){
           
        case 1:
            num = parseInt(Math.random() * (20) + 1)
            console.log(num)
            
            break
        case 2:
            num = parseInt(Math.random() * (12) + 1)
            console.log(num)
           
            break
        case 3:
            num = parseInt(Math.random() * (10) + 1)
            console.log(num)
            
            break
        case 4:
            num = parseInt(Math.random() * (6) + 1)
            console.log(num)
            
            break
        case 5:
            num = parseInt(Math.random() * (4) + 1)
            console.log(num)
            
            break

    }
}
console.log("Fim do programa!")
