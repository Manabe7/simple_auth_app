import React from 'react'
import { Link } from 'react-router-dom';

const Nav = ({
    setIsSignIn, 
    setNewRegister,
    logIn, setLogIn,
    Name,
    UserProfileData, setUserProfileData
    }) => {
    
    const handleLogin = () => {
        return setIsSignIn(true);
    }

    const handleRegister = () => {
        return setNewRegister(true);
    }

    const handleUserProFile = () => {
        return 
    }
    return (
            <>
                {logIn ?  
                    <nav onClick={(e)=> e.preventDefault()}>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">about</a></li>
                            <li><a href="">info</a></li>
                            <li>
                                <a href="" onClick={handleLogin}>
                                    <Link to='http://localhost:5173/UserProfile'>
                                        {UserProfileData.Name}
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    :
                    <nav onClick={(e)=> e.preventDefault()}>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">about</a></li>
                            <li><a href="">info</a></li>
                            <li><a href="" onClick={handleLogin}>sign in</a></li>
                            <li><a href="" onClick={handleRegister}>get start</a></li>
                        </ul>
                    </nav>
                    }
               {/*  {!logIn && 
                    <li><a href="" onClick={handleLogin}>sign in</a></li>
                    <li><a href="" onClick={handleRegister}>get start</a></li>
                    } */}
            
            </>
    )
}

export default Nav
