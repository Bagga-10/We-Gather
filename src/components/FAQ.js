import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I access academic updates?",
      answer:
        "You can access academic updates by logging into your student account and navigating to the 'Academic Updates' section.",
    },
    {
      question: "How can I stay informed about upcoming events?",
      answer:
        "To stay informed about upcoming events, you can check the 'Events' section on the platform or enable event notifications in your account settings.",
    },
    {
      question: "Can I customize my notification preferences?",
      answer:
        "Yes, you can customize your notification preferences by going to your account settings and selecting the notifications you wish to receive.",
    },
    {
      question: "How can I participate in discussions on the platform?",
      answer:
        "To participate in discussions, you can visit the 'Discussion Forums' section and join existing threads or start new ones.",
    },
    {
      question: "How do I personalize my event recommendations?",
      answer:
        "You can personalize your event recommendations by updating your interests in your account settings. The platform will then suggest relevant events based on your preferences.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h1 className="faq-title">FAQ</h1>
        <h2 className="faq-subtitle">Common questions</h2>
        <p className="faq-intro">
          Here are some of the most common questions that we get.
        </p>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </h3>
            {openIndex === index && <p className="faq-answer" >{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
