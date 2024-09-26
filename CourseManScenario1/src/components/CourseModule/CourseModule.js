import React, { useState } from "react";
import CourseModuleForm from "./CourseModuleForm";
import CourseModuleList from "./CourseModuleList";

function CourseModule() {
    const [courses, setCourses] = useState([]);

    const addCourse = (course) => {
        setCourses([...courses, course]);
    };

    return (
        <div>
            <h2>Course Module</h2>
            <CourseModuleForm addCourse={addCourse} />
            <CourseModuleList courses={courses} />
        </div>
    );
}

export default CourseModule;
