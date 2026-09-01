// student profile project

// const student1 = {
//   name: "Aminul",
//   age: 23,
//   isEnrolled: true,
//   courses: ["java", "python", "javascript"],
//   scores: [90, 80, 78],
//   info: ["Aminul", 23, true],
// };

type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
  scores: number[];
  info: [string, number, boolean];
};

const student1: Student = {
  name: "Md. Aminul Islam",
  age: 23,
  isEnrolled: true,
  courses: ["java", "python", "javascript"],
  scores: [70, 50, 90],
  info: ["Snigdha", 5, true],
};

const student2: Student = {
  name: "Lovely",
  age: 36,
  isEnrolled: false,
  courses: ["php", "C++"],
  scores: [70, 80, 60],
  info: ["Lovely", 36, false],
};

// void type
function displayStudent(student: Student): void {
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Courses:", student.courses.join(", "));
}

displayStudent(student1);
displayStudent(student2);
