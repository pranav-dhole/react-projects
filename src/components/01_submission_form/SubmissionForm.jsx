import { useState } from "react";

const SubmissionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState({
    male: "male",
    female: "female",
    other: "other",
  });
  const [subject, setSubject] = useState({
    english: "english",
    maths: "maths",
    physics: "physics",
  });

  return (
    <div className="form-container">
      <h1>Form In React</h1>
      <div className="form-one">
        <label htmlFor="firstName">First Name*</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div className="form-one">
        <label htmlFor="lastName">Last Name*</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className="form-one">
        <label htmlFor="email">Enter Email*</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-one">
        <label htmlFor="contact">Contact*</label>
        <input
          id="contact"
          type="tel"
          placeholder="Enter Mobile Number"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
      </div>

      {/* gender */}
      <fieldset>
        <legend>Gender*</legend>

        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>

        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
      </fieldset>

      {/* subject */}
      <fieldset>
        <legend>Your Best Subject</legend>

        <input type="checkbox" id="english" name="subject" value="english" />
        <label htmlFor="english">English</label>

        <input type="checkbox" id="maths" name="subject" value="maths" />
        <label htmlFor="maths">Maths</label>

        <input type="checkbox" id="physics" name="subject" value="physics" />
        <label htmlFor="physics">Physics</label>
      </fieldset>

      <div className="form-one">
        <label htmlFor="url">Enter URL*</label>
        <input
          id="url"
          type="url"
          placeholder="Enter url here"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </div>

      {/* choice */}
      <div>
        <label htmlFor="choice">Select Your Choice</label>
        <select id="choice">
          <option>Beginners</option>
          <option>Advanced</option>
        </select>
      </div>

      <div>
        <label htmlFor="about">About</label>
        <textarea
          placeholder="About your self"
          id="about"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
      </div>

      <div>
        <legend>Submit OR Reset</legend>

        <div>
          <button id="reset">Reset</button>
          <button id="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
