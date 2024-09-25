import React, { useState, useEffect } from "react";

function ElectiveModuleList() {
    const [electiveModules, setElectiveModules] = useState([]);

    useEffect(() => {
        // Fetch elective module data from API
        setElectiveModules([
            {
                id: 1,
                code: "EL101",
                name: "Philosophy",
                department: "Humanities",
                minMark: 50,
                passMark: 60,
            },
            {
                id: 2,
                code: "EL102",
                name: "Sociology",
                department: "Humanities",
                minMark: 50,
                passMark: 60,
            },
        ]);
    }, []);

    return (
        <div>
            <h2>Elective Module List</h2>
            <ul>
                {electiveModules.map((module) => (
                    <li
                        key={
                            module.id
                        }>{`${module.code} - ${module.name} - ${module.department} - Min Mark: ${module.minMark} - Pass Mark: ${module.passMark}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default ElectiveModuleList;
