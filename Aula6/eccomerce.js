//Frete Eccomerce

const input = require("readline-sync")
var compra = parseFloat(input.question("Qual é o valor total da sua compra?: "))
var regiao = input.question("Qual é a sua região? (SE, S, NE, N, CO(Centro-Oeste)): ")
var frete = 0


if (compra <= 150 && regiao == "SE") {
    frete = 15
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
} else if (compra >= 200 && regiao == "S") {
    frete = 20
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
} else if (compra >= 250 && regiao == "NE") {
    frete = 25
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
} else if (compra >= 300 && regiao == "N") {
    frete = 35
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
} else if (compra >= 300 && regiao == "CO") {
    frete = 35
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
} else {
    console.log("O valor da sua compra é", compra, "e o valor do frete é", frete)
}        










