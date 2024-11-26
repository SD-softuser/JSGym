# Students Management Example

This JavaScript project provides an example of managing student data in memory using standard coding conventions and error handling practices. It is a part of the `JSGym` repository, designed to demonstrate CRUD (Create, Read, Update, Delete) operations on an array of student objects.

## Features

- **Add New Entry**: Add a new student to the array.
- **Update Entry by ID**: Update the details of a student using their ID.
- **Delete Entry by ID**: Remove a student from the array by their ID.
- **Find Entry by ID**: Retrieve details of a student using their ID.

## Code Overview

The `studentsData` array acts as the in-memory database for student information. Each student object has the following properties:

- `id`: Unique identifier for the student (number)
- `name`: Name of the student (string)
- `age`: Age of the student (number)
- `totalMarks`: Total marks obtained by the student (number)

### Functions

1. **`addNewEntry(student)`**
   - Adds a new student to the `studentsData` array.
   - Prevents duplicate entries based on `id`.
   - Logs success or error messages to the console.

2. **`updateEntryById(id, updatedData)`**
   - Updates the data of an existing student identified by their `id`.
   - Merges new data with existing data using the spread operator.
   - Logs success or error messages to the console.

3. **`deleteEntryById(id)`**
   - Removes a student from the `studentsData` array by their `id`.
   - Logs success or error messages to the console.

4. **`findEntryById(id)`**
   - Finds and logs the details of a student by their `id`.
   - Logs success or error messages to the console.

### Usage Examples

```javascript
// Add a new entry
addNewEntry({ id: 6, name: "Student 6", age: 23, totalMarks: 100 });

// Update an existing entry
updateEntryById(3, { name: "Updated Student 3", totalMarks: 75 });

// Delete an entry
deleteEntryById(2);

// Find an entry
findEntryById(4);
```

## Getting Started

### Prerequisites

- Node.js (optional for running the script outside the browser)
- A code editor (e.g., VS Code)

### Steps to Run

1. Clone the `JSGym` repository:
   ```bash
   git clone https://github.com/yourusername/JSGym.git
   ```
2. Navigate to the directory containing this project.
   ```bash
   cd JSGym/students-management-example
   ```
3. Open the project in your preferred editor.
4. Run the script in the browser console or using Node.js:
   ```bash
   node studentsManagement.js
   ```

## Acknowledgments

This project is a part of the `JSGym` repository aimed at improving JavaScript coding practices and understanding of core concepts.

