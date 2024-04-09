import { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = (props) => {
    
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    return props?.items?.
    length === 0 ?

    <h1>No data</h1>
    
    :

    (

    <div id='contact'>
        <h1 className="contact-me contact-banner"
        >{props.contactbanner}</h1>
        <h2>
                <ul className="contact-me">
                    <li><a href="https://www.linkedin.com/in/peter-j-martinez-49b81771">Linkedin</a></li>
                    <li><a href="mailto: pmrtnz@me.com">E-mail</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href='#contact' onClick={toggleContactForm}>Contact Form</a></li>
                </ul>
        
        </h2>
        {showContactForm && <ContactForm />}
    </div>
    )
}

export default Contact;