import React from "react";

function CourseModuleList({ courses }) {
    return (
        <div>
            <h3>Courses</h3>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseModuleList;
