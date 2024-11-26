const fs = require('fs/promises');

async function countStudents(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        return 'Number of students: 0';
      }

      const headers = lines[0].split(',');
      const rows = lines.slice(1).filter((line) => line.trim() !== '');

      const numberOfStudents = rows.length;
      console.log(`Number of students: ${numberOfStudents}`)
      let result = `Number of students: ${numberOfStudents}\n`;

      const studentData = {};
      rows.forEach((row) => {
        const values = row.split(',');

        const field = values[headers.indexOf('field')];
        const firstName = values[headers.indexOf('firstname')];

        if (field && firstName) {
          if (!studentData[field]) {
            studentData[field] = [];
          }
          studentData[field].push(firstName);
        }
      });

      Object.keys(studentData).forEach((field) => {
        const students = studentData[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
