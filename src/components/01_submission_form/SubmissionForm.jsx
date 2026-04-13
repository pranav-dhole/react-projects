const SubmissionForm = () => {
  return (
    <div className="form-container">
      <h1>Form In React</h1>
      <div>
        <label htmlFor="firstName">First Name*</label>
        <input id="firstName" type="text" placeholder="Enter First Name" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name*</label>
        <input id="lastName" type="text" placeholder="Enter Last Name" />
      </div>
      <div>
        <label htmlFor="email">Enter Email*</label>
        <input id="email" type="email" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="contact">Contact*</label>
        <input id="contact" type="number" placeholder="Enter Mobile Number" />
      </div>

      <div>
        <label htmlFor="gender">Gender*</label>
        <input type="radio" id="gender" value={"Male"} />
        <input type="radio" id="gender" value={"Female"} />
        <input type="radio" id="gender" value={"Other"} />
      </div>

      <div>
        <label htmlFor="subject">Your Best Subject</label>
        <div>
          <label id="subject">
            <label htmlFor="english">English</label>
            <label htmlFor="maths">Maths</label>
            <label htmlFor="physics">Physics</label>
            <input type="checkbox" id="english" />
            <input type="checkbox" id="maths" />
            <input type="checkbox" id="physics" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
