import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ouks5cs',     // replace with your actual Service ID
        'template_p390tnk',    // replace with your actual Template ID
        form.current,
        'gZAF90aKZiFRWowC-'      // replace with your actual Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
