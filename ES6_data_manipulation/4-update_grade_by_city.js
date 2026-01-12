export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtrados = students.filter((student) => student.location === city);

  return filtrados.map((student) => {
    let calificacionEncontrada = null;

    for (let i = 0; i < newGrades.length; i += 1) {
      if (newGrades[i].studentId === student.id) {
        calificacionEncontrada = newGrades[i];
        break;
      }
    }

    if (calificacionEncontrada !== null) {
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: calificacionEncontrada.grade,
      };
    }
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: 'N/A',
    };
  });
}
