import React, { useState } from "react";

import './css/Loginform.css'

function SignupPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "newUser123",
      password: "password123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmitLogup = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname1, pass1, pass2 } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname1.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass1.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else if (userData.password !== pass2.value){
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        sessionStorage.setItem("loginStatus", "true");
        /*let statity = sessionStorage.getItem("loginStatus");
        console.log(statity);*/
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmitLogup}>
        <div className="input-container">
          <label>Username </label>
          <input id="uname1" type="text" name="uname1" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input id="password1" type="password" name="pass1" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input id="password2" type="password" name="pass2" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" id="submitbutton"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign up</div>
        {isSubmitted ? <div>New account successfully created</div> : renderForm}
      </div>
    </div>
  );
}

export default SignupPage;