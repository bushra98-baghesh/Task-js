class School {
  constructor(schoolName, address, specification, studentsLimit) {
    this.schoolName = schoolName;
    this.address = address;
    this.specification = specification;
    this.studentsLimit = studentsLimit;
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
    } else {
      console.log("This section has no seats! check anthor section please ");
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
  new School("art", "damascus", "graphic design", 10),
  new School("programming", "halab", "web development", 12),
  new School("archeticture", "homs", "autocad", 12),
];
let sections = [
  new Section(schools[0], "15", 5),
  new Section(schools[1], "2", 6),
  new Section(schools[2], "3", 2),
];
let students = [
  new Student("ali", "mhd", schools[0], sections[2]),
  new Student("alaa", "mhd", schools[1], sections[1]),
  new Student("sameh", "mhd", schools[1], sections[1]),
  new Student("samer", "mhd", schools[2], sections[0]),
  new Student("yara", "mhd", schools[0], sections[2]),
];
function getStudent(students) {
  for (let student of students) {
    student.describe();
  }
}
function getSchoolStudent(students, schools) {
  for (let student of students) {
    if (student.school === schools) {
      student.describe();
    }
  }
}
function getSections(sections, schools) {
  for (let section of sections) {
    if (section.school === schools) {
      console.log(section);
    }
  }
}
function getSectionsStudents(students, sections) {
  for (let student of students) {
    if (student.section === sections) {
      student.describe();
    }
  }
}
getSectionsStudents(students, sections[0]);
//getSections(sections, schools[0]);
///getSchoolStudent(students, schools[0]);
console.log(Student.studentsCount);
