
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  manageClass(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  teachClass(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  manageClass(): string {
    return "Managing class";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  teachClass(): string {
    return "Teaching class";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
