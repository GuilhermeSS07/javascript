

var escola = {
   aluno: ["Bruno", "Wilson", "Ana"],
   disciplina: ["Lógica", "Programação"],
   nome: "ETE Gil Rodrigues",
   turno: "Noite"
}

escola.aluno.push("Augusto")
escola.disciplina.push("Engenharia")
escola.matricula = true
escola.ano_letivo = 2026
escola.status = "Ativo"
delete escola.turno

console.log(escola)