function calculateGradePoint(marks, subject) {
  let grade = "", point = 0.00;

  if (marks < 33) { grade = "F"; point = 0.00; }
  else if (marks <= 39) { grade = "D"; point = 1.00; }
  else if (marks <= 49) { grade = "C"; point = 2.00; }
  else if (marks <= 59) { grade = "B"; point = 3.00; }
  else if (marks <= 69) { grade = "A-"; point = 3.50; }
  else if (marks <= 79) { grade = "A"; point = 4.00; }
  else if (marks <= 100) { grade = "A+"; point = 5.00; }

  document.getElementById(subject + "-marks").innerHTML = `Your ${subject} Marks is: ${marks}`;
  document.getElementById(subject + "-grade").innerHTML = `Your ${subject} Grade is: ${grade}`;
  document.getElementById(subject + "-grade-point").innerHTML = `Your ${subject} Grade Point is: ${point.toFixed(2)}`;

  return point;
}

function calculateGPA() {
  let english = parseInt(document.getElementById('english').value);
  let bangla = parseInt(document.getElementById('bangla').value);
  let math = parseInt(document.getElementById('math').value);
  let physics = parseInt(document.getElementById('physics').value);
  let chemistry = parseInt(document.getElementById('chemistry').value);

  let english_point = calculateGradePoint(english, "english");
  let bangla_point = calculateGradePoint(bangla, "bangla");
  let math_point = calculateGradePoint(math, "math");
  let physics_point = calculateGradePoint(physics, "physics");
  let chemistry_point = calculateGradePoint(chemistry, "chemistry");

  let gpa;
  if (english_point == 0 || bangla_point == 0 || math_point == 0 || physics_point == 0 || chemistry_point == 0) {
    gpa = 0;
  } else {
    gpa = (english_point + bangla_point + math_point + physics_point + chemistry_point) / 5;
  }

  document.getElementById('gpa').innerHTML = "Your GPA is: " + gpa.toFixed(2);

  let grade = "";
  if (gpa == 5) grade = "A+";
  else if (gpa >= 4) grade = "A";
  else if (gpa >= 3.50) grade = "A-";
  else if (gpa >= 3) grade = "B";
  else if (gpa >= 2) grade = "C";
  else if (gpa >= 1) grade = "D";
  else grade = "F";

  document.getElementById('grade').innerHTML = "Your Grade is: " + grade;
  document.getElementById('comment').innerHTML = gpa == 0 ? "You failed." : "You passed.";
}

