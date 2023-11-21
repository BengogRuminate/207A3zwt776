import React, {useState} from "react";
import './css/Infobar.css';

const InfoBar = () => {
    //let displayUser = "Guest";
    const [user, setUser] = useState("newUser123");

    return(
        <>
        <div className='infobar'>
            <div id='LogIn'>Welcome, {user} </div>
            <div id='LogOut'><button type="submit" onClick={()=>{setUser("Guest")}}>LogOut</button></div>
        </div>
        </>
    )
}





export default InfoBar