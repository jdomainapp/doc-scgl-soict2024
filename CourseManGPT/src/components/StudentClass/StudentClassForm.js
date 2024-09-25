import React, { useState } from "react";

function StudentClassForm() {
    const [studentClass, setStudentClass] = useState({
        id: "",
        name: "",
        year: "",
        students: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentClass((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(studentClass);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={studentClass.id}
                onChange={handleChange}
            />

            <label>Class Name:</label>
            <input
                type="text"
                name="name"
                value={studentClass.name}
                onChange={handleChange}
            />

            <label>Academic Year:</label>
            <input
                type="number"
                name="year"
                value={studentClass.year}
                onChange={handleChange}
            />

            <label>Students:</label>
            <input
                type="text"
                name="students"
                value={studentClass.students.join(", ")}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default StudentClassForm;
