import React from "react";

function EnrolmentList({ enrolments }) {
    return (
        <div>
            <h3>Enrolments</h3>
            <ul>
                {enrolments.map((enrolment, index) => (
                    <li key={index}>
                        {enrolment.studentName} - {enrolment.courseName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EnrolmentList;
