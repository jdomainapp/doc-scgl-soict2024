import React, { useState, useEffect } from "react";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data from API
        setStudents([
            {
                id: 1,
                name: "John Doe",
                gender: "Male",
                email: "john@example.com",
            },
            {
                id: 2,
                name: "Jane Smith",
                gender: "Female",
                email: "jane@example.com",
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li
                        key={
                            student.id
                        }>{`${student.name} - ${student.gender} - ${student.email}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
