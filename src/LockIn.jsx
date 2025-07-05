import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSearchEyeLine } from "react-icons/ri";

const LockIn = ({
    setIsSignIn, 
    setNewRegister, 
    Password, setPassword,
    Email, setEmail,
    handleLogin,
    showPassword, setShowPassword
    }) => {
    

    const handleChangetoRegister = () => {
        setIsSignIn(false)
        return setNewRegister(true);
    }

    

    return (
         <div className='register-form'>
                        <div className='register-box' onClick={(e)=> e.preventDefault()}>
                            <IoIosCloseCircleOutline 
                                className='close-btn'
                                onClick={()=> setIsSignIn(false)}
                            /> 
                            <h2 className='register-banner'>Sign In</h2>

                            <input 
                                type="text" 
                                required 
                                value={Email} 
                                placeholder='Email' 
                                onChange={(e)=> {setEmail(e.target.value)}}
                                className='register-input-box'/>
                            <div className='register-input-box-1'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    required 
                                    value={Password} 
                                    placeholder='Password'
                                    onChange={(e)=> {setPassword(e.target.value)}}
                                />
                                <RiSearchEyeLine  className="show-password-btn" onClick={() => setShowPassword(!showPassword)} />
                            </div>
                            <p className='register-submit'>By clicking Register, you agree on our Privacy Policy for W3Docs. </p>
                            
                            <button className='register-submit-btn' onClick={handleLogin}>
                                Sign In
                            </button>
                            <p className='register-submit'>didn't have an account yet? create account <a className='link-lockIn-btn' onClick={handleChangetoRegister}>here</a> </p>
                        
                        </div>
                </div>
    )
}


export default LockIn
