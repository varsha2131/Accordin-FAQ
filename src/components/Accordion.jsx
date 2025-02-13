import React, { useState } from "react";
import faqs from "../data/faqs.json"; // Importing mock FAQ data
import './Accordion.css';  // Importing external CSS file for styles

const Accordion = () => {
  const [openId, setOpenId] = useState(null); // State to track open FAQ

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id); // Toggle the currently open FAQ
  };

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div 
              onClick={() => toggleFAQ(faq.id)}
              className="faq-question"
            >
              {faq.question}
              <span className={`faq-arrow ${openId === faq.id ? 'open' : ''}`}></span>
            </div>
            {openId === faq.id && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
