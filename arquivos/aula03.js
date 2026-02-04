"use strict"

function teste(){
    let nome="Bruno" // Let permite que a variavel seja usada apenas dentro do escopo onde foi criada
    if(true){        
        console.log("Dentro do IF do teste teste: " + nome)
    }
    nome="Victor"
    console.log("Dentro do teste: " + nome)
    nome=10
    console.log("Dentro do teste 2: " + nome)
}

teste()

const curso="JavaScript"
curso="HTML" //Não se pode alterar o valor de uma constante
console.log(curso)

console.log("Fora do teste: " + nome)