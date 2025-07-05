import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSearchEyeLine } from "react-icons/ri";



const Register = ({
    setIsSignIn, 
    setNewRegister, 
    handleRegister, 
    Email, setEmail,
    Name, setName, 
    Password, setPassword,
    Password2nd, setPassword2nd,
    showPassword, setShowPassword,
    showPassword2nd, setShowPassword2nd
    }) => {

    const handleChangetoLogIn = () => {
        setNewRegister(false)
        return setIsSignIn(true);
    }
    
    
  

    
    return (
        <div className='register-form'>
                <div className='register-box' onSubmit={(e)=> e.preventDefault()}>
                    <IoIosCloseCircleOutline 
                        className='close-btn'
                        onClick={()=> setNewRegister(false)}
                    /> 
                    <h2 className='register-banner'>Registration</h2>
                    <div className='register-input-box'>
                        <input 
                            type="text" 
                            required 
                            value={Email} 
                            placeholder='Email' 
                            onChange={(e)=> {setEmail(e.target.value)}}
                        />
                     </div>
                      <div className='register-input-box'>
                        <input 
                            type="text" 
                            required 
                            value={Name} 
                            placeholder='Name'
                            onChange={(e)=> {setName(e.target.value)}}
                        />
                    </div>
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
                    <div className='register-input-box-1'>
                        <input 
                            type={showPassword2nd ? "text" : "password"} 
                            required 
                            value={Password2nd} 
                            placeholder='Password2nd'
                            onChange={(e)=> {setPassword2nd(e.target.value)}}
                        />
                        <RiSearchEyeLine  className="show-password-btn" onClick={() => setShowPassword2nd(!showPassword2nd)} />
                    </div>
                    <p className='register-submit'>By clicking Register, you agree on our Privacy Policy for W3Docs. </p>
                    <button className='register-submit-btn'  onClick={handleRegister}>
                        Register
                    </button>
                    <p className='register-submit'>already have an account? lock in <a className='link-lockIn-btn' onClick={handleChangetoLogIn}>here</a> </p>
                </div>
        </div>
    )
}

export default Register
