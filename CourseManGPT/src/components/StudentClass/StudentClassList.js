import React, { useState, useEffect } from "react";

function StudentClassList() {
    const [studentClasses, setStudentClasses] = useState([]);

    useEffect(() => {
        // Fetch student class data from API
        setStudentClasses([
            {
                id: 1,
                name: "CS Freshman",
                year: 2024,
                students: ["John Doe", "Jane Smith"],
            },
            {
                id: 2,
                name: "CS Sophomore",
                year: 2023,
                students: ["Emily Johnson", "Michael Brown"],
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Student Class List</h2>
            <ul>
                {studentClasses.map((studentClass) => (
                    <li key={studentClass.id}>{`${studentClass.name} - ${
                        studentClass.year
                    } - Students: ${studentClass.students.join(", ")}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentClassList;
