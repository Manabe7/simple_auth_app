import React, { useState } from 'react'
import { useEffect } from 'react';
import usersDB from './api/usersDB'
import { Link } from 'react-router-dom';

const UserProfile = ({
  UserProfileData, setUserProfileData,
  Email, setEmail,
  Name, setName,
  Password, setPassword,
  Password2nd, setPassword2nd,


}) => {
    const [editState, setEditState] = useState(false);

    const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      const newList = item.filter(item => item.id !== id );
      setItem(newList);
    }catch (err) {
      console.log(`Error : ${err.message}`);
    }
    console.log(newList);
  }
    return (
        <main>
           {editState ?
                <>
                <div className='UserProfileData-template-box'>
                    <form onSubmit={(e)=> e.preventDefault()}>
                        <p>Email :</p>
                        <input 
                            className='Email-input-box'
                            type="text" 
                            required
                            placeholder={UserProfileData.Email}
                            value={Email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        <p>Name :</p>
                        <textarea 
                            className='UserProfileData-input-box'
                            type="text" 
                            required
                            placeholder={UserProfileData.Name}
                            value={Name}
                            onChange={(e)=> setName(e.target.value)}
                            />
                        <p className='delete-line'>
                            <button className='Update-button' onClick={() => setEditState(false)}>
                                UserProfileData
                            </button>
                            <button className='Discard-button' onClick={() => setEditState(false)}>
                                <Link className='link-item' to='http://localhost:5173/UserProfile' >
                                    DiscardUpdate
                                </Link>
                            </button>
                        </p>
                    </form>
                </div>
                </>
                :
                <>
                <form className='UserProfileDataed-form' onSubmit={(e)=> e.preventDefault()}>
                    <p className='email'>{UserProfileData}</p>
                    <p className='name'>{UserProfileData}</p>
                    <p className='password'>{UserProfileData}</p>
                    <p className='delete-line'>
                        <button className='edit-button' onClick={() =>setEditState(true)}>
                            Edit UserProfileData
                        </button>
                        <button className='delete-button' onClick={() =>handleDelete(UserProfileData.id)}>
                            <Link className='link-item' to='http://localhost:5173/UserProfile' >
                                Delete
                            </Link>
                        </button>
                    </p>
                    </form>
                </>
                }
        </main>
    )
}

export default UserProfile
