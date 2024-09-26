import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { generateId } from "../../utils/generateId";

function CourseModuleForm({ addCourseModule }) {
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [semester, setSemester] = useState("");
    const [credits, setCredits] = useState("");
    const [cost, setCost] = useState("");
    const [isElective, setIsElective] = useState(false);
    const [rating, setRating] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const courseId = generateId(3); // Auto-generate 3-character ID

        if (!courseName || courseName.length > 30) {
            alert(
                "Course name is required and should not exceed 30 characters."
            );
            return;
        }
        if (!courseCode || courseCode.length > 12) {
            alert(
                "Course code is required and should not exceed 12 characters."
            );
            return;
        }
        if (!semester || semester.length > 2) {
            alert(
                "Semester is required and should be between 1 and 2 characters."
            );
            return;
        }
        if (!credits || credits < 1 || credits > 2) {
            alert("Credits must be between 1 and 2.");
            return;
        }

        const newModule = {
            courseId,
            courseName,
            courseCode,
            semester,
            credits,
            cost,
            isElective,
        };

        if (isElective) {
            if (!department || department.length > 50) {
                alert(
                    "Department is required for elective courses and should not exceed 50 characters."
                );
                return;
            }
            newModule.rating = rating;
            newModule.department = department;
        }

        addCourseModule(newModule);

        setCourseName("");
        setCourseCode("");
        setSemester("");
        setCredits("");
        setCost("");
        setRating("");
        setDepartment("");
        setIsElective(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Course Name:"
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <InputField
                label="Course Code:"
                type="text"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
            />
            <InputField
                label="Semester:"
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
            />
            <InputField
                label="Credits:"
                type="number"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
            />
            <InputField
                label="Cost (Optional):"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            {isElective && (
                <>
                    <InputField
                        label="Rating (Optional):"
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <InputField
                        label="Department:"
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </>
            )}
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={isElective}
                        onChange={(e) => setIsElective(e.target.checked)}
                    />{" "}
                    Is Elective?
                </label>
            </div>
            <Button text="Add Course" />
        </form>
    );
}

export default CourseModuleForm;
