import React, { useState } from "react";
import EnrolmentForm from "./EnrolmentForm";
import EnrolmentList from "./EnrolmentList";

function Enrolment() {
    const [enrolments, setEnrolments] = useState([]);

    const addEnrolment = (enrolment) => {
        setEnrolments([...enrolments, enrolment]);
    };

    return (
        <div>
            <h2>Enrolment Module</h2>
            <EnrolmentForm addEnrolment={addEnrolment} />
            <EnrolmentList enrolments={enrolments} />
        </div>
    );
}

export default Enrolment;
