function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
}

  let student1 = new Student("Борис", "Мужчина", "20");
  let student2 = new Student("Николай", "Мужчина", "25");
  let student3 = new Student("Иван", "Мужчина", "30");
  


Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;

}

Student.prototype.addMark = function (mark) {
if (this.marks === undefined) { 
  this.marks = [mark];
  } else {
    this.marks.push (mark);
  }
}

Student.prototype.addMarks = function (...rest) {
for (let mark of rest) {
  this.addMark(mark);
}
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
    }
   const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length
}


Student.prototype.exclude = function (reason) {
  
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}