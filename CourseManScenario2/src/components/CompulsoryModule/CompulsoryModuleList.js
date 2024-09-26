import React, { useState, useEffect } from "react";

function CompulsoryModuleList() {
    const [compulsoryModules, setCompulsoryModules] = useState([]);

    useEffect(() => {
        // Fetch compulsory module data from API
        setCompulsoryModules([
            {
                id: 1,
                code: "CS101",
                name: "Algorithms",
                department: "Computer Science",
                minMark: 50,
                passMark: 60,
            },
            {
                id: 2,
                code: "CS102",
                name: "Database Systems",
                department: "Computer Science",
                minMark: 50,
                passMark: 60,
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Compulsory Module List</h2>
            <ul>
                {compulsoryModules.map((module) => (
                    <li
                        key={
                            module.id
                        }>{`${module.code} - ${module.name} - ${module.department} - Min Mark: ${module.minMark} - Pass Mark: ${module.passMark}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default CompulsoryModuleList;
