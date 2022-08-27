class School {
  constructor(schoolName, address, specification) {
    this.schoolName = schoolName;
    this.address = address;
    this.specification = specification;
    this.studentsCount = 0;
  }
  nameofschool() {
    return this.schoolName;
  }
}
class Section {
  constructor(school, sectionNumber, studentsLimit) {
    this.school = school;
    this.sectionNumber = sectionNumber;
    this.studentsLimit = studentsLimit;
    this.studentsCount = 0;
  }
  numberofsections() {
    return this.sectionNumber;
  }
}
class Student {
  static studentsCount = 0;
  constructor(studentFirstName, studentLastName, school, section) {
    this.section = section;
    if (this.section.studentsLimit > this.section.studentsCount) {
      this.section.studentsCount += 1;
      this.studentFirstName = studentFirstName;
      this.studentLastName = studentLastName;
      this.school = school;
      Student.studentsCount += 1;
    }
  }
  describe() {
    console.log(
      " student name:" +
        this.studentFirstName +
        " \n student last name:" +
        this.studentLastName +
        "\n school name:" +
        this.school.schoolName +
        "\n section Number : " +
        this.section.sectionNumber
    );
  }
}
let schools = [
  new School("art", "bla bla", "bla,bla"),
  new School("programming", "bla bla", "bla,bla"),
  new School("archeticture", "bla bla", "bla,bla"),
];
let sections = [
  new Section(schools[0], "1", 3),
  new Section(schools[1], "2", 3),
  new Section(schools[2], "3", 3),
];
let students = [
  new Student("ali", "mhd", schools[0], sections[2]),
  new Student("sameh", "mhd", schools[1], sections[1]),
  new Student("samer", "mhd", schools[2], sections[0]),
  new Student("yara", "mhd", schools[0], sections[2]),
];
function getStudent(students) {
  for (let student of students) {
    student.describe();
  }
}
getStudent(students);
console.log(Student.studentsCount);
