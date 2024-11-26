const StudentsData = [
    { id: 1, name: "Student 1", age: 20, totalMarks: 100 },
    { id: 2, name: "Student 2", age: 21, totalMarks: 80 },
    { id: 3, name: "Student 3", age: 22, totalMarks: 70 },
    { id: 4, name: "Student 4", age: 22, totalMarks: 100 },
    { id: 5, name: "Student 5", age: 21, totalMarks: 90 },
];

/**
 * Adds a new student to the StudentsData array.
 * Prevents duplicate entries based on the student ID.
 * @param {Object} student - The student object to be added.
 */
function addStudent(student) {
    try {
        const isDuplicate = StudentsData.some(existingStudent => existingStudent.id === student.id);
        if (isDuplicate) {
            console.error("Error: Duplicate entries are not allowed.");
            return;
        }
        StudentsData.push(student);
        console.log("New student added successfully!");
        console.table(StudentsData);
    } catch (error) {
        console.error("Error adding student:", error);
    }
}

/**
 * Updates an existing student entry by their ID.
 * @param {number} id - The ID of the student to be updated.
 * @param {Object} updatedData - The data to update the student with.
 */
function updateStudentById(id, updatedData) {
    try {
        const studentIndex = StudentsData.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            console.error(`Error: No student found with ID ${id}.`);
            return;
        }
        StudentsData[studentIndex] = { ...StudentsData[studentIndex], ...updatedData };
        console.log(`Student with ID ${id} updated successfully!`);
        console.table(StudentsData);
    } catch (error) {
        console.error("Error updating student:", error);
    }
}

/**
 * Deletes a student entry by their ID.
 * @param {number} id - The ID of the student to be deleted.
 */
function deleteStudentById(id) {
    try {
        const studentIndex = StudentsData.findIndex(student => student.id === id);
        if (studentIndex === -1) {
            console.error(`Error: No student found with ID ${id}.`);
            return;
        }
        StudentsData.splice(studentIndex, 1);
        console.log(`Student with ID ${id} deleted successfully!`);
        console.table(StudentsData);
    } catch (error) {
        console.error("Error deleting student:", error);
    }
}

/**
 * Finds and logs a student entry by their ID.
 * @param {number} id - The ID of the student to be found.
 */
function findStudentById(id) {
    try {
        const student = StudentsData.find(student => student.id === id);
        if (!student) {
            console.error(`Error: No student found with ID ${id}.`);
            return;
        }
        console.log("Student found:");
        console.table(student);
    } catch (error) {
        console.error("Error finding student:", error);
    }
}

// Usage Examples
addStudent({ id: 6, name: "Student 6", age: 23, totalMarks: 100 }); // Add a new student
updateStudentById(3, { name: "Updated Student 3", totalMarks: 75 }); // Update student by ID
deleteStudentById(2);                                                // Delete student by ID
findStudentById(4);                                                  // Find student by ID
