export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) {
    return list.filter((item) => item.location === city);
  }
  return [];
}
