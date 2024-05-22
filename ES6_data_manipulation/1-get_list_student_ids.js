export default function getListStudentIds(listStudent) {
  if (!Array.isArray(listStudent)) {
    return [];
  }
  const IDs = listStudent.map((student) => student.id);
  return IDs;
}
