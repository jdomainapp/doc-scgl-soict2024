import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { generateId } from "../../utils/generateId";

function EnrolmentForm({ addEnrolment }) {
    const [studentId, setStudentId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [internalMark, setInternalMark] = useState("");
    const [examMark, setExamMark] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const enrolmentId = generateId(5); // Auto-generate 5-character ID

        const finalGrade = calculateFinalGrade(internalMark, examMark);

        if (!startDate || !endDate) {
            alert("Start and End dates are required.");
            return;
        }

        addEnrolment({
            enrolmentId,
            studentId,
            courseId,
            internalMark,
            examMark,
            finalGrade,
            startDate,
            endDate,
        });

        setStudentId("");
        setCourseId("");
        setInternalMark("");
        setExamMark("");
        setStartDate("");
        setEndDate("");
    };

    const calculateFinalGrade = (internal, exam) => {
        if (internal && exam) {
            return (parseFloat(internal) + parseFloat(exam)) / 2;
        }
        return null;
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Student ID:"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
            <InputField
                label="Course ID:"
                type="text"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <InputField
                label="Internal Mark (0-100):"
                type="number"
                value={internalMark}
                onChange={(e) => setInternalMark(e.target.value)}
            />
            <InputField
                label="Exam Mark (0-100):"
                type="number"
                value={examMark}
                onChange={(e) => setExamMark(e.target.value)}
            />
            <InputField
                label="Start Date:"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <InputField
                label="End Date:"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <Button text="Add Enrolment" />
        </form>
    );
}

export default EnrolmentForm;
