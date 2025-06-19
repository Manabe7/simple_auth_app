import React from 'react'

const Nav = ({setIsSignIn, setNewRegister}) => {
    
    const handleLogin = () => {
        return setIsSignIn(true);
    }

    const handleRegister = () => {
        return setNewRegister(true);
    }
    return (
        <nav onClick={(e)=> e.preventDefault()}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">info</a></li>
                <li><a href="" onClick={handleLogin}>sign in</a></li>
                <li><a href="" onClick={handleRegister}>get start</a></li>
            </ul>
        </nav>
    )
}

export default Nav
