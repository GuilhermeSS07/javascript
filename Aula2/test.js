nome = "passageiro"
console.log("passageiro: " )
VEM = 9.0
tarifa = 4.50
gratis = false

saldofinal =    VEM - tarifa

autorizarPassagem = gratis || saldofinal >= tarifa

console.log("Saldo inicial:", VEM)
console.log("Tarifa:", tarifa)
console.log("Gratuidade:", gratis)
console.log("Saldo final:", saldofinal)
console.log("Passagem autorizada:", autorizarPassagem)