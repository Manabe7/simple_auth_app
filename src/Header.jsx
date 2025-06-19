import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Header = ({setIsSignIn, setNewRegister}) => {
    
    return (
        <header>
            <h1>E-commerce WebSite</h1>
            <SearchBar/>
            <Nav setIsSignIn={setIsSignIn} setNewRegister={setNewRegister}/>
        </header>
    )
}

export default Header
