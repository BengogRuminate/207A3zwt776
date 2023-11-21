import React, {useState} from "react";
import LoginPage from "./Login";
import SignupPage from "./Signup";

import './css/Loginform.css';

function Aselection({ items }) {
    const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
    <div className="App">
      {isOpen && <LoginPage />}
      {!isOpen && <SignupPage />}
    </div>
    <div id="buttonLocation"><center><button id='toggle' onClick={toggle}>Sign up / Log in</button></center></div>
    
    </>
  );
}

export default Aselection
  