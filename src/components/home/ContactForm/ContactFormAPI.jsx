// contactformapi.jsx
import axios from "axios";
import React, { useState } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9

const EmailRestAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_o9airgw";
    const templateId = "template_y517hvw";
    const publicKey = "vMLFO9hxLRqh92bFz";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        to_name: "Web Wizard",
        message: message,
      },
    };

    try {
      // Send the email using EmailJS
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setSuccessMessageVisible(true);
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
<<<<<<< HEAD

    <><Helmet>
      <title>ontact US</title>
      <meta
        name="description"
        content=""></meta>
    </Helmet><div>
        <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input
            type="number"
            placeholder="Your Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
        {successMessageVisible && (
          <div style={{ marginTop: "20px" }}>Email sent successfully!</div>
        )}
      </div></>
=======
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
      {successMessageVisible && (
        <div style={{ marginTop: "20px" }}>Email sent successfully!</div>
      )}
    </div>
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
  );
};

export default EmailRestAPI;
