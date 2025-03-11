import React, { useRef, useState } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null); // State for status message

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_x7hl7ye', // Replace with your EmailJS Service ID
        'template_ak0vw3o', // Replace with your EmailJS Template ID
        form.current,
        'g039U7RuSGlQER7PV' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          setStatusMessage('Message sent successfully!'); // Set success message
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setStatusMessage('Failed to send message. Please try again later.'); // Set error message
        }
      );
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jayjajoo02@gmail.com</h5>
            <a href="mailto:jayjajoo02@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* Status Overlay */}
      {statusMessage && (
        <div className="status-overlay">
          <div className="status-message">
            <p>{statusMessage}</p>
            <button
              className="btn btn-primary"
              onClick={() => setStatusMessage(null)} // Close the overlay
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;