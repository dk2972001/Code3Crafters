import React from "react";
import ContactForm from "./ContactForm/ContactForm"; // Import the ContactForm component

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div id="contact">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">{message}</p>
      
      {/* Include the ContactForm component */}
      <ContactForm />
    </div>
  );
};

export default GetInTouch;
