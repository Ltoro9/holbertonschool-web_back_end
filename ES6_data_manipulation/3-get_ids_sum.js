export default function getStudentIdsSum(listStudents) {
  const result = listStudents.reduce((suma, student) => suma + student.id, 0);
  return result;
}
