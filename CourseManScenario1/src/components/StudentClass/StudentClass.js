import React, { useState } from "react";
import StudentClassForm from "./StudentClassForm";
import StudentClassList from "./StudentClassList";

function StudentClass() {
    const [classes, setClasses] = useState([]);

    const addClass = (studentClass) => {
        setClasses([...classes, studentClass]);
    };

    return (
        <div>
            <h2>Student Class Module</h2>
            <StudentClassForm addClass={addClass} />
            <StudentClassList classes={classes} />
        </div>
    );
}

export default StudentClass;
