export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    return list.reduce((acc, current) => acc + current.id, 0);
  }
  return [];
}
