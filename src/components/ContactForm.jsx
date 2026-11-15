import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const handleChange = ({ target: { name, value } }) => setFormData(current => ({ ...current, [name]: value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
    window.location.href = `mailto:pmrtnz@me.com?subject=${subject}&body=${body}`;
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
      <button className="button" type="submit">Open email app <span aria-hidden="true">↗</span></button>
      <p className="form-note">Your email app handles sending. This site does not store messages.</p>
    </form>
  );
}
