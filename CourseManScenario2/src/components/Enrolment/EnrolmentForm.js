import React, { useState } from "react";

function EnrolmentForm() {
    const [enrolment, setEnrolment] = useState({
        id: "",
        student: "",
        courseModule: "",
        internalMark: "",
        examMark: "",
        finalGrade: "",
        startDate: "",
        endDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnrolment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(enrolment);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={enrolment.id}
                onChange={handleChange}
            />

            <label>Student:</label>
            <input
                type="text"
                name="student"
                value={enrolment.student}
                onChange={handleChange}
            />

            <label>Course Module:</label>
            <input
                type="text"
                name="courseModule"
                value={enrolment.courseModule}
                onChange={handleChange}
            />

            <label>Internal Mark:</label>
            <input
                type="number"
                name="internalMark"
                value={enrolment.internalMark}
                onChange={handleChange}
            />

            <label>Exam Mark:</label>
            <input
                type="number"
                name="examMark"
                value={enrolment.examMark}
                onChange={handleChange}
            />

            <label>Final Grade:</label>
            <input
                type="text"
                name="finalGrade"
                value={enrolment.finalGrade}
                onChange={handleChange}
            />

            <label>Start Date:</label>
            <input
                type="date"
                name="startDate"
                value={enrolment.startDate}
                onChange={handleChange}
            />

            <label>End Date:</label>
            <input
                type="date"
                name="endDate"
                value={enrolment.endDate}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default EnrolmentForm;
