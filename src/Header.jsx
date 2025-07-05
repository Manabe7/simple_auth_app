import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useState } from 'react';

const Header = ({
    setIsSignIn, 
    setNewRegister,
    logIn, setLogIn,
    Email, setEmail,
    Name, setName,
    Password, setPassword,
    Password2nd, setPassword2nd,
    UserProfileData, setUserProfileData,
    isHome, setIsHome,
    handleLogout

    }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    
    const handleUserMenu = (e) => {
        e.preventDefault();
       return setShowUserMenu(!showUserMenu);
        
    }
    return (
        <header className='Header-form' onClick={(e)=> e.preventDefault()}>
            <h1>
                <Link to={`/`} onClick={()=>setIsHome(true)}> 
                    E-commerce WebSite
                </Link>
            </h1>
            {isHome && <SearchBar/>}
            <Nav 
                setIsSignIn={setIsSignIn} 
                setNewRegister={setNewRegister}
                logIn={logIn} setLogIn={setLogIn}
                Email={Email} setEmail={setEmail}
                Name={Name} setName={setName}
                Password={Password} setPassword={setPassword}
                Password2nd={Password2nd} setPassword2nd={setPassword2nd}
                UserProfileData={UserProfileData} setUserProfileData={setUserProfileData}
                handleLogout={handleLogout}
                showUserMenu={showUserMenu}
                handleUserMenu={handleUserMenu}
            />
            {showUserMenu && 
            <UserMenu 
                UserProfileData={UserProfileData}
                handleLogout={handleLogout}
            />}
        </header>
    )
}

export default Header
