class School {
  constructor(schoolName, address, specification) {
    this.schoolName = schoolName;
    this.address = address;
    this.specification = specification;
    this.studentsCount = 0;
    this.students = [];
    this.sections = [];
    this.sectionWithStudents = [];
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
    this.students = [];
  }
  numberofsections() {
    return this.sectionNumber;
  }
}
class Student {
  constructor(studentFirstName, studentLastName, school, section) {
    this.section = section;
    if (this.section.studentsLimit > this.section.studentsCount) {
      this.section.studentsCount += 1;
      this.section.students.push(this);
      this.studentFirstName = studentFirstName;
      this.studentLastName = studentLastName;
      this.school = school;
      this.school.studentsCount += 1;
      school.students.push(this);
      if (!school.sections.includes(section)) school.sections.push(section);
      school.sectionWithStudents.push(section);
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
  new Student("yara", "mhd", schools[0], sections[1]),
];
function getStudent(students) {
  for (let student of students) {
    student.describe();
  }
}
getStudent(students);
console.log(schools[0].students);
console.log(schools[0].sections);
console.log(schools[0].sectionWithStudents);
