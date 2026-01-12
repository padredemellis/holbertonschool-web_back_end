import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location == city);
}
