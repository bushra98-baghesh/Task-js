class School {
  constructor(schoolName, sectionName) {
    this.schoolName = schoolName;
    this.sectionName = sectionName;
  }
  get yourSchoolName() {
    return "your school name" + this.schoolName;
  }
}
class Section {
  constructor(studentFirstName, studentLastName) {
    this.School = new School();
    this.studentFirstName = studentFirstName;
    this.studentLastName = studentLastName;
  }
  get yourSectionName() {
    return "your section" + this.sectionName;
  }
}
class Student {
  static count = 0;
  constructor(schoolName, sectionName, studentFirstName, studentLastName) {
    this.Section = new Section(
      schoolName,
      sectionName,
      studentFirstName,
      studentLastName
    );
    Student.count++;
  }
  sayHello() {
    return "hello" + " " + this.FirstName + " " + this.LastName;
  }
  static countStudents = function () {
    return this.count + " " + " students";
  };
}

let student1 = new Student("ali", "mhd");
console.log(student1);
console.log(Student.countStudents());
