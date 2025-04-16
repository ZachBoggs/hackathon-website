import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

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
    setSubmitted(true);
    return;
    try {
      // for local testing
      const res = await fetch("http://localhost:3000/add-feedback", {
        //const res = await fetch("https://csu-chico-hackathons-backend.vercel.app/add-feedback", {
        mode: 'cors',
        method: "POST",
        //headers: { "Content-Type": "application/json" },
        headers: "Content-Type",
        body: JSON.stringify(formData)
      });


      if (!res.ok) throw new Error("Failed to submit");
      //setSubmitted(true);

      // show thank you message
    } catch (error) {
      console.error("Submission error:", error);
      console.log("Submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div>
      <div className="transition-all duration-500 mx-auto item-holder background-blur">
        <h1>Submit feedback: </h1>
        <p>( currently doesn't send data - had issues with express js )</p>
        {submitted ? <div className="text-center text-green-600 font-medium p-4 border rounded shadow">
          Thank you for your feedback!

        </div> : <br />}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: submitted ? 0 : 1, y: submitted ? 100 : 0 }}
          transition={{ duration: 0.5 }} S
        >
          <Stack
            direction={'row'}
            padding={.5}
            spacing={1}
            justifyContent={'center'}
            sx={{
              width: '100%',
            }}
          >
            <TextField
              id="outlined-textarea"
              label="first name - optional"
              name="first-name"
              placeholder="first name"
              value={formData.firstname}
              onChange={handleChange}
              sx={{
                width: '50%',
                backgroundColor: '#f0f0f0',
                borderRadius: 6,
                input: { color: '#0' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 6,
                  '& fieldset': {
                    borderRadius: 6, // ensures outline matches input shape
                  },
                },
              }}
            />

            <TextField
              id="outlined-textarea"
              label="last name - optional"
              name="last-name"
              placeholder="last name"
              value={formData.lastname}
              onChange={handleChange}
              sx={{
                width: '50%',
                backgroundColor: '#f0f0f0',
                borderRadius: 6,
                input: { color: '#0' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 6,
                  '& fieldset': {
                    borderRadius: 6, // ensures outline matches input shape
                  },
                },
              }}
            />
          </Stack>

          <div style={{ padding: '.5em' }}>
            <TextField
              id="outlined-textarea"
              label="email - optional"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                width: '100%',
                backgroundColor: '#f0f0f0',
                borderRadius: 6,
                input: { color: '#0' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 6,
                  '& fieldset': {
                    borderRadius: 6, // ensures outline matches input shape
                  },
                },
              }}
            />
          </div>
          <div style={{ padding: '.5em' }}>
            <TextField

              id="outlined-textarea"
              label="feedback"
              name="feedback"
              placeholder="I wish there was more of..."
              multiline
              value={formData.feedback}
              onChange={handleChange}
              sx={{
                width: '100%',
                backgroundColor: '#f0f0f0',
                borderRadius: 6,
                textarea: { color: '#0' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 6,
                  '& fieldset': {
                    borderRadius: 6, // ensures outline matches input shape
                  },
                },
              }}
            />
          </div>
        </motion.div >
        {
          !submitted ? (

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Submit
              </button>

            </form>
          ) : () => { }
        }
      </div >
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;