import React, { useState, useEffect } from "react";

function EnrolmentList() {
    const [enrolments, setEnrolments] = useState([]);

    useEffect(() => {
        // Fetch enrolment data from API
        setEnrolments([
            {
                id: 1,
                student: "John Doe",
                courseModule: "CS101",
                finalGrade: "A",
            },
            {
                id: 2,
                student: "Jane Smith",
                courseModule: "CS102",
                finalGrade: "B+",
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Enrolment List</h2>
            <ul>
                {enrolments.map((enrolment) => (
                    <li
                        key={
                            enrolment.id
                        }>{`${enrolment.student} - ${enrolment.courseModule} - ${enrolment.finalGrade}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default EnrolmentList;
