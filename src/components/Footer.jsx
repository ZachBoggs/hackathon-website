import React, { useState } from 'react'
const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    'first-name': "",
    'last-name': "",
    'email': "",
    'feedback': "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      // for local testing
      const res = await fetch("http://localhost:3000/add-feedback", {
        mode: 'no-cors',
        //const res = await fetch("https://csu-chico-hackathons-backend.vercel.app/add-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });


      if (!res.ok) throw new Error("Failed to submit");

      // show thank you message
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      console.log("Submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="transition-all duration-500 max-w-md mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="first-name"
            placeholder="first name - optional"
            value={formData['first-name']}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="last-name"
            placeholder="last name - optional"
            value={formData['last-name']}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="email - optional"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <textarea
            name="feedback"
            placeholder="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600 font-medium p-4 border rounded shadow">
          Thank you for your feedback!
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Footer;