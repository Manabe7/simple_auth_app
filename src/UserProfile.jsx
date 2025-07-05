import React, { useState, useEffect } from 'react'
import usersDB from './api/usersDB'
import { Link, useParams } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSearchEyeLine } from "react-icons/ri";

const UserProfile = ({
  UserProfileData, setUserProfileData,
  Email, setEmail,
  Name, setName,
  Password, setPassword,
  Password2nd, setPassword2nd,
  users, setUsers,
  showPassword, setShowPassword,
  showPassword2nd, setShowPassword2nd
}) => {
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    const handleDelete = async (id) => {
      try {
        await usersDB.delete(`/users/${id}`);
        const newUsers = users.filter(item => item.id !== id );
        setUsers(newUsers);
      }catch (err) {
        console.log(`Error : ${err.message}`);
      }
    }

    const updateName = async () => {
      if (Name === '') {
        return alert('Please enter your name');
      }
      const newUpdateName = {id : UserProfileData.id, Email: UserProfileData  .Email, Name: Name , Password: UserProfileData.Password};
      setUserProfileData(newUpdateName);
      setEditName(false);
      console.log(newUpdateName);
      console.log(UserProfileData);
      try {
        const response = await usersDB.put(`/users/${UserProfileData.id}`, newUpdateName);
        const newUsers = users.filter(item => item.id !== UserProfileData.id );
        const newUsersList = [...newUsers, response.data];
        setUsers(newUsersList);
      }catch (err) {
        console.log(`Error : ${err.message}`);
      }
    }
    const updateEmail = async () => {
      if (Email === '') {
        return alert('Please enter your email');
      }else if (!isValidEmail(Email)) {
        return alert('Please enter a valid email address');
      }
      const newUpdateEmail = {id : UserProfileData.id, Email: Email, Name: UserProfileData.Name , Password: UserProfileData.Password};
      setUserProfileData(newUpdateEmail);
      setEditEmail(false);
      console.log(newUpdateEmail);
      console.log(UserProfileData); 
      try {
        const response = await usersDB.put(`/users/${UserProfileData.id}`, newUpdateEmail);
        const newUsers = users.filter(item => item.id !== UserProfileData.id );
        const newUsersList = [...newUsers, response.data];
        setUsers(newUsersList);
      }catch (err) {
        console.log(`Error : ${err.message}`);
      }
    }

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const isValidPassword = (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      return passwordRegex.test(password);
    }
    
    const updatePassword = async () => {
      if (Password === '' || Password2nd === '') {  
        return alert('Please fill in both password fields');
      }else if (Password !== Password2nd) {
        return alert('Passwords do not match');
      }
      if (Password.length < 8 || Password2nd.length < 8) {
        return alert('Password must be at least 8 characters long');
      }
      if (!isValidPassword(Password)) {
        return alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      }
      const newUpdatePassword = {id : UserProfileData.id, Email: UserProfileData.Email, Name: UserProfileData.Name , Password: Password};
      setUserProfileData(newUpdatePassword);
      setEditPassword(false);
      try {
        const response = await usersDB.put(`/users/${UserProfileData.id}`, newUpdatePassword);
        const newUsers = users.filter(item => item.id !== id );
        const newUsersList = [...newUsers, response.data];
        setUsers(newUsersList);
      }catch (err) {
        console.log(`Error : ${err.message}`);
      }
    }

    const handleEditPassword = () => {
      setEditPassword(true);
    }

    const handleSubmitEditPassword = () => {
      if (Password === '' || Password2nd === '') {
        return alert('Please fill in both password fields');
      }else if (Password !== Password2nd) {
        return alert('Passwords do not match');
      }
      if (Password.length < 8) {
        return alert('Password must be at least 8 characters long');
      }
      if (!/[A-Z]/.test(Password) || !/[a-z]/.test(Password) || !/\d/.test(Password) || !/[!@#$%^&*]/.test(Password)) {
        return alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      }
      updatePassword();
      setPassword('');
    }
    return (
        <>
          <Header logIn={(true)} isHome={(false)} UserProfileData={UserProfileData}/>
            <form className='UserProfile-Data-container' onSubmit={(e)=> e.preventDefault()}>
              <div>
                <h1 className='UserProfile-Data-title'>User Profile Picture</h1>
                <p className='profile-name'>{UserProfileData.Name}</p>
                <p className='profile-email'>{UserProfileData.Email}</p>
              </div>
              <div>
                <h2 className='UserProfile-Data-section-title'>Personal details</h2>
                    {!editName? 
                      <div className='UserProfile-box'>
                        <p className='UserProfile-Header'>Name
                          <p className='UserProfile-Desc'>{UserProfileData.Name}</p>
                        </p>
                        <p className='Edit-btn' onClick={() =>setEditName(true)}>Edit</p>
                      </div>
                      :<div>
                        <div className='UserProfile-box-1'>
                          <p className='UserProfile-Header'>Edit name
                            <p className='UserProfile-Desc'>This will be visible on your profile and for your other team members if you’re in a team</p>
                          </p>
                          <p className='Cancel-Edit-btn' onClick={() =>setEditName(false)}>Cancel</p>
                        </div>
                        <div className='UserProfile-Edit-box'>
                          <p className='UserProfile-Header'>Full name</p>
                          <input 
                            className='UserProfile-input-box'
                            type="text" 
                            required
                            placeholder={UserProfileData.Name}
                            value={Name}
                            onChange={(e)=> setName(e.target.value)}
                          />
                          <button className='Update-btn' onClick={() => updateName()}>
                              Save
                          </button>
                        </div>
                      </div>
                    }
                    {!editEmail? 
                      <div className='UserProfile-box'>
                        <p className='UserProfile-Header'>Email address
                          <p className='UserProfile-Desc'>{UserProfileData.Email}</p>
                        </p>
                        <p className='Edit-btn' onClick={() =>setEditEmail(true)}>Edit </p>
                      </div>
                      :<div>
                        <div className='UserProfile-box-1'>
                          <p className='UserProfile-Header'>Edit email address
                            <p className='UserProfile-Desc'>This will be used for logging in and account recovery.</p>
                          </p>
                          <p className='Cancel-Edit-btn' onClick={() =>setEditEmail(false)}>Cancel</p>
                        </div>
                        <div className='UserProfile-Edit-box'>
                          <p className='UserProfile-Email-s'>Email address</p>
                          <input 
                            className='UserProfile-input-box'
                            type="text"
                            required
                            placeholder={UserProfileData.Email}
                            value={Email}
                            onChange={(e)=> setEmail(e.target.value)}
                          />
                          <button className='Update-btn' onClick={() => updateEmail()}>
                              Save
                          </button>
                        </div>
                      </div>
                    }
                    {!editPassword? 
                      <div className='UserProfile-box-1'>
                        <p className='UserProfile-Header'>Password
                          <p className='UserProfile-Desc'>No password yet</p>
                        </p>
                        <p className='Edit-btn' onClick={handleEditPassword}>Create new </p>
                      </div>
                      :
                      <div>
                        <div className='UserProfile-box-1'>
                          <p className='UserProfile-Header'>Edit password
                            <p className='UserProfile-Desc'>Password needs to be 8 characters and contain at least one alphabet one symbols and one number.</p>
                          </p>
                          <p className='Cancel-Edit-btn' onClick={() =>setEditPassword(false)}>Cancel</p>
                        </div>
                        <div className='UserProfile-box-1'>
                          <div>
                            <p className='UserProfile-Password-s'>New password</p>
                            <div className='UserProfile-input-box-1'>
                              <input
                                type={showPassword ? "text" : "password"} 
                                required
                                placeholder='Enter new password'
                                value={Password}
                                onChange={(e)=> setPassword(e.target.value)}
                              />
                              <RiSearchEyeLine  className="show-password-btn" onClick={() => setShowPassword(!showPassword)} />
                            </div>
                          </div>
                          <div>
                            <p className='UserProfile-Password-s'>Repeat password</p>
                            <div className='UserProfile-input-box-1'> 
                              <input
                                type={showPassword2nd ? "text" : "password"} 
                                required
                                placeholder='Repeat password'
                                value={Password2nd}
                                onChange={(e)=> setPassword2nd(e.target.value)}
                              />
                              <RiSearchEyeLine  className="show-password-btn" onClick={() => setShowPassword2nd(!showPassword2nd)} />
                              </div>
                          </div>
                        </div>
                        <button className='Update-btn' onClick={() => handleSubmitEditPassword()}>
                              Save
                          </button> 
                      </div>
                    }
                </div>
                <div>
                  <h2 className='UserProfile-Data-section-title'>Manage account</h2>
                    <div className='UserProfile-box-1'>
                        <p className='UserProfile-Header'>Delete account
                          <p className='UserProfile-Desc'>Permanently delete your account.</p>
                        </p>
                        <p className='Delete-btn' onClick={() =>setDeleteState(true)}>
                          Delete
                        </p>
                    </div>
                </div>
                {deleteState && 
                  <div className='Delete-Account-form'>
                    <div className='Delete-Account-Box'>
                      <IoIosCloseCircleOutline 
                        className='Delete-Account-Close-btn' 
                        onClick={() => setDeleteState(false)}
                      /> 
                      <p className='Delete-Account-Header'>Are you sure you want to delete your account?</p>
                      <p className='Delete-Account-Desc'>This action cannot be undone.</p>
                      <div className='Delete-Account-btn-box'>
                        <button className='Delete-Account-btn' onClick={() => handleDelete(UserProfileData.id)}>
                          <Link to={`/`}>Yes, delete my account</Link>
                        </button>
                        <button className='Cancel-Delete-btn' onClick={() => setDeleteState(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                }
              <Footer />
            </form>
            
        </>
    )
}

export default UserProfile
