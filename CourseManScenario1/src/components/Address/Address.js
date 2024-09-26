import React, { useState } from "react";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";

function Address() {
    const [addresses, setAddresses] = useState([]);

    const addAddress = (address) => {
        setAddresses([...addresses, address]);
    };

    return (
        <div>
            <h2>Address Module</h2>
            <AddressForm addAddress={addAddress} />
            <AddressList addresses={addresses} />
        </div>
    );
}

export default Address;
