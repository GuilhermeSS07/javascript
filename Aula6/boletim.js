const input = require("readline-sync")

var nota = input.questionFloat("Digite sua primeira nota : ");
var nota2 = input.questionFloat("Digite sua segunda nota : ");
var nota3 = input.questionFloat("Digite sua terceira nota : ");
var frequencia = input.questionFloat("Digite sua frequência (de 0 a 100): ");
var PI = input.questionFloat("Digite a nota do PI: ");
var media = (nota + nota2 + nota3) / 3;

if (media>=7 && frequencia >= 75 && PI >= 7){
  console.log("Você está aprovado ");

}else if (media>=7 && frequencia < 75 && PI < 7){
  console.log("Você está reprovado com frequência menor que 75, e não entregou o pi");

}else if (media < 7 && frequencia < 75 && PI < 7){
  console.log("Você está em conselho de classe, e não entregou o pi e a média menor que 7 e a frequência é menor que 75");

}else{
  console.log("Fale com o professor");
}
