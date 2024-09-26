import React, { useState } from "react";

function AddressForm() {
    const [address, setAddress] = useState({
        id: "",
        name: "",
        student: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to API
        console.log(address);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={address.id}
                onChange={handleChange}
            />

            <label>City Name:</label>
            <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
            />

            <label>Student:</label>
            <input
                type="text"
                name="student"
                value={address.student}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default AddressForm;
