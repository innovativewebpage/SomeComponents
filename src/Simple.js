import React, { useState } from "react";

function SimpleForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        mobile: "",
        pwd: "",
    });
    console.log(formData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        alert(`submitted :${JSON.stringify(formData, null, 2)}`)
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
            />

            <input
                type="password"
                name="pwd"
                placeholder="Password"
                value={formData.pwd}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;
