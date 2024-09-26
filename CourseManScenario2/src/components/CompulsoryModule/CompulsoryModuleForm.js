import React, { useState } from "react";

function CompulsoryModuleForm() {
    const [compulsoryModule, setCompulsoryModule] = useState({
        id: "",
        code: "",
        name: "",
        department: "",
        enrolments: "",
        minMark: "",
        passMark: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompulsoryModule((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(compulsoryModule);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={compulsoryModule.id}
                onChange={handleChange}
            />

            <label>Course Code:</label>
            <input
                type="text"
                name="code"
                value={compulsoryModule.code}
                onChange={handleChange}
            />

            <label>Course Name:</label>
            <input
                type="text"
                name="name"
                value={compulsoryModule.name}
                onChange={handleChange}
            />

            <label>Department:</label>
            <input
                type="text"
                name="department"
                value={compulsoryModule.department}
                onChange={handleChange}
            />

            <label>Enrolments:</label>
            <input
                type="text"
                name="enrolments"
                value={compulsoryModule.enrolments}
                onChange={handleChange}
            />

            <label>Minimum Mark:</label>
            <input
                type="number"
                name="minMark"
                value={compulsoryModule.minMark}
                onChange={handleChange}
            />

            <label>Pass Mark:</label>
            <input
                type="number"
                name="passMark"
                value={compulsoryModule.passMark}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default CompulsoryModuleForm;
