import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <section className="contact-page container">
      <div className="page-heading">
        <p className="eyebrow">Let’s connect</p>
        <h1>Good work starts<br />with a <em>conversation.</em></h1>
        <p>Have a project in mind, a research question, or just want to say hello? I’d love to hear from you.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-links">
          <a href="mailto:ptrmrtnz@outlook.com"><span><small>Email</small>ptrmrtnz@outlook.com</span><span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/peter-j-martinez-49b81771" target="_blank" rel="noopener noreferrer"><span><small>Professional profile</small>LinkedIn</span><span aria-hidden="true">↗</span></a>
          <a href="https://github.com/reasonablep" target="_blank" rel="noopener noreferrer"><span><small>Code & experiments</small>GitHub</span><span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-compose">
          <h2>Send a note.</h2>
          <p>Prefer to write here? Compose a message and open it in your email app.</p>
          <button className="button button-secondary" type="button" aria-expanded={showContactForm} aria-controls="contact-form" onClick={() => setShowContactForm(!showContactForm)}>{showContactForm ? 'Close message' : 'Write a message'} <span aria-hidden="true">↗</span></button>
          {showContactForm && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
