import React, { useState, useEffect } from "react";

function CourseModuleList() {
    const [courseModules, setCourseModules] = useState([]);

    useEffect(() => {
        // Fetch course module data from API
        setCourseModules([
            {
                id: 1,
                code: "CS101",
                name: "Introduction to Programming",
                department: "Computer Science",
            },
            {
                id: 2,
                code: "CS102",
                name: "Data Structures",
                department: "Computer Science",
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Course Module List</h2>
            <ul>
                {courseModules.map((module) => (
                    <li
                        key={
                            module.id
                        }>{`${module.code} - ${module.name} - ${module.department}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseModuleList;
