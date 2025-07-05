import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = ({logIn, UserProfileData}) => {
    return (
        <div>
            <Header logIn={logIn} isHome={(false)} UserProfileData={UserProfileData}/>
            <h1>Contact Us</h1>
            <p>If you have any questions, comments, or concerns, we would love to hear from you! Please feel free to reach out to us through the following channels:</p>
            <h2>Email</h2>
            <p>You can email us at <a href="mailto:J@gmail.com"></a></p>
            <h2>Phone</h2>
            <p>Call us at <a href="tel:+1234567890">+123-456-7890</a></p>
            <h2>Address</h2>
            <p>Visit us at:</p>
            <p>123 E-commerce St.<br/>
            E-commerce City, EC 12345</p>
            <h2>Social Media</h2>
            <p>Follow us on our social media channels for the latest updates and promotions:</p>
            <ul>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>        
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <p>We strive to respond to all inquiries within 24-48 hours. Thank you for reaching out to us!</p>
            <Footer/>

        </div>
    )
}

export default Contact
