import React from 'react'
import { Link } from 'react-router-dom';

const UserMenu = ({
    UserProfileData,
    handleLogout
}) => {
    return (
        <div className='user-menu'>
            <ul className='user-menu-list'>
                <li>
                    <Link to={`/UserProfile/${UserProfileData.Name}`}>
                        Profile
                    </Link>
                </li>
                <li>
                        <Link to={`/`}>
                        <a href="" onClick={handleLogout}>
                            Logout
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu
