import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { generateId } from "../../utils/generateId";

function StudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [studentClass, setStudentClass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = generateId(6); // Auto-generate 6-character ID

        if (!name || name.length > 30) {
            alert("Name is required and should not exceed 30 characters.");
            return;
        }
        if (!gender) {
            alert("Gender is required.");
            return;
        }
        if (!birthdate) {
            alert("Birthdate is required.");
            return;
        }
        if (!email || email.length > 30) {
            alert("Email is required and should not exceed 30 characters.");
            return;
        }

        addStudent({
            id,
            name,
            gender,
            birthdate,
            email,
            address,
            studentClass,
        });

        // Reset form
        setName("");
        setGender("");
        setBirthdate("");
        setEmail("");
        setAddress("");
        setStudentClass("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Name:"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputField
                label="Gender:"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <InputField
                label="Birthdate:"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <InputField
                label="Email:"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                label="Address:"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <InputField
                label="Class ID:"
                type="text"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
            />
            <Button text="Add Student" />
        </form>
    );
}

export default StudentForm;
