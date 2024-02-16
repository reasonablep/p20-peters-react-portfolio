import React, { useState } from 'react';
import Button from '@mui/material/Button'

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
            <Button

            variant="outlined"
            style={{
            
                fontWeight: '800',
                color: '#04724D'
            }}
            type="submit">
                SUBMIT</Button>
        </form>
    );
};

export default ContactForm;