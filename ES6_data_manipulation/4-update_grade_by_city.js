export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentLocation = listStudents.filter((student) => student.location === city);
  const updatedStudents = studentLocation.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });
  return updatedStudents;
}
