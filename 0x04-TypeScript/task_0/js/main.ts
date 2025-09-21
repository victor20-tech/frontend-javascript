interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create the first student object
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

// Create table and tbody elements
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append tbody to the table
table.appendChild(tbody);

// Loop through the studentsList and create a row for each student
studentsList.forEach((student) => {
  // Create a new row
  const row = document.createElement('tr');
  
  // Create a cell for the first name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  // Create a cell for the location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Append the row to the tbody
  tbody.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);