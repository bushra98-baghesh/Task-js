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
    this.school = new School(schoolName);
    this.section = new Section(sectionNumber);
    Student.count++;
  }
  describe() {
    console.log(
      " student name:" +
        this.studentFirstName +
        " \n student last name:" +
        this.studentLastName +
        "\n school name:" +
        this.school.nameofschool() +
        "\n section Number : " +
        this.section.numberofsections()
    );
  }
}

let students = [
  new Student("ali", "mhd", "art", "3"),
  new Student("sameh", "mhd", "programming", "2"),
  new Student("samer", "mhd", "archeticture", "1"),
  new Student("yara", "mhd", "art", "3"),
];
function getStudent(students) {
  for (let student of students) {
    student.describe();
  }
}
getStudent(students);
console.log(Student.count);
