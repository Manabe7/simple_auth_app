import React from 'react'
import { useEffect } from 'react';
import usersDB from './api/usersDB'

const UserProfile = ({users, setUsers}) => {
    useEffect(() => {
    /* axios.get('http://localhost:3500/item')
      .then((response) => setItem(response.data))
      .catch((error) => setError(error.message)); */

      const fetchApi = async () => {
        try {
          const response = await usersDB.get('/users');
          setUsers(response.data);
          console.log(response.data);
        } catch (err) {
            if(err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error : ${err.message}`);
            }
        } 
      }
      fetchApi();
  }, []);
    return (
        <div>
            <h1>UserProfile</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>{user.Email}</p>
                        <p>{user.Name}</p>
                        <p>{user.Password}</p>
                    </li>
                ))}
            </ul>
           
        </div>
    )
}

export default UserProfile
