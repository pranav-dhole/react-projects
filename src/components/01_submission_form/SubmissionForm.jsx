import "./submissionForm.css";
import { useState } from "react";

const SubmissionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [choice, setChoice] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    console.log(`
      firstName : ${firstName},
      lastName : ${lastName},
      email : ${email},
      contact : ${contact},
      url : ${url || "N/A"},
      about : ${about || "N/A"},
      choice : ${choice},
      gender : ${gender || "N/A"}
      subject : ${subject || "N/A"}
      `);
  };

  const handleReset = () => {
    setAbout("");
    setChoice("");
    setContact("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setGender("");
    setSubject("");
    setUrl("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-container">
      <h1>Form In React</h1>
      <div className="form-one">
        <label htmlFor="firstName">First Name*</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
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
          required
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
          required
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
          required
        />
      </div>

      {/* gender */}
      <fieldset className="form-two">
        <legend>Gender*</legend>

        <div className="form-two-inside">
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              checked={gender === "male"}
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>

          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </fieldset>

      {/* subject */}
      <fieldset className="form-two">
        <legend>Your Best Subject</legend>

        <div className="form-two-inside">
          <div>
            <input
              type="checkbox"
              id="english"
              name="subject"
              checked={subject === "english"}
              value="english"
              onChange={(e) =>
                setSubject((prev) =>
                  prev === e.target.value ? null : e.target.value,
                )
              }
            />
            <label htmlFor="english">English</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="maths"
              name="subject"
              checked={subject === "maths"}
              value="maths"
              onChange={(e) =>
                setSubject((prev) =>
                  prev === e.target.value ? null : e.target.value,
                )
              }
            />
            <label htmlFor="maths">Maths</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="physics"
              name="subject"
              checked={subject === "physics"}
              value="physics"
              onChange={(e) =>
                setSubject((prev) =>
                  prev === e.target.value ? null : e.target.value,
                )
              }
            />
            <label htmlFor="physics">Physics</label>
          </div>
        </div>
      </fieldset>

      <div className="form-one">
        <label htmlFor="url">Enter URL*</label>
        <input
          id="url"
          type="url"
          placeholder="Enter url here"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          required
        />
      </div>

      {/* choice */}
      <div className="form-one form-select">
        <label htmlFor="choice">Select Your Choice</label>
        <select
          id="choice"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
          required
        >
          <option value="" disabled>
            Select an option...
          </option>
          <option value="Beginner">Beginners</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="form-one">
        <div>
          <label htmlFor="about" className="about">
            About
          </label>
          <textarea
            placeholder="About your self"
            id="about"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          />
        </div>
      </div>

      <div className="btn-container">
        <legend>Submit OR Reset</legend>

        <div className="btns">
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
          <button id="submit" onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubmissionForm;
