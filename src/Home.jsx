import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Register from './Register'
import LockIn from './LockIn'
import { useState } from 'react'

const Home = ({ users, setUsers,
    isSignIn, setIsSignIn, 
    newRegister, setNewRegister,
    logIn, setLogIn,
    Email, setEmail,
    Name, setName,
    Password, setPassword,
    Password2nd, setPassword2nd,
    UserProfileData, setUserProfileData,
    handleRegister, 
    handleCloseRegister,
    handleSubmitReg,
    handleLogin,
    handleCloseLogin,
    isHome, setIsHome,
    showPassword, setShowPassword,
    showPassword2nd, setShowPassword2nd,
    handleLogout
}) => {    
    

    
    
    return (
        <>
            <Header 
                isHome={isHome} setIsHome={setIsHome}
                setIsSignIn={setIsSignIn} 
                setNewRegister={setNewRegister}
                logIn={logIn} setLogIn={setLogIn}
                Email={Email} setEmail={setEmail}
                Name={Name} setName={setName}
                Password={Password} setPassword={setPassword}
                Password2nd={Password2nd} setPassword2nd={setPassword2nd}
                UserProfileData={UserProfileData} setUserProfileData={setUserProfileData}
                handleLogout={handleLogout}
                />
            <Content/>
            {newRegister && 
                <Register  
                    setIsSignIn={setIsSignIn} 
                    setNewRegister={setNewRegister}
                    Email={Email} setEmail={setEmail}
                    Name={Name} setName={setName}
                    Password={Password} setPassword={setPassword}
                    Password2nd={Password2nd} setPassword2nd={setPassword2nd}
                    handleSubmitReg={handleSubmitReg} 
                    handleCloseRegister={handleCloseRegister}
                    handleRegister={handleRegister}
                    showPassword={showPassword} setShowPassword={setShowPassword}
                    showPassword2nd={showPassword2nd} setShowPassword2nd={setShowPassword2nd}
            />}
            {isSignIn && 
                <LockIn 
                    setIsSignIn={setIsSignIn} 
                    setNewRegister={setNewRegister}
                    users={users} setUsers={setUsers}
                    Email={Email} setEmail={setEmail}
                    Password={Password} setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleCloseLogin={handleCloseLogin}
                    showPassword={showPassword} setShowPassword={setShowPassword}
                />}
            <Footer/>
        </>
    )
}

export default Home
