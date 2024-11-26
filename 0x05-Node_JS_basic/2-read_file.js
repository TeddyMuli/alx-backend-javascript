const fs = require('fs')

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8").trim()
    const lines = data.split('\n')

    if (lines.length <= 1) {
      console.log("Number of students: 0");
      return;
    }

    const headers = lines[0].split(',');
    const rows = lines.slice(1).filter((line) => line.trim != '');

    const numberOfStudents = rows.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const studentData = {}
    rows.forEach((row) => {
      const values = row.split(",");

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
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    })
  } catch (error) {
    throw new Error("Cannot load the database")
  }
}

module.exports = countStudents;
