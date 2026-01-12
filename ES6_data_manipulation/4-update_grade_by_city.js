export default function updateStudentGradeByCity(students, city, newGrades) {
  let filtrados = students.filter((student) => {
    if (student.location === city) {
      return student;
    }
  });

  filtrados = filtrados.map((student) => {
    let calificacionEncontrada = null;

    for (let i = 0; i < newGrades.length; i++) {
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

  return filtrados;
}
