interface Student {
  firstName: string,
  lastName :string,
  age :number,
  location :string
}

const studentOne: Student = {
  firstName: 'Ted',
  lastName: 'Muli',
  age: 21,
  location: 'Nairobi'
}

const studentTwo: Student = {
  firstName: 'Leon',
  lastName: 'Ngige',
  age: 12,
  location: 'Kiambu'
}

const studentList = [
  studentOne,
  studentTwo
];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach((student: Student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable(studentList);
