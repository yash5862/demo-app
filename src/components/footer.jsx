import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-center">
        <h3>Short Story About Us</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex gap-4 justify-center">
          <input type="text" placeholder="Enter Email" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
