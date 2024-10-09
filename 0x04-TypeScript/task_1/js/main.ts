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
