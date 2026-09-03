// Adicionado 'const' e padronizado para tudo minúsculo
const perfilusuario = {
    nome: "Guilherme",
    idade: 19,
    email: "teste123@gmail.com",
    enderecos: ["Rua aleatória, Marcos freire, 850"],
    contaAtiva: true
}
console.log(perfilusuario)


perfilusuario.enderecos.push("Rua do Sol, 245")
console.log( perfilusuario)


perfilusuario.idade = 18
console.log(perfilusuario)


perfilusuario.cidade = "Jaboatão dos Guararapes"
perfilusuario.estado = "Pernambuco"

console.log(perfilusuario)
