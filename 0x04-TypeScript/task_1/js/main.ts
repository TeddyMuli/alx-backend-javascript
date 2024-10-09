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

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
