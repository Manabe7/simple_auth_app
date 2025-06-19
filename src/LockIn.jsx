import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const LockIn = ({
    handleCloseLogin, 
    setIsSignIn, 
    setNewRegister, 
    Password, setPassword,
    Email, setEmail,
    handleLogin
    }) => {
    const [close, setClose] = useState(false);
    

    const handleChangetoRegister = () => {
        setIsSignIn(false)
        return setNewRegister(true);
    }

    

    return (
         <div className='register-form'>
                        <div className='register-box' onClick={(e)=> e.preventDefault()}>
                            {!close ?
                            <IoIosCloseCircleOutline 
                                className='close-btn' 
                                onMouseOver={()=> {setClose(true)}} 
                                onClick={handleCloseLogin}/> 
                                :<IoIosCloseCircle 
                                className='close-btn' 
                                onMouseOut={()=> {setClose(false)}}
                                onClick={handleCloseLogin}/>}
                            
                            <h2 className='register-banner'>Sign In</h2>
                            <div>
                                <button className='register-type-btn'>
                                    Person
                                </button>
                                <button className='register-type-btn'>
                                    Store
                                </button>
                            </div>
                            <input 
                                type="text" 
                                required 
                                value={Email} 
                                placeholder='Email' 
                                onChange={(e)=> {setEmail(e.target.value)}}
                                className='register-input-box'/>
                            <input 
                                type="text" 
                                required 
                                value={Password} 
                                placeholder='Password'
                                onChange={(e)=> {setPassword(e.target.value)}}
                                className='register-input-box'/>
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
