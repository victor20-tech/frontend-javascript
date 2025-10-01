/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    public teacher: Teacher | undefined;
    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
