import React from "react";

function AddressList({ addresses }) {
    return (
        <div>
            <h3>Addresses</h3>
            <ul>
                {addresses.map((address, index) => (
                    <li key={index}>{address}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddressList;
