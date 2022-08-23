class School {
  constructor(schoolName) {
    this.schoolName = schoolName;
  }
  get yourSchoolName() {
    return "your school name" + this.schoolName;
  }
}
class Section extends School {
  constructor(schoolName, sectionName) {
    super(schoolName);
    this.sectionName = sectionName;
  }
  get yourSectionName() {
    return "your section" + this.sectionName;
  }
}
class Student {
  static count = 0;
  constructor(schoolName, sectionName, FirstName, LastName) {
    super(schoolName, sectionName);
    this.FirstName = FirstName;
    this.LastName = LastName;
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
