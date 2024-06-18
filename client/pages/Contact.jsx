import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContact = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await fetch("https://mitsoln.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message Sent Successfully");
        setFormData({
          username: "",
          email: "",
          message: "",
        });
        navigate("/");
      } else {
        // Handle server errors
        let errorData;
        try {
          errorData = await response.json();
        } catch (error) {
          console.error('Failed to parse error JSON:', error);
          alert('Message failed to send. Please try again later.');
          return;
        }

        console.error('Error:', errorData);
        alert(`Message failed to send: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during message sending:', error);
      alert('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <div className="contactcontainer">
      <div className="topcontact">
        <h1>Contact Us</h1>
      </div>
      <div className="bottomcontact">
        <form onSubmit={handleContact}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            id="username"
            required
            autoComplete="off"
            value={formData.username}
            onChange={handleInput}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            id="email"
            required
            autoComplete="off"
            value={formData.email}
            onChange={handleInput}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            id="message"
            required
            autoComplete="off"
            value={formData.message}
            onChange={handleInput}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
