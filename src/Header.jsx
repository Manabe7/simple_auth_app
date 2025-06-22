import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Header = ({
    setIsSignIn, 
    setNewRegister,
    logIn, setLogIn,
    Email, setEmail,
    Name, setName,
    Password, setPassword,
    Password2nd, setPassword2nd,
    UserProfileData, setUserProfileData

    }) => {
    
    return (
        <header>
            <h1>E-commerce WebSite</h1>
            <SearchBar/>
            <Nav 
                setIsSignIn={setIsSignIn} 
                setNewRegister={setNewRegister}
                logIn={logIn} setLogIn={setLogIn}
                Email={Email} setEmail={setEmail}
                Name={Name} setName={setName}
                Password={Password} setPassword={setPassword}
                Password2nd={Password2nd} setPassword2nd={setPassword2nd}
                UserProfileData={UserProfileData} setUserProfileData={setUserProfileData}
                />
        </header>
    )
}

export default Header
