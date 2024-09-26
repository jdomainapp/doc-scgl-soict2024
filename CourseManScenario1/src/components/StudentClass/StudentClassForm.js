import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { generateId } from "../../utils/generateId";

function StudentClassForm({ addClass }) {
    const [className, setClassName] = useState("");
    const [students, setStudents] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const classId = generateId(6); // Auto-generate 6-character ID

        if (!className || className.length > 20) {
            alert(
                "Class name is required and should not exceed 20 characters."
            );
            return;
        }

        const studentList = students.split(",").map((s) => s.trim());
        if (studentList.length < 1 || studentList.length > 25) {
            alert("A class must have between 1 and 25 students.");
            return;
        }

        addClass({
            classId,
            className,
            students: studentList,
        });

        setClassName("");
        setStudents("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Class Name:"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />
            <InputField
                label="Students (comma-separated IDs):"
                type="text"
                value={students}
                onChange={(e) => setStudents(e.target.value)}
            />
            <Button text="Add Class" />
        </form>
    );
}

export default StudentClassForm;
