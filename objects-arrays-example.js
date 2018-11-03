const students = ["Paula", "Will", "Bjorn", "Nick"];
const subject = ["HTML", "JS", "CSS", "Node"];
const grades = [6, 9, 10, 5, 8];

function randomElement(someArray){
  // indexOfRandomEl => it's just the random number in the scope from 0 to the length of the array
  var indexOfRandomEl = Math.floor(Math.random() * someArray.length);
  // console.log(indexOfRandomEl);
  // when we pass this indexOfRandomEl insde of square brackets we are actually getting the element that is on that index in the specified array
  return someArray[indexOfRandomEl];
}
randomElement(grades);
var gradeBook = [];
function getGradeBook(){
  var student = randomElement(students);
  var subject = randomElement(subject);
  var grade = randomElement(grade);
  gradeBook.push(student, subject, grades);
  return gradeBook;
}
getGradeBook();