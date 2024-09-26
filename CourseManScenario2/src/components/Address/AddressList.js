import React, { useState, useEffect } from "react";

function AddressList() {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        // Fetch address data from API
        setAddresses([
            { id: 1, name: "Hanoi", student: "John Doe" },
            { id: 2, name: "Saigon", student: "Jane Smith" },
        ]);
    }, []);

    return (
        <div>
            <h2>Address List</h2>
            <ul>
                {addresses.map((address) => (
                    <li
                        key={
                            address.id
                        }>{`${address.name} - ${address.student}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddressList;
