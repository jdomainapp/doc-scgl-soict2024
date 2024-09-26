import React from "react";

function StudentClassList({ classes }) {
    return (
        <div>
            <h3>Classes</h3>
            <ul>
                {classes.map((studentClass, index) => (
                    <li key={index}>
                        {studentClass.className} -{" "}
                        {studentClass.classDescription}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentClassList;
