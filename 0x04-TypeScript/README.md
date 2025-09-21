# 0x04. TypeScript

## 📌 Project Overview
This project is an introduction to **TypeScript**, a typed superset of JavaScript that compiles to plain JavaScript.  
The goal is to understand and apply TypeScript's features to build more robust and readable code.  

By adding an optional static type system, TypeScript helps catch errors early in the development process, reducing the chance of bugs.  

This project covers topics ranging from **basic types and interfaces** to **advanced concepts** like generics, namespaces, and declaration merging. Each task builds upon the previous one, providing hands-on experience with real-world scenarios.

---

## 🎯 Learning Objectives
By the end of this project, you should be able to explain and demonstrate:

- **Basic Types**
  - Working with `string`, `number`, `boolean`, and other primitives.
- **Interfaces, Classes, and Functions**
  - Defining object shapes with interfaces.
  - Creating and extending classes.
  - Typing functions and their signatures.
- **DOM Manipulation**
  - Safely interacting with the DOM using TypeScript.
- **Advanced Types**
  - **Generics**: Creating reusable, type-safe components.
  - **Namespaces**: Organizing code into logical groups.
  - **Declaration Merging**: Extending existing types across files.
  - **Ambient Namespaces**: Importing external JavaScript libraries with `.d.ts` files.
  - **Nominal Typing**: Implementing brand conventions to avoid structural equivalence.

---

## ⚙️ Requirements

### Environment
- Editors: `vi`, `vim`, `emacs`, **Visual Studio Code**
- OS: **Ubuntu 18.04**
- Transpilation: **TypeScript compiler (tsc)**
- Testing: **Jest (v24.9.\*)**

### Code Quality
- All files must end with a **new line**.
- A **README.md** at the root of the project is mandatory.
- Use `.ts` extension for TypeScript files.
- The TypeScript compiler (`tsc`) must show **no warnings or errors** when compiling.

---

## 📂 Project Structure & Tasks
Each task is in its own directory (`task_0/`, `task_1/`, etc.) and includes:
- `package.json`
- `tsconfig.json`
- `webpack.config.js`

### Tasks
- **Task 0:** Creating an interface for a `Student`  
  *Define a Student object structure and render a list of students to the DOM.*

- **Task 1:** Let's build a `Teacher` interface  
  *Explore readonly, optional, and indexable properties.*

- **Task 2:** Extending the `Teacher` class  
  *Create a `Directors` interface that inherits from Teacher.*

- **Task 3:** Printing teachers  
  *Type functions and define a function signature interface.*

- **Task 4:** Writing a class  
  *Build a `StudentClass` with a defined constructor and methods.*

- **Task 5 & 6:** Advanced types and employee functions  
  *Use classes, type guards, and type predicates with `Director` and `Teacher`.*

- **Task 7:** String literal types  
  *Restrict a variable to specific string values.*

- **Task 8:** Ambient Namespaces  
  *Create `.d.ts` declaration files for external libraries.*

- **Task 9 & 10:** Namespace & Declaration merging  
  *Organize code into namespaces and extend interfaces across files.*

- **Task 11:** Brand convention & Nominal typing  
  *Apply branding techniques to achieve nominal typing.*

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
gh repo clone victor20-tech/frontend-javascript

