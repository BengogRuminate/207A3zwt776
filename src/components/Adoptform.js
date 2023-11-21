import React from "react";
import emailjs from 'emailjs-com';
import './css/AdoptForm.css'

const AdoptForm = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_3xlbpyf', 'template_b9pl6gc', e.target, 'xD6KEWuDk6rVknD84')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <>
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Contact Number:</label><br/>
          <input type="text" name="contact_number" id="contactnumber" placeholder="81234567"/><br/>
          <label>Name:</label><br/>
          <input type="text" name="from_name" id="name" placeholder="Name"/><br/>
          <label>Email:</label><br/>
          <input type="email" name="from_email" id="email" placeholder="Email"/><br/>
          <label>Subject:</label><br/>
          <input type="text" name="subject" id="subject" placeholder="Adopt pet/Release pet"/><br/>
          <label>Message:</label><br/>
          <textarea name="html_message" id="message" placeholder="message"/><br/>
          <input type="submit" value="Send" id="submitbutton"/>
        </form>
        </>
      );
}

export default AdoptForm