import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

const Footer = () => {
    return(
        <nav>
        <table>
                <tr>
                    <td rowSpan={3} style={{width:'25%'}}> <img src="logo.png" alt="CompanyLogo"/><br/>Pet Heaven Society</td>
                    <td rowSpan={3} style={{width:'20%'}}></td>
                    <td><strong>Information</strong></td>
                    <td><strong>Pets Available</strong></td>
                    <td rowSpan={3} style={{width:'20%'}}></td>
                </tr>
                <tr>
                    <td>
                        <Link to='/' id="footerLink">Join Us</Link>    
                    </td>
                    <td>
                        <Link to='/funcat' id="footerLink">Cats</Link>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <Link to='/about' id="footerLink">About</Link>
                    </td>
                    <td>
                        <Link to='/fundog' id="footerLink">Dogs</Link>
                    </td>
                </tr>
                <tr>
                    <td colSpan={5}>
                        <div>2023 All Rights Reserved</div>
                    </td>
                </tr>
        </table>
        </nav>
        
    )
}

export default Footer