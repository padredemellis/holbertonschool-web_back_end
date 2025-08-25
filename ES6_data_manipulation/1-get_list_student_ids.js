import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds (listStudents) {
    if (!Array.isArray(listStudents)){
        return [];
    };
    return listStudents.map((student) => student.id);       
}
