class School {
  constructor(schoolName) {
    this.schoolName = schoolName;
  }
  nameofschool() {
    return this.schoolName;
  }
}
class Section {
  constructor(sectionNumber) {
    this.sectionNumber = sectionNumber;
  }
  numberofsections() {
    return this.sectionNumber;
  }
}
class Student {
  static count = 0;
  constructor(studentFirstName, studentLastName, schoolName, sectionNumber) {
    this.studentFirstName = studentFirstName;
    this.studentLastName = studentLastName;
    this.school = schoolName.nameofschool();
    this.section = sectionNumber.numberofsections();
    Student.count++;
  }
  describe() {
    console.log(
      " student name:" +
        this.studentFirstName +
        " \n student last name:" +
        this.studentLastName +
        "\n school name:" +
        this.school +
        "\n section Number : " +
        this.section
    );
  }
}
let schools= [new School("art"), new School("programming"), new School("archeticture")];
let sections= [new Section("1"), new Section("2"),new Section("3")];
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
console.log(Student.count);
