import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";



const Register = ({
    handleCloseRegister, 
    setIsSignIn, 
    setNewRegister, 
    handleRegister, 
    Email, setEmail,
    Name, setName, 
    Password, setPassword,
    Password2nd, setPassword2nd,
    }) => {
    
    const [close, setClose] = useState(false);
    
    
    const handleChangetoLogIn = () => {
        setNewRegister(false)
        return setIsSignIn(true);
    }
    
    
  

    
    return (
        <div className='register-form'>
                <div className='register-box' onSubmit={(e)=> e.preventDefault()}>
                    {!close ?
                    <IoIosCloseCircleOutline 
                        className='close-btn' 
                        onMouseOver={()=> {setClose(true)}} 
                        onClick={handleCloseRegister}/> 
                        :<IoIosCloseCircle 
                        className='close-btn' 
                        onMouseOut={()=> {setClose(false)}}
                        onClick={handleCloseRegister}/>}
                    
                    <h2 className='register-banner'>Registration</h2>
                    <div onClick={(e)=> e.preventDefault()}>
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
                        value={Name} 
                        placeholder='Name'
                        onChange={(e)=> {setName(e.target.value)}}
                        className='register-input-box'/>
                    <input 
                        type="text" 
                        required 
                        value={Password} 
                        placeholder='Password'
                        onChange={(e)=> {setPassword(e.target.value)}}
                        className='register-input-box'/>
                    <input 
                        type="text" 
                        required 
                        value={Password2nd} 
                        placeholder='Confirm Password'
                        onChange={(e)=> {setPassword2nd(e.target.value)}}
                        className='register-input-box'/>
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
