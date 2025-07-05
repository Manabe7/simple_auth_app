import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type="text" name="" id="" placeholder='search bar'/>
            <button className='search-btn'>
                <FaSearch />
            </button>
        </div>
    )
}

export default SearchBar
