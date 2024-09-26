import React, { useState } from "react";

function ElectiveModuleForm() {
    const [electiveModule, setElectiveModule] = useState({
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
        setElectiveModule((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(electiveModule);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={electiveModule.id}
                onChange={handleChange}
            />

            <label>Course Code:</label>
            <input
                type="text"
                name="code"
                value={electiveModule.code}
                onChange={handleChange}
            />

            <label>Course Name:</label>
            <input
                type="text"
                name="name"
                value={electiveModule.name}
                onChange={handleChange}
            />

            <label>Department:</label>
            <input
                type="text"
                name="department"
                value={electiveModule.department}
                onChange={handleChange}
            />

            <label>Enrolments:</label>
            <input
                type="text"
                name="enrolments"
                value={electiveModule.enrolments}
                onChange={handleChange}
            />

            <label>Minimum Mark:</label>
            <input
                type="number"
                name="minMark"
                value={electiveModule.minMark}
                onChange={handleChange}
            />

            <label>Pass Mark:</label>
            <input
                type="number"
                name="passMark"
                value={electiveModule.passMark}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ElectiveModuleForm;
