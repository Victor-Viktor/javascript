function* pergunta(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é '+ nome + ', Seu esporte favorito é ' + esporte
}

const itp=pergunta()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)