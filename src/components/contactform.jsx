import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                id="contactMessage"
                name="contactMessage"
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;