export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  const studentLocation = listStudents.filter((student) => student.location === city);
  return studentLocation;
}
