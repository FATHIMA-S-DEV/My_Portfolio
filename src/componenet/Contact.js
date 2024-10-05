// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_hsdhlt5', 'template_bwos786', formData, '5ByRe-X4nSIZDlEtm')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Us</h2>
      {submitted && <p className="thank-you-message">Thank you for your message!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
