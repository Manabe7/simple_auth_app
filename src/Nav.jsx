import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


const Nav = ({
    setIsSignIn, 
    setNewRegister,
    logIn, setLogIn,
    Name,
    UserProfileData, setUserProfileData,
    handleLogout,
    handleUserMenu,
    showUserMenu
    }) => {
    

    const handleLogin = () => {
        return setIsSignIn(true);
    }

    const handleRegister = () => {
        return setNewRegister(true);
    }

    return (
            <>
                
                <nav onClick={(e)=> e.preventDefault()}>
                    
                        <ul className='nav-container-list'>
                            <li>
                                <a href="">
                                    <Link to={`/`}>
                                        Home
                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={`/About`}>
                                        About us
                                    </Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={`/Contact`}>
                                        Contact us
                                    </Link>
                                </a>
                            </li>
                    {logIn && UserProfileData ?
                        <div className="user-profile">   
                            <li>
                                <Link to={`/`}>
                                    <img src={UserProfileData.Image} alt="user profile" />
                                </Link>
                            </li>

                            <li>
                                <a href="">
                                    {UserProfileData.Name}
                                </a>
                            </li>
                            <li>
                                {showUserMenu ?
                                    <TiArrowSortedUp onClick={handleUserMenu} />
                                    :
                                    <TiArrowSortedDown onClick={handleUserMenu} />
                                }
                            </li>
                        </div>
                    :
                        <div>
                            <li><a href="" onClick={handleLogin}>sign in</a></li>
                            <li><a href="" onClick={handleRegister}>get start</a></li>
                        </div>
                    }
                    </ul>
                    
            </nav>
                    
            
            </>
    )
}

export default Nav
