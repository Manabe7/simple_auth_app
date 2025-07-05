import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = ({logIn, UserProfileData}) => {
    return (
        <div>
            <Header logIn={logIn} isHome={(false)} UserProfileData={UserProfileData}/>
            <h1>About Us</h1>
            <p>Welcome to our E-commerce website! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, all while ensuring exceptional customer service.</p>
            <p>Our team is passionate about e-commerce and is committed to making your shopping experience as seamless as possible. We carefully curate our product selection to include the latest trends and timeless classics, ensuring that there is something for everyone.</p>
            <p>We value your feedback and are always looking for ways to improve. If you have any questions, suggestions, or concerns, please don't hesitate to reach out to our customer support team. We are here to help you every step of the way.</p>
            <p>Thank you for choosing our E-commerce website. We look forward to serving you and hope you enjoy your shopping experience with us!</p>
            <Footer/>
        </div>
    )
}

export default About
