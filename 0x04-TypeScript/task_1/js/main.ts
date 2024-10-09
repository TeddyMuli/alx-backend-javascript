interface Teacher {
  readonly firstName: string,
  readonly fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  lastName: string,
  location: string,
  contract: boolean,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  firstName: string,
  lastName: string,
}

function printTeacher(teacher: printTeacherFunction) {
  return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`
}
