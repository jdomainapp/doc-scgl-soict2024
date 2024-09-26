import React from "react";

function StudentList({ students }) {
    return (
        <div>
            <h3>Students</h3>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.studentName} - {student.studentEmail}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
