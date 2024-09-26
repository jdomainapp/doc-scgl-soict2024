import React, { useState } from "react";

function CourseModuleForm() {
    const [courseModule, setCourseModule] = useState({
        id: "",
        code: "",
        name: "",
        department: "",
        enrolments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseModule((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(courseModule);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={courseModule.id}
                onChange={handleChange}
            />

            <label>Course Code:</label>
            <input
                type="text"
                name="code"
                value={courseModule.code}
                onChange={handleChange}
            />

            <label>Course Name:</label>
            <input
                type="text"
                name="name"
                value={courseModule.name}
                onChange={handleChange}
            />

            <label>Department:</label>
            <input
                type="text"
                name="department"
                value={courseModule.department}
                onChange={handleChange}
            />

            <label>Enrolments:</label>
            <input
                type="text"
                name="enrolments"
                value={courseModule.enrolments}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default CourseModuleForm;
