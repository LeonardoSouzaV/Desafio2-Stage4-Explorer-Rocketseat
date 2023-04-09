const students = [
  {
    name: "Ricardinho",
    firstNote: 9,
    secondNote: 8,
  },
  {
    name: "Rodolfinho",
    firstNote: 4,
    secondNote: 3,
  },
  {
    name: "Marianinha",
    firstNote: 3,
    secondNote: 10,
  },
  {
    name: "Annie",
    firstNote: 4,
    secondNote: 10,
  },
]

function finalNote(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2).toFixed(2)
}

function studentAverage(student) {
  if (finalNote(student.firstNote, student.secondNote) >= 7) {
    return `A média do(a) aluno(a) ${student.name} foi de ${finalNote(
      student.firstNote,
      student.secondNote
    )} \n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `A média do(a) aluno(a) ${student.name} foi de ${finalNote(
      student.firstNote,
      student.secondNote
    )} \n Não foi dessa vez ${student.name}! Tente novamente`
  }
}

for (let student of students) {
  let studentMessage = studentAverage(student)
  alert(studentMessage)
}

