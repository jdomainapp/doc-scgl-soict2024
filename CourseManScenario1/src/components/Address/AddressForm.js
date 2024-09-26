import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

function AddressForm({ addAddress }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!city || city.length > 20) {
            alert("City name is required and should not exceed 20 characters.");
            return;
        }

        addAddress({ city });
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="City:"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button text="Add Address" />
        </form>
    );
}

export default AddressForm;
