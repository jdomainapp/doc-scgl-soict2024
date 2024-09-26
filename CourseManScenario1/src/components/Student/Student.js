import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Student() {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
        <div>
            <h2>Student Module</h2>
            <StudentForm addStudent={addStudent} />
            <StudentList students={students} />
        </div>
    );
}

export default Student;
