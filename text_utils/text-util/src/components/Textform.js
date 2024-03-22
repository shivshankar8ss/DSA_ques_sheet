import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [getEmailClicked, setGetEmailClicked] = useState(false);
  const [extractedEmails, setExtractedEmails] = useState([]);

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    setGetEmailClicked(false); 
  }

  const handleGetEmailClick = () => {
    const emails = extractEmails();
    setExtractedEmails(emails);
    setGetEmailClicked(true);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    setGetEmailClicked(false); 
  }

  const extractEmails = () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const matches = text.match(emailRegex);
    return matches ? matches.map(email => email.toLowerCase()) : [];
  }

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">TextArea</label>
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="2"></textarea>
      </div>

      <button className="btn btn-success mx-2" onClick={handleUpClick}>Uppercase</button>
      <button className="btn btn-danger mx-2" onClick={handleLowClick}>LowerCase</button>
      <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-secondary" onClick={handleGetEmailClick}>Get Email</button>

      <div className="container my-2">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{(0.48 * text.split(" ").length)} seconds required to read</p>
      </div>

      <h2>Preview</h2>
      <p>{text}</p>

      {getEmailClicked && (
        <div className="container my-2">
          <h1>Extracted Emails</h1>
          <ul>
            {extractedEmails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
