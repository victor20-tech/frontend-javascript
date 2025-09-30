// String literal type
type Subjects = 'Math' | 'History';

function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}


interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

type Employee = Director | Teacher;

function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}


export function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}


function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Testing for Type Predicates and Union Types
console.log("Testing with a salary of 200 (should be a Teacher):");
console.log(executeWork(createEmployee(200)));

console.log("\nTesting with a salary of 1000 (should be a Director):");
console.log(executeWork(createEmployee(1000)));

// Testing for String Literal Type
console.log("\nTesting teachClass with 'Math':");
console.log(teachClass('Math'));

console.log("\nTesting teachClass with 'History':");
console.log(teachClass('History'));
